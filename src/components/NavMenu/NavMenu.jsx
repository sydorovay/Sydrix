import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.css';

export default function NavMenu({ className = '' }) {
  return (
    <nav className={`${styles.navMenu} ${className}`}>
      <NavLink to="/" className={styles.link}>Home</NavLink>
      <NavLink to="/about" className={styles.link}>About</NavLink>
      <NavLink to="/portfolio" className={styles.link}>Portfolio</NavLink>
      <NavLink to="/contacts" className={styles.link}>Contacts</NavLink>
    </nav>
  );
}