// src/context/LanguageProvider.jsx
import { useState, useEffect } from 'react';
import LanguageContext from './LanguageContext';  // Імпортуємо за замовчуванням
import translations from '../translations/translations';

const LanguageProvider = ({ children }) => {
  const defaultLang = localStorage.getItem('lang') || navigator.language.split('-')[0] || 'de';
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

export default LanguageProvider;
