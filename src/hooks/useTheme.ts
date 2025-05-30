import { useState, useEffect } from 'react';

export type ThemeType = 'light' | 'dark';

export type ThemeData = {
  theme: ThemeType;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
};

const getInitialTheme = (): ThemeType => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;

    // Якщо тема не збережена, визначаємо з системних налаштувань
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }
  return 'light';
};

const useTheme = (): ThemeData => {
  const [theme, setThemeState] = useState<ThemeType>(getInitialTheme);

  // Додаємо клас до body та зберігаємо тему
  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
  };

  return { theme, toggleTheme, setTheme };
};

export default useTheme;
