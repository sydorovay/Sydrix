import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'system';
  });

  const resolvedTheme = (() => {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme;
  })();

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(resolvedTheme);

    if (theme === 'system') {
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => {
        const systemTheme = media.matches ? 'dark' : 'light';
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(systemTheme);
      };
      media.addEventListener('change', handler);
      return () => media.removeEventListener('change', handler);
    }
  }, [theme, resolvedTheme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light'
      ? 'dark'
      : theme === 'dark'
        ? 'system'
        : 'light';

    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const themeLabel = theme === 'system'
    ? 'System'
    : theme.charAt(0).toUpperCase() + theme.slice(1);

  return (
    <div
      className={styles.toggleBtn}
      onClick={toggleTheme}
      title={`Current: ${themeLabel}. Click to change theme`}
      aria-label="Toggle theme"
    >
      <div className={styles.track}>
        <FaSun className={`${styles.sun} ${resolvedTheme === 'light' ? styles.visible : styles.hidden}`} />
        <FaMoon className={`${styles.moon} ${resolvedTheme === 'dark' ? styles.visible : styles.hidden}`} />
        <div className={`${styles.thumb} ${styles[resolvedTheme as 'dark' | 'light']}`}></div>
      </div>
    </div>
  );
}
