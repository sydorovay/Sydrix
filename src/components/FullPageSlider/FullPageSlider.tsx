import React, { useRef, useCallback, KeyboardEvent, useMemo } from 'react';
import HeroSection from '@/components/Section/HeroSection/HeroSection';
import BenefitsSection from '@/components/Section/BenefitsSection/BenefitsSection';
import PortfolioSection from '@/components/Section/PortfolioSection/PortfolioSection';
import ContactsSection from '@/components/Section/ContactsSection/ContactsSection';
import ServicesSectionForSlider from '@/components/Section/ServicesSectionForSlider/ServicesSectionForSlider';

import { FaArrowUp } from 'react-icons/fa';
import styles from './FullPageSlider.module.css';

import { useShowTopButton } from '@/hooks/useShowTopButton';
import useIsDesktop from '@/hooks/useIsDesktop';
import { useLanguageContext } from '@/context/LanguageProvider';
import type { PortfolioItem } from '@/types/portfolio';

interface FullPageSliderProps {
  theme: 'light' | 'dark';
}

/**
 * FullPageSlider
 * - scroll container with scroll-snap per section
 * - accessible keyboard handling (Home/PageUp/ArrowUp -> top)
 * - uses language context for translations
 */
const FullPageSlider: React.FC<FullPageSliderProps> = ({ theme }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const showTopBtn = useShowTopButton(containerRef);
  const isDesktop = useIsDesktop();

  const { t, lang } = useLanguageContext();

  const scrollToTop = useCallback(() => {
    containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (['Home', 'PageUp', 'ArrowUp'].includes(e.key)) {
        e.preventDefault();
        scrollToTop();
      }
    },
    [scrollToTop]
  );

  const portfolioItems: PortfolioItem[] = useMemo(
    () => [
      {
        id: 'portfolio-1',
        name: 'Portfolio CV Site',
        title: typeof t === 'function' ? (t('portfolioTitle') as string) : 'Portfolio',
        link: typeof t === 'function' ? (t('portfolioLink') as string) : '#',
        altText: 'Portfolio CV Site',
        imgSrc: '/portfolio/project1.webp',
        images: [
          '/portfolio/project1.webp',
          '/portfolio/project2.webp',
          '/portfolio/project3.webp',
          '/portfolio/project4.webp',
          '/portfolio/project5.webp',
          '/portfolio/project6.webp',
        ],
        description: typeof t === 'function' ? (t('portfolioDescription') as string) : '',
        portfolioDescription: typeof t === 'function' ? (t('portfolioDescription') as string) : '',
        viewOnGithub: typeof t === 'function' ? (t('viewOnGithub') as string) : '',
      },
      // додай інші елементи за потреби...
    ],
    [t]
  );

  return (
    <div
      ref={containerRef}
      className={`${styles.snapContainer} ${theme === 'light' ? styles.light : styles.dark}`}
      tabIndex={0}
      aria-label="Full page scroll container"
      onKeyDown={handleKeyDown}
    >
      {/* Hero */}
      <section className={styles.snapSection} aria-labelledby="hero-heading" role="region">
        <HeroSection theme={theme} />
      </section>

      {/* Services (desktop) or Benefits (mobile) */}
      <section className={styles.snapSection} aria-labelledby="services-heading" role="region">
        {isDesktop ? (
          <ServicesSectionForSlider t={t} lang={lang} theme={theme} />
        ) : (
          <BenefitsSection
            title="benefitsTitle"
            benefits={t('benefits')}
            showAllButton="showAllButton"
            theme={theme}
            t={t}
          />
        )}
      </section>

      {/* Portfolio */}
      <section className={styles.snapSection} aria-labelledby="portfolio-heading" role="region">
        <PortfolioSection
          portfolioItems={portfolioItems}
          t={t}
          theme={theme}
          onOpen={(id) => window.open(`/portfolio#${id}`, '_blank')}
        />
      </section>

      {/* Contacts */}
      <section className={styles.snapSection} aria-labelledby="contacts-heading" role="region">
        <ContactsSection
          phone="phone"
          email="email"
          portfolioLink="portfolioLink"
          theme={theme}
          t={t}
        />
      </section>

      {/* Back to top */}
      {showTopBtn && (
        <button
          className={styles.topButton}
          onClick={scrollToTop}
          aria-label={typeof t === 'function' ? (t('backToTop') as string) : 'Back to top'}
          type="button"
        >
          <FaArrowUp aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default FullPageSlider;
