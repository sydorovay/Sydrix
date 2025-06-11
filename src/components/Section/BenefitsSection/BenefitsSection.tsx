import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { BenefitItem, TFunction } from '@/types/langTypes';
import type { LangData } from '@/types/langTypes';
import styles from './BenefitsSection.module.css';

export interface BenefitsProps {
  benefits: BenefitItem[];
  title: keyof LangData;
  showAllButton: keyof LangData;
  theme: 'light' | 'dark';
  t: TFunction;
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

  const handleNavigate = (benefitId?: string) => {
    navigate(benefitId ? `/services#${benefitId}` : '/services');
  };

  const renderTranslation = (
    value: string | BenefitItem[] | string[] | { label: string; value: string }[] | React.ReactNode[] | undefined
  ): React.ReactNode => {
    if (!value) return null;
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) {
      // If it's an array of strings or React nodes, render as before
      if (value.every(item => typeof item === 'string' || React.isValidElement(item))) {
        return value.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ));
      }
      // If it's an array of objects with label/value or BenefitItem, render their labels/titles
      if (value.length > 0 && typeof value[0] === 'object' && value[0] !== null) {
        // Handle { label, value }[]
        if ('label' in value[0]) {
          return (value as { label: string; value: string }[]).map((item, idx) => (
            <React.Fragment key={idx}>
              {item.label}
              <br />
            </React.Fragment>
          ));
        }
        // Handle BenefitItem[]
        if ('title' in value[0]) {
          return (value as BenefitItem[]).map((item, idx) => (
            <React.Fragment key={idx}>
              {item.title}
              <br />
            </React.Fragment>
          ));
        }
      }
    }
    return null;
  };

  return (
    <section
      className={`${styles.benefitsSection} ${styles[theme]}`}
      aria-labelledby="benefits-title"
    >
      <h2 id="benefits-title" className={styles.sectionTitle}>
        {renderTranslation(t(title))}
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
        {renderTranslation(t(showAllButton))}
      </button>
    </section>
  );
};

export default BenefitsSection;
