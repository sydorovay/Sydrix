import { IconType } from 'react-icons';

export type LangCode = 'gb' | 'ua' | 'de' | 'pl' | 'fr' | 'it';

export type TranslatedText = {
  [key in LangCode]: string;
};

export interface Service {
  id: string;
  icon: IconType;
  title: TranslatedText;
  description: TranslatedText;
}