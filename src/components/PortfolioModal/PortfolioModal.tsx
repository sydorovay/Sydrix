// src/components/PortfolioModal/PortfolioModal.tsx
import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { PortfolioItem } from '@/types/portfolio';
import type { TFunction } from '@/types/langTypes';
import styles from './PortfolioModal.module.css';

interface Props {
  projects: PortfolioItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  t: TFunction;
  theme: 'light' | 'dark';
}

const PortfolioModal: React.FC<Props> = ({
  projects,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  t,
  theme,
}) => {
  const project = projects[currentIndex];
  const ref = useRef<HTMLDivElement>(null);

  if (!project) {
    return null;
  }

  // Фокус при відкритті модалки, блокування скролу body
  useEffect(() => {
    ref.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Клавіші Escape, Left, Right для навігації
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onPrev, onNext]);

  // Безпечне приведення перекладу до рядка для aria-label
  const safeAriaLabel = (key: string) => {
    const val = t(key as any);
    return typeof val === 'string' ? val : JSON.stringify(val);
  };

  return (
    <div
      className={`${styles.overlay} ${styles[theme]}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-modal-title"
      tabIndex={-1}
    >
      <div
        className={`${styles.modal} ${styles[theme]}`}
        ref={ref}
        tabIndex={0}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close modal"
          className={styles.close}
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <img
          src={project.imgSrc}
          alt={project.altText || project.name}
          className={styles.image}
        />
        <h3 id="portfolio-modal-title" className={styles.name}>
          {project.name}
        </h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.controls}>
          <button
            aria-label={safeAriaLabel('modalPrevLabel')}
            className={styles.nav}
            onClick={onPrev}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            aria-label={safeAriaLabel('modalNextLabel')}
            className={styles.nav}
            onClick={onNext}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
