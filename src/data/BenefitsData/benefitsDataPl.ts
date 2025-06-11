import {
  FaMobileAlt,
  FaBolt,
  FaSearch,
  FaCode,
  FaPaintBrush,
  FaHandshake,
  FaCommentDots,
  FaShieldAlt,
  FaLaptopCode,
  FaEdit,
  FaUniversalAccess,
  FaGlobe,
} from "react-icons/fa";
import type { BenefitItem } from '@/types/langTypes';

const benefitsPl: BenefitItem[] = [
  {
    id: 'adaptive_design',
    icon: FaMobileAlt,
    title: "Responsywny design",
    description: "Twoja strona będzie wyglądać świetnie na telefonie, tablecie i komputerze",
  },
  {
    id: 'fast_loading',
    icon: FaBolt,
    title: "Szybkie ładowanie",
    description: "Strony ładują się błyskawicznie, co poprawia komfort użytkownika",
  },
  {
    id: 'seo_optimization',
    icon: FaSearch,
    title: "Optymalizacja SEO",
    description: "Strona łatwo znajdowana w wyszukiwarkach takich jak Google",
  },
  {
    id: 'modern_technologies',
    icon: FaLaptopCode,
    title: "Nowoczesne technologie",
    description: "Używamy tylko aktualnych i sprawdzonych narzędzi",
  },
  {
    id: 'clean_code',
    icon: FaCode,
    title: "Czysty kod",
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
    title: "Wsparcie po wdrożeniu",
    description: "Oferujemy pomoc nawet po zakończeniu projektu",
  },
  {
    id: 'interactive_forms',
    icon: FaCommentDots,
    title: "Interaktywne formularze",
    description: "Klienci mogą łatwo się z Tobą skontaktować przez stronę",
  },
  {
    id: 'security_stability',
    icon: FaShieldAlt,
    title: "Bezpieczeństwo i stabilność",
    description: "Strona działa niezawodnie i jest chroniona przed błędami",
  },
  {
    id: 'easy_content_editing',
    icon: FaEdit,
    title: "Łatwa edycja treści",
    description: "Bezproblemowo aktualizuj teksty, zdjęcia i produkty",
  },
  {
    id: 'accessibility',
    icon: FaUniversalAccess,
    title: "Dostępność (a11y)",
    description: "Strona przyjazna dla wszystkich, także dla osób z niepełnosprawnościami",
  },
  {
    id: 'multilingual_support',
    icon: FaGlobe,
    title: "Wielojęzyczność",
    description: "Strona może działać w wielu językach, by dotrzeć do większej grupy odbiorców",
  }
];

export default benefitsPl;
