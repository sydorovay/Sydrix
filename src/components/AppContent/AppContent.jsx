// src/components/AppContent/AppContent.jsx
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import TopBar from '../TopBar/TopBar';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import StarsBackgroundWithNebula from '../BackgroundFiberCanvas/StarsBackgroundWithNebula';

import HomePage from '@/pages/HomePage/HomePage';
import AboutPage from '@/pages/AboutPage/AboutPage';
import ServicesPage from '../../pages/ServicesPage/ServicesPage';
import PortfolioPage from '@/pages/PortfolioPage';
import TestimonialsPage from '@/pages/TestimonialsPage';
import BlogPage from '@/pages/BlogPage';
import ContactsPage from '@/pages/ContactsPage';
import FaqPage from '@/pages/FaqPage';
import PartnershipPage from '@/pages/PartnershipPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';

import { useThemeContext } from '../../context/ThemeProvider';
import { useLanguage } from '../../context/useLanguage';
import styles from './AppContent.module.css';

export default function AppContent() {
  const { theme, toggleTheme } = useThemeContext();
  const { lang, setLang, t } = useLanguage();

  // Ініціалізація збереженої мови
  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved) setLang(saved);
  }, [setLang]);

  // Ініціалізація і body-клас для теми
  useEffect(() => {
    const saved = localStorage.getItem('theme') || theme;
    document.body.classList.toggle('dark-theme', saved === 'dark');
    document.body.classList.toggle('light-theme', saved === 'light');
  }, [theme]);

  // Збереження мови
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <div className={styles.app}>
      <header className={styles.topHalf}>
        <StarsBackgroundWithNebula theme={theme} />
        <TopBar
          lang={lang}
          setLang={setLang}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </header>

      <main className={styles.bottomHalf}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage t={t} theme={theme} />} />
          <Route path="/about" element={<AboutPage t={t} theme={theme} />} />
          <Route path="/services" element={<ServicesPage t={t} theme={theme} />} />
          <Route path="/portfolio" element={<PortfolioPage t={t} theme={theme} />} />
          <Route path="/testimonials" element={<TestimonialsPage t={t} theme={theme} />} />
          <Route path="/blog" element={<BlogPage t={t} theme={theme} />} />
          <Route path="/contacts" element={<ContactsPage t={t} theme={theme} />} />
          <Route path="/faq" element={<FaqPage t={t} theme={theme} />} />
          <Route path="/partnership" element={<PartnershipPage t={t} theme={theme} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}
