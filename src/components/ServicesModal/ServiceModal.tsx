// src/pages/services/ServiceModal.tsx
import React, { FC, useEffect, useRef } from 'react';
import styles from './ServiceModal.module.css';
import { LangCode } from '@/types/langTypes';
import getTranslation from '@/utils/getTranslation';

interface ServiceModalProps {
  service: {
    id: string;
    icon: React.ElementType;
    title: Record<string, string>;
    description: Record<string, string>;
    details?: Record<string, string>;
  };
  lang: LangCode;
  onClose: () => void;
  theme?: 'light' | 'dark';
}

const ServiceModal: FC<ServiceModalProps> = ({ service, lang, onClose, theme = 'light' }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Закриття по Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Фокус на модалку при відкритті
  useEffect(() => {
    const firstFocusable = modalRef.current?.querySelector<HTMLElement>('button, [tabindex="0"]');
    firstFocusable?.focus();
  }, []);

  // Заборона скролу при відкритій модалці
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const { icon: Icon, title, description, details } = service;

  return (
    <div
      className={`${styles.overlay} ${styles[theme]}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${service.id}-title`}
      onClick={onClose}
    >
      <div
        className={styles.modal}
        onClick={e => e.stopPropagation()}
        ref={modalRef}
        tabIndex={-1}
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        {Icon && <Icon className={styles.modalIcon} />}

        <h2 id={`${service.id}-title`} className={styles.modalTitle}>
          {getTranslation(title, lang)}
        </h2>

        <p className={styles.modalDesc}>{getTranslation(description, lang)}</p>

        {details && (
          <div
            className={styles.modalDetails}
            dangerouslySetInnerHTML={{
              __html: getTranslation(details, lang).replace(/\n/g, '<br/>'),
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ServiceModal;
