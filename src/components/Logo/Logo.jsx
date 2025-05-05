import { useMemo } from 'react';
import styles from './Logo.module.css';

const languageToFile = {
  gb: '/logo-en.svg',
  ua: '/logo-uk.svg',
  de: '/logo-de.svg',
  pl: '/logo-pl.svg',
};

const Logo = ({ lang = 'gb', className = '' }) => {
  const logoSrc = useMemo(() => languageToFile[lang] || languageToFile.gb, [lang]);

  return (
    <div className={`${styles.logoWrapper} ${className}`}>
      <span className={styles.pixelS}>S</span>
      <img
        src={logoSrc}
        alt="Sydrix Logo"
        className={styles.logoImg}
        width={200}
        height={80}
        loading="lazy"
      />
    </div>
  );
};

export default Logo;
