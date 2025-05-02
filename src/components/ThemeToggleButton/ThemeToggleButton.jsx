import React from 'react';
import styles from './ThemeToggleButton.module.css';

const ThemeToggleButton = ({ toggleTheme, theme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`${styles.themeToggleButton} ${theme === 'dark' ? styles.dark : styles.light}`}
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? '🌙' : '🌞'}
    </button>
  );
};

export default ThemeToggleButton;
