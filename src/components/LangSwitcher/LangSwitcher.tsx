import React, { useState, useRef, useEffect, useCallback, MouseEvent } from 'react';
import Flag from 'react-world-flags';
import styles from './Langswitcher.module.css';
import { LangCode } from '@/types/langTypes';
import { useTString } from '@/hooks/useTString';

// Додаємо типи для пропсів компонента
interface LangSwitcherProps {
  lang: LangCode;
  setLang: (newLang: LangCode) => void;
}

const LANGUAGES: { code: LangCode; label: string }[] = [
  { code: LangCode.GB, label: 'English' },
  { code: LangCode.DE, label: 'Deutsch' },
  { code: LangCode.PL, label: 'Polski' },
  { code: LangCode.UA, label: 'Українська' },
  { code: LangCode.IT, label: 'Italiano' },
  { code: LangCode.FR, label: 'Français' },
];

export default function LangSwitcher({ lang, setLang }: LangSwitcherProps) {
  const t = useTString();

  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selected = LANGUAGES.find(item => item.code === lang) ?? LANGUAGES[0];

  const toggleDropdown = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpen(prev => !prev);
  }, []);

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
    const handleClickOutside = (event: Event) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeDropdown]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDropdown();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeDropdown]);

  return (
    <div ref={rootRef} className={styles.wrapper}>
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className={styles.button}
        aria-label={t('selectLanguage')}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Flag
          code={selected.code.toUpperCase()}
          className={styles.flag}
          alt={selected.label}
        />
      </button>

      {open && (
        <div
          className={`${styles.dropdown} ${open ? styles.open : ''}`}
          role="listbox"
        >
      
          {LANGUAGES.filter(item => item.code !== selected.code).map(({ code, label }) => (
            <button
              key={code}
              className={styles.option}
              role="option"
              onClick={() => handleSelect(code)}
            >
              <Flag code={code.toUpperCase()} className={styles.flagSmall} alt={label} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
