// src/pages/PortfolioPage.tsx
import React from 'react';
import PortfolioSection from '@/components/Section/PortfolioSection/PortfolioSection';
import portfolioItems from '@/data/portfolioItems';
import { createTranslator } from '@/utils/translator';
import { LangCode } from '@/types/langTypes';

interface Props {
  lang?: LangCode;
  theme: 'light' | 'dark';
}

const PortfolioPage: React.FC<Props> = ({ lang, theme }) => {
  const t = createTranslator(lang);
  return (
    <main data-theme={theme}>
      <PortfolioSection
        t={t}
        theme={theme}
        portfolioItems={portfolioItems}
      />
    </main>
  );
};

export default PortfolioPage;
