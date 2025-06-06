// src/data/portfolioItems.ts
import type { PortfolioItem } from '@/types/portfolio';

const portfolioItems: PortfolioItem[] = [
  { id: 1, name: 'Project One', imgSrc: '/portfolio/project1.webp', altText: 'Project One image', description: 'Description One' },
  { id: 2, name: 'Project Two', imgSrc: '/portfolio/project2.webp', altText: 'Project Two image', description: 'Description Two' },
  { id: 3, name: 'Project Three', imgSrc: '/portfolio/project3.webp', altText: 'Project Three image', description: 'Description Three' },
  { id: 4, name: 'Project Four', imgSrc: '/portfolio/project4.webp', altText: 'Project Four image', description: 'Description Four' },
  { id: 5, name: 'Project Five', imgSrc: '/portfolio/project5.webp', altText: 'Project Five image', description: 'Description Five' },
  { id: 6, name: 'Project Six', imgSrc: '/portfolio/project6.webp', altText: 'Project Six image', description: 'Description Six' },
];

export default portfolioItems;
