import React, { FC, useState, useMemo } from 'react';
import styles from './ServicesSectionForSlider.module.css';
import services from '@/translations/services/services';
import { LangData, LangCode } from '@/types/langTypes';
import getTranslation from '@/utils/getTranslation';
import ServiceModal from '@/components/ServicesModal/ServiceModal';
import { IconType } from 'react-icons';

interface ServicesSectionForSliderProps {
  t: <K extends keyof LangData>(key: K) => LangData[K];
  theme: 'light' | 'dark' | string;
  lang: LangCode;
}

const ServicesSectionForSlider: FC<ServicesSectionForSliderProps> = ({ t, lang, theme }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleServices = useMemo(
    () => (showAll ? services : services.slice(0, 8)),
    [showAll]
  );

  const selectedService = services.find(s => s.id === selectedServiceId);

  // helper function для безпечного виклику t для вузьких ключів
  const tButton = (key: 'showMoreButton' | 'showLessButton' | 'servicesButton' | 'servicesTitle') =>
    t(key as keyof LangData) as string;

  return (
    <section
      className={`${styles.section} ${theme === 'light' ? styles.light : styles.dark}`}
      aria-labelledby="services-heading"
    >
      <h2 id="services-heading" className={styles.heading}>
        {tButton('servicesTitle')}
      </h2>

      <div className={styles.grid}>
        {visibleServices.map(({ id, icon: Icon, title }) => (
          <div
            key={id}
            className={styles.card}
            role="button"
            tabIndex={0}
            onClick={() => setSelectedServiceId(id)}
            aria-label={`${getTranslation(title, lang)} card`}
          >
            {Icon && <Icon className={styles.icon} />}
            <h3 className={styles.cardTitle}>{getTranslation(title, lang)}</h3>
            <button
              className={styles.ctaButton}
              onClick={e => {
                e.stopPropagation();
                setSelectedServiceId(id);
              }}
            >
              {tButton('servicesButton')}
            </button>
          </div>
        ))}
      </div>

      {services.length > 8 && (
        <div className={styles.showMoreWrapper}>
          <button
            className={styles.showMoreButton}
            onClick={() => setShowAll(prev => !prev)}
          >
            {showAll ? tButton('showLessButton') : tButton('showMoreButton')}
          </button>
        </div>
      )}

      {selectedService && (
        <ServiceModal
          service={selectedService}
          lang={lang}
          onClose={() => setSelectedServiceId(null)}
          theme={theme as 'light' | 'dark'}
        />
      )}
    </section>
  );
};

export default ServicesSectionForSlider;
