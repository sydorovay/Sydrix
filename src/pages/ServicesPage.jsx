const ServicesPage = ({ t }) => {
  return (
    <main>
      <h1>{t?.services || 'services'}</h1>
      <p>{t?.servicesText || 'Feel free to reach out via email or phone.'}</p>
    </main>
  );
};

export default ServicesPage;
