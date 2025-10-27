import React, { FC, useEffect, useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './ServicesPage.module.css';
import services from '@/translations/services/services';
import { LangData, LangCode } from '@/types/langTypes';
import getTranslation from '@/utils/getTranslation';
import ServiceModal from '@/components/ServicesModal/ServiceModal';
import { IconType } from 'react-icons';

interface ServicesPageProps {
  t: <K extends keyof LangData>(key: K) => LangData[K];
  theme: 'light' | 'dark' | string;
  lang: LangCode;
  /** Якщо true — сторінка використовується у FullPageSlider */
  compact?: boolean;
}

interface ServiceItem {
  id: string;
  icon: IconType;
  title: Record<string, string>;
  description: Record<string, string>;
}

const ServicesPage: FC<ServicesPageProps> = ({ t, lang, compact = false }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleServices = useMemo(
    () => (showAll ? services : services.slice(0, 4)),
    [showAll]
  );

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
    <main className={`${styles.page} ${!compact ? 'full' : ''}`}>
      {!compact && (
        <section className={styles.banner}>
          <h1 className={styles.title}>{t('servicesTitle') as string}</h1>
        </section>
      )}

      <section className={styles.grid}>
        {visibleServices.map(({ id, icon: Icon, title }) => {
          const isFocused = focusedId === id;
          return (
            <div
              key={id}
              id={id}
              className={`${styles.card} ${isFocused ? styles.focusZoom : ''}`}
              tabIndex={-1}
              role="button"
              aria-label={`${getTranslation(title, lang)} card`}
              onClick={() => handleCardClick(id)}
            >
              {Icon && <Icon className={styles.icon} />}
              <h2 className={styles.cardTitle}>{getTranslation(title, lang)}</h2>
              <button
                className={styles.ctaButton}
                onClick={e => {
                  e.stopPropagation();
                  setSelectedServiceId(id);
                }}
              >
                {t('servicesButton') as string}
              </button>
            </div>
          );
        })}
      </section>

      {/* Кнопка "Показати більше" — лише для десктопу */}
      {!compact && services.length > 8 && (
        <div className={styles.ctaForm}>
          <button
            className={styles.ctaButton}
            onClick={() => setShowAll(prev => !prev)}
          >
            {showAll ? (t('showLessButton') as string) : (t('servicesButton') as string)}
          </button>
        </div>
      )}

      {/* CTA форма лише на звичайній сторінці */}
      {!compact && (
        <section className={styles.ctaForm}>
          <h3>{t('servicesFormTitle') as string}</h3>
          <form className={styles.form}>
            <input
              type="email"
              placeholder={t('servicesFormPlaceholder') as string}
              className={styles.input}
              aria-label={t('servicesFormPlaceholder') as string}
            />
            <button type="submit" className={styles.ctaButton}>
              {t('servicesFormButton') as string}
            </button>
          </form>
        </section>
      )}

      {selectedService && (
        <ServiceModal service={selectedService} lang={lang} onClose={closeModal} />
      )}
    </main>
  );
};

export default ServicesPage;
