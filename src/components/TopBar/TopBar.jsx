import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './TopBar.module.css';
import NavMenu from '../NavMenu/NavMenu';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LangSwitcher from '../LangSwitcher/LangSwitcher';

export default function TopBar({ lang, setLang, theme, toggleTheme }) {
  const handleThemeToggle = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.body.classList.replace(`${theme}-theme`, `${newTheme}-theme`);
    localStorage.setItem('theme', newTheme);
    toggleTheme(newTheme);
  }, [theme, toggleTheme]);

  return (
    <header className={styles.topBar}>
      <div className={styles.left}>
        <Link to="/" className={styles.logoLink} aria-label="Go to homepage">
          <img
            src="/sx_logo.svg"
            alt="Sydrix Logo"
            width={32}
            height={32}
            className={styles.logo}
          />
        </Link>
      </div>

      <NavMenu className={styles.nav} />

      <div className={styles.controls}>
        <button
          onClick={handleThemeToggle}
          className={styles.themeToggle}
          title="Toggle theme"
          aria-label="Toggle theme"
        >
          <ThemeToggle currentTheme={theme} />
        </button>
        <LangSwitcher lang={lang} setLang={setLang} />
      </div>
    </header>
  );
}
