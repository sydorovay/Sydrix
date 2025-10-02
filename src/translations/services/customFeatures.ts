import { FaCogs } from 'react-icons/fa';
import { Service } from '@/types/services';

const customFeatures: Service = {
  id: 'custom_features',
  icon: FaCogs,
  title: {
    gb: 'Custom Features',
    ua: 'Індивідуальні функції',
    de: 'Individuelle Funktionen',
    pl: 'Funkcje niestandardowe',
    fr: 'Fonctionnalités personnalisées',
    it: 'Funzionalità Personalizzate',
  },
  description: {
    gb: 'We add unique features tailored to your needs',
    ua: 'Додаємо унікальні функції, адаптовані до ваших потреб',
    de: 'Wir fügen einzigartige Funktionen hinzu, die auf Ihre Bedürfnisse zugeschnitten sind',
    pl: 'Dodajemy unikalne funkcje dostosowane do Twoich potrzeb',
    fr: 'Nous ajoutons des fonctionnalités uniques adaptées à vos besoins',
    it: 'Aggiungiamo funzioni uniche su misura per le tue esigenze',
  },
};

export default customFeatures;
