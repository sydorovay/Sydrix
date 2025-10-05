import { FC, useState, useEffect } from 'react';
import styles from './ServicesSectionForSlider.module.css';
import services from '@/translations/services/services';
import { LangData, LangCode } from '@/types/langTypes';
import getTranslation from '@/utils/getTranslation';
import ServiceModal from '@/components/ServicesModal/ServiceModal';
import { IconType } from 'react-icons';
import useIsDesktop from '@/hooks/useIsDesktop';

interface ServicesSectionForSliderProps {
  t: <K extends keyof LangData>(key: K) => LangData[K];
  lang: LangCode;
  theme: 'light' | 'dark';
}

interface ServiceItem {
  id: string;
  icon: IconType;
  title: Record<string, string>;
}

const ServicesSectionForSlider: FC<ServicesSectionForSliderProps> = ({ t, lang, theme }) => {
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const isDesktop = useIsDesktop(1024);

  if (!isDesktop) return null; // показуємо тільки на десктопі

  const handleCardClick = (id: string) => {
    setFocusedId(id);
    setSelectedServiceId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element.focus();
    }
  };

  const closeModal = () => setSelectedServiceId(null);

  const selectedService = services.find(s => s.id === selectedServiceId);

  return (
    <section
      className={`${styles.gridSection} ${theme === 'dark' ? styles.dark : ''}`}
      aria-labelledby="services-heading"
    >
      <div className={styles.grid}>
        {services.map(({ id, icon: Icon, title }) => {
          const isFocused = focusedId === id;
          return (
            <div
              key={id}
              id={id}
              className={`${styles.card} ${isFocused ? styles.focusZoom : ''}`}
              tabIndex={0}
              onClick={() => handleCardClick(id)}
              onFocus={() => setFocusedId(id)}
              onBlur={() => setFocusedId(null)}
            >
              {Icon && <Icon className={styles.icon} aria-hidden="true" />}
              <h2 className={styles.cardTitle}>
                {title ? getTranslation(title, lang) : ''}
              </h2>
              <button
                className={styles.ctaButton}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedServiceId(id);
                }}
              >
                {t('servicesButton')}
              </button>
            </div>
          );
        })}
      </div>

      {selectedService && (
        <ServiceModal service={selectedService} lang={lang} onClose={closeModal} />
      )}
    </section>
  );
};

export default ServicesSectionForSlider;
