import styles from './BurgerMenu.module.css';

export default function BurgerIcon({ isOpen, onClick }) {
  return (
    <button
      className={`${styles.burgerIcon} ${isOpen ? styles.open : ''}`}
      onClick={onClick}
      aria-label="Toggle menu"
      aria-pressed={isOpen}
    >
      <span />
      <span />
      <span />
    </button>
  );
}
