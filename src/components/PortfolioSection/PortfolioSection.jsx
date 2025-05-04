import styles from './PortfolioSection.module.css';

const PortfolioSection = ({ title, text, portfolioItems = [] }) => {
  return (
    <section className={styles.section} aria-labelledby="portfolio-title">
      <h2 id="portfolio-title" className={styles.title}>{title}</h2>
      <p className={styles.description}>{text}</p>

      <div className={styles.portfolioGrid}>
        {portfolioItems.map((item, index) => (
          <figure key={index} className={styles.portfolioItem}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open project ${item.name}`}
              className={styles.portfolioLink}
            >
              <img
                src={item.imgSrc}
                alt={item.altText || item.name}
                className={styles.image}
                loading="lazy"
              />
              <figcaption className={styles.caption}>{item.name}</figcaption>
            </a>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
