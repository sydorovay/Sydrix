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

  // Безпечний доступ до стилів для TS
  const s = styles as Record<string, string>;

  const subtitleLines = useMemo(() => {
    const data = t('heroSubtitle' as keyof LangData);
    return Array.isArray(data) ? data : [data];
  }, [t]);

  const handleScroll = () => {
    const nextSection = document.querySelector('[class*="snapContainer"]');
    nextSection?.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className={`${s.header} ${theme === 'dark' ? s.dark : s.light}`}>
      <div className={s.contentWrapper}>
        <div className={s.logoRow}>
          <SydrixLogo t={t} language={lang} />
        </div>

        <h1 className={s.title}>
          {(t('heroTitle') as string) || ''}
        </h1>

        <div className={s.divider} />

        <div className={s.subtitleWrapper}>
          {subtitleLines.map((line, idx) => (
            <p key={idx} className={s.subtitleText}>
              {line as string}
            </p>
          ))}
        </div>

        <button
          className={`${s.button} ${s.gradientButton}`}
          onClick={handleScroll}
          type="button"
        >
          {(t('contactsButtonText') as string) || ''}
        </button>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;