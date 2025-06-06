// src/components/PortfolioModal/PortfolioModal.tsx
import React from 'react';
import Slider from 'react-slick';
import styles from './PortfolioModal.module.css';
import { PortfolioItem } from '@/types/portfolio';
import { X } from 'lucide-react';

interface Props {
  projects: PortfolioItem[];
  currentIndex: number;
  onClose: () => void;
}

const PortfolioModal: React.FC<Props> = ({ projects, currentIndex, onClose }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    initialSlide: currentIndex,
    arrows: true,
  };

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Close modal">
          <X />
        </button>
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className={styles.slide}>
              <img src={project.imgSrc} alt={project.altText} className={styles.image} />
              <h2 className={styles.name}>{project.name}</h2>
              <p className={styles.description}>{project.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PortfolioModal;
