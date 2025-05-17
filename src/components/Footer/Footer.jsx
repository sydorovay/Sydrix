// src/components/Footer/Footer.jsx
import styles from './Footer.module.css';

export default function Footer({ footerText }) {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>&copy; {new Date().getFullYear()} {footerText}</p>
    </footer>
  );
}
