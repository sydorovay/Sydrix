import { createContext } from 'react';
import type { LangCode, LangData } from '@/types/langTypes'; // або твій шлях
import type { ThemeType } from '../types/ThemeTypes'; // або твій шлях

export type AppContextType = {
  lang: LangCode;
  setLang: React.Dispatch<React.SetStateAction<LangCode>>;
  t: <K extends keyof LangData>(key: K) => LangData[K];
  theme: ThemeType;
  toggleTheme: () => void;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};

const AppContext = createContext<AppContextType | null>(null);

export default AppContext;
