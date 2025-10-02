import { FaServer } from 'react-icons/fa';
import { Service } from '@/types/services';

const cloudIntegration: Service = {
  id: 'cloud_integration',
  icon: FaServer,
  title: {
    gb: 'Cloud Integration',
    ua: 'Інтеграція з хмарними сервісами',
    de: 'Cloud-Integration',
    pl: 'Integracja z chmurą',
    fr: 'Intégration Cloud',
    it: 'Integrazione Cloud',
  },
  description: {
    gb: 'Seamless connection with cloud platforms for scalable solutions',
    ua: 'Безшовне підключення до хмарних платформ для масштабованих рішень',
    de: 'Nahtlose Verbindung mit Cloud-Plattformen für skalierbare Lösungen',
    pl: 'Płynne połączenie z platformami chmurowymi dla skalowalnych rozwiązań',
    fr: 'Connexion fluide avec les plateformes cloud pour des solutions évolutives',
    it: 'Connessione fluida con piattaforme cloud per soluzioni scalabili',
  },
};

export default cloudIntegration;
