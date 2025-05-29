import { useState } from 'react';
import styles from './Logo.module.css';

const languageToFile = {
  gb: '/logo-en.svg',
  ua: '/public/logo-uk.svg',
  de: '/logo-de.svg',
  pl: '/logo-pl.svg',
  it: '/logo-it.svg',
} as const; // <-- робимо об'єкт readonly з конкретними літералами

type LangCode = keyof typeof languageToFile; // 'gb' | 'ua' | 'de' | 'pl' | 'it'

interface LogoProps {
  lang?: LangCode;
  className?: string;
}

export default function Logo({ lang = 'de', className = '' }: LogoProps) {
  const logoSrc = languageToFile[lang] || languageToFile.de;

  const [isToggling, setIsToggling] = useState(false);

  const handleLogoClick = () => {
    setIsToggling(true);
    setTimeout(() => setIsToggling(false), 400);

    window.location.href = '/';
  };

  return (
    <div
      className={`${styles.logoWrapper} ${isToggling ? styles.toggling : ''} ${className}`}
      onClick={handleLogoClick}
      style={{ cursor: 'pointer' }}
    >
      <img
        src={logoSrc}
        alt={`Sydrix Logo (${lang.toUpperCase()})`}
        className={styles.logo}
        loading="lazy"
      />
    </div>
  );
}
