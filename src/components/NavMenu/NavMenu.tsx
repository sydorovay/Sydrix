import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useLanguageContext } from '@/context/LanguageProvider';
import { useThemeContext } from '@/context/ThemeProvider';
import BurgerIcon from '../BurgerMenu/BurgerMenu';
import styles from './NavMenu.module.css';

interface NavMenuProps {
  className?: string;
}

export default function NavMenu({ className = '' }: NavMenuProps) {
  const { t } = useLanguageContext();
  const { theme } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Закриття при кліку поза меню
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

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  // Блокування скролу body
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
    <nav
      className={`${styles.navMenu} ${className} ${theme === 'dark' ? styles.dark : styles.light}`}
      aria-label={t('mainNavigationLabel') || 'Main navigation'}
    >
      <div ref={burgerRef}>
        <BurgerIcon
          isOpen={isOpen}
          onClick={toggleMenu}
          aria-label={t('toggleMenu') || 'Toggle menu'}
          aria-expanded={isOpen}
        />
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
