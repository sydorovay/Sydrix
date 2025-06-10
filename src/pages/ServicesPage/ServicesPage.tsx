import React, { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './ServicesPage.module.css';
import services from '@/translations/services/services';
import { LangData, LangCode } from '@/types/langTypes';
import getTranslation from '@/utils/getTranslation';

interface ServicesPageProps {
  t: <K extends keyof LangData>(key: K) => LangData[K];
  theme: 'light' | 'dark' | string;
  lang: LangCode;
}

const ServicesPage: FC<ServicesPageProps> = ({ t, lang }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [focusedId, setFocusedId] = useState<string | null>(null);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setFocusedId(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.focus();
        }
      }, 100);
    }
  }, [location]);

  const handleCardClick = (id: string) => {
    setFocusedId(id);
    navigate(`#${id}`);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element.focus();
    }
  };

  return (
    <main className={styles.page}>
      <section className={styles.banner}>
        <h1 className={styles.title}>{t('servicesTitle')}</h1>
        <p className={styles.subtitle}>{t('servicesContactText')}</p>
      </section>

      <section className={styles.grid}>
        {services.map(({ id, icon: Icon, title, description }) => {
          const isFocused = focusedId === String(id);
          return (
            <div
              key={id}
              id={String(id)}
              className={`${styles.card} ${isFocused ? styles.focusZoom : ''}`}
              tabIndex={-1}
              onClick={() => handleCardClick(String(id))}
            >
              {Icon && <Icon className={styles.icon} />}
              <h2 className={styles.cardTitle}>{getTranslation(title, lang)}</h2>
              <p className={styles.cardDesc}>{getTranslation(description, lang)}</p>
              <button className={styles.ctaButton}>{t('servicesButton')}</button>
            </div>
          );
        })}
      </section>

      <section className={styles.ctaForm}>
        <h3>{t('servicesFormTitle')}</h3>
        <form className={styles.form}>
          <input
            type="email"
            placeholder={t('servicesFormPlaceholder')}
            className={styles.input}
          />
          <button type="submit" className={styles.formButton}>
            {t('servicesFormButton')}
          </button>
        </form>
      </section>
    </main>
  );
};

export default ServicesPage;
