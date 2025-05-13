const TestimonialsPage = ({ t }) => {
  return (
    <main>
      <h1>{t?.testimonials || 'testimonials'}</h1>
      <p>{t?.testimonialsText || 'Feel free to reach out via email or phone.'}</p>
    </main>
  );
};

export default TestimonialsPage;
