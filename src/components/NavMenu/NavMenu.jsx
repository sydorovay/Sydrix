import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.css';
import useLanguage from '../../hooks/useLanguage';

export default function NavMenu({ className = '' }) {
  const { t } = useLanguage()
  return (
    <nav className={`${styles.navMenu} ${className}`}>
      <NavLink to="/" className={styles.link}>{t.home}</NavLink>
      <NavLink to="/about" className={styles.link}>{t.about}</NavLink>
      <NavLink to="/portfolio" className={styles.link}>{t.portfolio}</NavLink>
      <NavLink to="/contacts" className={styles.link}>{t.contacts}</NavLink>
    </nav>
  );
}