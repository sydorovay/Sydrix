import styles from './ContactsSection.module.css';
import { useLanguage } from '@/context/useLanguage';

const ContactsSection = ({ phone, email, portfolioLink }) => {
  const { t } = useLanguage();
  const {
    contactsTitle,
    phoneLabel,
    emailLabel,
    portfolioLabel,
    goTo,
  } = t;

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{contactsTitle}</h2>

      {phone && (
        <p className={styles.line}>
          {phoneLabel}:{' '}
          <a href={`tel:${phone}`} aria-label={`Call ${phone}`}>
            {phone}
          </a>
        </p>
      )}

      {email && (
        <p className={styles.line}>
          {emailLabel}:{' '}
          <a href={`mailto:${email}`} aria-label={`Send email to ${email}`}>
            {email}
          </a>
        </p>
      )}

      {portfolioLink && (
        <p className={styles.line}>
          {portfolioLabel}:{' '}
          <a
            href={portfolioLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Перейти до портфоліо"
          >
            {goTo}
          </a>
        </p>
      )}
    </section>
  );
};

export default ContactsSection;
