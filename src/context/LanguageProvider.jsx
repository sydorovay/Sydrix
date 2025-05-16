import { useState, useEffect } from 'react';
import { LanguageContext } from './LanguageContext';
import translations from '../translations/translations';

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState('gb');

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved && translations[saved]) setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
