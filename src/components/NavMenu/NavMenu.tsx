import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useLanguageContext } from '@/context/LanguageProvider';
import BurgerIcon from '../BurgerMenu/BurgerMenu';
import styles from './NavMenu.module.css';

interface NavMenuProps {
  className?: string;
}

export default function NavMenu({ className = '' }: NavMenuProps) {
  const { t } = useLanguageContext();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((open) => !open);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        burgerRef.current &&
        !burgerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    const closeOnRouteChange = () => setIsOpen(false);

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    window.addEventListener('popstate', closeOnRouteChange);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
      window.removeEventListener('popstate', closeOnRouteChange);
    };
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { to: '/', label: t('home') },
    { to: '/about', label: t('about') },
    { to: '/services', label: t('services') },
    { to: '/portfolio', label: t('portfolio') },
    { to: '/testimonials', label: t('testimonials') },
    { to: '/blog', label: t('blogTitle') },
    { to: '/contacts', label: t('contacts') },
    { to: '/faq', label: t('faq') },
    { to: '/partnership', label: t('partnership') },
  ];

  return (
    <nav className={`${styles.navMenu} ${className}`} aria-label="Main navigation">
      <div ref={burgerRef}>
        <BurgerIcon isOpen={isOpen} onClick={toggleMenu} aria-label="Toggle menu" />
      </div>

      <div
        ref={menuRef}
        className={`${styles.menu} ${isOpen ? styles.openMenu : ''}`}
        role="menu"
      >
        <ul className={styles.menuList}>
          {navLinks.map(({ to, label }) => (
            <li key={to} role="none">
              <NavLink
                to={to}
                role="menuitem"
                tabIndex={isOpen ? 0 : -1}
                className={({ isActive }) =>
                  [styles.link, isActive ? styles.active : ''].filter(Boolean).join(' ')
                }
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
