import React from 'react';
import { useLanguage } from '@/context/useLanguage';
import styles from './BenefitsSection.module.css';

export default function BenefitsSection() {
  const { t } = useLanguage();

  return (
    <section className={styles.benefitsSection}>
      <h2 className={styles.title}>{t.benefitsTitle}</h2>
      <ul className={styles.benefitsList}>
        {t.benefits?.map((item, index) => {
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
    </section>
  );
}
