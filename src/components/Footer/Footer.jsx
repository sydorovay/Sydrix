import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ footerText }) => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 {footerText}</p>
    </footer>
  );
};

export default Footer;
