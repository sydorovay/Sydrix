import React from 'react';
import { LangCode, LangData } from '@/types/langTypes';
import styles from './SydrixLogo.module.css';

type TranslateFn = <K extends keyof LangData>(key: K) => LangData[K];

interface LogoProps {
  t: TranslateFn;
  language: LangCode;
}

const SydrixLogo: React.FC<LogoProps> = ({ t, language }) => {
  const { top, bottom } = t('logoTaglines');

  return (
    <div
      className={styles.logo}
      role="img"
      aria-label={`SYDRIX logo, language ${language.toUpperCase()}`}
      tabIndex={-1}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 160"
        className={styles.svgLogo}
        aria-hidden="true"
        focusable="false"
        style={{
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" className={styles.stop1} />
            <stop offset="50%" className={styles.stop2} />
            <stop offset="100%" className={styles.stop3} />
          </linearGradient>
        </defs>

        {/* Верхній слоган */}
        <text
          x="50%"
          y="35%"
          className={styles.tagline}
          fill="url(#grad)"
        >
          {top}
        </text>

        {/* Основний напис SYDRIX */}
        <text
          x="50%"
          y="60%"
          className={styles.brand}
          fill="url(#grad)"
          style={{ filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.3))' }}
        >
          <tspan>S</tspan>
          <tspan className={styles.mid}>YDRI</tspan>
          <tspan>X</tspan>
        </text>

        {/* Нижній слоган */}
        <text
          x="50%"
          y="85%"
          className={styles.tagline}
          fill="url(#grad)"
        >
          {bottom}
        </text>
      </svg>
    </div>
  );
};

export default SydrixLogo;
