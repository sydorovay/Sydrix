import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './PortfolioSection.module.css';
import { PortfolioItem } from '@/types/portfolio';
import { TFunction, LangData } from '@/types/langTypes';

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
  const themeClass = theme === 'dark' ? styles.dark : styles.light;

  if (!portfolioItems || portfolioItems.length === 0) return null;

  return (
    <div className={`${styles.portfolioContainer} ${themeClass}`}>
      {portfolioItems.map((item) => {
        const displayImages = item.images.length > 0 && item.images.length < 6
          ? [...item.images, ...item.images, ...item.images]
          : item.images;

        return (
          <article key={item.id} className={styles.card}>
            <h2 className={styles.title}>{item.title}</h2>

            <div className={styles.sliderWrapper}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={true}
                pagination={{ clickable: true }}
                nested={true}
                loop={displayImages.length >= 6}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                spaceBetween={20}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 }
                }}
                className={styles.slider}
              >
                {displayImages.map((src, idx) => (
                  <SwiperSlide key={`${item.id}-img-${idx}`}>
                    <div className={styles.imageWrapper}>
                      <img
                        src={src}
                        alt={`${item.title} ${idx}`}
                        className={styles.image}
                        loading="eager"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className={styles.divider} aria-hidden="true" />

            {/* ОНОВЛЕНА КНОПКА З КЛАСОМ gradientButton */}
            <button
              onClick={() => onOpen(item.id)}
              className={`${styles.button} ${styles.gradientButton}`}
              type="button"
            >
              {t('showAllButton' as keyof LangData) as string}
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default PortfolioSection;