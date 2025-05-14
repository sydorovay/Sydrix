// src/components/AppContent/AppContent.jsx
import React, { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

import TopBar from '../TopBar/TopBar';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import StarsBackgroundWithNebula from '../BackgroundFiberCanvas/StarsBackgroundWithNebula.';

import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import PortfolioPage from '@/pages/PortfolioPage';
import TestimonialsPage from '@/pages/TestimonialsPage';
import BlogPage from '@/pages/BlogPage';
import ContactsPage from '@/pages/ContactsPage';
import FaqPage from '@/pages/FaqPage';
import PartnershipPage from '@/pages/PartnershipPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';

import { useThemeContext } from '../../context/ThemeProvider';
import LanguageContext from '@/context/LanguageContext';
import styles from './AppContent.module.css'


export default function AppContent() {
  const { theme, toggleTheme, setTheme } = useThemeContext();

  const { lang, setLang, t } = useContext(LanguageContext);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) setLang(savedLang);
  }, [setLang]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${savedTheme}-theme`);
    setTheme(savedTheme);
  }, [setTheme]);


  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <div className={styles.app}>
      <div className={styles.topHalf}>
        <StarsBackgroundWithNebula theme={theme} />
        <TopBar
          lang={lang}
          setLang={setLang}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </div>

      <div className={styles.bottomHalf}>
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
      </div>
    </div>
  );
}
