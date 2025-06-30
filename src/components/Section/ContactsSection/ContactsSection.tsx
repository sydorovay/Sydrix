import React from 'react';
import styles from './ContactsSection.module.css';
import useLanguage from '@/hooks/useLanguage';

export interface ContactsSectionProps {
  phone?: string;
  email?: string;
  portfolioLink?: string;
  theme: 'light' | 'dark';
}

const ContactsSection: React.FC<ContactsSectionProps> = ({ phone, email, portfolioLink, theme }) => {
  const { t } = useLanguage();

  const contactItems = [
    phone && {
      label: t('phone'),
      value: phone,
      href: `tel:${phone}`,
      aria: `${t('phone')}: ${phone}`,
    },
    email && {
      label: t('email'),
      value: email,
      href: `mailto:${email}`,
      aria: `${t('email')}: ${email}`,
    },
    portfolioLink && {
      label: t('portfolioLabel'),
      value: t('goTo'),
      href: portfolioLink,
      aria: `${t('goTo')} ${t('portfolioLabel')}`,
      external: true,
    },
  ].filter(Boolean) as {
    label: string;
    value: string;
    href: string;
    aria: string;
    external?: boolean;
  }[];

  return (
    <section 
      id="contact"
      className={`${styles.section} ${theme}`}
      aria-labelledby="contacts-heading"
    >
      <h2 id="contacts-heading" className={styles.title}>
        {t('contactsTitle')}
      </h2>

      <ul className={styles.list}>
        {contactItems.map(({ label, value, href, aria, external }, index) => (
          <li key={label + index} className={styles.item}>
            <span className={styles.label}>{label}:</span>{' '}
            <a
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              aria-label={aria}
              className={styles.link}
            >
              {value}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactsSection;
