import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './BenefitsModal.module.css';
import { FaTimes } from 'react-icons/fa';
import type { BenefitItem } from '@/types/langTypes';

interface BenefitModalProps {
  benefits: BenefitItem[];
  selectedBenefit: BenefitItem | null;
  onSelectBenefit: (benefit: BenefitItem | null) => void;
  onClose: () => void;
  theme: 'light' | 'dark';
}

const modalRoot = document.getElementById('modal-root')!;

function useFocusTrap(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    function handleFocus(event: FocusEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        event.preventDefault();
        ref.current.focus();
      }
    }
    document.addEventListener('focusin', handleFocus);
    return () => {
      document.removeEventListener('focusin', handleFocus);
    };
  }, [ref]);
}

const BenefitModal: React.FC<BenefitModalProps> = ({
  benefits,
  selectedBenefit,
  onSelectBenefit,
  onClose,
  theme,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useFocusTrap(modalRef);

  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onEsc);
    document.body.style.overflow = 'hidden';
    modalRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div
      className={`${styles.overlay} ${theme === 'dark' ? styles.dark : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`${styles.modal} ${theme === 'dark' ? styles.dark : ''}`}
        tabIndex={-1}
        ref={modalRef}
      >
        <button
          className={styles.closeButton}
          aria-label="Закрити"
          onClick={onClose}
          type="button"
        >
          <FaTimes size={20} />
        </button>

        <div className={styles.benefitsListModal}>
          <ul className={styles.benefitsList}>
            {benefits.map(({ id, icon: Icon, title }) => (
              <li
                key={id}
                className={`${styles.benefitItem} ${selectedBenefit?.id === id ? styles.selected : ''}`}
                tabIndex={0}
                role="button"
                onClick={() => onSelectBenefit(benefits.find(b => b.id === id) || null)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectBenefit(benefits.find(b => b.id === id) || null);
                  }
                }}
                aria-pressed={selectedBenefit?.id === id}
              >
                {Icon && <Icon className={styles.icon} aria-hidden="true" />}
                <span>{title}</span>
              </li>
            ))}
          </ul>

          {selectedBenefit && (
            <div className={styles.benefitDetails}>
              {selectedBenefit.icon && typeof selectedBenefit.icon === 'function' && (
                <selectedBenefit.icon className={styles.iconLarge} aria-hidden="true" />
              )}
              <h2 id="modal-title" className={styles.title}>
                {selectedBenefit.title}
              </h2>
              <p className={styles.description}>{selectedBenefit.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default BenefitModal;
