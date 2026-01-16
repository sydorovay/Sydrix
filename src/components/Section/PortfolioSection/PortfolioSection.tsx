import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './PortfolioSection.module.css';
import { PortfolioItem } from '@/types/portfolio';
import { TFunction } from '@/types/langTypes';
import { Translate } from '@/components/Translate';

interface PortfolioSectionProps {
  portfolioItems: PortfolioItem[];
  t: TFunction;
  theme: 'light' | 'dark';
  onOpen: (id: string) => void;
}

// Додаємо ту ж утиліту, що й у PortfolioPage
const translateSafe = (t: TFunction, key: Parameters<TFunction>[0]): string => {
  const result = t(key);
  return typeof result === 'string' ? result : '';
};

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  portfolioItems,
  t,
  theme,
  onOpen,
}) => {
  // Використовуємо безпечний переклад для атрибутів
  const portfolioLabel = translateSafe(t, 'portfolio');

  if (!portfolioItems || portfolioItems.length === 0) {
    return (
      <section
        className={`${styles.portfolioSection} ${styles[theme]}`} // Спростили звернення до теми
      >
        <p className={styles.emptyText}>
          <Translate id="noPortfolioItems" />
        </p>
      </section>
    );
  }

  return (
    <section
      className={`${styles.portfolioSection} ${styles[theme]}`}
      aria-label={portfolioLabel}
    >
      {portfolioItems.map((item) => (
        <article
          key={item.id}
          className={styles.card}
          role="region"
          aria-labelledby={`${item.id}-title`}
        >
          <h2 id={`${item.id}-title`} className={styles.title}>
            {item.title}
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }} // Трохи збільшили затримку для комфорту
            spaceBetween={20}
            loop={item.images.length > 1} // Loop тільки якщо більше 1 фото
            watchSlidesProgress // Покращує продуктивність
            className={styles.slider}
            aria-label={`${item.title} slider`}
          >
            {item.images.length > 0 ? (
              item.images.map((src, idx) => (
                <SwiperSlide key={`${src}-${idx}`}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={src}
                      // Прибрали хардкод мови в alt
                      alt={`${item.altText || item.title} ${idx + 1}`}
                      className={styles.image}
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <div className={styles.placeholder}>
                  <Translate id="noImages" />
                </div>
              </SwiperSlide>
            )}
          </Swiper>

          <div className={styles.divider} aria-hidden="true" />

          <button
            onClick={() => onOpen(item.id)}
            className={styles.button}
            type="button"
            // aria-label теж через безпечний переклад
            aria-label={`${translateSafe(t, 'showAllButton')}: ${item.title}`}
          >
            <Translate id="showAllButton" />
          </button>
        </article>
      ))}
    </section>
  );
};

export default PortfolioSection;