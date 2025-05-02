import styles from './Header.module.css';

function Header({ t }) {
  return (
    <header className={styles.header}>
      <h1>{t.title}</h1>
      <p>{t.subtitle}</p>
      <a href="mailto:sydorovay@gmail.com" className="button">{t.button}</a>
    </header>
  );
}

export default Header;