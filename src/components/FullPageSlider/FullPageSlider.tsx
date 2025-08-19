// src/components/FullPageSlider/FullPageSlider.tsx
import React, { useRef, useCallback, KeyboardEvent, useMemo } from 'react';
import HeroSection from '../Section/HeroSection/HeroSection';
import BenefitsSection from '@/components/Section/BenefitsSection/BenefitsSection';
import PortfolioSection from '@/components/Section/PortfolioSection/PortfolioSection';
import ContactsSection from '../Section/ContactsSection/ContactsSection';
import styles from './FullPageSlider.module.css';
import { FaArrowUp } from 'react-icons/fa';
import { LangData, TFunction } from '@/types/langTypes';
import { useShowTopButton } from '@/hooks/useShowTopButton';
import { PortfolioItem } from '@/types/portfolio';

interface FullPageSliderProps {
  t: TFunction;
  theme: 'light' | 'dark';
  onContact: () => void;
}

const FullPageSlider: React.FC<FullPageSliderProps> = ({ t, theme, onContact }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const showTopBtn = useShowTopButton(containerRef);

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

  // Портфоліо Items
  const portfolioItems: PortfolioItem[] = useMemo(() => [
    {
      id: 'portfolio-1',
      name: 'Portfolio CV Site',
      title: t('portfolioTitle') as string,
      link: t('portfolioLink') as string,
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
      description: t('portfolioDescription') as string,
      portfolioDescription: t('portfolioDescription') as string,
    },
    // можна додати інші проєкти сюди
  ], [t]);

  return (
    <div
      ref={containerRef}
      className={`${styles.snapContainer} ${theme === 'light' ? styles.light : styles.dark}`}
      tabIndex={0}
      aria-label="Full page scroll container"
      onKeyDown={handleKeyDown}
    >
      {/* Hero Section */}
      <section className={styles.snapSection} aria-labelledby="hero-heading">
        <HeroSection theme={theme} />
      </section>

      {/* Benefits Section */}
      <section className={styles.snapSection} aria-labelledby="benefits-heading">
        <BenefitsSection
          title="benefitsTitle"
          benefits={t('benefits') as any} // поки типи для BenefitsSection
          showAllButton="showAllButton"
          theme={theme}
          t={t}
        />
      </section>

      {/* Portfolio Section */}
      <section className={styles.snapSection} aria-labelledby="portfolio-heading">
        <PortfolioSection
          portfolioItems={portfolioItems}
          t={t}
          theme={theme}
          onOpen={(id) => window.open(`/portfolio#${id}`, '_blank')}
        />
      </section>

      {/* Contacts Section */}
      <section className={styles.snapSection} aria-labelledby="contacts-heading">
        <ContactsSection
          phone="phone"
          email="email"
          portfolioLink="portfolioLink"
          theme={theme}
          t={t}
        />
      </section>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          className={styles.topButton}
          onClick={scrollToTop}
          aria-label={t('backToTop') as string}
          type="button"
        >
          <FaArrowUp aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default FullPageSlider;
