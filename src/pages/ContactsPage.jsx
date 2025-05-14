import BlogSection from "../components/Section/BlogSection/BlogSection";

const ContactsPage = ({ t }) => {
  return (
    <main>
      <h1>{t?.contacts || 'Contact Us'}</h1>
      <p>{t?.contactsText || 'Feel free to reach out via email or phone.'}</p>
    </main>
  );
};

export default ContactsPage;
