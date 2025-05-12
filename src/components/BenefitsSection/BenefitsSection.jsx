import { CheckCircle2 } from 'lucide-react';
import styles from './BenefitsSection.module.css';

export default function BenefitsSection({
  title,
  benefits,
  buttonText = "Замовити послугу",
  onButtonClick = () => { }
}) {
  return (
    <section className={styles.benefits}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {benefits.map((item, idx) => (
          <li key={idx} className={styles.item}>
            <CheckCircle2 className={styles.icon} size={24} />
            <span className={styles.text}>{item}</span>
          </li>
        ))}
      </ul>
      <button className={styles.button} onClick={onButtonClick}>
        {buttonText}
      </button>
    </section>
  );
}