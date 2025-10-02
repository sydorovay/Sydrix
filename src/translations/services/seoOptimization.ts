import { FaSearch } from 'react-icons/fa';
import { Service } from '@/types/services';

const seoOptimization: Service = {
  id: 'seo_optimization',
  icon: FaSearch,
  title: {
    gb: 'SEO Optimization',
    ua: 'SEO-оптимізація',
    de: 'SEO-Optimierung',
    pl: 'Optymalizacja SEO',
    fr: 'Optimisation SEO',
    it: 'Ottimizzazione SEO',
  },
  description: {
    gb: 'The site is easily found on search engines like Google',
    ua: 'Сайт легко знаходиться в пошукових системах, таких як Google',
    de: 'Die Website ist leicht in Suchmaschinen wie Google zu finden',
    pl: 'Strona jest łatwo znajdowana w wyszukiwarkach takich jak Google',
    fr: 'Le site est facilement trouvé sur des moteurs de recherche comme Google',
    it: 'Il sito sarà facilmente trovato nei motori di ricerca come Google',
  },
};

export default seoOptimization;
