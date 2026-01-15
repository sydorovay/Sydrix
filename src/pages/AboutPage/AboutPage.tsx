import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguageContext } from "@/context/LanguageProvider"; // Використовуємо ваш контекст
import styles from './AboutPage.module.css';

interface Props {
  theme: "light" | "dark"; // Додаємо як у взірці
}

// Додаємо безпечний переклад як у взірці
const translateSafe = (
  t: (key: any) => React.ReactNode,
  key: any
): string => {
  const result = t(key);
  return typeof result === "string" ? result : "";
};

const AboutPage: React.FC<Props> = ({ theme }) => {
  const { t } = useLanguageContext();
  const navigate = useNavigate();

  return (
    // Використовуємо ваші класи + тему з взірця
    <section className={`${styles['about-container']} ${theme}`}>
      <div className={styles['about-wrapper']}>

        <button className={styles['back-button']} onClick={() => navigate(-1)}>
          {translateSafe(t, 'impressum.back')}
        </button>

        <div>
          <span className={styles['about-header-pre']}>
            {translateSafe(t, 'aboutSubtitle')}
          </span>
          <h1 className={styles['about-main-title']}>
            {translateSafe(t, 'aboutTitle')}
          </h1>
          <p className={styles['about-description']}>
            {translateSafe(t, 'aboutText')}
          </p>

          <div className={styles['about-stats-grid']}>
            <div className={styles['stat-box']}>
              <span className={styles['stat-desc']}>
                {translateSafe(t, 'aboutStats.0.label')}
              </span>
              <span className={styles['stat-number']}>
                {translateSafe(t, 'aboutStats.0.value')}
              </span>
            </div>
            <div className={styles['stat-box']}>
              <span className={styles['stat-desc']}>
                {translateSafe(t, 'aboutStats.1.label')}
              </span>
              <span className={styles['stat-number']}>
                {translateSafe(t, 'aboutStats.1.value')}
              </span>
            </div>
          </div>
        </div>

        <div className={styles['about-philosophy-card']}>
          <h3 className={styles['philosophy-title']}>
            {translateSafe(t, 'aboutPhilosophyTitle')}
          </h3>
          <p className={styles['philosophy-text']}>
            {translateSafe(t, 'aboutPhilosophyText')}
          </p>
          <div className={styles['about-quote-small']}>
            — {translateSafe(t, 'aboutQuote')}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;