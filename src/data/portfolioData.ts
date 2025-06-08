import { LangData } from '@/types/langTypes';

type TranslateFn = <K extends keyof LangData>(key: K) => LangData[K];

export const portfolioData = (t: TranslateFn) => [
  {
    id: 'portfolio-1',
    name: 'Portfolio CV Site',
    link: t('portfolioLink'),
    imgSrc: '/portfolio/project1.webp',
    altText: 'Portfolio CV Site',
    description: t('portfolioDescription'), // обов’язково
    title: t('portfolioTitle')
  },
  {
    id: 'portfolio-2',
    name: 'Portfolio CV Site',
    link: t('portfolioLink'),
    imgSrc: '/portfolio/project2.webp',
    altText: 'Portfolio CV Site',
    description: t('portfolioDescription'), // обов’язково
    title: t('portfolioTitle')
  },
  {
    id: 'portfolio-3',
    name: 'Portfolio CV Site',
    link: t('portfolioLink'),
    imgSrc: '/portfolio/project3.webp',
    altText: 'Portfolio CV Site',
    description: t('portfolioDescription'), // обов’язково
    title: t('portfolioTitle')
  },
  {
    id: 'portfolio-4',
    name: 'Portfolio CV Site',
    link: t('portfolioLink'),
    imgSrc: '/portfolio/project4.webp',
    altText: 'Portfolio CV Site',
    description: t('portfolioDescription'), // обов’язково
    title: t('portfolioTitle')
  },
  {
    id: 'portfolio-5',
    name: 'Portfolio CV Site',
    link: t('portfolioLink'),
    imgSrc: '/portfolio/project5.webp',
    altText: 'Portfolio CV Site',
    description: t('portfolioDescription'), // обов’язково
    title: t('portfolioTitle')
  },
  {
    id: 'portfolio-6',
    name: 'Portfolio CV Site',
    link: t('portfolioLink'),
    imgSrc: '/portfolio/project6.webp',
    altText: 'Portfolio CV Site',
    description: t('portfolioDescription'), // обов’язково
    title: t('portfolioTitle')
  }
  // Тут можна додати інші проєкти
];
