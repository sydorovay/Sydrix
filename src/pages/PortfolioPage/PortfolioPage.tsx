// src/pages/PortfolioPage.tsx
import React from "react";
import portfolioItemsData from "@/data/portfolioItems";
import { useLanguageContext } from "@/context/LanguageProvider";
import styles from "./PortfolioPage.module.css";

interface Props {
  theme: "light" | "dark";
}

// Допоміжна функція для безпечного перекладу рядків
const tString = (t: ReturnType<typeof useLanguageContext>['t']) => (key: keyof ReturnType<typeof useLanguageContext>['t'] extends (k: infer K) => infer V ? K : never) => {
  const val = t(key as any);
  return typeof val === "string" ? val : "";
};

const PortfolioPage: React.FC<Props> = ({ theme }) => {
  const { t } = useLanguageContext();
  const translate = tString(t);

  return (
    <main className={`${styles.page} ${theme}`}>
      <h1 className={styles.heading}>{translate("portfolio")}</h1>

      <div className={styles.grid}>
        {portfolioItemsData.map((item) => (
          <div key={item.id} className={styles.card}>
            <img
              src={item.images[0]}
              alt={item.altText}
              className={styles.image}
            />
            <h2 className={styles.title}>{item.name}</h2>
            <p className={styles.description}>{item.description}</p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {translate("viewOnGithub")}
              </a>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default PortfolioPage;
