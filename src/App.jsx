import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopBar from './components/TopBar/TopBar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import StarsBackgroundWithNebula from './components/BackgroundFiberCanvas/StarsBackgroundWithNebula.';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactsPage from './pages/ContactsPage';

import { useTheme } from './hooks/useTheme';
import LanguageContext from './context/LanguageContext';
import LanguageProvider from './context/LanguageProvider';

import styles from './styles/App.module.css';
import './styles/variables.css';

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
      {/* Верхня половина сторінки */}
      <div className={styles.topHalf}>
        <StarsBackgroundWithNebula theme={theme} />
        <TopBar
          lang={lang}
          setLang={setLang}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </div>

      {/* Нижня половина сторінки */}
      <div className={styles.bottomHalf}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage t={t} theme={theme} />} />
          <Route path="/about" element={<AboutPage theme={theme} />} />
          <Route path="/portfolio" element={<PortfolioPage theme={theme} />} />
          <Route path="/contacts" element={<ContactsPage theme={theme} />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}
