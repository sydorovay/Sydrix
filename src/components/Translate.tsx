// src/components/Translate.tsx
import React from 'react';
import { useLanguageContext } from '@/context/LanguageProvider';
import type { LangData } from '@/types/langTypes';

interface TranslateProps {
  id: keyof LangData;
  className?: string;
}

/**
 * Компонент для перекладу тексту за ключем id з LangData.
 * Підтримує рядки, масиви рядків або об'єкт з top/bottom (логотип, слоган тощо).
 */
export function Translate({ id, className }: TranslateProps) {
  const { t } = useLanguageContext();
  const value = t(id);

  if (!value) return <>{`[${String(id)}]`}</>;

  if (typeof value === 'string') return <span className={className}>{value}</span>;

  if (Array.isArray(value)) {
    return (
      <div className={className}>
        {value.map((item, i) => (
          <p key={i}>{typeof item === 'string' ? item : JSON.stringify(item)}</p>
        ))}
      </div>
    );
  }

  if (typeof value === 'object' && 'top' in value && 'bottom' in value) {
    return (
      <div className={className}>
        <p>{value.top}</p>
        <p>{value.bottom}</p>
      </div>
    );
  }

  return null;
}
