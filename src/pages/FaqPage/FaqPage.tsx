type FaqPageProps = {
  t?: {
    faq?: string;
    faqText?: string;
  };
};

const FaqPage = ({ t }: FaqPageProps) => {
  return (
    <main>
      <h1>{t?.faq || 'FAQ'}</h1>
      <p>{t?.faqText || 'Feel free to reach out via email or phone.'}</p>
    </main>
  );
};

export default FaqPage;