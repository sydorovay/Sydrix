import React from 'react';
import { LangCode, LangData } from '@/types/langTypes';
import styles from './SydrixLogo.module.css';

// Тип функції перекладу
type TranslateFn = <K extends keyof LangData>(key: K) => LangData[K];

interface LogoProps {
  t: TranslateFn;
  language: LangCode;
  onLanguageChange: (lang: LangCode) => void;
}

const SydrixLogo: React.FC<LogoProps> = ({ t, language, onLanguageChange }) => {
  const languages = Object.values(LangCode);

  const handleLanguageSwitch = () => {
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    onLanguageChange(languages[nextIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleLanguageSwitch();
    }
  };

  const { top, bottom } = t('logoTaglines');

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleLanguageSwitch}
      onKeyDown={handleKeyDown}
      aria-label={`Change language from ${language.toUpperCase()}`}
      className={styles.logo}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 160"
        className={styles.svgLogo}
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter id="embossShadow" width="200%" height="200%" x="-50%" y="-50%">
            <feDropShadow dx="2" dy="2" floodColor="rgba(0,0,0,0.3)" stdDeviation="2" />
            <feGaussianBlur in="SourceAlpha" result="blur" stdDeviation="1" />
            <feSpecularLighting
              in="blur"
              lightingColor="#fff"
              result="specOut"
              specularConstant=".6"
              specularExponent="12"
              surfaceScale="4"
            >
              <fePointLight x="-80" y="-80" z="200" />
            </feSpecularLighting>
            <feComposite in="specOut" in2="SourceAlpha" operator="in" result="lit" />
            <feMerge>
              <feMergeNode in="ds" />
              <feMergeNode in="lit" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="textShadow" width="140%" height="140%" x="-20%" y="-20%">
            <feDropShadow dx="1" dy="1" floodColor="rgba(0,0,0,0.2)" stdDeviation="1" />
          </filter>
          <linearGradient id="grad" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#0097a7">
              <animate attributeName="stop-color" dur="8s" repeatCount="indefinite" values="#0097a7;#00bcd4;#1de9b6;#00897b;#00796b;#0097a7" />
            </stop>
            <stop offset="50%" stopColor="#1de9b6">
              <animate attributeName="stop-color" dur="8s" repeatCount="indefinite" values="#1de9b6;#00897b;#00796b;#0097a7;#00bcd4;#1de9b6" />
            </stop>
            <stop offset="100%" stopColor="#00796b">
              <animate attributeName="stop-color" dur="8s" repeatCount="indefinite" values="#00796b;#0097a7;#00bcd4;#1de9b6;#00897b;#00796b" />
            </stop>
          </linearGradient>
        </defs>

        <style>
          {`
            text {
              font-family: Verdana, sans-serif;
              fill: url(#grad);
              text-anchor: middle;
            }
            .tagline {
              font-size: 1.1rem;
              filter: url(#textShadow);
            }
            .brand {
              font-size: 3rem;
              filter: url(#embossShadow);
              dominant-baseline: middle;
            }
            .brand tspan:first-child,
            .brand tspan:last-child {
              font-size: 7rem;
            }
            .mid {
              font-size: 4rem;
              fill-opacity: 1;
            }
          `}
        </style>

        <text x="50%" y="35%" className="tagline">{top}</text>
        <text x="42.5%" y="60%" className="brand">
          <tspan dx=".2em">S</tspan>
          <tspan className="mid" dx="-.1em" dy="-.01em">YDRI</tspan>
          <tspan dx="-.1em">X</tspan>
        </text>
        <text x="50%" y="85%" className="tagline">{bottom}</text>
      </svg>
    </div>
  );
};

export default SydrixLogo;
