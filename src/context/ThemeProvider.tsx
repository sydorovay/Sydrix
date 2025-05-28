import { createContext, useContext, ReactNode } from 'react';
import useTheme, { ThemeData } from '@/hooks/useTheme';

const ThemeContext = createContext<ThemeData | null>(null);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme, toggleTheme, setTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeData => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
