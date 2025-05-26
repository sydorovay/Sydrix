// src/components/AppContent/useInitEffects.ts
import { useEffect } from 'react';

export function useInitEffects(theme: string, setLang: (lang: string) => void, lang: string) {
  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) setLang(savedLang);
  }, [setLang]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || theme;
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(savedTheme === 'dark' ? 'dark-theme' : 'light-theme');
  }, [theme]);
}
