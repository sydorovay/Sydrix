import { FaHandshake } from 'react-icons/fa';
import { Service } from '@/types/services';

const postLaunchSupport: Service = {
  id: 'post_launch_support',
  icon: FaHandshake,
  title: {
    gb: 'Post-launch Support',
    ua: 'Підтримка після запуску',
    de: 'Support nach dem Start',
    pl: 'Wsparcie po uruchomieniu',
    fr: 'Support post-lancement',
    it: 'Supporto Post-Lancio',
  },
  description: {
    gb: 'We guarantee help even after project completion',
    ua: 'Гарантуємо допомогу навіть після завершення проєкту',
    de: 'Wir garantieren Hilfe auch nach Projektabschluss',
    pl: 'Gwarantujemy pomoc nawet po zakończeniu projektu',
    fr: 'Nous garantissons de l’aide même après la fin du projet',
    it: 'Forniamo supporto anche dopo la fine del progetto',
  },
};

export default postLaunchSupport;
