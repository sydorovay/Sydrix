import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguageContext } from '@/context/LanguageProvider';
import type { BenefitItem } from '@/types/langTypes';
import styles from './BenefitsSection.module.css';

export interface BenefitsProps {
  benefits: BenefitItem[];
  title: keyof ReturnType<typeof useLanguageContext>['t'];
  showAllButton: keyof ReturnType<typeof useLanguageContext>['t'];
  theme: 'light' | 'dark';
}

const BenefitsSection: React.FC<BenefitsProps> = ({
  benefits,
  title,
  showAllButton,
  theme,
}) => {
  const navigate = useNavigate();
  const { t } = useLanguageContext();
  const previewBenefits = benefits.slice(0, 5);

  const handleNavigate = (benefitId?: string) => {
    navigate(benefitId ? `/services#${benefitId}` : '/services');
  };

  return (
    <section
      className={`${styles.benefitsSection} ${theme === 'dark' ? styles.dark : ''}`}
      aria-labelledby="benefits-title"
    >
      <h2 id="benefits-title" className={styles.sectionTitle}>
        {t(title)}
      </h2>

      <ul className={styles.benefitsList}>
        {previewBenefits.map(({ id, icon: Icon, title }) => (
          <li
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
            aria-label={title}
          >
            {Icon && <Icon className={styles.icon} aria-hidden="true" />}
            <h3 className={styles.benefitTitle}>{title}</h3>
          </li>
        ))}
      </ul>

      <button
        onClick={() => handleNavigate()}
        className={styles.showAllButton}
        aria-label={t(showAllButton) as string}
        type="button"
      >
        {t(showAllButton)}
      </button>
    </section>
  );
};

export default BenefitsSection;
