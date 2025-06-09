// src/data/benefitsIt.ts
import { FaLaptopCode, FaMobileAlt, FaBolt, FaSearch, FaCode, FaPaintBrush, FaHandshake, FaCommentDots, FaShieldAlt } from "react-icons/fa";
import type { BenefitItem } from '@/types/langTypes';

const benefitsIt: BenefitItem[] = [
  {
    id: 'adaptive_design',
    icon: FaMobileAlt,
    title: "Design responsive",
    description: "Il tuo sito sarà perfetto su telefono, tablet e computer",
  },
  {
    id: 'fast_loading',
    icon: FaBolt,
    title: "Caricamento veloce",
    description: "Le pagine si aprono immediatamente, migliorando l'esperienza utente",
  },
  {
    id: 'seo_optimization',
    icon: FaSearch,
    title: "Ottimizzazione SEO",
    description: "Il sito è facilmente trovabile sui motori di ricerca come Google",
  },
  {
    id: 'modern_technologies',
    icon: FaLaptopCode,
    title: "Tecnologie moderne",
    description: "Usiamo solo strumenti di sviluppo aggiornati e collaudati",
  },
  {
    id: 'clean_code',
    icon: FaCode,
    title: "Codice chiaro",
    description: "Il progetto è facile da mantenere e sviluppare in futuro",
  },
  {
    id: 'professional_design',
    icon: FaPaintBrush,
    title: "Design professionale",
    description: "Aiutiamo a creare un’interfaccia elegante e facile da usare",
  },
  {
    id: 'post_launch_support',
    icon: FaHandshake,
    title: "Supporto post-lancio",
    description: "Garantiamo assistenza anche dopo la conclusione del progetto",
  },
  {
    id: 'interactive_forms',
    icon: FaCommentDots,
    title: "Form interattivi",
    description: "I clienti potranno contattarti facilmente tramite il sito",
  },
  {
    id: 'security_stability',
    icon: FaShieldAlt,
    title: "Sicurezza e stabilità",
    description: "Il sito funziona in modo affidabile ed è protetto dagli errori comuni",
  }
];

export default benefitsIt;
