import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { BenefitItem, LangData, TFunction } from '@/types/langTypes';
import { Translate } from '@/components/Translate';
import styles from './BenefitsSection.module.css';

export interface BenefitsProps {
  t: TFunction;
  benefits: BenefitItem[];
  title: keyof LangData;
  showAllButton: keyof LangData;
  theme: 'light' | 'dark';
}

const BenefitsSection: React.FC<BenefitsProps> = ({
  benefits,
  title,
  showAllButton,
  theme,
}) => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(5);

  // Логіка визначення кількості елементів залежно від ширини екрана
  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setVisibleCount(3); // Десктоп
      } else if (width >= 768) {
        setVisibleCount(4); // Планшет (перелом)
      } else {
        setVisibleCount(5); // Мобільні
      }
    };

    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  const previewBenefits = Array.isArray(benefits) ? benefits.slice(0, visibleCount) : [];

  const translateValue = useCallback((value: any): string => {
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) return value.join(' ');
    if (value && typeof value === 'object') {
      if ('top' in value && 'bottom' in value) return `${value.top} ${value.bottom}`;
      if ('label' in value && 'value' in value) return `${value.label}: ${value.value}`;
    }
    return '';
  }, []);

  const handleNavigate = (benefitId?: string) => {
    navigate(benefitId ? `/services#${benefitId}` : '/services');
  };

  return (
    <section
      className={styles.benefitsSection}
      data-theme={theme}
      aria-labelledby="benefits-title"
    >
      <div className={styles.contentWrapper}>
        <h2 id="benefits-title" className={styles.sectionTitle}>
          <Translate id={title} />
        </h2>

        <div className={styles.benefitsList}>
          {previewBenefits.map((benefit) => {
            const { id, icon: Icon, title: benefitTitle } = benefit;
            const translatedTitle = translateValue(benefitTitle);

            return (
              <div
                key={id}
                className={styles.benefitItem}
                tabIndex={0}
                role="button"
                onClick={() => handleNavigate(id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleNavigate(id);
                  }
                }}
                aria-label={translatedTitle}
              >
                <div className={styles.iconWrapper}>
                  {Icon && <Icon className={styles.icon} aria-hidden="true" />}
                </div>
                <h3 className={styles.benefitTitle}>{translatedTitle}</h3>
              </div>
            );
          })}
        </div>

        <div className={styles.divider} aria-hidden="true" />

        <button
          className={`${styles.button} ${styles.gradientButton}`}
          onClick={() => handleNavigate()}
          type="button"
        >
          <Translate id={showAllButton} />
        </button>
      </div>
    </section>
  );
};

export default BenefitsSection;