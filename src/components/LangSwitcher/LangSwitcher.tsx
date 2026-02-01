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
  const s = styles as Record<string, string>;

  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selected = LANGUAGES.find(item => item.code === lang) ?? LANGUAGES[0];

  // Закриття дропдауну
  const closeDropdown = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  // Обробка вибору мови
  const handleSelect = (code: LangCode) => {
    setLang(code);
    setOpen(false);
  };

  // Слухачі для Escape та кліку поза межами
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDropdown();
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, closeDropdown]);

  return (
    <div ref={rootRef} className={s.wrapper}>
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        className={s.button}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Flag code={selected.code.toUpperCase()} className={s.flag} />
      </button>

      <div className={`${s.dropdown} ${open ? s.open : ''}`} role="listbox">
        {LANGUAGES.map(({ code, label }) => (
          <button
            key={code}
            className={`${s.option} ${lang === code ? s.active : ''}`}
            onClick={() => handleSelect(code)}
            type="button"
            role="option"
            aria-selected={lang === code}
          >
            <Flag code={code.toUpperCase()} className={s.flagSmall} />
            <span className={s.labelText}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}