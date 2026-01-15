import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Privacy.module.css'; 
import { LangData } from '@/types/langTypes';

interface PrivacyProps {
  t: <K extends keyof LangData>(key: K) => any;
}

const Privacy: FC<PrivacyProps> = ({ t }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.container}>
      <article className={styles.contentCard}>
        <button onClick={() => navigate(-1)} className={styles.backButton}>
          {t('impressum.back') || 'Back'} →
        </button>

        <header className={styles.header}>
          <h1 className={styles.title}>{t('privacy.title')}</h1>
          <p className={styles.subtitle}>GDPR / DSGVO Compliance</p>
        </header>

        <div className={styles.body}>
          <p className={styles.text}>{t('privacy.intro')}</p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('privacy.hostingTitle')}</h2>
            <p className={styles.text}>{t('privacy.hostingText')}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('privacy.dataTitle')}</h2>
            <p className={styles.text}>{t('privacy.dataText')}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('privacy.rightsTitle')}</h2>
            <p className={styles.text}>{t('privacy.rightsText')}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('privacy.contactTitle')}</h2>
            <p className={styles.text}>{t('privacy.contactText')}</p>
          </section>
        </div>
      </article>
    </main>
  );
};

export default Privacy;