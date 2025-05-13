const FaqPage = ({ t }) => {
  return (
    <main>
      <h1>{t?.faq || 'FAQ'}</h1>
      <p>{t?.faqText || 'Feel free to reach out via email or phone.'}</p>
    </main>
  );
};

export default FaqPage;
