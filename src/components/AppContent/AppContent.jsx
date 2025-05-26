// src/components/AppContent/AppContent.jsx
import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import TopBar from '../TopBar/TopBar';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import StarsBackgroundWithNebula from '../BackgroundFiberCanvas/StarsBackgroundWithNebula';
import Footer from '../Footer/Footer';

import { useThemeContext } from '../../context/ThemeProvider';
import { useLanguage } from '../../context/useLanguage';

import styles from './AppContent.module.css';

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage/AboutPage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage/ServicesPage'));
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage'));
const TestimonialsPage = lazy(() => import('@/pages/TestimonialsPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const ContactsPage = lazy(() => import('@/pages/ContactsPage'));
const FaqPage = lazy(() => import('@/pages/FaqPage'));
const PartnershipPage = lazy(() => import('@/pages/PartnershipPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage/NotFoundPage'));

export default function AppContent() {
  const { theme, toggleTheme } = useThemeContext();
  const { lang, setLang, t } = useLanguage();

  // Ініціалізація мови з localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) setLang(savedLang);
  }, [setLang]);

  // Збереження мови в localStorage
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  // Темізація: оновлення класу body
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || theme;
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(savedTheme === 'dark' ? 'dark-theme' : 'light-theme');
  }, [theme]);

  return (
    <div className={styles.app}>
      <header className={styles.topHalf} role="banner">
        <StarsBackgroundWithNebula theme={theme} />
        <TopBar
          lang={lang}
          setLang={setLang}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </header>

      <main className={styles.bottomHalf} role="main">
        <ScrollToTop />
        <Suspense fallback={<div role="alert" aria-busy="true">Loading...</div>}>
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
        </Suspense>
      </main>

      <Footer t={t} theme={theme} />
    </div>
  );
}
