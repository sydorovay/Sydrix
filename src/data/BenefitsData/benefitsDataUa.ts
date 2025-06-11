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

const benefitsUa: BenefitItem[] = [
  {
    id: 'adaptive_design',
    icon: FaMobileAlt,
    title: "Адаптивний дизайн",
    description: "Ваш сайт буде виглядати бездоганно на телефоні, планшеті та комп’ютері",
  },
  {
    id: 'fast_loading',
    icon: FaBolt,
    title: "Швидке завантаження",
    description: "Сторінки відкриваються миттєво, що підвищує комфорт користувачів",
  },
  {
    id: 'seo_optimization',
    icon: FaSearch,
    title: "SEO-оптимізація",
    description: "Сайт легко знаходиться у пошукових системах, таких як Google",
  },
  {
    id: 'modern_technologies',
    icon: FaLaptopCode,
    title: "Сучасні технології",
    description: "Використовуємо лише актуальні й перевірені інструменти розробки",
  },
  {
    id: 'clean_code',
    icon: FaCode,
    title: "Зрозумілий код",
    description: "Проєкт легко підтримувати та розвивати в майбутньому",
  },
  {
    id: 'professional_design',
    icon: FaPaintBrush,
    title: "Професійний дизайн",
    description: "Допоможемо створити стильний і зручний інтерфейс",
  },
  {
    id: 'post_launch_support',
    icon: FaHandshake,
    title: "Підтримка після запуску",
    description: "Гарантуємо допомогу навіть після завершення проєкту",
  },
  {
    id: 'interactive_forms',
    icon: FaCommentDots,
    title: "Інтерактивні форми",
    description: "Клієнти зможуть легко зв’язатися з вами через сайт",
  },
  {
    id: 'security_stability',
    icon: FaShieldAlt,
    title: "Захист і стабільність",
    description: "Сайт працює надійно та захищений від типових помилок",
  },
  {
    id: 'easy_content_editing',
    icon: FaEdit,
    title: "Зручне редагування контенту",
    description: "Легко оновлюй тексти, фото чи товари без потреби у розробнику",
  },
  {
    id: 'accessibility',
    icon: FaUniversalAccess,
    title: "Доступність (a11y)",
    description: "Сайт зручний для всіх користувачів, включно з людьми з інвалідністю",
  },
  {
    id: 'multilingual_support',
    icon: FaGlobe,
    title: "Підтримка кількох мов",
    description: "Сайт може працювати кількома мовами для ширшої аудиторії",
  }
];

export default benefitsUa;
