// src/App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from './components/AppContent/AppContent';
import { ThemeProvider } from './context/ThemeProvider';
import LanguageProvider from './context/LanguageProvider';
import AppContextProvider from './context/AppContextProvider';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';  // <- тут
import './styles/variables.css';

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LanguageProvider>
          <AppContextProvider>
            <Router>
              <Suspense fallback={<div role="alert" aria-busy="true">Завантаження...</div>}>
                <AppContent />
              </Suspense>
            </Router>
          </AppContextProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
