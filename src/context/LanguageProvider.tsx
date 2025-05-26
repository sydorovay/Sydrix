import React, { useState, useEffect, useCallback } from 'react';
import { LanguageContext } from './LanguageContext';
import translations, { getLangPack } from '../translations/translations';

export default function LanguageProvider({ children }) {
  // Ініціалізуємо мову з localStorage (або англійська за замовчуванням)
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('lang');
    return saved && translations[saved] ? saved : 'gb';
  });

  // Зберігаємо зміни мови у localStorage
  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  // Функція для перемикання мови
  const changeLanguage = useCallback(code => {
    if (translations[code]) {
      setLanguage(code);
    }
  }, []);

  // Пакет перекладів для поточної мови (із fallback на англійську)
  const t = getLangPack(language);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLang: changeLanguage,    // alias, щоб компоненти могли викликати setLang(...)
        changeLanguage,             // для тих, хто воліє більш семантичний неймінг
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
