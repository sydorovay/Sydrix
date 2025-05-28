// src/context/RootProvider.tsx
import React, { ReactNode } from 'react';
import { LanguageProvider } from './LanguageProvider';
// Можливо, тут ще інші провайдери: AuthProvider, ThemeProvider, тощо

type RootProviderProps = {
  children: ReactNode;
};

export default function RootProvider({ children }: RootProviderProps) {
  return (
    <LanguageProvider>
      {/* Інші провайдери, якщо є */}
      {children}
    </LanguageProvider>
  );
}