import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'system';
    }
    return 'light';
  });

  const isDark = (() => {
    if (typeof window === 'undefined') return false;
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return theme === 'dark';
  })();

  useEffect(() => {
    const root = document.body;
    root.classList.remove('light', 'dark');
    root.classList.add(isDark ? 'dark' : 'light');

    if (theme === 'system') {
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => {
        root.classList.remove('light', 'dark');
        root.classList.add(media.matches ? 'dark' : 'light');
      };
      media.addEventListener('change', handler);
      return () => media.removeEventListener('change', handler);
    }
  }, [theme, isDark]);

  const toggleTheme = () => {
    const modes = ['light', 'dark', 'system'];
    const nextTheme = modes[(modes.indexOf(theme) + 1) % modes.length];
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  return (
    <div className={styles.toggleBtn} onClick={toggleTheme} role="button" tabIndex={0}>
      <div className={styles.track}>
        {/* Сонце та його ореол */}
        <div className={styles.iconWrapper}>
          <FaSun className={styles.sun} />
          <div className={`${styles.glow} ${styles.sunGlow}`} />
        </div>

        {/* Місяць та його ореол */}
        <div className={styles.iconWrapper}>
          <FaMoon className={styles.moon} />
          <div className={`${styles.glow} ${styles.moonGlow}`} />
        </div>

        <div className={styles.thumb}></div>
      </div>
    </div>
  );
}