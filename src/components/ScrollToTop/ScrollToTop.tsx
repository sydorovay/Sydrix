// src/components/ScrollToTop/ScrollToTop.jsx
import { useEffect, useState, useCallback } from 'react';
import styles from './ScrollToTop.module.css';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const checkScroll = useCallback(() => {
    setVisible(window.pageYOffset > 300);
  }, []);

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, [checkScroll]);

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      className={styles.scrollButton}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
