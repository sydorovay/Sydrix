import { FaMobileAlt, FaBolt, FaSearch, FaCode, FaPaintBrush, FaHandshake, FaCommentDots, FaShieldAlt, FaLaptopCode, FaUniversalAccess, FaGlobe, FaCogs } from "react-icons/fa";
import type { BenefitItem } from '@/types/langTypes';

const benefitsGb: BenefitItem[] = [
  {
    id: 'adaptive_design',
    icon: FaMobileAlt,
    title: "Responsive Design",
    description: "Your site will look perfect on phones, tablets and desktops",
  },
  {
    id: 'fast_loading',
    icon: FaBolt,
    title: "Fast Loading",
    description: "Pages load instantly, improving user experience",
  },
  {
    id: 'seo_optimization',
    icon: FaSearch,
    title: "SEO Optimization",
    description: "Your site will be easily found on search engines like Google",
  },
  {
    id: 'modern_technologies',
    icon: FaLaptopCode,
    title: "Modern Technologies",
    description: "We use only up-to-date and reliable development tools",
  },
  {
    id: 'clean_code',
    icon: FaCode,
    title: "Clean Code",
    description: "The project is easy to maintain and scale in the future",
  },
  {
    id: 'professional_design',
    icon: FaPaintBrush,
    title: "Professional Design",
    description: "We’ll help create a stylish and user-friendly interface",
  },
  {
    id: 'post_launch_support',
    icon: FaHandshake,
    title: "Post-launch Support",
    description: "We provide assistance even after the project is complete",
  },
  {
    id: 'interactive_forms',
    icon: FaCommentDots,
    title: "Interactive Forms",
    description: "Clients can easily contact you through your site",
  },
  {
    id: 'security_stability',
    icon: FaShieldAlt,
    title: "Security and Stability",
    description: "Your site will run reliably and be protected from common issues",
  },
  {
    id: 'accessibility',
    icon: FaUniversalAccess,
    title: "Accessibility (a11y)",
    description: "We make the site convenient for all users, including people with disabilities",
  },
  {
    id: 'multilingual',
    icon: FaGlobe,
    title: "Multilingual Support",
    description: "Your site can be used in several languages for a global audience",
  },
  {
    id: 'custom_features',
    icon: FaCogs,
    title: "Custom Features",
    description: "We add unique functions to meet your specific needs",
  }
];

export default benefitsGb;
