import { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import TopBar from './components/TopBar/TopBar';
import translations from './translations/translations';
import Header from './components/Header/Header';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import ContactsSection from './components/ContactsSection/ContactsSection';
import Footer from './components/Footer/Footer';
import styles from './styles/App.module.css';
import './styles/variables.css';
import BackgroundAnimationCanvas from './components/BackgroundFiberCanvas/BackgroundAnimationCanvas';

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
      <BackgroundAnimationCanvas theme={theme} />
      {/* <BackgroundAnimationCanvas theme={theme} />  */}
      <TopBar lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} />
      <ScrollToTop />
      <Header t={t} />
      <BenefitsSection title={t.benefitsTitle} benefits={t.benefits} />
      <PortfolioSection
        title={t.portfolioTitle}
        text={t.portfolioText}
        portfolioItems={[{ name: 'Portfolio CV Site', link: 'https://artem-sydorov-frontend-cv.vercel.app/', imgSrc: '/Sydorov-CV.jpg', altText: 'Portfolio' }]}
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
  return <MainApp />;
}
