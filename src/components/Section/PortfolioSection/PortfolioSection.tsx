// src/components/Section/PortfolioSection/PortfolioSection.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './PortfolioSection.module.css';
import { PortfolioItem } from '@/types/portfolio';
import { Translate } from '@/components/Translate';
import { TFunction } from '@/types/langTypes';

interface PortfolioSectionProps {
  portfolioItems: PortfolioItem[];
  t: TFunction;
  theme: 'light' | 'dark';
  onOpen: (id: string) => void;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ portfolioItems, t, theme, onOpen }) => {
  if (!portfolioItems || portfolioItems.length === 0) {
    return (
      <div className={`${styles.portfolioSection} ${styles[theme]}`}>
        <p className={styles.emptyText}>
          <Translate id="noPortfolioItems" />
        </p>
      </div>
    );
  }

  return (
    <section className={`${styles.portfolioSection} ${styles[theme]}`} aria-label={t('portfolio')}>
      {portfolioItems.map(item => (
        <div key={item.id} className={styles.card} role="region" aria-labelledby={`${item.id}-title`}>
          <h2 id={`${item.id}-title`} className={styles.title}>{item.title}</h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            loop
            className={styles.slider}
            aria-label={`${item.title} image slider`}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 4 },
            }}
          >
            {item.images.length > 0 ? (
              item.images.map((src, idx) => (
                <SwiperSlide key={`${src}-${idx}`}>
                  <img
                    src={src}
                    alt={`${item.altText || item.title} ${idx + 1}`}
                    className={styles.image}
                    loading="lazy"
                  />
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

          <button
            onClick={() => onOpen(item.id)}
            className={styles.button}
            type="button"
            aria-label={`${t('showAllButton')} ${item.title}`}
          >
            <Translate id="showAllButton" />
          </button>
        </div>
      ))}
    </section>
  );
};

export default PortfolioSection;
