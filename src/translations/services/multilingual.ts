import { FaGlobe } from 'react-icons/fa';
import { Service } from '@/types/services';

const multilingual: Service = {
  id: 'multilingual',
  icon: FaGlobe,
  title: {
    gb: 'Multilingual Support',
    ua: 'Підтримка кількох мов',
    de: 'Mehrsprachige Unterstützung',
    pl: 'Wsparcie wielu języków',
    fr: 'Support multilingue',
    it: 'Supporto Multilingue',
  },
  description: {
    gb: 'The site can be available in multiple languages for a global audience',
    ua: 'Сайт може бути доступним кількома мовами для глобальної аудиторії',
    de: 'Die Website kann in mehreren Sprachen für ein globales Publikum verfügbar sein',
    pl: 'Strona może być dostępna w wielu językach dla globalnej publiczności',
    fr: 'Le site peut être disponible en plusieurs langues pour un public mondial',
    it: 'Il sito può essere disponibile in più lingue per un pubblico globale',
  },
};

export default multilingual;
