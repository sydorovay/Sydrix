// src/pages/services/ServicesPage.tsx
import React, { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './ServicesPage.module.css';
import services from '@/translations/services/services';
import { LangData, LangCode } from '@/types/langTypes';
import getTranslation from '@/utils/getTranslation';
import ServiceModal from '../../components/ServicesModal/ServiceModal';
import { IconType } from 'react-icons';

interface ServicesPageProps {
  t: <K extends keyof LangData>(key: K) => LangData[K];
  theme: 'light' | 'dark' | string;
  lang: LangCode;
}

interface ServiceItem {
  id: string;
  icon: IconType;
  title: Record<string, string>;
  description: Record<string, string>;
}

const ServicesPage: FC<ServicesPageProps> = ({ t, lang }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setFocusedId(hash);
      const serviceExists = services.find(s => s.id === hash);
      if (serviceExists) setSelectedServiceId(hash);

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
    setSelectedServiceId(id);
    navigate(`#${id}`);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element.focus();
    }
  };

  const closeModal = () => {
    setSelectedServiceId(null);
    navigate('#');
  };

  const selectedService = services.find(s => s.id === selectedServiceId);

  return (
    <main className={styles.page}>
      <section className={styles.banner}>
        <h1 className={styles.title}>{t('servicesTitle')}</h1>
      </section>

      <section className={styles.grid}>
        {services.map(({ id, icon: Icon, title}) => {
          const isFocused = focusedId === id;
          return (
            <div
              key={id}
              id={id}
              className={`${styles.card} ${isFocused ? styles.focusZoom : ''}`}
              tabIndex={-1}
              onClick={() => handleCardClick(id)}
            >
              {Icon && <Icon className={styles.icon} />}
              <h2 className={styles.cardTitle}>
                {title ? getTranslation(title, lang) : ''}
              </h2>
              <button
                className={styles.ctaButton}
                onClick={e => {
                  e.stopPropagation();
                  setSelectedServiceId(id);
                }}
              >
                {t('servicesButton')}
              </button>
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
          <button type="submit" className={styles.ctaButton}>
            {t('servicesFormButton')}
          </button>
        </form>
      </section>

      {selectedService && (
        <ServiceModal service={selectedService} lang={lang} onClose={closeModal} />
      )}
    </main>
  );
};

export default ServicesPage;
