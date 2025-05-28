import { LangData } from './langTypes';

export type PageProps = {
  t: <K extends keyof LangData>(key: K) => LangData[K];
  theme: 'light' | 'dark';
};