import { LangData } from '@/types/langTypes';

export type StringLangKeys = Extract<{
  [K in keyof LangData]: LangData[K] extends string ? K : never
}[keyof LangData], string>;

const createStringTranslator = (
  t: <K extends keyof LangData>(key: K) => LangData[K]
) => {
  return (key: StringLangKeys): string => t(key) as string;
};


export default createStringTranslator