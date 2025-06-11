import { FaMobileAlt, FaBolt, FaSearch, FaCode, FaPaintBrush, FaHandshake, FaCommentDots, FaShieldAlt, FaLaptopCode, FaUniversalAccess, FaGlobe, FaCogs } from "react-icons/fa";
import type { BenefitItem } from '@/types/langTypes';

const benefitsIt: BenefitItem[] = [
  {
    id: 'adaptive_design',
    icon: FaMobileAlt,
    title: "Design Responsivo",
    description: "Il tuo sito sarà perfetto su telefono, tablet e computer",
  },
  {
    id: 'fast_loading',
    icon: FaBolt,
    title: "Caricamento Veloce",
    description: "Le pagine si aprono all’istante, migliorando l’esperienza utente",
  },
  {
    id: 'seo_optimization',
    icon: FaSearch,
    title: "Ottimizzazione SEO",
    description: "Il sito sarà facilmente trovato nei motori di ricerca come Google",
  },
  {
    id: 'modern_technologies',
    icon: FaLaptopCode,
    title: "Tecnologie Moderne",
    description: "Utilizziamo solo strumenti di sviluppo aggiornati e affidabili",
  },
  {
    id: 'clean_code',
    icon: FaCode,
    title: "Codice Pulito",
    description: "Il progetto è facile da mantenere e aggiornare nel tempo",
  },
  {
    id: 'professional_design',
    icon: FaPaintBrush,
    title: "Design Professionale",
    description: "Ti aiutiamo a creare un’interfaccia elegante e facile da usare",
  },
  {
    id: 'post_launch_support',
    icon: FaHandshake,
    title: "Supporto Post-Lancio",
    description: "Forniamo supporto anche dopo la fine del progetto",
  },
  {
    id: 'interactive_forms',
    icon: FaCommentDots,
    title: "Form Contattabili",
    description: "I clienti possono contattarti facilmente tramite il sito",
  },
  {
    id: 'security_stability',
    icon: FaShieldAlt,
    title: "Sicurezza e Stabilità",
    description: "Il sito funziona in modo affidabile ed è protetto da errori comuni",
  },
  {
    id: 'accessibility',
    icon: FaUniversalAccess,
    title: "Accessibilità (a11y)",
    description: "Rendiamo il sito accessibile a tutti, anche a persone con disabilità",
  },
  {
    id: 'multilingual',
    icon: FaGlobe,
    title: "Supporto Multilingue",
    description: "Il sito può essere disponibile in più lingue per un pubblico globale",
  },
  {
    id: 'custom_features',
    icon: FaCogs,
    title: "Funzionalità Personalizzate",
    description: "Aggiungiamo funzioni uniche su misura per le tue esigenze",
  }
];

export default benefitsIt;
