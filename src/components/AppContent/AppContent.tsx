// src/components/AppContent/AppContent.tsx
import { lazy, Suspense, ReactNode } from 'react';
import { Routes, Route } from 'react-router-dom';

import TopBar from '../TopBar/TopBar';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import StarsBackgroundWithNebula from '../BackgroundFiberCanvas/StarsBackground';
import Footer from '../Footer/Footer';

import { useThemeContext } from '@/context/ThemeProvider';
import useLanguage from '@/hooks/useLanguage';
import useInitEffects from '@/hooks/useInitEffects';

import styles from './AppContent.module.css';
import createStringTranslator from '@/utils/langUtils';

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage/AboutPage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage/ServicesPage'));
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage/PortfolioPage'));
const TestimonialsPage = lazy(() => import('@/pages/TestimonialsPage/TestimonialsPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage/BlogPage'));
const ContactsPage = lazy(() => import('@/pages/ContactsPage/ContactsPage'));
const FaqPage = lazy(() => import('@/pages/FaqPage/FaqPage'));
const PartnershipPage = lazy(() => import('@/pages/PartnershipPage/PartnershipPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage/NotFoundPage'));

interface FallbackProps {
  children?: ReactNode;
}

function LoadingFallback({ children }: FallbackProps) {
  return (
    <div role="alert" aria-busy="true" className={styles.fallback}>
      {children ?? 'Loading...'}
    </div>
  );
}

export default function AppContent() {
  const { theme, toggleTheme } = useThemeContext();
  const { lang, setLang, t } = useLanguage();
  const typedT = createStringTranslator(t);

  useInitEffects(theme, setLang, lang);

  // Додаємо клас для теми на кореневий div
  const themeCls = theme === 'light' ? styles['lightTheme'] : styles['darkTheme'];

  return (
    <div className={`${styles.app} ${themeCls}`}>
      {/* Header (фіксований топ) */}
      <header className={styles.topHalf} role="banner">
        <StarsBackgroundWithNebula theme={theme} />
        <TopBar lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} />
      </header>

      {/* Main (snap-scroll контейнер) */}
      <main className={styles.snapContainer} role="main">
        <ScrollToTop />

        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage t={t} theme={theme} />} />
            <Route path="/about" element={<AboutPage t={t} theme={theme} />} />
            <Route path="/services" element={<ServicesPage t={t} theme={theme} lang={lang} />} />
            <Route path="/portfolio" element={<PortfolioPage t={t} />} />
            <Route path="/testimonials" element={<TestimonialsPage t={t} />} />
            <Route path="/blog" element={<BlogPage t={typedT} theme={theme} />} />
            <Route path="/contacts" element={<ContactsPage t={typedT} />} />
            <Route
              path="/faq"
              element={<FaqPage t={{ faq: typedT('faq'), faqText: typedT('faqText') }} />}
            />
            <Route
              path="/partnership"
              element={
                <PartnershipPage
                  t={{
                    partnership: typedT('partnership'),
                    partnershipText: typedT('partnershipText'),
                  }}
                />
              }
            />
            <Route path="*" element={<NotFoundPage language={lang} />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer t={t} theme={theme} />
    </div>
  );
}
