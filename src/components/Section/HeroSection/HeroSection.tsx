import React from 'react';
import SydrixLogo from '../../SydrixLogo/SydrixLogo';
import styles from './HeroSection.module.css';
import { useLanguageContext } from '@/context/LanguageProvider';
import { LangData } from '@/types/langTypes';

interface HeroSectionProps {
  theme: 'light' | 'dark';
}

const HeroSection: React.FC<HeroSectionProps> = ({ theme }) => {
  const { lang, t } = useLanguageContext();

  const handleContactClick = () => {
    const container = document.querySelector('[class*="snapContainer"]');
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const getTranslation = (key: keyof LangData): string => {
    const value = t(key);
    return typeof value === 'string' ? value : '';
  };

  const subtitleData = t('heroSubtitle' as keyof LangData);
  const subtitleLines: string[] = Array.isArray(subtitleData)
    ? subtitleData.filter((item): item is string => typeof item === 'string')
    : typeof subtitleData === 'string' ? [subtitleData] : [];

  const themeClass = theme === 'dark' ? styles.dark : styles.light;

  return (
    <header className={`${styles.header} ${themeClass}`} aria-label="Hero section">
      <div className={styles.contentWrapper}>
        <div className={styles.logoRow}>
          <SydrixLogo t={t} language={lang} />
        </div>

        <h1 className={styles.title}>{getTranslation('heroTitle')}</h1>

        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.subtitleWrapper}>
          {subtitleLines.map((line, idx) => (
            <p key={idx} className={styles.subtitleText}>
              {line}
            </p>
          ))}
        </div>

        <button
          className={`${styles.button} ${styles.gradientButton}`}
          onClick={handleContactClick}
          type="button"
        >
          {getTranslation('contactsButtonText')}
        </button>
      </div>
    </header>
  );
};

export default HeroSection;