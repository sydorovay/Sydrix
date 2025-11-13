import { PortfolioItem } from '../types/portfolio';

/** Типи локалізованих ключів перекладу для портфоліо */
type LangData = {
  portfolioLink: string;
  portfolioDescription1: string;
  portfolioDescription2: string;
  portfolioDescription3: string;
  portfolioDescription4: string;
  portfolioDescription5: string;
  portfolioDescription6: string;
  portfolioTitle1: string;
  portfolioTitle2: string;
  portfolioTitle3: string;
  portfolioTitle4: string;
  portfolioTitle5: string;
  portfolioTitle6: string;
};

type TranslateFn = <K extends keyof LangData>(key: K) => LangData[K];

/** Локалізовані дані портфоліо */
export const portfolioData = (t: TranslateFn)=> [
  {
    id: 'portfolio-1',
    name: 'Portfolio CV Site',
    link: t('portfolioLink'),
    imgSrc: '/portfolio/project1.webp',
    altText: 'Portfolio CV Site',
    description: t('portfolioDescription1'),
    title: t('portfolioTitle1'),
  },
  {
    id: 'portfolio-2',
    name: 'Portfolio CV Site',
    link: t('portfolioLink'),
    imgSrc: '/portfolio/project2.webp',
    altText: 'Portfolio CV Site',
    description: t('portfolioDescription2'),
    title: t('portfolioTitle2'),
  },
  {
    id: 'portfolio-3',
    name: 'Portfolio CV Site',
    link: t('portfolioLink'),
    imgSrc: '/portfolio/project3.webp',
    altText: 'Portfolio CV Site',
    description: t('portfolioDescription3'),
    title: t('portfolioTitle3'),
  },
  {
    id: 'portfolio-4',
    name: 'Portfolio CV Site',
    link: t('portfolioLink'),
    imgSrc: '/portfolio/project4.webp',
    altText: 'Portfolio CV Site',
    description: t('portfolioDescription4'),
    title: t('portfolioTitle4'),
  },
  {
    id: 'portfolio-5',
    name: 'Portfolio CV Site',
    link: t('portfolioLink'),
    imgSrc: '/portfolio/project5.webp',
    altText: 'Portfolio CV Site',
    description: t('portfolioDescription5'),
    title: t('portfolioTitle5'),
  },
  {
    id: 'portfolio-6',
    name: 'Portfolio CV Site',
    link: t('portfolioLink'),
    imgSrc: '/portfolio/project6.webp',
    altText: 'Portfolio CV Site',
    description: t('portfolioDescription6'),
    title: t('portfolioTitle6'),
  },
];
