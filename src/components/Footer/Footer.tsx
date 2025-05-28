import { FC } from 'react';
import styles from './Footer.module.css';
import { LangData } from '@/types/langTypes';

interface FooterProps {
  t: <K extends keyof LangData>(key: K) => LangData[K];
  theme: 'light' | 'dark';
}

const Footer: FC<FooterProps> = ({ t, theme }) => {
  const footerContent = t('footer');
  const themeClass = theme === 'light' ? styles.light : styles.dark;

  return (
    <footer className={`${styles.footer} ${themeClass}`} role="contentinfo">
      {typeof footerContent === 'string' || typeof footerContent === 'number'
        ? <p>{footerContent}</p>
        : footerContent}
    </footer>
  );
};

export default Footer;
