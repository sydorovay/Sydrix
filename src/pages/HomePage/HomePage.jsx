// src/pages/HomePage.jsx

import FullPageSlider from '@/components/FullPageSlider/FullPageSlider';
import Footer from '@/components/Footer/Footer';
import styles from  './HomePage.module.css';  
export default function HomePage({ t, theme }) {
  const handleContact = () => window.location.href = `mailto:${t.email}`;

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <FullPageSlider
          t={t}
          theme={theme}
          onContact={handleContact}
        />
      </div>
      <Footer footerText={t.footer} />
    </div>
  );
}
