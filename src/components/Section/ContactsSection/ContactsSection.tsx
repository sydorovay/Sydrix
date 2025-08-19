import React from 'react';
import styles from './ContactsSection.module.css';
import contactInfo from '@/data/contactInfo';
import { TFunction } from '@/types/langTypes';

interface ContactsSectionProps {
  phone: keyof typeof contactInfo;
  email: keyof typeof contactInfo;
  portfolioLink: string;
  theme: 'light' | 'dark';
  t: TFunction;
}

const ContactsSection: React.FC<ContactsSectionProps> = ({ phone, email, portfolioLink, theme, t }) => {
  const contactItems = [
    {
      label: t('phone') as string,
      value: contactInfo[phone],
      href: `tel:${contactInfo[phone]}`,
      aria: `${t('phone')}: ${contactInfo[phone]}`,
    },
    {
      label: t('email') as string,
      value: contactInfo[email],
      href: `mailto:${contactInfo[email]}`,
      aria: `${t('email')}: ${contactInfo[email]}`,
    },
    portfolioLink && {
      label: t('portfolioLabel') as string,
      value: t('goTo') as string,
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
      className={`${styles.section} ${styles[theme]}`}
      aria-labelledby="contacts-heading"
    >
      <h2 id="contacts-heading" className={styles.title}>
        {t('contactsTitle') as string}
      </h2>

      <ul className={styles.list}>
        {contactItems.map(({ label, value, href, aria, external }, index) => (
          <li key={`${label}-${index}`} className={styles.item}>
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
