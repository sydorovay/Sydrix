import React, { useState } from 'react';
import styles from './BenefitsSection.module.css';

export interface BenefitItem {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface BenefitsSectionProps {
  title: string;
  benefits: BenefitItem[];
  buttonText: string;
  onButtonClick: () => void;
  theme: 'light' | 'dark';
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  title,
  benefits,
  buttonText,
  onButtonClick,
  theme,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleBenefits = isExpanded ? benefits : benefits.slice(0, 3);

  const toggleExpanded = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <section className={`${styles.benefitsSection} ${theme}`}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.benefitsList}>
        {visibleBenefits.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={index} className={styles.benefitItem}>
              {Icon ? <Icon className={styles.icon} /> : null}
              <h3 className={styles.benefitTitle}>{item.title}</h3>
              <p className={styles.benefitDescription}>{item.description}</p>
            </li>
          );
        })}
      </ul>

      {benefits.length > 3 && (
        <button className={styles.toggleButton} onClick={toggleExpanded}>
          {isExpanded ? '▲' : '▼'}
        </button>
      )}

      <button className={styles.contactButton} onClick={onButtonClick}>
        {buttonText}
      </button>
    </section>
  );
};

export default BenefitsSection;
