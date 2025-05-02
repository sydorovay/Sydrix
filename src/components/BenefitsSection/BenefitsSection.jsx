import styles from './BenefitsSection.module.css';

const BenefitsSection = ({ title, benefits }) => {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <ul>
        {benefits.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </section>
  );
};

export default BenefitsSection;
