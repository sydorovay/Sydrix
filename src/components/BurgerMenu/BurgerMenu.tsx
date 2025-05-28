import styles from './BurgerMenu.module.css';

type BurgerIconProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function BurgerIcon({ isOpen, onClick }: BurgerIconProps) {
  return (
    <button
      type="button"
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
