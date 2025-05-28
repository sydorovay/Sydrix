// src/App.tsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { ThemeProvider } from './context/ThemeProvider';
import { LanguageProvider } from './context/LanguageProvider';
import AppContent from './components/AppContent/AppContent';
import RootProvider from './context/RootProvider';
import LoadingFallback from './components/LoadingFallback/LoadingFallback';

import './styles/variables.css';

// Централізований логер помилок
function logError(error: Error, info: React.ErrorInfo) {
  // Можна тут додати аналітику або відправку помилок на сервер
  console.error('[App Error]', error, info);
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ErrorBoundary onError={logError}>
          <RootProvider>
            <Router>
              <Suspense fallback={<LoadingFallback />}>
                <AppContent />
              </Suspense>
            </Router>
          </RootProvider>
        </ErrorBoundary>
      </LanguageProvider>
    </ThemeProvider>
  );
}
