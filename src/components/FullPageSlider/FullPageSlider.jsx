// src/components/FullPageSlider/FullPageSlider.jsx
import React, { useRef, useState, useEffect } from 'react';
import HeroSection from '../Section/HeroSection/HeroSection';
import BenefitsSection from '../Section/BenefitsSection/BenefitsSection';
import PortfolioSection from '../Section/PortfolioSection/PortfolioSection';
import ContactsSection from '../Section/ContactsSection/ContactsSection';
import Footer from '../Footer/Footer';
import styles from './FullPageSlider.module.css';
import { FaArrowUp } from 'react-icons/fa';

export default function FullPageSlider({ t, theme, onContact }) {
  const containerRef = useRef(null);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = containerRef.current?.scrollTop || 0;
      setShowTopBtn(scrollY > window.innerHeight);
    };
    const el = containerRef.current;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      ref={containerRef}
      className={`${styles.snapContainer} ${styles[theme]}`}
    >
      <section className={styles.snapSection}>
        <HeroSection t={t} theme={theme} />
      </section>
      <section className={styles.snapSection}>
        <BenefitsSection
          title={t.benefitsTitle}
          benefits={t.benefits}
          buttonText={t.button}
          onButtonClick={onContact}
        />
      </section>
      <section className={styles.snapSection}>
        <PortfolioSection
          title={t.portfolioTitle}
          text={t.portfolioText}
          portfolioItems={[
            {
              name: 'Portfolio CV Site',
              link: t.portfolioLink,
              imgSrc: '/Sydorov-CV.jpg',
              altText: 'Portfolio CV Site',
            },
          ]}
        />
      </section>
      <section className={styles.snapSection}>
        <ContactsSection
          title={t.contactsTitle}
          phone={t.phone}
          email={t.email}
          portfolioLink={t.portfolioLink}
        />
      </section>
      <section className={styles.snapSection}>
        <Footer footerText={t.footer} />
      </section>

      {showTopBtn && (
        <button
          className={styles.topButton}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
