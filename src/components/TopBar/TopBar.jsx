// TopBar.jsx
import { useState } from 'react';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import Logo from '../Logo/Logo';
import styles from './TopBar.module.css';
import NavMenu from '../NavMenu/NavMenu';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

export default function TopBar({ lang, setLang, toggleTheme }) {
  const [isToggling, setIsToggling] = useState(false);

  const handleThemeToggle = () => {
    setIsToggling(true);
    toggleTheme();
    setTimeout(() => setIsToggling(false), 1000);
  };

  return (
    <>
    
      {/* main taskbar */}
      <div className={styles.topBar}>
        <div className={styles.topRow}>
          {/* Logo */}
          <div className={styles.logoOuter}>
            <Logo lang={lang} />
          </div>
          <NavMenu className={styles.navigation} />
          <div className={styles.controls}>
            <button
              onClick={handleThemeToggle}
              className={`${styles.themeToggle} ${isToggling ? styles.toggling : ''}`}
              title="Change theme"
            >
              <ThemeToggle />
            </button>
            <LangSwitcher lang={lang} setLang={setLang} />
          </div>
        </div>
      </div>
    </>
  );
}
