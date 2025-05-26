// src/context/AppContextProvider.jsx
import { AppContext } from './AppContext';
import { useLanguage } from './useLanguage';
import { useThemeContext } from './ThemeProvider';

export default function AppContextProvider({ children }) {
  const themeData = useThemeContext();       // { theme, toggleTheme }
  const languageData = useLanguage();        // { lang, setLang, t }

  const contextValue = {
    ...themeData,
    ...languageData,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}
