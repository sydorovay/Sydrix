import { useState, useEffect } from 'react';
import translations from './translations/translations';
import { ThemeProvider } from './context/ThemeContext';
import LangSwitcher from './components/LangSwitcher/LangSwitcher';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import Header from './components/Header/Header';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import ContactsSection from './components/ContactsSection/ContactsSection';
import Footer from './components/Footer/Footer';
import styles from './styles/App.module.css';
import { useTheme } from './hooks/useTheme';

function MainApp() {
  const { theme, toggleTheme } = useTheme();

  const savedLang = localStorage.getItem('lang') || 'de';
  const [lang, setLang] = useState(savedLang);
  const t = translations[lang];

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);


  return (
    <div className={styles.app}>
      <LangSwitcher className={styles.switcher} setLang={setLang} />
      <button onClick={toggleTheme} className={styles.themeButton} title="Змінити тему">
        {theme === 'light' ? '🌙' : '🌞'}
      </button>
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
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
