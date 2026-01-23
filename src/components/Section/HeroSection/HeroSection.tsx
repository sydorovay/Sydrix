import React, { memo, useMemo } from 'react';
import SydrixLogo from '../../SydrixLogo/SydrixLogo';
import styles from './HeroSection.module.css';
import { useLanguageContext } from '@/context/LanguageProvider';
import { LangData } from '@/types/langTypes';

interface HeroSectionProps {
  theme: 'light' | 'dark';
}

const HeroSection: React.FC<HeroSectionProps> = memo(({ theme }) => {
  const { lang, t } = useLanguageContext();

  // Використовуємо Record для безпечного доступу до стилів за ключем
  const s = styles as Record<string, string>;

  const handleContactClick = () => {
    const container = document.querySelector('[class*="snapContainer"]');
    container?.scrollTo({ top: 9999, behavior: 'smooth' });
  };

  const subtitleLines = useMemo(() => {
    const data = t('heroSubtitle' as keyof LangData);
    return Array.isArray(data) ? data : [data];
  }, [t]);

  return (
    <section className={`${s.header} ${theme === 'dark' ? s.dark : s.light}`} aria-labelledby="hero-title">
      <div className={s.contentWrapper}>
        <div className={s.logoRow}>
          <SydrixLogo t={t} language={lang} />
        </div>

        <h1 id="hero-title" className={s.title}>
          {(t('heroTitle') as string) || ''}
        </h1>

        <div className={s.divider} role="presentation" />

        <div className={s.subtitleWrapper}>
          {subtitleLines.map((line, idx) => (
            <p key={idx} className={s.subtitleText}>
              {line as string}
            </p>
          ))}
        </div>

        <button
          className={`${s.button} ${s.gradientButton}`}
          onClick={handleContactClick}
          type="button"
        >
          {(t('contactsButtonText') as string) || ''}
        </button>
      </div>
    </section>
  );
});

export default HeroSection;