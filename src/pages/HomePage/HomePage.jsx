// src/pages/HomePage.jsx
import Header from '../../components/Header/Header';
import BenefitsSection from '../../components/Section/BenefitsSection/BenefitsSection';
import PortfolioSection from '../../components/Section/PortfolioSection/PortfolioSection'
import ContactsSection from '../../components/Section/ContactsSection/ContactsSection';
import Footer from '../../components/Footer/Footer';

export default function HomePage({ t, theme }) {
  const handleContact = () => {
    window.location.href = `mailto:${t.email}`;
  };

  return (
    <>
      <Header t={t} theme={theme} />

      <BenefitsSection
        title={t.benefitsTitle}
        benefits={t.benefits}
        buttonText={t.button}
        onButtonClick={handleContact}
      />

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

      <ContactsSection
        title={t.contactsTitle}
        phone={t.phone}
        email={t.email}
        portfolioLink={t.portfolioLink}
      />

      <Footer footerText={t.footer} />
    </>
  );
}
