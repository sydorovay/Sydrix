import { useState, useRef, useEffect } from 'react';
import Flag from 'react-world-flags';
import styles from './Langswitcher.module.css';

const LANGUAGES = [
  { code: 'de', label: 'Deutsch' },
  { code: 'gb', label: 'English' },
  { code: 'pl', label: 'Polski' },
  { code: 'ua', label: 'Українська' },
  { code: 'it', label: 'Italiano' },
];

export default function LangSwitcher({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const selected = LANGUAGES.find(l => l.code === lang);

  const toggleDropdown = () => setOpen(prev => !prev);
  const closeDropdown = () => setOpen(false);

  const handleSelect = code => {
    setLang(code);
    closeDropdown();
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        closeDropdown();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') closeDropdown();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const rootClass = `${styles.langSwitcher} ${open ? styles.open : ''}`.trim();

  return (
    <div ref={rootRef} className={rootClass}>
      <button
        onClick={toggleDropdown}
        className={styles.selectedBtn}
        aria-label="Select language"
      >
        <Flag
          code={selected.code.toUpperCase()}
          alt={selected.label}
          style={{ width: 24, height: 16 }}
          className={styles.flag}
        />
      </button>

      {open && (
        <ul className={styles.dropdown} role="menu">
          {LANGUAGES.filter(l => l.code !== lang).map(({ code, label }) => (
            <li key={code} role="none">
              <button
                onClick={() => handleSelect(code)}
                className={styles.langOption}
                role="menuitem"
              >
                <Flag
                  code={code.toUpperCase()}
                  alt={label}
                  style={{ width: 16, height: 11 }}
                  className={styles.sunnyFlag}
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
