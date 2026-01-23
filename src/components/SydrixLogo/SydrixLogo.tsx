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
    <div className={styles.logoContainer} role="img" aria-label="SYDRIX Logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 180"
        className={styles.svgLogo}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="syncLogoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" className={styles.stop1} />
            <stop offset="50%" className={styles.stop2} />
            <stop offset="100%" className={styles.stop3} />
          </linearGradient>
        </defs>

        {/* Top Tagline */}
        <text x="50%" y="35" textAnchor="middle" className={styles.tagline} fill="url(#syncLogoGrad)">
          {taglines.top}
        </text>

        {/* Brand Name - Центрований та збільшений */}
        <text x="50%" y="95" textAnchor="middle" dominantBaseline="middle" className={styles.brand} fill="url(#syncLogoGrad)">
          <tspan className={styles.sideLetter}>S</tspan>
          <tspan className={styles.mid}>YDRI</tspan>
          <tspan className={styles.sideLetter}>X</tspan>
        </text>

        {/* Bottom Tagline */}
        <text x="50%" y="155" textAnchor="middle" className={styles.tagline} fill="url(#syncLogoGrad)">
          {taglines.bottom}
        </text>
      </svg>
    </div>
  );
};

export default SydrixLogo;