// src/components/Section/BenefitsSection/BenefitsSection.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { BenefitItem, LangData, TFunction } from '@/types/langTypes';
import styles from './BenefitsSection.module.css';
import { Translate } from '@/components/Translate';

export interface BenefitsProps {
  t: TFunction; // функція перекладу
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
  t,
}) => {
  const navigate = useNavigate();
  const previewBenefits = benefits.slice(0, 5);

  // Функція для безпечного отримання рядка для aria-label
  const translateString = (value: ReturnType<TFunction>): string => {
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) {
      return value
        .map(v =>
          typeof v === 'string'
            ? v
            : 'label' in v && 'value' in v
              ? `${v.label}: ${v.value}`
              : ''
        )
        .join(' ');
    }
    if (typeof value === 'object' && 'top' in value && 'bottom' in value) {
      return `${value.top} ${value.bottom}`;
    }
    return '';
  };

  const handleNavigate = (benefitId?: string) => {
    navigate(benefitId ? `/services#${benefitId}` : '/services');
  };

  return (
    <section
      className={`${styles.benefitsSection} ${theme === 'dark' ? styles.dark : ''}`}
      aria-labelledby="benefits-title"
    >
      <h2 id="benefits-title" className={styles.sectionTitle}>
        <Translate id={title} />
      </h2>

      <ul className={styles.benefitsList}>
        {previewBenefits.map(({ id, icon: Icon, title: benefitTitle }) => (
          <li
            key={id}
            className={styles.benefitItem}
            tabIndex={0}
            role="button"
            onClick={() => handleNavigate(id)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleNavigate(id);
              }
            }}
            aria-label={translateString(benefitTitle)}
          >
            {Icon && <Icon className={styles.icon} aria-hidden="true" />}
            <h3 className={styles.benefitTitle}>{translateString(benefitTitle)}</h3>
          </li>
        ))}
      </ul>

      <button
        className={`${styles.button} button`}
        onClick={() => handleNavigate()}
        aria-label={translateString(t(showAllButton))}
        type="button"
      >
        <Translate id={showAllButton} />
      </button>
    </section>
  );
};

export default BenefitsSection;
