import styles from './PortfolioSlider.module.css';
import type { PortfolioItem } from '@/types/portfolio';
import { useEffect, useRef } from 'react';

interface PortfolioSliderProps {
  items: PortfolioItem[];
}

export default function PortfolioSlider({ items }: PortfolioSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let scrollAmount = 0;
    const maxScroll = track.scrollWidth / 2;

    const interval = setInterval(() => {
      if (track.scrollLeft >= maxScroll) {
        track.scrollLeft = 0;
      } else {
        scrollAmount += 1;
        track.scrollLeft += 1;
      }
    }, 20); // speed

    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => {
      setTimeout(() => {
        track.scrollLeft = 0;
      }, 2000);
    };

    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(interval);
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className={styles.slider}>
      <div className={styles.track} ref={trackRef}>
        {[...items, ...items].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            aria-label={`Перейти до ${item.name}`}
          >
            <img
              src={item.imgSrc}
              alt={item.altText}
              className={styles.image}
              loading="lazy"
              width={400}
              height={260}
            />
            <div className={styles.info}>
              <h3>{item.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
