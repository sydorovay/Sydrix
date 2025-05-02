import styles from './PortfolioSection.module.css';

const PortfolioSection = ({ title, text, portfolioItems }) => {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className={styles.portfolioGrid}>
        {portfolioItems.map((item, i) => (
          <div key={i} className={styles.portfolioItem}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.imgSrc} alt={item.altText} />
              <p>{item.name}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
