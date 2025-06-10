// src/utils/translator.ts
import { getLangPack } from './getLangPack';
import getTranslation, { Translation } from './getTranslation';
import { LangCode, LangData } from '@/types/langTypes';

export function createTranslator(lang?: string | LangCode) {
  const pack: LangData = getLangPack(lang);
  return <K extends keyof LangData>(
    key: K,
    params?: Record<string, string | number>
  ): string => {
    const raw = pack[key] as Translation;
    let result = getTranslation(raw, (lang as LangCode) || LangCode.GB);
    if (params) {
      Object.entries(params).forEach(([p, v]) => {
        result = result.replaceAll(`{${p}}`, String(v));
      });
    }
    return result;
  };
}
