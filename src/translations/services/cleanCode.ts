import { FaCode } from 'react-icons/fa';
import { Service } from '@/types/services';

const cleanCode: Service = {
  id: 'clean_code',
  icon: FaCode,
  title: {
    gb: 'Clean Code',
    ua: 'Чистий код',
    de: 'Sauberer Code',
    pl: 'Czysty kod',
    fr: 'Code propre',
    it: 'Codice Pulito',
  },
  description: {
    gb: 'The project is easy to maintain and develop in the future',
    ua: 'Проєкт легко підтримувати та розвивати у майбутньому',
    de: 'Das Projekt ist einfach zu warten und weiterzuentwickeln',
    pl: 'Projekt jest łatwy do utrzymania i dalszego rozwoju',
    fr: 'Le projet est facile à maintenir et à développer à l’avenir',
    it: 'Il progetto è facile da mantenere e aggiornare nel tempo',
  },
};

export default cleanCode;
