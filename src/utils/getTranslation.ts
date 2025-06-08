// src/utils/getTranslation.ts

import { LangCode } from '@/types/langTypes';

// Експортуємо цей тип, щоб його можна було імпортувати
export type Translation = string | Record<LangCode, string>;

const getTranslation = (text: Translation, lang: LangCode): string => {
  if (typeof text === 'string') return text;
  return text[lang] || text[LangCode.GB];
};

export default getTranslation;
