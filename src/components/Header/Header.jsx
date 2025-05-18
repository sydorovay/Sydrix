import { Link } from 'react-router-dom';
import LogoLight from '@/assets/logo-dark-uk.svg';
import LogoDark from '@/assets/logo-uk.svg';
import styles from './Header.module.css';

export default function Header({ t, theme }) {
  const logoSrc = theme === 'dark' ? LogoDark : LogoLight;

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{t.title}</h1>

      <Link to="/" aria-label="Go to home">
        <img
          loading="lazy"
          src={logoSrc}
          alt="Sydrix personal logo"
          width={400}
          height={100}
          className={styles.logo}
        />
      </Link>

      <h2 className={styles.subtitle}>
        {Array.isArray(t?.subtitle) &&
          t.subtitle.map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
      </h2>

      <a
        href="mailto:sydorovay@gmail.com"
        className={styles.button}
        aria-label="Send email to Sydorovay"
      >
        {t.button}
      </a>
    </header>
  );
}
