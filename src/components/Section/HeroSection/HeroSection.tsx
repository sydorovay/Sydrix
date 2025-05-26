import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaMailBulk, FaTelegramPlane } from 'react-icons/fa';
import LogoLight from '@/assets/logo-dark-uk.svg';
import LogoDark from '@/assets/logo-uk.svg';
import styles from './HeroSecton.module.css';

interface HeroSectionProps {
  t: {
    title: string;
    subtitle?: (string | React.ReactNode)[];
    button: string;
  };
  theme: 'light' | 'dark';
}

export default function HeroSection({ t, theme }: HeroSectionProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const logoSrc = theme === 'dark' ? LogoDark : LogoLight;

  const toggleMenu = () => setShowMenu((prev) => !prev);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setShowMenu(false);
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setShowMenu(false);
    }

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
          aria-controls="contact-menu"
          type="button"
        >
          {t.button}
        </button>

        {showMenu && (
          <ul
            id="contact-menu"
            className={styles.menu}
            ref={menuRef}
            role="menu"
            aria-live="assertive" // Оголошує зміни для читачів екранів
            aria-label="Contact options"
          >
            <li role="none">
              <a href="https://t.me/sydrix" target="_blank" rel="noopener noreferrer" role="menuitem">
                <FaTelegramPlane style={{ marginRight: '10px' }} />
                Telegram
              </a>
            </li>
            <li role="none">
              <a href="mailto:sydryx.dev@gmail.com" role="menuitem">
                <FaMailBulk style={{ marginRight: '10px' }} />
                Email
              </a>
            </li>
            <li role="none">
              <a href="tel:+491727616858" target="_blank" rel="noopener noreferrer" role="menuitem">
                <FaPhoneAlt style={{ marginRight: '10px' }} />
                Phone
              </a>
            </li>
          </ul>
        )}

      </div>
    </header>
  );
}
