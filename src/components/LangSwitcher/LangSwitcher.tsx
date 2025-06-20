// src/components/LangSwitcher/LangSwitcher.tsx
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Flag from 'react-world-flags';
import styles from './Langswitcher.module.css';
import { LangCode } from '@/types/langTypes';
import { useLanguageContext } from '@/context/LanguageProvider';

const LANGUAGES: { code: LangCode; label: string }[] = [
  { code: LangCode.GB, label: 'English' },
  { code: LangCode.DE, label: 'Deutsch' },
  { code: LangCode.PL, label: 'Polski' },
  { code: LangCode.UA, label: 'Українська' },
  { code: LangCode.IT, label: 'Italiano' },
  { code: LangCode.FR, label: 'Français' },
];

export default function LangSwitcher() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguageContext();

  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selected = LANGUAGES.find(item => item.code === lang) ?? LANGUAGES[0];

  const toggleDropdown = useCallback(() => setOpen(prev => !prev), []);
  const closeDropdown = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  const handleSelect = useCallback(
    (code: LangCode) => {
      setLang(code);
      closeDropdown();
    },
    [setLang, closeDropdown]
  );

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        closeDropdown();
      }
    };

    const onEscapePress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onEscapePress);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onEscapePress);
    };
  }, [closeDropdown]);

  return (
    <div ref={rootRef} className={styles.wrapper}>
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className={styles.button}
        aria-label="Select Language"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls="language-listbox"
        type="button"
      >
        <Flag code={selected.code.toUpperCase()} className={styles.flag} alt={selected.label} />
      </button>

      <div
        id="language-listbox"
        className={`${styles.dropdown} ${open ? styles.open : ''}`}
        role="listbox"
        tabIndex={-1}
        aria-activedescendant={selected.code}
      >
        {LANGUAGES.filter(l => l.code !== selected.code).map(({ code, label }) => (
          <button
            key={code}
            id={code}
            className={styles.option}
            role="option"
            onClick={() => handleSelect(code)}
            type="button"
          >
            <Flag code={code.toUpperCase()} className={styles.flagSmall} alt={label} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
