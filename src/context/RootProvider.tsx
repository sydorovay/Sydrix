// src/context/RootProvider.tsx
import { ThemeProvider } from './ThemeProvider';
import LanguageProvider from './LanguageProvider';
import AppContextProvider from './AppContextProvider';

export default function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContextProvider>{children}</AppContextProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
