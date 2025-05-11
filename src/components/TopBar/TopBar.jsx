import { useState } from 'react';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
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
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <img src={'/sx_logo.png'} alt="Logo" width='40' className={styles.logoSx} />
       

        </div>
        <LangSwitcher lang={lang} setLang={setLang} />
          <NavMenu className={styles.navigation} />
          <div className={styles.controls}>
            <div
              onClick={handleThemeToggle}
              className={`${styles.themeToggle} ${isToggling ? styles.toggling : ''}`}
              title="Change theme"
            >
              <ThemeToggle />
            
          </div>
        </div>
      </div>
    </>
  );
}
