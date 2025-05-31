// src/data/benefitsDe.ts
import { FaMobileAlt, FaBolt, FaSearch, FaCode, FaPaintBrush, FaHandshake, FaCommentDots, FaShieldAlt } from "react-icons/fa";
import type { BenefitItem } from '@/types/langTypes';

const benefitsDe: BenefitItem[] = [
  {
    id: 'adaptive_design',
    icon: FaMobileAlt,
    title: "Responsives Design",
    description: "Ihre Webseite sieht auf Telefon, Tablet und Desktop perfekt aus",
  },
  {
    id: 'fast_loading',
    icon: FaBolt,
    title: "Schnelle Ladezeiten",
    description: "Seiten laden sofort, was den Benutzerkomfort erhöht",
  },
  {
    id: 'seo_optimization',
    icon: FaSearch,
    title: "SEO-Optimierung",
    description: "Die Webseite ist leicht in Suchmaschinen wie Google zu finden",
  },
  {
    id: 'modern_technologies',
    title: "Moderne Technologien",
    description: "Wir verwenden nur aktuelle und bewährte Entwicklungstools",
  },
  {
    id: 'clean_code',
    icon: FaCode,
    title: "Sauberer Code",
    description: "Das Projekt ist einfach zu warten und in Zukunft weiterzuentwickeln",
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
    title: "Support nach dem Start",
    description: "Wir garantieren Hilfe auch nach Projektabschluss",
  },
  {
    id: 'interactive_forms',
    icon: FaCommentDots,
    title: "Interaktive Formulare",
    description: "Kunden können Sie über die Webseite leicht kontaktieren",
  },
  {
    id: 'security_stability',
    icon: FaShieldAlt,
    title: "Sicherheit und Stabilität",
    description: "Die Webseite läuft zuverlässig und ist gegen häufige Fehler geschützt",
  }
];

export default benefitsDe;
