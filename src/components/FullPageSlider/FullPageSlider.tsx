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
import { LangData } from '@/types/langTypes';

interface FullPageSliderProps {
  theme: 'light' | 'dark';
}

const FullPageSlider: React.FC<FullPageSliderProps> = ({ theme }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const showTopBtn = useShowTopButton(containerRef);
  const isDesktop = useIsDesktop();
  const { t, lang } = useLanguageContext();

  const scrollToTop = useCallback(() => {
    containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  /**
   * sT (Safe Translate)
   * Використовує keyof LangData для усунення помилок типізації.
   */
  const sT = (key: keyof LangData): string => {
    const result = t(key);
    return typeof result === 'string' ? result : '';
  };

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
        title: sT('portfolioTitle') || 'Portfolio',
        link: sT('portfolioLink') || '#',
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
        description: sT('portfolioDescription'),
        portfolioDescription: sT('portfolioDescription'),
        viewOnGithub: sT('viewOnGithub'),
      },
    ],
    [t]
  );

  // Динамічне звернення до класів теми через Record
  const themeClass = (styles as Record<string, string>)[theme] || '';

  return (
    <div
      ref={containerRef}
      className={`${styles.snapContainer} ${themeClass}`}
      tabIndex={0}
      aria-label="Full page scroll container"
      onKeyDown={handleKeyDown}
    >
      {/* Секція 1: Hero */}
      <section className={styles.snapSection} role="region" aria-label="Hero">
        <HeroSection theme={theme} />
      </section>

      {/* Секція 2: Послуги або Переваги */}
      <section className={styles.snapSection} role="region" aria-label="Services">
        {isDesktop ? (
          <ServicesSectionForSlider t={t} lang={lang} theme={theme} />
        ) : (
          <BenefitsSection
            title="benefitsTitle"
            benefits={(t('benefits' as keyof LangData) as any) || []}
            showAllButton="showAllButton"
            theme={theme}
            t={t}
          />
        )}
      </section>

      {/* Секція 3: Портфоліо */}
      <section className={styles.snapSection} role="region" aria-label="Portfolio">
        <PortfolioSection
          portfolioItems={portfolioItems}
          t={t}
          theme={theme}
          onOpen={(id) => window.open(`/portfolio#${id}`, '_blank')}
        />
      </section>

      {/* Секція 4: Контакти */}
      <section className={styles.snapSection} role="region" aria-label="Contacts">
        <ContactsSection
          phone="phone"
          email="email"
          portfolioLink="portfolioLink"
          theme={theme}
          t={t}
        />
      </section>

      {/* Кнопка "Нагору" */}
      {showTopBtn && (
        <button
          className={styles.topButton}
          onClick={scrollToTop}
          aria-label={sT('backToTop' as keyof LangData) || 'Back to top'}
          type="button"
        >
          <FaArrowUp aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default FullPageSlider;