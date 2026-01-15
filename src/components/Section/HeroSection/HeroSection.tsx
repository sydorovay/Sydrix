import SydrixLogo from '../../SydrixLogo/SydrixLogo';
import styles from './HeroSection.module.css';
import { useLanguageContext } from '@/context/LanguageProvider';

interface HeroSectionProps {
  theme: 'light' | 'dark';
}

export default function HeroSection({ theme }: HeroSectionProps) {
  const { lang, t } = useLanguageContext();

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const subtitleLines = Array.isArray(t('heroSubtitle'))
    ? t('heroSubtitle')
    : [t('heroSubtitle')];

  return (
    <header
      className={`${styles.header} ${styles[theme]}`}
      aria-label="Hero section"
    >
      <h1 className={styles.title}>{t('heroTitle')}</h1>

      <div className={styles.topRow}>
        <SydrixLogo t={t} language={lang} />
      </div>

      <div className={styles.subtitleWrapper}>
        {subtitleLines.map((line, idx) => (
          <p key={idx} className={styles.subtitleText}>
            {line}
          </p>
        ))}
      </div>

      <div className={styles.divider} aria-hidden="true" />

      <button
        className={styles.button}
        onClick={handleContactClick}
        type="button"
        aria-label={t('contactsButtonText')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleContactClick();
          }
        }}
      >
        {t('contactsButtonText')}
      </button>
    </header>
  );
}
