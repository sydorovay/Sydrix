// src/utils/getTranslation.ts

import { LangCode } from '@/types/langTypes';

type Translation = string | Record<LangCode, string>;

const getTranslation = (text: Translation, lang: LangCode): string => {
  if (typeof text === 'string') return text;
  return text[lang] || text['gb']; // Повертаємо англійську за замовчуванням
};

export default getTranslation