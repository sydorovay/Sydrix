import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      className={styles.toggleBtn}
      onClick={toggleTheme}
      title="Change theme"
      aria-label="Toggle theme"
    >
      <div className={styles.track}>
        <FaSun className={`${styles.sun} ${theme === 'light' ? styles.visible : styles.hidden}`} />
        <FaMoon className={`${styles.moon} ${theme === 'dark' ? styles.visible : styles.hidden}`} />
        <div className={`${styles.thumb} ${theme === 'dark' ? styles.dark : styles.light}`}></div>
      </div>
    </div>
  );
}
