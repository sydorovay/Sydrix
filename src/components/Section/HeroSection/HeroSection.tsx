// ✅ src/components/HeroSection.tsx
import React from 'react';
import SydrixLogo from '../../SydrixLogo/SydrixLogo';
import LangSwitcher from '../../LangSwitcher/LangSwitcher';
import styles from './HeroSection.module.css';
import { useLanguageContext } from '@/context/LanguageProvider';

interface HeroSectionProps {
  theme: 'light' | 'dark';
}

export default function HeroSection({ theme }: HeroSectionProps) {
  const { lang, t, setLang } = useLanguageContext();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{t('heroTitle')}</h1>
      <div className={styles.topRow}>
        <SydrixLogo t={t} language={lang} onLanguageChange={setLang} />
      </div>

      <div className={styles.subtitleWrapper} role="heading" aria-level={2}>
        {Array.isArray(t('heroSubtitle')) &&
          t('heroSubtitle').map((line, idx) => (
            <p key={idx} className={styles.line}>
              {line}
            </p>
          ))}
      </div>
    </header>
  );
}
