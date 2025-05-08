const PortfolioPage = ({ t }) => {
  return (
    <main>
      <h1>{t?.portfolio || 'Portfolio'}</h1>
      <p>{t?.portfolioText || 'Check out some of our past work here.'}</p>
    </main>
  );
};

export default PortfolioPage;
