import type { BenefitItem } from '@/types/langTypes';
import services from '../translations/services/services';
import { LangCode } from '@/types/langTypes';

/**
 * Повертає масив BenefitItem відповідно до мови.
 */
export const mapServicesToBenefits = (lang: LangCode): BenefitItem[] => {
  return services.map(service => ({
    id: service.id,
    icon: service.icon,
    title: service.title[lang],
    description: service.description[lang],
  }));
};
