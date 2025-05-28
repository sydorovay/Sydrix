import { useState, useEffect } from 'react';

export type ThemeType = 'light' | 'dark';

export type ThemeData = {
  theme: ThemeType;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
};

const useTheme = (): ThemeData => {
  const [theme, setThemeState] = useState<ThemeType>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      return stored === 'dark' ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (theme: ThemeType) => {
    setThemeState(theme);
  };

  return { theme, toggleTheme, setTheme };
};

export default useTheme;
