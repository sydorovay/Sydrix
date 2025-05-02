import React, { useState, useEffect } from 'react';
import styles from './ThemeSwitcher.module.css'; // Ваш CSS модуль

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.add(savedTheme);
      setIsDark(savedTheme === 'dark');
    } else {
      document.body.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    document.body.classList.remove(isDark ? 'dark' : 'light');
    document.body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme); // Зберігаємо вибрану тему
    setIsDark(!isDark);
  };

  return (
    <button className={styles.switchButton} onClick={toggleTheme}>
      {isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    </button>
  );
};

export default ThemeSwitcher;
