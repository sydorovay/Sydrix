// src/components/Section/HeroSection/HeroSection.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaMailBulk, FaTelegramPlane } from 'react-icons/fa';

import staticLogo from '@/assets/staticLogo.svg'; // єдиний логотип

import styles from './HeroSection.module.css';

interface Translations {
  title: string;
  subtitle?: (string | React.ReactNode)[];
  button: string;
}

interface HeroSectionProps {
  t: Translations;
  theme: 'light' | 'dark';
}

export default function HeroSection({ t, theme }: HeroSectionProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <header className={`${styles.header} ${theme}`}>
      <h1 className={styles.title}>{t.title}</h1>
      <Link to="/" aria-label="Go to home">
        <img
          loading="lazy"
          src={staticLogo}
          alt="Sydrix personal logo"
          width={400}
          height={100}
          className={styles.logo}
          decoding="async"
          fetchPriority="low"
        />
      </Link>
      <h2 className={styles.subtitle}>
        {t.subtitle?.map((line, idx) => (
          <p key={idx} className={styles.line}>
            {line}
          </p>
        ))}
      </h2>
      <div className={styles.buttonWrapper}>
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className={styles.button}
          aria-haspopup="menu"
          aria-controls="contact-menu"
          aria-expanded={isMenuOpen}
          type="button"
        >
          {t.button}
        </button>
        {isMenuOpen && (
          <ul
            id="contact-menu"
            ref={menuRef}
            className={styles.menu}
            role="menu"
            aria-label="Contact options"
            aria-live="polite"
          >
            <li role="none">
              <a
                href="https://t.me/sydrix"
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
              >
                <FaTelegramPlane aria-hidden="true" className={styles.icon} />
                Telegram
              </a>
            </li>
            <li role="none">
              <a href="mailto:sydryx.dev@gmail.com" role="menuitem">
                <FaMailBulk aria-hidden="true" className={styles.icon} />
                Email
              </a>
            </li>
            <li role="none">
              <a
                href="tel:+491727616858"
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
              >
                <FaPhoneAlt aria-hidden="true" className={styles.icon} />
                Phone
              </a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
