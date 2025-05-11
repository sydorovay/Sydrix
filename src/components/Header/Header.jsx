import Logo from '../Logo/Logo';
import styles from './Header.module.css';

function Header({ t, lang }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{t.title}</h1>
      <Logo lang={lang} />
      <h2 className={styles.subtitle}>
        {t.subtitle.map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </h2>
      <a href="mailto:sydorovay@gmail.com" className={styles.button}>{t.button}</a>
    </header>
  );
}

export default Header;
