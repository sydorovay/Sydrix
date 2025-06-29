// src/components/SydrixLogo.tsx
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
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 160"
        className={styles.svgLogo}
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" className={styles.stop1} />
            <stop offset="50%" className={styles.stop2} />
            <stop offset="100%" className={styles.stop3} />
          </linearGradient>
        </defs>

        <style>{`
          text {
            font-family: var(--logo-font);
            text-anchor: middle;
            dominant-baseline: middle;
            filter: url(#embossShadow);
            pointer-events: none; /* ✨ блокує клацання по тексту */
            user-select: none;
          }
          .tagline {
            font-size: var(--logo-size-small);
          }
          .brand {
            font-size: var(--logo-size-medium);
          }
          .brand tspan:first-child,
          .brand tspan:last-child {
            font-size: var(--logo-size-large);
          }
          .mid {
            font-size: var(--logo-size-mid);
            fill-opacity: 1;
          }
        `}</style>

        <text x="50%" y="35%" className="tagline" fill="url(#grad)">
          {top}
        </text>

        <text x="50%" y="60%" className="brand" fill="url(#grad)">
          <tspan>S</tspan>
          <tspan className="mid">YDRI</tspan>
          <tspan>X</tspan>
        </text>

        <text x="50%" y="85%" className="tagline" fill="url(#grad)">
          {bottom}
        </text>
      </svg>
    </div>
  );
};

export default SydrixLogo;
