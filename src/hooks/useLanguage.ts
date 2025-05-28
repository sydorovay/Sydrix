import { useState, useEffect, useCallback } from 'react';
import { getLangPack } from '../translations/translations';
import { LangCode, LangData } from '../types/langTypes';

export default function useLanguage() {
  const [lang, setLang] = useState<LangCode>(() => {
    const stored = localStorage.getItem('lang') as LangCode | null;
    return stored && Object.values(LangCode).includes(stored as LangCode)
      ? (stored as LangCode)
      : LangCode.GB;
  });

  const [t, setT] = useState<LangData>(() => getLangPack(lang));

  useEffect(() => {
    localStorage.setItem('lang', lang);
    setT(getLangPack(lang));
  }, [lang]);

  const translate = useCallback(
    <K extends keyof LangData>(key: K): LangData[K] => {
      return t[key];
    },
    [t]
  );

  return { lang, setLang, t: translate };
}
