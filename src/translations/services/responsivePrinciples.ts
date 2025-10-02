import { FaMobileAlt } from 'react-icons/fa';
import { Service } from '@/types/services';

const adaptiveDesign: Service = {
  id: 'adaptive_design',
  icon: FaMobileAlt,
  title: {
    gb: 'Responsive Design',
    ua: 'Адаптивний дизайн',
    de: 'Reaktionsfähiges Design',
    pl: 'Responsywny design',
    fr: 'Design adaptatif',
    it: 'Design responsivo',
  },
  description: {
    gb: 'Website looks perfect on all devices.',
    ua: 'Сайт виглядає ідеально на всіх пристроях.',
    de: 'Website sieht auf allen Geräten perfekt aus.',
    pl: 'Strona wygląda idealnie na wszystkich urządzeniach.',
    fr: 'Le site est parfait sur tous les appareils.',
    it: 'Il sito è perfetto su tutti i dispositivi.',
  },
};

export default adaptiveDesign;