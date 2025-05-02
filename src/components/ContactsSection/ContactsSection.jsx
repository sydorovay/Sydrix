import styles from './ContactsSection.module.css';

const ContactsSection = ({ title, phone, email, portfolioLink }) => {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <p>{phone}: +49 172 7616858</p>
      <p>{email}: <a href={`mailto:${email}`}>{email}</a></p>
      <p>{portfolioLink}: <a href={portfolioLink} target="_blank" rel="noopener noreferrer">перейти</a></p>
    </section>
  );
};

export default ContactsSection;
