import React, { FC } from 'react';
import styles from './ServicesPage.module.css';
import services from '@/translations/services/services';
import { LangData, LangCode } from '@/types/langTypes';
import getTranslation from '@/utils/getTranslation';

interface ServicesPageProps {
  t: <K extends keyof LangData>(key: K) => LangData[K];
  theme: 'light' | 'dark' | string;
  lang: LangCode;
  compact?: boolean;
}

const ServicesPage: FC<ServicesPageProps> = ({ t, lang, theme, compact = false }) => {
  const s = styles as Record<string, string>;

  return (
    <main className={`${s.page} ${theme === 'dark' ? s.dark : s.light} ${!compact ? s.full : ''}`}>
      {!compact && (
        <section className={s.banner}>
          <h1 className={s.title}>{t('servicesTitle') as string}</h1>
        </section>
      )}

      <section className={s.grid}>
        {services.map(({ id, icon: Icon, title, description }) => (
          <div
            key={id}
            id={id}
            className={s.card}
            // Додаємо tabIndex для доступності (щоб можна було фокусувати клавіатурою)
            tabIndex={0}
            role="article"
          >
            <div className={s.cardContent}>
              {/* Іконка */}
              {Icon && <Icon className={s.icon} />}

              {/* Контейнер для тексту, який буде змінюватися */}
              <div className={s.textWrapper}>
                {/* Заголовок (зникає при hover) */}
                <h2 className={s.cardTitle}>
                  {getTranslation(title, lang)}
                </h2>

                {/* Опис (з'являється при hover) */}
                <p className={s.cardDescription}>
                  {getTranslation(description, lang)}
                </p>
              </div>
            </div>

            {/* Декоративний елемент (сяйво) */}
            <div className={s.cardGlow} />
          </div>
        ))}
      </section>

      {!compact && (
        <section className={s.ctaFormSection}>
          <h3 className={s.formTitle}>{t('servicesFormTitle') as string}</h3>
          <form className={s.form} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={t('servicesFormPlaceholder') as string}
              className={s.input}
              required
            />
            <button type="submit" className={s.ctaButton}>
              {t('servicesFormButton') as string}
            </button>
          </form>
        </section>
      )}
    </main>
  );
};

export default ServicesPage;