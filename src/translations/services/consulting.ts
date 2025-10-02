import { FaCommentAlt } from 'react-icons/fa';
import { Service } from '@/types/services';

const consulting: Service = {
  id: 'consulting',
  icon: FaCommentAlt,
  title: {
    gb: 'Consulting',
    ua: 'Консалтинг',
    de: 'Beratung',
    pl: 'Konsulting',
    fr: 'Conseil',
    it: 'Consulenza',
  },
  description: {
    gb: 'We provide expert advice to improve your project strategy and outcomes',
    ua: 'Надаємо експертні поради для покращення стратегії та результатів вашого проєкту',
    de: 'Wir bieten fachkundige Beratung zur Verbesserung Ihrer Projektstrategie und Ergebnisse',
    pl: 'Oferujemy profesjonalne doradztwo w celu poprawy strategii i wyników projektu',
    fr: 'Nous fournissons des conseils d’experts pour améliorer la stratégie et les résultats de votre projet',
    it: 'Forniamo consulenza esperta per migliorare la strategia e i risultati del tuo progetto',
  },
};

export default consulting;