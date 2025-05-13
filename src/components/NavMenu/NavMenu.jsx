import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.css';
import useLanguage from '../../hooks/useLanguage';

export default function NavMenu({ className = '' }) {
  const { t } = useLanguage()
  return (
    <nav className={`${styles.navMenu} ${className}`}>
      <NavLink to="/" className={styles.link}>{t.home}</NavLink>
      <NavLink to="/about" className={styles.link}>{t.about}</NavLink>
      <NavLink to="/services" className={styles.link}>{t.services}</NavLink>
      <NavLink to="/portfolio" className={styles.link}>{t.portfolio}</NavLink>
      <NavLink to="/testimonials" className={styles.link}>{t.testimonials}</NavLink>
      <NavLink to="/blog" className={styles.link}>{t.blog}</NavLink>
      <NavLink to="/contacts" className={styles.link}>{t.contacts}</NavLink>
      <NavLink to="/faq" className={styles.link}>{t.faq}</NavLink>
      <NavLink to="/partnership" className={styles.link}>{t.partnership}</NavLink>
    </nav>
  );
}

