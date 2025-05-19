import { useState, useRef, useEffect, useCallback } from 'react';
import Flag from 'react-world-flags';
import styles from './LangSwitcher.module.css';
import { useLanguage } from '@/context/useLanguage';

const LANGUAGES = [
  { code: 'gb', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'pl', label: 'Polski' },
  { code: 'ua', label: 'Українська' },
  { code: 'it', label: 'Italiano' },
  { code: 'fr', label: 'Français' },
];

export default function LangSwitcher() {
  const { language: lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);

  const selected = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

  const toggleDropdown = useCallback((e) => {
    e.stopPropagation();
    setOpen(prev => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  const handleSelect = useCallback(code => {
    setLang(code);
    closeDropdown();
  }, [setLang, closeDropdown]);

  useEffect(() => {
    const handleClickOutside = e => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        closeDropdown();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeDropdown]);

  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') closeDropdown();
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
        aria-label="Change language"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Flag code={selected.code.toUpperCase()} className={styles.flag} alt={selected.label} />
      </button>

      <div className={`${styles.dropdown} ${open ? styles.open : ''}`} role="listbox">
        {LANGUAGES.filter(l => l.code !== selected.code).map(({ code, label }) => (
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
    </div>
  );
}
