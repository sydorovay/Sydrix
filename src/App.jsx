import React, { useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import TopBar from './components/TopBar/TopBar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import BackgroundAnimationCanvas from './components/BackgroundFiberCanvas/BackgroundAnimationCanvas';

import HomePage from './pages/HomePage';

import { useTheme } from './hooks/useTheme';
import LanguageContext from './context/LanguageContext';
import LanguageProvider from './context/LanguageProvider';

import styles from './styles/App.module.css';
import './styles/variables.css';

import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactsPage from './pages/ContactsPage';

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useContext(LanguageContext);

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${saved}-theme`);
    localStorage.setItem('theme', saved);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <div className={styles.app}>
      <BackgroundAnimationCanvas theme={theme} />
      <TopBar lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage t={t} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider> {/* Перемістили LanguageProvider сюди */}
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}
