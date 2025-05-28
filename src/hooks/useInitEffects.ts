import React from 'react';
import { LangCode } from '@/types/langTypes';

export default function useInitEffects(
  theme: string,
  setLang: (lang: LangCode) => void,
  lang: LangCode
) {
  React.useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) setLang(savedLang as LangCode);
  }, [setLang]);

  React.useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || theme;
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(savedTheme === 'dark' ? 'dark-theme' : 'light-theme');
  }, [theme]);
}