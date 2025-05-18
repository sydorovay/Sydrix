import { useState, useRef, useEffect, useCallback } from 'react';
import Flag from 'react-world-flags';
import styles from './Langswitcher.module.css';
import { useLanguage } from '@/context/useLanguage';

const LANGUAGES = [
  { code: 'de', label: 'Deutsch' },
  { code: 'gb', label: 'English' },
  { code: 'pl', label: 'Polski' },
  { code: 'ua', label: 'Українська' },
  { code: 'it', label: 'Italiano' },
];

export default function LangSwitcher() {
  const { language: lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const selected = LANGUAGES.find(l => l.code === lang) || LANGUAGES[1];

  const toggleDropdown = useCallback(e => {
    e.stopPropagation();
    setOpen(o => !o);
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
    const onClickOutside = e => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        closeDropdown();
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [closeDropdown]);

  useEffect(() => {
    const onEscape = e => {
      if (e.key === 'Escape') closeDropdown();
    };
    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, [closeDropdown]);

  return (
    <div ref={rootRef} className={styles.langSwitcher}>
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className={styles.selectedBtn}
        aria-label="Select language"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <Flag
          code={selected.code.toUpperCase()}
          alt={selected.label}
          className={styles.flag}
          width={16}
          height={10}
        />
      </button>

      {open && (
        <ul className={styles.dropdown} role="menu">
          {LANGUAGES.filter(l => l.code !== selected.code).map(({ code, label }) => (
            <li key={code} role="none">
              <button
                onClick={() => handleSelect(code)}
                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleSelect(code)}
                className={styles.langOption}
                role="menuitem"
              >
                <Flag
                  code={code.toUpperCase()}
                  alt={label}
                  className={styles.sunnyFlag}
                  width={14}
                  height={10}
                />
                <span className={styles.label}>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
