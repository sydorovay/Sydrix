// ✅ src/components/HeroSection.tsx
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
   <header className={`${styles.header} ${styles[theme]}`}>
  <h1 className={styles.title}>{t('heroTitle')}</h1>
  <div className={styles.topRow}>
    <SydrixLogo t={t} language={lang} />
  </div>

  <div className={styles.subtitleWrapper}>
    {Array.isArray(t('heroSubtitle')) &&
      t('heroSubtitle').map((line, idx) => (
        <p key={idx} className={styles.line}>
          {line}
        </p>
      ))}
  </div>

  <div className={styles.buttonWrapper}>
    <LangSwitcher />
  </div>
</header>
  );
}
