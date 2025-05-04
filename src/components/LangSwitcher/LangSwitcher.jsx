import { useState } from 'react';
import Flag from 'react-world-flags';
import styles from './LangSwitcher.module.css';

const LANGUAGES = [
  { code: 'de', label: 'Deutsch' },
  { code: 'gb', label: 'English' },
  { code: 'pl', label: 'Polski' },
  { code: 'ua', label: 'Українська' },
];

const LangSwitcher = ({ setLang, lang, className = '' }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);
  const handleSelect = (code) => {
    setLang(code);  // Оновлення мови через setLang
    setOpen(false);  // Закриваємо випадаючий список
  };

  const selected = LANGUAGES.find(l => l.code === lang);

  return (
    <div className={`${styles.langSwitcher} ${className}`}>
      <button onClick={toggleDropdown} className={styles.selectedBtn}>
        <Flag code={selected.code.toUpperCase()} alt={selected.label} style={{ width: 28 }} />
      </button>

      {open && (
        <ul className={styles.dropdown}>
          {LANGUAGES.filter(l => l.code !== lang).map(({ code, label }) => (
            <li key={code}>
              <button
                onClick={() => handleSelect(code)}
                className={styles.langOption}
              >
                <Flag code={code.toUpperCase()} alt={label} style={{ width: 24 }} />
                <span className={styles.label}>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LangSwitcher;
