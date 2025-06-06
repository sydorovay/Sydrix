// src/components/PortfolioSection/PortfolioSection.tsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import portfolioItems from '@/data/portfolioItems';
import PortfolioModal from '../../PortfolioModal/PortfolioModal';
import styles from './PortfolioSection.module.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PortfolioSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>My Portfolio</h2>
      <Slider {...settings} className={styles.slider}>
        {portfolioItems.map((item, i) => (
          <div
            key={item.id}
            className={styles.slide}
            onClick={() => openModal(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openModal(i)}
            aria-label={`Open project ${item.name}`}
          >
            <img src={item.imgSrc} alt={item.altText} className={styles.image} />
            <p className={styles.name}>{item.name}</p>
          </div>
        ))}
      </Slider>

      {modalOpen && (
        <PortfolioModal
          projects={portfolioItems}
          currentIndex={currentIndex}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
};

export default PortfolioSection;
