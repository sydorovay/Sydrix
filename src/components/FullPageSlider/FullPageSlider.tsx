import React, { useRef, useCallback, KeyboardEvent, useMemo } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import styles from './FullPageSlider.module.css';

import { useShowTopButton } from '@/hooks/useShowTopButton';
import useIsDesktop from '@/hooks/useIsDesktop';
import { useLanguageContext } from '@/context/LanguageProvider';

import type { PortfolioItem } from '@/types/portfolio';
import { LangData } from '@/types/langTypes';

import HeroSection from '@/components/Section/HeroSection/HeroSection';
import BenefitsSection from '@/components/Section/BenefitsSection/BenefitsSection';
import PortfolioSection from '@/components/Section/PortfolioSection/PortfolioSection';
import ContactsSection from '@/components/Section/ContactsSection/ContactsSection';

interface FullPageSliderProps {
  theme: 'light' | 'dark';
}

const FullPageSlider: React.FC<FullPageSliderProps> = ({ theme }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const showTopBtn = useShowTopButton(containerRef);
  const isDesktop = useIsDesktop();
  const { t } = useLanguageContext();

  const scrollToTop = useCallback(() => {
    containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const sT = useCallback((key: keyof LangData): string => {
    const result = t(key);
    return typeof result === 'string' ? result : '';
  }, [t]);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (['Home', 'PageUp', 'ArrowUp'].includes(e.key)) {
      e.preventDefault();
      scrollToTop();
    }
  }, [scrollToTop]);

  const portfolioItems: PortfolioItem[] = useMemo(() => [
    {
      id: 'portfolio-1',
      name: 'Portfolio CV Site',
      title: sT('portfolioTitle'),
      link: sT('portfolioLink'),
      altText: 'Sydrix Portfolio',
      imgSrc: '/portfolio/project1.webp',
      images: ['/portfolio/project1.webp'],
      description: sT('portfolioDescription'),
      portfolioDescription: sT('portfolioDescription'),
      viewOnGithub: sT('viewOnGithub'),
    },
  ], [sT]);

  const themeClass = theme === 'dark' ? styles.dark : styles.light;

  return (
    <div
      ref={containerRef}
      className={`${styles.snapContainer} ${themeClass}`}
      tabIndex={0}
      role="main"
      onKeyDown={handleKeyDown}
    >
      {/* Секція 1: Hero */}
      <section className={styles.snapSection}>
        <HeroSection theme={theme} />
      </section>

      {/* Секція 2: Послуги / Переваги (ВИПРАВЛЕНО: додано обгортку) */}
      <section className={styles.snapSection}>
        <BenefitsSection
          title="benefitsTitle"
          benefits={(t('benefits' as keyof LangData) as any) || []}
          showAllButton="showAllButton"
          theme={theme}
          t={t}
        />
      </section>

      {/* Секція 3: Портфоліо */}
      <section className={styles.snapSection}>
        <PortfolioSection
          portfolioItems={portfolioItems}
          t={t}
          theme={theme}
          onOpen={(id: string) => window.open(`/portfolio#${id}`, '_blank')}
        />
      </section>

      {/* Секція 4: Контакти */}
      <section className={styles.snapSection}>
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
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default FullPageSlider;