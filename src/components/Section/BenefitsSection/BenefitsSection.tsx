import React, { useState } from 'react';
import styles from './BenefitsSection.module.css';

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
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

  // В нерозгорнутому стані — перші 5, в розгорнутому — всі
  const visibleBenefits = isExpanded ? benefits : benefits.slice(0, 5);

  const toggleExpanded = () => setIsExpanded(prev => !prev);

  return (
    <section className={`${styles.benefitsSection} ${styles[theme]}`}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.benefitsList}>
        {visibleBenefits.map(item => {
          const Icon = item.icon;
          return (
            <li key={item.id} className={styles.benefitItem}>
              <div className={styles.headerBox}>
                {Icon && <Icon className={styles.icon} />}
                <h3 className={styles.benefitTitle}>{item.title}</h3>
              </div>
              {isExpanded && (
                <p className={styles.benefitDescription}>{item.description}</p>
              )}
            </li>
          );
        })}
      </ul>

      {benefits.length > 5 && (
        <button
          className={styles.toggleButton}
          onClick={toggleExpanded}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Collapse benefits' : 'Expand benefits'}
        >
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
