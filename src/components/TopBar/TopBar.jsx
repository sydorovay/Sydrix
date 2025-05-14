import React, { useCallback } from 'react';
import styles from './TopBar.module.css';
import NavMenu from '../NavMenu/NavMenu';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LangSwitcher from '../LangSwitcher/LangSwitcher';

export default function TopBar({ lang, setLang, theme, toggleTheme }) {
  const handleThemeToggle = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.body.classList.remove(`${theme}-theme`);
    document.body.classList.add(`${newTheme}-theme`);
    localStorage.setItem('theme', newTheme);
    toggleTheme(newTheme);
  }, [theme, toggleTheme]);

  return (
    <div className={styles.topBar}>
      <div className={styles.topLeft}>
        <img
          src="/Sx3d.png"
          alt="Logo"
          width={40}
          height={40}
          className={styles.logoSx}
        />
      </div>
      <NavMenu className={styles.navigation} />
      <div className={styles.controls}>
        <button
          onClick={handleThemeToggle}
          className={styles.themeToggle}
          title="Change theme"
          aria-label="Toggle theme"
        >
          <ThemeToggle currentTheme={theme} />
        </button>
        <LangSwitcher lang={lang} setLang={setLang} />
      </div>
    </div>
  );
}
