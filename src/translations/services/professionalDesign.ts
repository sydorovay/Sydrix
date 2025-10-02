import { FaPaintBrush } from 'react-icons/fa';
import { Service } from '@/types/services';

const professionalDesign: Service = {
  id: 'professional_design',
  icon: FaPaintBrush,
  title: {
    gb: 'Professional Design',
    ua: 'Професійний дизайн',
    de: 'Professionelles Design',
    pl: 'Profesjonalny design',
    fr: 'Design professionnel',
    it: 'Design Professionale',
  },
  description: {
    gb: 'We help create a stylish and user-friendly interface',
    ua: 'Допомагаємо створити стильний та зручний інтерфейс',
    de: 'Wir helfen, eine stilvolle und benutzerfreundliche Oberfläche zu erstellen',
    pl: 'Pomagamy stworzyć stylowy i przyjazny interfejs',
    fr: 'Nous aidons à créer une interface élégante et conviviale',
    it: 'Ti aiutiamo a creare un’interfaccia elegante e facile da usare',
  },
};

export default professionalDesign;
