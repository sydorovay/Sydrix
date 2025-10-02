import { FaCommentDots } from 'react-icons/fa';
import { Service } from '@/types/services';

const interactiveForms: Service = {
  id: 'interactive_forms',
  icon: FaCommentDots,
  title: {
    gb: 'Interactive Forms',
    ua: 'Інтерактивні форми',
    de: 'Interaktive Formulare',
    pl: 'Interaktywne formularze',
    fr: 'Formulaires interactifs',
    it: 'Form Contattabili',
  },
  description: {
    gb: 'Clients can easily contact you through the site',
    ua: 'Клієнти можуть легко зв’язатися з вами через сайт',
    de: 'Kunden können Sie einfach über die Website kontaktieren',
    pl: 'Klienci mogą łatwo się z Tobą skontaktować przez stronę',
    fr: 'Les clients peuvent facilement vous contacter via le site',
    it: 'I clienti possono contattarti facilmente tramite il sito',
  },
};

export default interactiveForms;
