// src/App.tsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from './components/AppContent/AppContent';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import RootProvider from './context/RootProvider';
import LoadingFallback from './components/LoadingFallback/LoadingFallback';
import './styles/variables.css';

export default function App() {
  return (
    <ErrorBoundary onError={(error, info) => console.error(error, info)}>
      <RootProvider>
        <Router>
          <Suspense fallback={<LoadingFallback />}>
            <AppContent />
          </Suspense>
        </Router>
      </RootProvider>
    </ErrorBoundary>
  );
}