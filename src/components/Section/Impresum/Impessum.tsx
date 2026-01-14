import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Impressum.module.css';
import { LangData } from '@/types/langTypes';

interface ImpressumProps {
  t: <K extends keyof LangData>(key: K) => any;
}

const Impressum: FC<ImpressumProps> = ({ t }) => {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    if (window.history.length <= 1) {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  return (
    <main className={styles.container}>
      <article className={styles.contentCard}>
        <button
          onClick={handleBack}
          className={styles.backButton}
          aria-label="Go back"
        >
          {t('impressum.back') || 'Back'} →
        </button>

        <header className={styles.header}>
          <h1 className={styles.title}>Impressum</h1>
          <p className={styles.subtitle}>{t('impressum.subtitle')}</p>
        </header>

        <div className={styles.body}>
          {/* Section 1: Юридична інформація */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('impressum.infoTitle')}</h2>
            <div className={styles.addressCard}>
              <div className={styles.ownerName}>Artem Sydorov</div>
              <div className={styles.addressDetails}>
                <span>Hochriesstraße 29</span>
                <span>83209 Prien am Chiemsee</span>
                <span>Germany</span>
              </div>

              <div className={styles.taxNote}>
                {t('impressum.taxStatus')}
              </div>

              <div className={styles.text}>
                <strong>{t('impressum.responsible')}:</strong> Artem Sydorov
              </div>
            </div>
          </section>

          {/* Section 2: Контакти */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('impressum.contactTitle')}</h2>
            <div className={styles.infoGrid}>
              <p>
                <strong>{t('impressum.email') || 'Email'}:</strong>
                <a href="mailto:sydorovay@gmail.com" className={styles.link}>
                  sydorovay@gmail.com
                </a>
              </p>
              <p>
                <strong>{t('impressum.phone') || 'Phone'}:</strong>
                <a href="tel:+4915226152615" className={styles.link}>
                  +49 152 2615 2615
                </a>
              </p>
              <p>
                <strong>{t('impressum.website')}:</strong>
                <a
                  href="https://sydrix.dev"
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.sydrix.dev
                </a>
              </p>
            </div>
          </section>

          {/* Section 3: Disclaimer */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('impressum.disclaimerTitle')}</h2>
            <p className={styles.text}>{t('impressum.disclaimerText')}</p>
          </section>

          {/* Section 4: Copyright */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('impressum.copyrightTitle')}</h2>
            <p className={styles.text}>{t('impressum.copyrightText')}</p>
            <p className={styles.copyrightBrand}>
              © {year} SYDRIX.DEV — {t('impressum.rights')}
            </p>
          </section>

          {/* Section 5: Dispute Resolution */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('impressum.disputeTitle')}</h2>
            <p className={styles.text}>{t('impressum.disputeText')}</p>
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLink}
            >
              https://ec.europa.eu/consumers/odr
            </a>
            <p className={`${styles.text} ${styles.small}`}>
              {t('impressum.disputeFinal')}
            </p>
          </section>
        </div>
      </article>
    </main>
  );
};

export default Impressum;