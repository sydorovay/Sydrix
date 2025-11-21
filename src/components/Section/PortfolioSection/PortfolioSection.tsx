// src/components/PortfolioSection/PortfolioSection.tsx
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

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  portfolioItems,
  t,
  theme,
  onOpen,
}) => {
  if (!portfolioItems || portfolioItems.length === 0) {
    return (
      <section
        className={`${styles.portfolioSection} ${theme === 'light' ? styles.light : styles.dark}`}
      >
        <p className={styles.emptyText}>
          <Translate id="noPortfolioItems" />
        </p>
      </section>
    );
  }

  return (
    <section
      className={`${styles.portfolioSection} ${theme === 'light' ? styles.light : styles.dark}`}
      aria-label={t('portfolio')}
    >
      {portfolioItems.map((item) => (
        <article
          key={item.id}
          className={styles.card}
          role="region"
          aria-labelledby={`${item.id}-title`}
          tabIndex={0}
        >
          <h2 id={`${item.id}-title`} className={styles.title}>
            {item.title}
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            loop
            className={styles.slider}
            aria-label={`${item.title} image slider`}
            role="region"
            aria-roledescription="carousel"
            aria-live="polite"
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 4 },
            }}
          >
            {item.images.length > 0 ? (
              item.images.map((src, idx) => (
                <SwiperSlide key={`${src}-${idx}`}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={src}
                      alt={`Зображення проєкту: ${item.altText || item.title} №${idx + 1}`}
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
            aria-label={`Відкрити портфоліо: ${item.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpen(item.id);
              }
            }}
          >
            <Translate id="showAllButton" />
          </button>
        </article>
      ))}
    </section>
  );
};

export default PortfolioSection;
