// src/types/langTypes.ts
export interface LangData {
  // Рядкові переклади для UI
  portfolioTitle: string;
  portfolioLink: string;
  showDetails: string;
  showAllButton: string;
  benefitsTitle: string;
  phone: string;
  email: string;

  // Масиви або об'єкти для секцій
  benefits: BenefitItem[];
  // інші ключі типу string[] або об'єкти можна додати тут
}

export interface BenefitItem {
  id: string;
  icon?: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  title: string;
 
}