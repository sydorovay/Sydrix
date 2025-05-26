// src/components/FullPageSlider/FullPageSlider.jsx
import React, { useRef, useState, useEffect, useCallback } from 'react';
import HeroSection from '../Section/HeroSection/HeroSection';
import BenefitsSection from '../Section/BenefitsSection/BenefitsSection';
import PortfolioSection from '../Section/PortfolioSection/PortfolioSection';
import ContactsSection from '../Section/ContactsSection/ContactsSection';
import styles from './FullPageSlider.module.css';
import { FaArrowUp } from 'react-icons/fa';

function useShowTopButton(ref) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      setShow(el.scrollTop > window.innerHeight);
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [ref]);

  return show;
}

const FullPageSlider = React.memo(function FullPageSlider({ t, theme, onContact }) {
  const containerRef = useRef(null);
  const showTopBtn = useShowTopButton(containerRef);

  const scrollToTop = useCallback(() => {
    containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${styles.snapContainer} ${styles[theme]}`}
      style={{ overflowY: 'auto', height: '100vh' }}
      tabIndex={0}
      aria-label="Full page scroll container"
    >
      <section className={styles.snapSection} aria-label="Hero section">
        <HeroSection t={t} theme={theme} />
      </section>

      <section className={styles.snapSection} aria-label="Benefits section">
        <BenefitsSection
          title={t.benefitsTitle}
          benefits={t.benefits}
          buttonText={t.button}
          onButtonClick={onContact}
          theme={theme}
        />
      </section>

      <section className={styles.snapSection} aria-label="Portfolio section">
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
          theme={theme}
        />
      </section>

      <section className={styles.snapSection} aria-label="Contacts section">
        <ContactsSection
          title={t.contactsTitle}
          phone={t.phone}
          email={t.email}
          portfolioLink={t.portfolioLink}
          theme={theme}
        />
      </section>

      {showTopBtn && (
        <button
          className={styles.topButton}
          onClick={scrollToTop}
          aria-label="Back to top"
          type="button"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
});

export default FullPageSlider;
