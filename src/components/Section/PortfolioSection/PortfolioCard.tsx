// src/components/Section/PortfolioSection/PortfolioCard.tsx
import React from 'react';
import type { PortfolioItem } from '@/types/portfolio';
import styles from './PortfolioCard.module.css';

interface Props {
  project: PortfolioItem;
  onClick: () => void;
}

const PortfolioCard: React.FC<Props> = ({ project, onClick }) => (
  <article className={styles.card} tabIndex={0} onClick={onClick} onKeyPress={(e) => e.key === 'Enter' && onClick()} aria-label={project.name}>
    <img
      src={project.imgSrc}
      alt={project.altText}
      className={styles.image}
      loading="lazy"
    />
    <h3 className={styles.name}>{project.name}</h3>
  </article>
);

export default PortfolioCard;
