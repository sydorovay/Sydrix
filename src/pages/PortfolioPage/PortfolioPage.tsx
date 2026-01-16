import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Імпорт стилів Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import portfolioItemsData from "@/data/portfolioItems";
import { useLanguageContext } from "@/context/LanguageProvider";
import styles from "./PortfolioPage.module.css";

interface Props {
  theme: "light" | "dark";
}

const translateSafe = (
  t: (key: any) => React.ReactNode,
  key: any
): string => {
  const result = t(key);
  return typeof result === "string" ? result : "";
};

const PortfolioPage: React.FC<Props> = ({ theme }) => {
  const { t } = useLanguageContext();

  // Використовуємо Record для безпечного доступу до стилів тем
  const themeStyles = styles as Record<string, string>;
  const themeClass = themeStyles[theme] || '';

  return (
    <main className={`${styles.page} ${themeClass}`}>
      <header className={styles.header}>
        <h1 className={styles.heading}>{translateSafe(t, "portfolio")}</h1>
      </header>

      {portfolioItemsData.length === 0 ? (
        <p className={styles.empty}>{translateSafe(t, "noProjectsFound")}</p>
      ) : (
        <section className={styles.grid} aria-label="Portfolio projects">
          {portfolioItemsData.map((item) => (
            <article key={`${item.id}-${item.name}`} className={styles.card}>
              <div className={styles.sliderWrapper}>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation={true}
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  loop={item.images.length > 1}
                  grabCursor={true}
                  className={styles.swiper}
                >
                  {item.images.map((src, idx) => (
                    <SwiperSlide key={`${item.id}-img-${idx}`}>
                      <img
                        src={src}
                        alt={item.altText || item.name}
                        className={styles.image}
                        loading="lazy"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className={styles.content}>
                <h2 className={styles.title}>{item.name}</h2>
                <p className={styles.description}>
                  {translateSafe(t, `portfolioDescription${item.id}`)}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    aria-label={`${t("viewOnGithub")} – ${item.name}`}
                  >
                    {t("viewOnGithub")}
                  </a>
                )}
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
};

export default PortfolioPage;