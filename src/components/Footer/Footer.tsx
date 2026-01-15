import { FC } from 'react';
import { Link } from 'react-router-dom'; 
import styles from './Footer.module.css';
import { LangData } from '@/types/langTypes';

interface FooterProps {
  t: <K extends keyof LangData>(key: K) => any;
  theme: 'light' | 'dark';
}

const Footer: FC<FooterProps> = ({ t, theme }) => {
  const themeClass = theme === 'light' ? styles.light : styles.dark;
  const year = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} ${themeClass}`} role="contentinfo">
      <div className={styles.footerContainer}>
        {/* Використовуємо твій клас footerText */}
        <p className={styles.footerText}>
          &copy; {year} sydrix.dev
        </p>

        <div className={styles.legalLinks}>
          <Link to="/impressum" className={styles.legalLink}>
            {/* Беремо заголовок з уже створеного нами Impressum */}
            {t('impressum.subtitle') ? 'Impressum' : 'Impressum'}
          </Link>

          <span className={styles.divider}>•</span>

          <Link to="/privacy" className={styles.legalLink}>
            {/* Тимчасово текст, поки не зробимо Privacy сторінку */}
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 