import React from 'react';
import styles from './SydrixLogo.module.css';
import { LangCode, LangData } from '@/types/langTypes';

interface LogoProps {
  t: <K extends keyof LangData>(key: K) => any;
  language: LangCode;
}

const SydrixLogo: React.FC<LogoProps> = ({ t }) => {
  const taglines = t('logoTaglines') as { top: string; bottom: string };

  return (
    <div className={styles.logo} role="img" aria-label="SYDRIX Logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 140" /* Збільшена висота для ідеальних відступів */
        className={styles.svgLogo}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" className={styles.stop1} />
            <stop offset="50%" className={styles.stop2} />
            <stop offset="100%" className={styles.stop3} />
          </linearGradient>
        </defs>

        {/* Top Tagline - y=25 */}
        <text
          x="50%" y="25"
          textAnchor="middle"
          dominantBaseline="middle"
          className={styles.tagline}
          fill="url(#logoGrad)"
        >
          {taglines.top}
        </text>

        {/* Brand Name - y=70 (центр полотна 140) */}
        <text
          x="50%" y="70"
          textAnchor="middle"
          dominantBaseline="middle"
          className={styles.brand}
          fill="url(#logoGrad)"
        >
          <tspan className={styles.sideLetter}>S</tspan>
          <tspan className={styles.mid}>YDRI</tspan>
          <tspan className={styles.sideLetter}>X</tspan>
        </text>

        {/* Bottom Tagline - y=115 (рівновіддалено від центру) */}
        <text
          x="50%" y="115"
          textAnchor="middle"
          dominantBaseline="middle"
          className={styles.tagline}
          fill="url(#logoGrad)"
        >
          {taglines.bottom}
        </text>
      </svg>
    </div>
  );
};

export default SydrixLogo;