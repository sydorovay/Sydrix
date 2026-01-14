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


  const impressumText = "Impressum";
  const privacyText = "Privacy";

  return (
    <footer className={`${styles.footer} ${themeClass}`} role="contentinfo">
      <div className={styles.footerContainer}>
        <p className={styles.footerText}>
          &copy; {year} {typeof footerContent === 'string' ? footerContent : 'sydrix.dev'}
        </p>

        <div className={styles.legalLinks}>
          <a href="/impressum" className={styles.legalLink}>{impressumText}</a>
          <span className={styles.divider}>•</span>
          <a href="/privacy" className={styles.legalLink}>{privacyText}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;