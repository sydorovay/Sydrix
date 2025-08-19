// src/utils/translator.ts
import { getLangPack } from './getLangPack';
import getTranslation, { Translation } from './getTranslation';
import { LangCode, LangData, TFunction } from '@/types/langTypes';

// Перекладач з підтримкою params тільки для string
export function createTranslator(lang?: string | LangCode): TFunction {
  const pack: LangData = getLangPack(lang);

  return function <K extends keyof LangData>(
    key: K,
    params?: Record<string, string | number>
  ): LangData[K] {
    const raw = pack[key];

    // Якщо переклад — рядок (або щось, що можна пропустити через getTranslation)
    if (typeof raw === "string") {
      let result = getTranslation(raw as Translation, (lang as LangCode) || LangCode.GB);

      if (params) {
        Object.entries(params).forEach(([p, v]) => {
          result = result.replaceAll(`{${p}}`, String(v));
        });
      }

      return result as LangData[K];
    }

    // Якщо переклад — НЕ рядок (масив, об'єкт тощо) → повертаємо як є
    return raw;
  };
}