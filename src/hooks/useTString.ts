import { useCallback } from 'react';
import { useLanguage } from '@/context/LanguageProvider';
import { LangData } from '@/types/langTypes';

export const useTString = () => {
  const { t } = useLanguage();

  return useCallback(
    (key: keyof LangData): string => {
      const value = t(key);
      if (typeof value === 'string') return value;
      console.warn(`Expected string for key "${key}", but got ${typeof value}`);
      return String(key);
    },
    [t]
  );
};