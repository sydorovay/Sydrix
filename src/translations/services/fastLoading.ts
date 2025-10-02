import { FaBolt } from 'react-icons/fa';
import { Service } from '../../types/services';

const fastLoading: Service = {
  id: 'fast_loading',
  icon: FaBolt,
  title: {
    gb: 'Fast Loading',
    ua: 'Швидке завантаження',
    de: 'Schnelles Laden',
    pl: 'Szybkie ładowanie',
    fr: 'Chargement rapide',
    it: 'Caricamento Veloce',
  },
  description: {
    gb: 'Pages load instantly, enhancing user comfort',
    ua: 'Сторінки завантажуються миттєво, покращуючи комфорт користувача',
    de: 'Seiten laden sofort, was den Benutzerkomfort verbessert',
    pl: 'Strony ładują się natychmiast, zwiększając komfort użytkownika',
    fr: 'Les pages se chargent instantanément, améliorant le confort utilisateur',
    it: 'Le pagine si aprono all’istante, migliorando l’esperienza utente',
  },
};

export default fastLoading;
