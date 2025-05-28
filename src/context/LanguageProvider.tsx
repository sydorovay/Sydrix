import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { getLangPack } from '../translations/translations';
import { LangCode, LangData, BenefitItem } from '../types/langTypes';

export type LanguageContextProps = {
  language: LangCode;
  setLang: (value: LangCode) => void;
  t: (key: keyof LangData) => string | string[] | { label: string; value: string; }[] | BenefitItem[];
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Перевірка на наявність `localStorage`
  const [language, setLanguage] = useState<LangCode>(() => {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem('lang');
      return (stored as LangCode) ?? LangCode.GB;
    }
    return LangCode.GB; // За замовчуванням для серверного рендерингу
  });

  const setLang = useCallback((value: LangCode) => {
    setLanguage(value);
  }, []);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('lang', language);
    }
  }, [language]);

  const langPack = getLangPack(language);

  const t = useCallback((key: keyof LangData) => {
    const value = langPack[key];
    if (value === undefined) {
      console.warn(`Translation key "${String(key)}" not found for language "${language}"`);
      return String(key);
    }
    return value;
  }, [langPack, language]);

  return (
    <LanguageContext.Provider value={{ language, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
