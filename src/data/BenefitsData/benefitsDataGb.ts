// src/data/benefitsGb.ts
import { FaMobileAlt, FaBolt, FaSearch, FaCode, FaPaintBrush, FaHandshake, FaCommentDots, FaShieldAlt } from "react-icons/fa";
import type { BenefitItem } from '@/types/langTypes';

const benefitsGb: BenefitItem[] = [
  {
    id: 'adaptive_design',
    icon: FaMobileAlt,
    title: "Responsive Design",
    description: "Your website will look perfect on phone, tablet, and desktop",
  },
  {
    id: 'fast_loading',
    icon: FaBolt,
    title: "Fast Loading",
    description: "Pages load instantly, enhancing user comfort",
  },
  {
    id: 'seo_optimization',
    icon: FaSearch,
    title: "SEO Optimization",
    description: "The site is easily found on search engines like Google",
  },
  {
    id: 'modern_technologies',
    title: "Modern Technologies",
    description: "We use only up-to-date and proven development tools",
  },
  {
    id: 'clean_code',
    icon: FaCode,
    title: "Clean Code",
    description: "The project is easy to maintain and develop in the future",
  },
  {
    id: 'professional_design',
    icon: FaPaintBrush,
    title: "Professional Design",
    description: "We help create a stylish and user-friendly interface",
  },
  {
    id: 'post_launch_support',
    icon: FaHandshake,
    title: "Post-launch Support",
    description: "We guarantee help even after project completion",
  },
  {
    id: 'interactive_forms',
    icon: FaCommentDots,
    title: "Interactive Forms",
    description: "Clients can easily contact you through the site",
  },
  {
    id: 'security_stability',
    icon: FaShieldAlt,
    title: "Security and Stability",
    description: "The site runs reliably and is protected against common errors",
  }
];

export default benefitsGb;
