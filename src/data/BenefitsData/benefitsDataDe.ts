import { FaMobileAlt, FaBolt, FaSearch, FaCode, FaPaintBrush, FaHandshake, FaCommentDots, FaShieldAlt, FaLaptopCode, FaUniversalAccess, FaGlobe, FaCogs } from "react-icons/fa";
import type { BenefitItem } from '@/types/langTypes';

const benefitsDe: BenefitItem[] = [
  {
    id: 'adaptive_design',
    icon: FaMobileAlt,
    title: "Responsives Design",
    description: "Ihre Website sieht auf Smartphone, Tablet und Desktop perfekt aus",
  },
  {
    id: 'fast_loading',
    icon: FaBolt,
    title: "Schnelles Laden",
    description: "Seiten laden sofort und verbessern so die Nutzererfahrung",
  },
  {
    id: 'seo_optimization',
    icon: FaSearch,
    title: "SEO-Optimierung",
    description: "Ihre Seite wird leicht in Suchmaschinen wie Google gefunden",
  },
  {
    id: 'modern_technologies',
    icon: FaLaptopCode,
    title: "Moderne Technologien",
    description: "Wir verwenden nur aktuelle und bewährte Entwicklungstools",
  },
  {
    id: 'clean_code',
    icon: FaCode,
    title: "Sauberer Code",
    description: "Das Projekt ist einfach zu pflegen und weiterzuentwickeln",
  },
  {
    id: 'professional_design',
    icon: FaPaintBrush,
    title: "Professionelles Design",
    description: "Wir helfen, eine stilvolle und benutzerfreundliche Oberfläche zu erstellen",
  },
  {
    id: 'post_launch_support',
    icon: FaHandshake,
    title: "Support nach dem Launch",
    description: "Wir bieten auch nach Projektabschluss Unterstützung an",
  },
  {
    id: 'interactive_forms',
    icon: FaCommentDots,
    title: "Interaktive Formulare",
    description: "Kunden können Sie einfach über die Website kontaktieren",
  },
  {
    id: 'security_stability',
    icon: FaShieldAlt,
    title: "Sicherheit und Stabilität",
    description: "Ihre Website läuft zuverlässig und ist vor häufigen Fehlern geschützt",
  },
  {
    id: 'accessibility',
    icon: FaUniversalAccess,
    title: "Barrierefreiheit (a11y)",
    description: "Wir gestalten die Website nutzerfreundlich für alle, auch mit Behinderungen",
  },
  {
    id: 'multilingual',
    icon: FaGlobe,
    title: "Mehrsprachigkeit",
    description: "Ihre Website ist in mehreren Sprachen für ein internationales Publikum verfügbar",
  },
  {
    id: 'custom_features',
    icon: FaCogs,
    title: "Individuelle Funktionen",
    description: "Wir entwickeln spezielle Funktionen nach Ihren Anforderungen",
  }
];

export default benefitsDe;
