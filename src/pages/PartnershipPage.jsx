const PartnershipPage = ({ t }) => {
  return (
    <main>
      <h1>{t?.partnership || 'partnership'}</h1>
      <p>{t?.partnershipText || 'Feel free to reach out via email or phone.'}</p>
    </main>
  );
};

export default PartnershipPage;
