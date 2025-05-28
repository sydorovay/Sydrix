import { FC } from 'react';
import { LangData } from '@/types/langTypes';

interface PortfolioPageProps {
  t: <K extends keyof LangData>(key: K) => LangData[K];
}

const PortfolioPage: FC<PortfolioPageProps> = ({ t }) => {
  return (
    <main>
      <h1>{t('portfolio') || 'Portfolio'}</h1>
      <p>{t('portfolioText') || 'Check out some of our past work here.'}</p>
    </main>
  );
};

export default PortfolioPage;
