import { useMemo } from 'react';

const languageToFile = {
  gb: '/logo-en.svg',
  ua: '/logo-uk.svg',
  de: '/logo-de.svg',
  pl: '/logo-pl.svg',
};

const Logo = ({ lang = 'gb', className = '' }) => {
  const logoSrc = useMemo(() => languageToFile[lang] || languageToFile.gb, [lang]);

  return (
    <img
      src={logoSrc}
      alt="Sydrix Logo"
      className={className}
      width={400}
      height={160}
      loading="lazy"
    />
  );
};

export default Logo;