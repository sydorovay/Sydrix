import React, { useState } from 'react';
import type { BenefitItem } from '@/types/langTypes';
import BenefitModal from './BenefitsModal/BenefitsModal';
import styles from './BenefitsSection.module.css';

interface BenefitsProps {
  benefits: BenefitItem[];
  theme?: 'light' | 'dark';
}

const Benefits: React.FC<BenefitsProps> = ({ benefits, theme = 'light' }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBenefit, setSelectedBenefit] = useState<BenefitItem | null>(null);

  const previewBenefits = benefits.slice(0, 5);

  const openModalWithBenefit = (id: string) => {
    const benefit = benefits.find(b => b.id === id) || null;
    setSelectedBenefit(benefit);
    setModalOpen(true);
  };

  return (
    <section className={styles.benefitsSection} aria-labelledby="benefits-title">
      <h2 id="benefits-title" className={styles.title}>
        Наші переваги
      </h2>
      <ul className={styles.benefitsList}>
        {previewBenefits.map(({ id, icon: Icon, title }) => (
          <li
            key={id}
            className={styles.benefitItem}
            tabIndex={0}
            role="button"
            onClick={() => openModalWithBenefit(id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModalWithBenefit(id);
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
        className={styles.showAllButton}
        onClick={() => setModalOpen(true)}
        aria-haspopup="dialog"
      >
        Показати всі
      </button>

      {modalOpen && (
        <BenefitModal
          benefits={benefits}
          selectedBenefit={selectedBenefit}
          onSelectBenefit={setSelectedBenefit}
          onClose={() => {
            setModalOpen(false);
            setSelectedBenefit(null);
          }}
          theme={theme}
        />
      )}
    </section>
  );
};

export default Benefits;
