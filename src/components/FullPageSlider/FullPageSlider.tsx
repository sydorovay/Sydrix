// src/components/FullPageSlider/FullPageSlider.tsx
import React, { useRef, useCallback, KeyboardEvent, useMemo } from 'react';
import HeroSection from '../Section/HeroSection/HeroSection';
import BenefitsSection from '@/components/Section/BenefitsSection/BenefitsSection';
import PortfolioSection from '@/components/Section/PortfolioSection/PortfolioSection';
import ContactsSection from '../Section/ContactsSection/ContactsSection';
import styles from './FullPageSlider.module.css';
import { FaArrowUp } from 'react-icons/fa';
import { LangData } from '@/types/langTypes';
import { useShowTopButton } from '@/hooks/useShowTopButton';

type TranslateFn = <K extends keyof LangData>(key: K) => LangData[K];

interface FullPageSliderProps {
  t: TranslateFn;
  theme: 'light' | 'dark';
  onContact: () => void;
}

const FullPageSlider: React.FC<FullPageSliderProps> = ({ t, theme, onContact }) => {
  // Ми більше не підтягуємо language тут — це робить HeroSection
  const containerRef = useRef<HTMLDivElement>(null);
  const showTopBtn = useShowTopButton(containerRef);

  const scrollToTop = useCallback(() => {
    containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (['Home', 'PageUp', 'ArrowUp'].includes(e.key)) {
        scrollToTop();
      }
    },
    [scrollToTop]
  );

  const portfolioItems = useMemo(
    () => [
      {
        id: 'portfolio-1',
        name: 'Portfolio CV Site',
        link: t('portfolioLink'),
        imgSrc: '/Sydorov-CV.jpg',
        altText: 'Portfolio CV Site',
      },
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
      {/* Hero Section сам підтягує мову */}
      <section className={styles.snapSection} aria-labelledby="hero-heading">
        <HeroSection
          t={{
            title: t('heroTitle'),
            subtitle: [t('heroSubtitle')],
            button: t('heroButton'),
          }}
          theme={theme}
        />
      </section>

      {/* Benefits */}
      <section className={styles.snapSection} aria-labelledby="benefits-heading">
        <BenefitsSection
          title={t('benefitsTitle')}
          benefits={t('benefits')}
          buttonText={t('button')}
          onButtonClick={onContact}
          theme={theme}
        />
      </section>

      {/* Portfolio */}
      <section className={styles.snapSection} aria-labelledby="portfolio-heading">
        <PortfolioSection
          title={t('portfolioTitle')}
          text={t('portfolioText')}
          portfolioItems={portfolioItems}
        />
      </section>

      {/* Contacts */}
      <section className={styles.snapSection} aria-labelledby="contacts-heading">
        <ContactsSection
          phone={t('phone')}
          email={t('email')}
          portfolioLink={t('portfolioLink')}
          theme={theme}
        />
      </section>

      {/* Back to Top */}
      {showTopBtn && (
        <button
          className={styles.topButton}
          onClick={scrollToTop}
          aria-label="Back to top"
          type="button"
        >
          <FaArrowUp aria-hidden="true" />
          <span className="sr-only">Back to top</span>
        </button>
      )}
    </div>
  );
};

export default FullPageSlider;
