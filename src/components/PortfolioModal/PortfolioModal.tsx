import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { PortfolioItem } from '@/types/portfolio';
import { LangData } from '@/types/langTypes';
import styles from './PortfolioModal.module.css';

interface Props {
  projects: PortfolioItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  t: (key: keyof LangData) => any;
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
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    modalRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onPrev, onNext]);

  if (!project) return null;

  const sT = (key: keyof LangData): string => {
    const val = t(key);
    return typeof val === 'string' ? val : '';
  };

  return (
    <div
      className={`${styles.overlay} ${styles[theme]}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`${styles.modal} ${styles[theme]}`}
        ref={modalRef}
        tabIndex={0}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Close"
        >
          <X size={28} />
        </button>

        <div className={styles.imageContainer}>
          <img
            src={project.imgSrc}
            alt={project.altText || project.name}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <h3 className={styles.name}>{project.name}</h3>
          <p className={styles.description}>{project.description}</p>

          <div className={styles.controls}>
            <button className={styles.nav} onClick={onPrev}>
              <ChevronLeft size={24} />
            </button>
            <button className={styles.nav} onClick={onNext}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;