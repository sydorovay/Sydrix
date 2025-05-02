import { useState, useEffect } from 'react';
import translations from './translations/translations';
import { ThemeProvider } from './context/ThemeContext';
import LangSwitcher from './components/LangSwitcher/LangSwitcher';
import ThemeToggleButton from './components/ThemeToggleButton/ThemeToggleButton';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import Header from './components/Header/Header';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import ContactsSection from './components/ContactsSection/ContactsSection';
import Footer from './components/Footer/Footer';
import styles from './styles/App.module.css';

function MainApp() {
  const savedLang = localStorage.getItem('lang') || 'de';
  const [lang, setLang] = useState(savedLang);
  const t = translations[lang];

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const savedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <LangSwitcher className={styles.switcher} setLang={setLang} />
      <ThemeToggleButton toggleTheme={toggleTheme} theme={theme} />
      <ScrollToTop />
      <Header t={t} />

      <BenefitsSection title={t.benefitsTitle} benefits={t.benefits} />
      <PortfolioSection
        title={t.portfolioTitle}
        text={t.portfolioText}
        portfolioItems={[
          {
            name: 'Portfolio CV Site',
            link: 'https://artem-sydorov-frontend-cv.vercel.app/',
            imgSrc: 'https://via.placeholder.com/300x180?text=CV+Portfolio',
            altText: 'Portfolio',
          },
        ]}
      />
      <ContactsSection
        title={t.contactsTitle}
        phone={t.phone}
        email="sydorovay@gmail.com"
        portfolioLink="https://artem-sydorov-frontend-cv.vercel.app/"
      />
      <Footer footerText={t.footer} />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
