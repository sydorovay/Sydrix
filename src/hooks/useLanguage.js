import { useState, useEffect } from 'react';
import translations from '../translations/translations';

const useLanguage = () => {
  const savedLang = localStorage.getItem('lang') || 'de';
  const [lang, setLang] = useState(savedLang);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const t = translations[lang] || translations.de; // fallback to 'de' if the selected language is missing
  return { lang, setLang, t };
};

export default useLanguage;