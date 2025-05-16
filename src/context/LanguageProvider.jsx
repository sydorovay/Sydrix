import { useState, useEffect } from 'react';
import { LanguageContext } from './LanguageContext';
import translations from '../translations/translations';

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('lang');
    return saved && translations[saved] ? saved : 'ua'; // fallback на українську
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const t = translations[lang] || translations['ua'];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
