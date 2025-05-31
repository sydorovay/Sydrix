// src/data/benefitsPl.ts
import { FaMobileAlt, FaBolt, FaSearch, FaCode, FaPaintBrush, FaHandshake, FaCommentDots, FaShieldAlt } from "react-icons/fa";
import type { BenefitItem } from '@/types/langTypes';

const benefitsPl: BenefitItem[] = [
  {
    id: 'adaptive_design',
    icon: FaMobileAlt,
    title: "Responsywny design",
    description: "Twoja strona będzie wyglądać doskonale na telefonie, tablecie i komputerze",
  },
  {
    id: 'fast_loading',
    icon: FaBolt,
    title: "Szybkie ładowanie",
    description: "Strony ładują się natychmiast, co zwiększa komfort użytkowników",
  },
  {
    id: 'seo_optimization',
    icon: FaSearch,
    title: "Optymalizacja SEO",
    description: "Strona łatwo znajduje się w wyszukiwarkach, takich jak Google",
  },
  {
    id: 'modern_technologies',
    title: "Nowoczesne technologie",
    description: "Używamy tylko aktualnych i sprawdzonych narzędzi do tworzenia",
  },
  {
    id: 'clean_code',
    icon: FaCode,
    title: "Czytelny kod",
    description: "Projekt jest łatwy do utrzymania i rozwoju w przyszłości",
  },
  {
    id: 'professional_design',
    icon: FaPaintBrush,
    title: "Profesjonalny design",
    description: "Pomagamy stworzyć stylowy i wygodny interfejs",
  },
  {
    id: 'post_launch_support',
    icon: FaHandshake,
    title: "Wsparcie po uruchomieniu",
    description: "Gwarantujemy pomoc nawet po zakończeniu projektu",
  },
  {
    id: 'interactive_forms',
    icon: FaCommentDots,
    title: "Interaktywne formularze",
    description: "Klienci mogą łatwo się z Tobą kontaktować przez stronę",
  },
  {
    id: 'security_stability',
    icon: FaShieldAlt,
    title: "Ochrona i stabilność",
    description: "Strona działa niezawodnie i jest chroniona przed typowymi błędami",
  }
];

export default benefitsPl;
