import { LangCode, LangData } from '../types/langTypes';

import ua from '../translations/ua';
import gb from '../translations/gb';
import de from '../translations/de';
import pl from '../translations/pl';
import fr from '../translations/fr';
import it from '../translations/it';

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
  return translations[LangCode.GB];
}

export default translations;
