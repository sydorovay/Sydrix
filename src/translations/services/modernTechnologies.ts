import { FaLaptopCode } from 'react-icons/fa';
import { Service } from '@/types/services';

const modernTechnologies: Service = {
  id: 'modern_technologies',
  icon: FaLaptopCode,
  title: {
    gb: 'Modern Technologies',
    ua: 'Сучасні технології',
    de: 'Moderne Technologien',
    pl: 'Nowoczesne technologie',
    fr: 'Technologies modernes',
    it: 'Tecnologie Moderne',
  },
  description: {
    gb: 'We use only up-to-date and proven development tools',
    ua: 'Ми використовуємо тільки сучасні та перевірені інструменти розробки',
    de: 'Wir verwenden nur aktuelle und bewährte Entwicklungstools',
    pl: 'Używamy tylko aktualnych i sprawdzonych narzędzi programistycznych',
    fr: 'Nous utilisons uniquement des outils de développement à jour et éprouvés',
    it: 'Utilizziamo solo strumenti di sviluppo aggiornati e affidabili',
  },
};

export default modernTechnologies;
