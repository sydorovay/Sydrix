// src/context/LanguageProvider.tsx
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { LangCode, LangData } from '@/types/langTypes';
import translations from '@/translations/translations';

type TranslateFn = <K extends keyof LangData>(key: K) => LangData[K];

interface LanguageContextType {
  lang: LangCode;
  t: TranslateFn;
  setLang: (lang: LangCode) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<LangCode>(LangCode.GB);

  const t: TranslateFn = useCallback(
    key => translations[lang][key],
    [lang]
  );

  const value: LanguageContextType = { lang, t, setLang };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguageContext must be used within LanguageProvider');
  return context;
};
