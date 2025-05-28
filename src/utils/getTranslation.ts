// If LangCode is only a type, define it as an enum or const object here or in '@/types/langTypes'
export enum LangCode {
  GB = 'GB',
  // add other language codes as needed
}

type TranslationObject = Partial<Record<LangCode, string>>;

export const getTranslation = (
  obj: TranslationObject,
  language: LangCode = LangCode.GB
): string => {
  return obj?.[language] || obj?.[LangCode.GB] || '';
};
