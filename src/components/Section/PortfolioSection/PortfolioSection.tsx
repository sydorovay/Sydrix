import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './PortfolioSection.module.css';
import { LangData } from '@/types/langTypes';
import { PortfolioItem } from '../../../types/portfolio';

type TranslateFn = <K extends keyof LangData>(key: K) => LangData[K];

interface PortfolioSectionProps {
  portfolioItems: PortfolioItem[];
  t: TranslateFn;
  theme: 'light' | 'dark';
  onOpen: (id: string) => void;
}


const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  portfolioItems,
  t,
  theme,
  onOpen,
}) => {
  return (
    <div className={`${styles.portfolioSection} ${styles[theme]}`}>
      {portfolioItems.map((item) => (
        <div key={item.id} className={styles.card} role="region" aria-labelledby={`${item.id}-title`}>
          <h2 id={`${item.id}-title`} className={styles.title}>
            {item.title}
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            loop
            className={styles.slider}
            aria-label={`${item.title} image slider`}
          >
            {Array.isArray(item.images)
              ? item.images.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`${item.altText} ${index + 1}`}
                    className={styles.image}
                    loading="lazy"
                  />
                </SwiperSlide>
              ))
              : (
                <SwiperSlide key={0}>
                  <img
                    src={item.images}
                    alt={item.altText}
                    className={styles.image}
                    loading="lazy"
                  />
                </SwiperSlide>
              )
            }
          </Swiper>

          <button
            onClick={() => onOpen(item.id)}
            className={styles.button}
            type="button"
          >
            {String(t('showDetails' as keyof LangData))}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PortfolioSection;
