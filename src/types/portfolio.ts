// Define TranslateFn type if not imported from elsewhere
export type TranslateFn = (key: string, ...args: any[]) => string;

export interface PortfolioItem {
  t: TranslateFn;
  id: string;
  name: string;
  title: string;
  link: string;
  imgSrc: string;
  altText: string;
  images: string[] | string;
}