import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import BurgerIcon from '../BurgerMenu/BurgerMenu';
import styles from './NavMenu.module.css';

export default function NavMenu({ className = '' }) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Закриваємо меню при переході по посиланню (важливо для мобільних)
  useEffect(() => {
    if (!isOpen) return;

    const closeOnRouteChange = () => setIsOpen(false);
    window.addEventListener('popstate', closeOnRouteChange);
    return () => window.removeEventListener('popstate', closeOnRouteChange);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(open => !open);

  const navLinks = [
    { to: '/', label: t.home },
    { to: '/about', label: t.about },
    { to: '/services', label: t.services },
    { to: '/portfolio', label: t.portfolio },
    { to: '/testimonials', label: t.testimonials },
    { to: '/blog', label: t.blog },
    { to: '/contacts', label: t.contacts },
    { to: '/faq', label: t.faq },
    { to: '/partnership', label: t.partnership },
  ];

  return (
    <nav className={`${styles.navMenu} ${className}`}>
      <BurgerIcon isOpen={isOpen} onClick={toggleMenu} aria-label="Toggle menu" />

      <div className={`${styles.menu} ${isOpen ? styles.openMenu : ''}`}>
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              [styles.link, isActive ? styles.activeLink : ''].filter(Boolean).join(' ')
            }
            onClick={() => setIsOpen(false)} // Закриваємо меню при кліку на посилання
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
