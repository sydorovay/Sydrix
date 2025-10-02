import { FaUniversalAccess } from 'react-icons/fa';
import { Service } from '@/types/services';

const accessibility: Service = {
  id: 'accessibility',
  icon: FaUniversalAccess,
  title: {
    gb: 'Accessibility (a11y)',
    ua: 'Доступність (a11y)',
    de: 'Barrierefreiheit (a11y)',
    pl: 'Dostępność (a11y)',
    fr: 'Accessibilité (a11y)',
    it: 'Accessibilità (a11y)',
  },
  description: {
    gb: 'We make the site accessible to everyone, including people with disabilities',
    ua: 'Робимо сайт доступним для всіх, зокрема людей з інвалідністю',
    de: 'Wir machen die Website für alle zugänglich, auch für Menschen mit Behinderungen',
    pl: 'Umożliwiamy dostęp do strony wszystkim, również osobom z niepełnospравністю',
    fr: 'Nous rendons le site accessible à tous, y compris aux personnes handicapées',
    it: 'Rendiamo il sito accessibile a tutti, anche a persone con disabilità',
  },
};

export default accessibility;
