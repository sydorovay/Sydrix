import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaMailBulk, FaTelegramPlane } from "react-icons/fa";
import LogoLight from '@/assets/logo-dark-uk.svg';
import LogoDark from '@/assets/logo-uk.svg';
import styles from './Hero..module.css';

export default function Header({ t, theme }) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const logoSrc = theme === 'dark' ? LogoDark : LogoLight;

  const toggleMenu = () => setShowMenu(prev => !prev);

  useEffect(() => {
    const handleClickOutside = e => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setShowMenu(false);
      }
    };

    const handleEscape = e => {
      if (e.key === 'Escape') setShowMenu(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{t.title}</h1>
      <Link to="/" aria-label="Go to home">
        <img
          loading="lazy"
          src={logoSrc}
          alt="Sydrix personal logo"
          width={400}
          height={100}
          className={styles.logo}
        />
      </Link>
      <h2 className={styles.subtitle}>
        {Array.isArray(t?.subtitle) &&
          t.subtitle.map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
      </h2>
      <div className={styles.buttonWrapper}>
        <button
          onClick={toggleMenu}
          ref={buttonRef}
          className={styles.button}
          aria-haspopup="true"
          aria-expanded={showMenu}
          aria-controls="contact-menu"
        >
          {t.button}
        </button>
        {showMenu && (
          <ul
            id="contact-menu"
            className={styles.menu}
            ref={menuRef}
            role="menu"
            aria-label="Contact options"
          >
            <li role="none">
              <a
                href="https://t.me/sydrix"
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
              >
                <FaTelegramPlane style={{ marginRight: '10px' }} />Telegram
              </a>
            </li>
            <li role="none">
              <a href="mailto:sydryx.dev@gmail.com" role="menuitem"><FaMailBulk style={{ marginRight: '10px' }} />Email</a>
            </li>
            
            <li role="none">
            </li>
            <a
              href="tel:+491234567890"
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
            >
              <FaPhoneAlt style={{ marginRight: '10px' }} />
              Phone
            </a>
          </ul>
        )}
      </div>
    </header>
  );
}
