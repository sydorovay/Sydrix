import BlogSection from "../../components/Section/BlogSection/BlogSection";

interface ContactsPageProps {
  t?: {
    contacts?: string;
    contactsText?: string;
    [key: string]: any;
  };
}

const ContactsPage: React.FC<ContactsPageProps> = ({ t }) => {
  return (
    <main>
      <h1>{t?.contacts || 'Contact Us'}</h1>
      <p>{t?.contactsText || 'Feel free to reach out via email or phone.'}</p>
    </main>
  );
};

export default ContactsPage;
