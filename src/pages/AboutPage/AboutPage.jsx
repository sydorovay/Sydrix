const AboutPage = ({ t }) => {
  return (
    <main>
      <h1>{t?.about || 'About Us'}</h1>
      <p>{t?.aboutText || 'Here you can learn more about this project.'}</p>
    </main>
  );
};

export default AboutPage;
