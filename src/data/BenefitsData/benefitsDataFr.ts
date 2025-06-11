import { FaMobileAlt, FaBolt, FaSearch, FaCode, FaPaintBrush, FaHandshake, FaCommentDots, FaShieldAlt, FaLaptopCode, FaUniversalAccess, FaGlobe, FaCogs } from "react-icons/fa";
import type { BenefitItem } from '@/types/langTypes';

const benefitsFr: BenefitItem[] = [
  {
    id: 'adaptive_design',
    icon: FaMobileAlt,
    title: "Design Adaptatif",
    description: "Votre site sera parfait sur téléphone, tablette et ordinateur",
  },
  {
    id: 'fast_loading',
    icon: FaBolt,
    title: "Chargement Rapide",
    description: "Les pages se chargent instantanément, améliorant l'expérience utilisateur",
  },
  {
    id: 'seo_optimization',
    icon: FaSearch,
    title: "Optimisation SEO",
    description: "Votre site sera facilement trouvé sur les moteurs de recherche comme Google",
  },
  {
    id: 'modern_technologies',
    icon: FaLaptopCode,
    title: "Technologies Modernes",
    description: "Nous utilisons uniquement des outils de développement récents et fiables",
  },
  {
    id: 'clean_code',
    icon: FaCode,
    title: "Code Propre",
    description: "Le projet est facile à maintenir et à faire évoluer",
  },
  {
    id: 'professional_design',
    icon: FaPaintBrush,
    title: "Design Professionnel",
    description: "Nous vous aidons à créer une interface élégante et conviviale",
  },
  {
    id: 'post_launch_support',
    icon: FaHandshake,
    title: "Support Après Lancement",
    description: "Nous assurons une assistance même après la fin du projet",
  },
  {
    id: 'interactive_forms',
    icon: FaCommentDots,
    title: "Formulaires Interactifs",
    description: "Les clients peuvent vous contacter facilement via le site",
  },
  {
    id: 'security_stability',
    icon: FaShieldAlt,
    title: "Sécurité et Stabilité",
    description: "Votre site fonctionnera de manière fiable et sera protégé des erreurs courantes",
  },
  {
    id: 'accessibility',
    icon: FaUniversalAccess,
    title: "Accessibilité (a11y)",
    description: "Nous rendons le site accessible à tous, y compris aux personnes en situation de handicap",
  },
  {
    id: 'multilingual',
    icon: FaGlobe,
    title: "Support Multilingue",
    description: "Votre site peut être disponible en plusieurs langues pour un public international",
  },
  {
    id: 'custom_features',
    icon: FaCogs,
    title: "Fonctionnalités Personnalisées",
    description: "Nous ajoutons des fonctions uniques selon vos besoins spécifiques",
  }
];

export default benefitsFr;
