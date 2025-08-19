import React from 'react';
import PortfolioSection from '@/components/Section/PortfolioSection/PortfolioSection';
import { useLanguageContext } from '@/context/LanguageProvider';
import { LangData, TFunction, TranslateString } from '@/types/langTypes';
import { PortfolioItem } from '@/types/portfolio';
import portfolioItemsData from '@/data/portfolioItems'; // базові дані без перекладу

interface Props {
  theme: 'light' | 'dark';
}

// Допоміжна функція для перекладу тільки рядків
const tString = (t: TFunction): TranslateString => (key) => {
  const val = t(key);
  return typeof val === 'string' ? val : '';
};

const PortfolioPage: React.FC<Props> = ({ theme }) => {
  const { t } = useLanguageContext(); // TFunction з контексту
  const translate = tString(t);

  const portfolioItems: PortfolioItem[] = portfolioItemsData.map((item, idx) => ({
    id: item.id,
    name: item.name,
    title: translate('portfolioTitle'),
    link: translate('portfolioLink'),
    imgSrc: item.images[0] || '',
    altText: `Project ${idx + 1} image`,
    images: item.images,
    description: 'Короткий опис проекту',
    portfolioDescription: 'Повний опис проекту',
  }));

  return (
    <main data-theme={theme}>
      <PortfolioSection
        portfolioItems={portfolioItems}
        t={translate}
        theme={theme}
        onOpen={(id: string) => console.log('Opened portfolio item with id:', id)}
      />
    </main>
  );
};

export default PortfolioPage;
