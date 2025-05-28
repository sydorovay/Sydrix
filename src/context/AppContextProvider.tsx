import { ReactNode } from 'react';
import AppContext, { AppContextType } from './AppContext'; 
import useLanguage from '../hooks/useLanguage';
import useTheme from '../hooks/useTheme';


type Props = {
  children: ReactNode;
};

export default function AppContextProvider({ children }: Props) {
  const themeData = useTheme();
  const languageData = useLanguage();

  const contextValue = {
    ...themeData,
    ...languageData,
  } as AppContextType;

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
