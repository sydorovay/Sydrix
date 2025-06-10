import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { BenefitItem, TFunction } from '@/types/langTypes';
import styles from './BenefitsSection.module.css';

export interface BenefitsProps {
  benefits: BenefitItem[];
  title: string;
  buttonText: string;
  theme: 'light' | 'dark';
  t: TFunction;
}

const Benefits: React.FC<BenefitsProps> = ({
  benefits,
  title,
  buttonText,
  theme,
  t,
}) => {
  const navigate = useNavigate();

  const previewBenefits = benefits.slice(0, 5);

  const handleNavigate = (benefitId?: string) => {
    if (benefitId) {
      navigate(`/services#${benefitId}`);
    } else {
      navigate('/services');
    }
  };

  return (
    <section
      className={`${styles.benefitsSection} ${styles[theme]}`}
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
        aria-label={buttonText}
        type="button"
      >
        {t(buttonText)}
      </button>
    </section>
  );
};

export default Benefits;
