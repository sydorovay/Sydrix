import LogoLight from '../../assets/logo-dark-uk.svg';
import LogoDark from '../../assets/logo-uk.svg';
import styles from './Header.module.css';

export default function Header({ t, theme }) {
  const logoSrc = theme === 'dark' ? LogoDark : LogoLight;

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{t.title}</h1>

      <img
        src={logoSrc}
        alt="Sydrix personal logo"
        width={400}
        height={100}
        className={styles.logo}
      />

      <h2 className={styles.subtitle}>
        {Array.isArray(t?.subtitle) &&
          t.subtitle.map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
      </h2>

      <a href="mailto:sydorovay@gmail.com" className={styles.button}>
        {t.button}
      </a>
    </header>
  );
}
