import styles from './PortfolioSection.module.css';
import portfolioItems from '@/data/portfolioItems';
import PortfolioSlider from './PortfolioSlider';

interface PortfolioSectionProps {
  title: string;
  text: string;
}

export default function PortfolioSection({
  title,
  text,
}: PortfolioSectionProps) {
  return (
    <section className={styles.portfolio}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
        <PortfolioSlider items={portfolioItems} />
    </section>
  );
}
