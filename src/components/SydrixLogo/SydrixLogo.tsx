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
        // xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 160"
        className={styles.svgLogo}
        aria-hidden="true"
        focusable="false"
        style={{ pointerEvents: 'none' }} // Заборона на взаємодію
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" className={styles.stop1} />
            <stop offset="50%" className={styles.stop2} />
            <stop offset="100%" className={styles.stop3} />
          </linearGradient>

          <filter id="embossShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2" dy="2" floodColor="rgba(0,0,0,0.3)" stdDeviation="2" />
            <feGaussianBlur in="SourceAlpha" result="blur" stdDeviation="1" />
            <feSpecularLighting in="blur" lightingColor="#fff" result="specOut"
              specularConstant=".6" specularExponent="12" surfaceScale="4">
              <fePointLight x="-80" y="-80" z="200" />
            </feSpecularLighting>
            <feComposite in="specOut" in2="SourceAlpha" operator="in" result="lit" />
            <feMerge>
              <feMergeNode in="lit" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <style>{`
          text {
            font-family: var(--logo-font);
            text-anchor: middle;
            dominant-baseline: middle;
            filter: url(#embossShadow);
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

        {/* Top tagline */}
        <text x="50%" y="35%" className="tagline" fill="url(#grad)">
          {top}
        </text>

        {/* Main SYDRIX word */}
        <text x="50%" y="60%" className="brand" fill="url(#grad)">
          <tspan>S</tspan>
          <tspan className="mid">YDRI</tspan>
          <tspan>X</tspan>
        </text>

        {/* Bottom tagline */}
        <text x="50%" y="85%" className="tagline" fill="url(#grad)">
          {bottom}
        </text>
      </svg>
    </div>
  );
};

export default SydrixLogo;
