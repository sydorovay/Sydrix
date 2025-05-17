// src/pages/AboutPage/AboutPage.jsx
import styles from './AboutPage.module.css';
import Footer from '@/components/Footer/Footer';

export default function AboutPage({ t }) {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>{t.about}</h1>
      <p className={styles.text}>
        {/* Замінюй цей текст на відповідний переклад при потребі */}
        Ми — команда, що створює адаптивні та сучасні інтерфейси. Зосереджуємось на продуктивності, враженнях користувачів і підтримці.
      </p>

      <Footer footerText={t.footer} />
    </div>
  );
}
