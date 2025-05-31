// src/data/benefitsFr.ts
import { FaMobileAlt, FaBolt, FaSearch, FaCode, FaPaintBrush, FaHandshake, FaCommentDots, FaShieldAlt } from "react-icons/fa";
import type { BenefitItem } from '@/types/langTypes';

const benefitsFr: BenefitItem[] = [
  {
    id: 'adaptive_design',
    icon: FaMobileAlt,
    title: "Design adaptatif",
    description: "Votre site sera parfait sur téléphone, tablette et ordinateur",
  },
  {
    id: 'fast_loading',
    icon: FaBolt,
    title: "Chargement rapide",
    description: "Les pages s’ouvrent instantanément, améliorant le confort des utilisateurs",
  },
  {
    id: 'seo_optimization',
    icon: FaSearch,
    title: "Optimisation SEO",
    description: "Le site est facilement trouvé sur les moteurs de recherche comme Google",
  },
  {
    id: 'modern_technologies',
    title: "Technologies modernes",
    description: "Nous utilisons uniquement des outils de développement actuels et éprouvés",
  },
  {
    id: 'clean_code',
    icon: FaCode,
    title: "Code clair",
    description: "Le projet est facile à maintenir et à développer à l’avenir",
  },
  {
    id: 'professional_design',
    icon: FaPaintBrush,
    title: "Design professionnel",
    description: "Nous aidons à créer une interface élégante et conviviale",
  },
  {
    id: 'post_launch_support',
    icon: FaHandshake,
    title: "Support après lancement",
    description: "Nous garantissons une assistance même après la fin du projet",
  },
  {
    id: 'interactive_forms',
    icon: FaCommentDots,
    title: "Formulaires interactifs",
    description: "Les clients pourront facilement vous contacter via le site",
  },
  {
    id: 'security_stability',
    icon: FaShieldAlt,
    title: "Sécurité et stabilité",
    description: "Le site fonctionne de manière fiable et est protégé contre les erreurs courantes",
  }
];

export default benefitsFr;
