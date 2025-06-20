import React from 'react';
import { useLanguageContext } from '@/context/LanguageProvider';
import type { LangData } from '@/types/langTypes';

type TranslateProps = {
  id: keyof LangData;
  className?: string;
};

export default function Translate({ id, className }: TranslateProps) {
  const { t } = useLanguageContext();
  const value = t(id);

  if (value === undefined || value === null) return <>{`[${String(id)}]`}</>;

  if (typeof value === 'string') return <span className={className}>{value}</span>;

  if (Array.isArray(value)) {
    return (
      <div className={className}>
        {value.map((item, i) => (
          <p key={i}>
            {typeof item === 'string'
              ? item
              : 'label' in item && 'value' in item
                ? `${item.label}: ${item.value}`
                : JSON.stringify(item)}
          </p>
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
