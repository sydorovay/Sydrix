import React from 'react';
import services from '@/translations/services/services';
import { getLangPack } from '@/translations/translations';
import { getTranslation } from '@/utils/getTranslation';
import { useLanguage } from '@/context/useLanguage';
import styles from './ServicesPage.module.css';

const ServicesPage = () => {
  const { language } = useLanguage();
  const langPack = getLangPack(language);

  return (
    <main className={styles.page}>
      {/* Банер */}
      <section className={styles.banner}>
        <h1 className={styles.title}>{langPack.services.title}</h1>
        <p className={styles.subtitle}>{langPack.services.contactText}</p>
      </section>

      {/* Список сервісів */}
      <section className={styles.grid}>
        {services.map(({ id, icon: Icon, title, description, price }) => (
          <div key={id} className={styles.card}>
            {Icon && <Icon className={styles.icon} />}
            <h2 className={styles.cardTitle}>{getTranslation(title, language)}</h2>
            <p className={styles.cardDesc}>{getTranslation(description, language)}</p>
            {price && (
              <p className={styles.cardPrice}>
                {getTranslation(price, language)}
              </p>
            )}
            <button className={styles.ctaButton}>
              {langPack.services.button || 'Learn More'}
            </button>
          </div>
        ))}
      </section>

      {/* CTA форма */}
      <section className={styles.ctaForm}>
        <h3>{langPack.services.formTitle || 'Get a Free Quote'}</h3>
        <form className={styles.form}>
          <input
            type="email"
            placeholder={langPack.services.formPlaceholder || 'Your email'}
            className={styles.input}
          />
          <button type="submit" className={styles.formButton}>
            {langPack.services.formButton || 'Submit'}
          </button>
        </form>
      </section>
    </main>
  );
};

export default ServicesPage;
