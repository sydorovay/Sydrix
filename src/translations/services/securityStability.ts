import { FaShieldAlt } from 'react-icons/fa';
import { Service } from '@/types/services';

const securityStability: Service = {
  id: 'security_stability',
  icon: FaShieldAlt,
  title: {
    gb: 'Security and Stability',
    ua: 'Безпека та стабільність',
    de: 'Sicherheit und Stabilität',
    pl: 'Bezpieczeństwo i stabilność',
    fr: 'Sécurité et stabilité',
    it: 'Sicurezza e Stabilità',
  },
  description: {
    gb: 'The site runs reliably and is protected against common errors',
    ua: 'Сайт працює надійно і захищений від поширених помилок',
    de: 'Die Website läuft zuverlässig und ist gegen häufige Fehler geschützt',
    pl: 'Strona działa niezawodnie i jest chroniona przed typowymi błędami',
    fr: 'Le site fonctionne de manière fiable et est protégé contre les erreurs courantes',
    it: 'Il sito funziona in modo affidabile ed è protetto da errori comuni',
  },
};

export default securityStability;
