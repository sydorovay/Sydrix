import React from "react";
import portfolioItemsData from "@/data/portfolioItems";
import { useLanguageContext } from "@/context/LanguageProvider";
import styles from "./PortfolioPage.module.css";

interface Props {
  theme: "light" | "dark";
}

// Допоміжна функція для безпечного перекладу рядків
const translateSafe = (
  t: (key: any) => React.ReactNode,
  key: any
): string => {
  const result = t(key);
  return typeof result === "string" ? result : "";
};

const PortfolioPage: React.FC<Props> = ({ theme }) => {
  const { t } = useLanguageContext();

  return (
    <main className={`${styles.page} ${theme}`}>
      <header>
        <h1 className={styles.heading}>{translateSafe(t, "portfolio")}</h1>
      </header>

      {portfolioItemsData.length === 0 ? (
        <p className={styles.empty}>{translateSafe(t, "noProjectsFound")}</p>
      ) : (
        <section className={styles.grid} aria-label="Portfolio projects">
          {portfolioItemsData.map((item) => (
            <article key={`${item.id}-${item.name}`} className={styles.card}>
              <img
                src={item.images[0]}
                alt={item.altText || item.name}
                className={styles.image}
                loading="lazy"
                aria-label={item.altText || item.name}
              />
              <h2 className={styles.title}>{item.name}</h2>
              <p className={styles.description}>{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  aria-label={`${translateSafe(t, "viewOnGithub")} – ${item.name}`}
                >
                  {translateSafe(t, "viewOnGithub")}
                </a>
              )}
            </article>
          ))}
        </section>
      )}
    </main>
  );
};

export default PortfolioPage;
