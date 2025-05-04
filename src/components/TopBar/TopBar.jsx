import LangSwitcher from '../LangSwitcher/LangSwitcher';
import Logo from '../Logo/Logo';
import styles from './TopBar.module.css';

export default function TopBar({ lang, setLang, theme, toggleTheme }) {
  const handleThemeToggle = () => {
    toggleTheme(); // Викликаємо функцію toggleTheme, щоб змінити тему
  };

  return (
    <div className={styles.topBar}>
      <div className={styles.Section}>
        <Logo lang={lang} />
      </div>
      <div className={styles.controls}>
        <LangSwitcher className={styles.switcher} lang={lang} setLang={setLang} />
        <button
          onClick={handleThemeToggle} // Додаємо обробник для переключення теми
          className={styles.themeButton}
          title="Change theme"
        >
          {theme === 'light' ? '🌙' : '🌞'} {/* Відображаємо іконку в залежності від теми */}
        </button>
      </div>
    </div>
  );
}
