import React from 'react';
import FullPageSlider from '@/components/FullPageSlider/FullPageSlider';
import styles from './HomePage.module.css';

interface HomePageProps {
  theme: 'light' | 'dark';
}

const HomePage: React.FC<HomePageProps> = ({ theme }) => {
  return (
    <main className={`${styles.page} ${theme === 'light' ? styles.light : styles.dark}`} role="main">
      <div className={styles.container}>
        <FullPageSlider theme={theme} />
      </div>
    </main>
  );
};

export default HomePage;
