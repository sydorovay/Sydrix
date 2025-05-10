import styles from './ContactsSection.module.css';
import useLanguage from '../../hooks/useLanguage';

const ContactsSection = ({ phone, email, portfolioLink }) => {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <h2>{t.contactsTitle}</h2>
      <p>{t.phoneLabel}: {phone}</p>
      <p>{t.emailLabel}: <a href={`mailto:${email}`}>{email}</a></p>
      <p>{t.portfolioLabel}: <a href={portfolioLink} target="_blank" rel="noopener noreferrer">{t.goTo}</a></p>
    </section>
  );
};

export default ContactsSection;
