// src/App.tsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { ThemeProvider } from './context/ThemeProvider';
import { LanguageProvider } from './context/LanguageProvider';
import AppContent from './components/AppContent/AppContent';
import LoadingFallback from './components/LoadingFallback/LoadingFallback';

import './styles/themes.css';
import './styles/index.css';

function logError(error: Error, info: React.ErrorInfo) {
  console.error('[App Error]', error, info);
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ErrorBoundary onError={logError}>
          <Router>
            <Suspense fallback={<LoadingFallback />}>
              <AppContent />
            </Suspense>
          </Router>
        </ErrorBoundary>
      </LanguageProvider>
    </ThemeProvider>
  );
}
