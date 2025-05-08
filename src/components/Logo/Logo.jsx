import { useState } from 'react';
import styles from './Logo.module.css';

const languageToFile = {
  gb: '/logo-en.svg',
  ua: '/logo-uk.svg',
  de: '/logo-de.svg',
  pl: '/logo-pl.svg',
  it: '/logo-it.svg',
};

export default function Logo({ lang = 'gb', className = '' }) {
const logoSrc = languageToFile[lang] || languageToFile.gb;

  const [isToggling, setIsToggling] = useState(false);

  const handleLogoClick = () => {
    setIsToggling(true);
    setTimeout(() => setIsToggling(false), 400); // тривалість анімації

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
