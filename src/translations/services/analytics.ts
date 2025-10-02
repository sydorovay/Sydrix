import { FaChartLine } from 'react-icons/fa';
import { Service } from '@/types/services';

const analytics: Service = {
  id: 'analytics',
  icon: FaChartLine,
  title: {
    gb: 'Analytics & Insights',
    ua: 'Аналітика та статистика',
    de: 'Analysen & Einblicke',
    pl: 'Analiza i statystyki',
    fr: 'Analytique & Insights',
    it: 'Analisi e Insights',
  },
  description: {
    gb: 'Track your visitors and understand user behavior for better decisions',
    ua: 'Відстежуйте відвідувачів і аналізуйте поведінку користувачів для кращих рішень',
    de: 'Verfolgen Sie Ihre Besucher und verstehen Sie das Nutzerverhalten für bessere Entscheidungen',
    pl: 'Śledź odwiedzających i analizuj zachowanie użytkowników, aby podejmować lepsze decyzje',
    fr: 'Suivez vos visiteurs et comprenez le comportement des utilisateurs pour de meilleures décisions',
    it: 'Traccia i visitatori e comprendi il comportamento degli utenti per prendere decisioni migliori',
  },
};

export default analytics;
