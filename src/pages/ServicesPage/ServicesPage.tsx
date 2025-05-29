import { FC } from 'react';
import styles from './ServicesPage.module.css';
import services from '@/translations/services/services';
import { LangData, LangCode } from '@/types/langTypes';
import getTranslation  from '@/utils/getTranslation';

interface ServicesPageProps {
  t: <K extends keyof LangData>(key: K) => LangData[K];
  theme: 'light' | 'dark' | string;
  lang: LangCode;
}

const ServicesPage: FC<ServicesPageProps> = ({ t, lang }) => {
  return (
    <main className={styles.page}>
      {/* Банер */}
      <section className={styles.banner}>
        <h1 className={styles.title}>{t('servicesTitle')}</h1>
        <p className={styles.subtitle}>{t('servicesContactText')}</p>
      </section>

      {/* Список сервісів */}
      <section className={styles.grid}>
        {services.map(({ id, icon: Icon, title, description }) => (
          <div key={id} className={styles.card}>
            {Icon && <Icon className={styles.icon} />}
            <h2 className={styles.cardTitle}>{getTranslation(title, lang)}</h2>
            <p className={styles.cardDesc}>{getTranslation(description, lang)}</p>
            <button className={styles.ctaButton}>{t('servicesButton')}</button>
          </div>
        ))}
      </section>

      {/* CTA форма */}
      <section className={styles.ctaForm}>
        <h3>{t('servicesFormTitle')}</h3>
        <form className={styles.form}>
          <input
            type="email"
            placeholder={t('servicesFormPlaceholder')}
            className={styles.input}
          />
          <button type="submit" className={styles.formButton}>
            {t('servicesFormButton')}
          </button>
        </form>
      </section>
    </main>
  );
};


export default ServicesPage;
