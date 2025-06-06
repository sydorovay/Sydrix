import React from 'react';
import PortfolioSection from '@/components/Section/PortfolioSection/PortfolioSection';
import portfolioItems from '@/data/portfolioItems';

const PortfolioPage: React.FC = () => (
  <main>
    <PortfolioSection
      title="My Portfolio"
      text="Explore my recent projects."
      portfolioItems={portfolioItems}
    />
  </main>
);

export default PortfolioPage;
