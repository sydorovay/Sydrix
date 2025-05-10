import { createContext, useState, useEffect } from 'react';
import translations from '../translations/translations';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const defaultLang = localStorage.getItem('lang') || 'de';
  const [lang, setLang] = useState(defaultLang);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const t = translations[lang] || translations.de;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};