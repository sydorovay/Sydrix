import styles from './PortfolioSection.module.css';

export default function PortfolioSection({ title, text, portfolioItems }) {
  return (
    <section className={styles.portfolio}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <div className={styles.items}>
        {portfolioItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={item.imgSrc}
              alt={item.altText}
              width={600}
              height={400}
              className={styles.image}
            />
            <div className={styles.info}>
              <h3>{item.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}