import { useState } from 'react';
import { useLanguage } from '@/context/useLanguage';
import styles from './BenefitsSection.module.css';

export default function BenefitsSection() {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(prev => !prev);

  const visibleBenefits = isExpanded ? t.benefits : t.benefits?.slice(0, 2);

  return (
    <section className={styles.benefitsSection}>
      <h2 className={styles.title}>{t.benefitsTitle}</h2>
      <ul className={styles.benefitsList}>
        {visibleBenefits.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={index} className={styles.benefitItem}>
              {Icon && <Icon className={styles.icon} />}
              <h3 className={styles.benefitTitle}>{item.title}</h3>
              <p className={styles.benefitDescription}>{item.description}</p>
            </li>
          );
        })}
      </ul>
      {t.benefits.length > 2 && (
        <button className={styles.toggleButton} onClick={toggleExpanded}>
          {isExpanded ? t.hideAllButton : t.showAllButton}
        </button>
      )}
    </section>
  );
}
