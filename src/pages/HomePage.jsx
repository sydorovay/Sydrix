import Header from '../components/Header/Header';
import BenefitsSection from '../components/BenefitsSection/BenefitsSection';
import PortfolioSection from '../components/PortfolioSection/PortfolioSection';
import ContactsSection from '../components/ContactsSection/ContactsSection';
import Footer from '../components/Footer/Footer';

const HomePage = ({ t }) => {
  return (
    <>
      <Header t={t} />
      <BenefitsSection title={t.benefitsTitle} benefits={t.benefits} />
      <PortfolioSection
        title={t.portfolioTitle}
        text={t.portfolioText}
        portfolioItems={[
          {
            name: 'Portfolio CV Site',
            link: 'https://artem-sydorov-frontend-cv.vercel.app/',
            imgSrc: '/Sydorov-CV.jpg',
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
};

export default HomePage;
