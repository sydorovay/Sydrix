import { FC } from 'react';
import styles from './AboutPage.module.css';
import Footer from '@/components/Footer/Footer';

import { LangData } from '@/types/langTypes';
import { createStringTranslator } from '@/utils/langUtils';

interface AboutPageProps {
  t: <K extends keyof LangData>(key: K) => LangData[K];
  theme: 'light' | 'dark';
}

const AboutPage: FC<AboutPageProps> = ({ t, theme }) => {
  const stringT = createStringTranslator(t); // лише ті ключі, які точно повертають string

  return (
    <div className={styles.about} data-theme={theme}>
      <h1 className={styles.title}>{stringT('aboutTitle')}</h1>
      <p className={styles.text}>{stringT('aboutText')}</p>
      <Footer t={t} theme={theme} /> {/* Footer отримує повний t */}
    </div>
  );
};

export default AboutPage;
