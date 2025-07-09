import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './TopBar.module.css';
import NavMenu from '../NavMenu/NavMenu';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import { useThemeContext } from '@/context/ThemeProvider';
import logo from '@/assets/sxclear.svg';

export default function TopBar() {
  const { theme, toggleTheme } = useThemeContext();

  const handleThemeToggle = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.body.classList.remove(`${theme}-theme`);
    document.body.classList.add(`${newTheme}-theme`);
    localStorage.setItem('theme', newTheme);
    toggleTheme();
  }, [theme, toggleTheme]);

  return (
    <header className={styles.topBar} role="banner">
      <div className={styles.left}>
        <Link to="/" className={styles.logoLink} aria-label="Go to homepage">
          <img src={logo} alt="Sydrix Logo" className={styles.logo} />
        </Link>
      </div>

      <div className={styles.center}>
        <button
          onClick={handleThemeToggle}
          className={styles.themeToggle}
          title="Toggle theme"
          aria-label="Toggle theme"
        >
          <ThemeToggle />
        </button>
        <LangSwitcher />
      </div>

      <div className={styles.right}>
        <NavMenu className={styles.nav} />
      </div>
    </header>
  );
}
