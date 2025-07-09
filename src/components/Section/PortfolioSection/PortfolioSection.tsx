import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './PortfolioSection.module.css';
import { LangData } from '@/types/langTypes';

type TranslateFn = <K extends keyof LangData>(key: K) => LangData[K];

interface PortfolioItem {
  id: string;
  name: string;
  title: string;
  link: string;
  altText: string;
  images: string[];
}

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
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            loop
            className={styles.slider}
            aria-label={`${item.title} image slider`}
          >
            {item.images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`${item.altText} ${index + 1}`}
                  className={styles.image}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
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
