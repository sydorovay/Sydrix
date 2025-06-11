import React, { useState } from 'react';
import type { PortfolioItem } from '@/types/portfolio';
import type { LangData } from '@/types/langTypes';
import PortfolioCard from './PortfolioCard';
import PortfolioModal from '@/components/PortfolioModal/PortfolioModal';
import styles from './PortfolioSection.module.css';

import type { TFunction } from '@/types/langTypes';

interface Props {
  t: TFunction;
  theme: 'light' | 'dark';
  portfolioItems: PortfolioItem[];
}

const PortfolioSection: React.FC<Props> = ({ t, theme, portfolioItems }) => {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  const open = (i: number) => {
    setIndex(i);
    setShow(true);
  };

  const sectionId = 'portfolio-section';

  return (
    <section
      id={sectionId}
      className={`${styles.section} ${styles[theme]}`}
      aria-labelledby={`${sectionId}-title`}
      aria-describedby={`${sectionId}-desc`}
    >
      <h2 id={`${sectionId}-title`} className={styles.title}>
        {t('portfolioTitle')}
      </h2>
      <p id={`${sectionId}-desc`} className={styles.description}>
        {t('portfolioText')}
      </p>

      <div className={styles.grid}>
        {portfolioItems.map((project, i) => (
          <PortfolioCard
            key={project.id}
            project={project}
            onClick={() => open(i)}
          />
        ))}
      </div>

      {show && (
        <PortfolioModal
          projects={portfolioItems}
          currentIndex={index}
          onClose={() => setShow(false)}
          onPrev={() => setIndex(i => (i - 1 + portfolioItems.length) % portfolioItems.length)}
          onNext={() => setIndex(i => (i + 1) % portfolioItems.length)}
          t={t}
          theme={theme}
        />
      )}
    </section>
  );
};

export default PortfolioSection;
