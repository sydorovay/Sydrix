// types/translate.ts
export type TranslateFn = (key: string, ...args: any[]) => string;

// types/portfolio.ts
export interface PortfolioItem {
  id: string;
  name: string;
  title: string;
  link: string;
  imgSrc: string;
  altText: string;
  images: string[];
  description: string;
  portfolioDescription: string;
  viewOnGithub: string;
}
