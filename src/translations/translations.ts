import { LangCode, LangData } from '../types/langTypes';

import ua from './ua';
import gb from './gb';
import de from './de';
import pl from './pl';
import fr from './fr';
import it from './it';

const translations: Record<LangCode, LangData> = {
  [LangCode.UA]: ua,
  [LangCode.GB]: gb,
  [LangCode.DE]: de,
  [LangCode.PL]: pl,
  [LangCode.FR]: fr,
  [LangCode.IT]: it,
};

export function getLangPack(lang: string | LangCode | undefined): LangData {
  if (typeof lang === 'string' && Object.values(LangCode).includes(lang as LangCode)) {
    return translations[lang as LangCode];
  }
  return translations[LangCode.GB]; // fallback to English
}

export default translations;
