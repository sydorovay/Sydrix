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
  const year = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} ${themeClass}`} role="contentinfo">
      {typeof footerContent === 'string' || typeof footerContent === 'number' ? (
        <p className={styles.footerText}>
          &copy; {year} {footerContent}
        </p>
      ) : (
        footerContent
      )}
    </footer>
  );
};

export default Footer;
