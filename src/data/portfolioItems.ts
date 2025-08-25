// src/data/portfolioItems.ts
import type { PortfolioItem } from '@/types/portfolio';

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    name: "Project One",
    title: "Project One", // додали
    images: ["/portfolio/project1.webp"],
    imgSrc: "/portfolio/project1.webp", // додали
    altText: "Project One image",
    description: "Short description of Project One",
    portfolioDescription: "Full description of Project One", // додали
    link: "https://github.com/yourname/project-one",
  },
  {
    id: "2",
    name: "Project Two",
    title: "Project Two",
    images: ["/portfolio/project2.webp"],
    imgSrc: "/portfolio/project2.webp",
    altText: "Project Two image",
    description: "Short description of Project Two",
    portfolioDescription: "Full description of Project Two",
    link: "https://github.com/yourname/project-two",
  },
  {
    id: "3",
    name: "Project Three",
    title: "Project Three",
    images: ["/portfolio/project3.webp"],
    imgSrc: "/portfolio/project3.webp",
    altText: "Project Three image",
    description: "Short description of Project Three",
    portfolioDescription: "Full description of Project Three",
    link: "https://github.com/yourname/project-three",
  },
  {
    id: "4",
    name: "Project Four",
    title: "Project Four",
    images: ["/portfolio/project4.webp"],
    imgSrc: "/portfolio/project4.webp",
    altText: "Project Four image",
    description: "Short description of Project Four",
    portfolioDescription: "Full description of Project Four",
    link: "https://github.com/yourname/project-four",
  },
  {
    id: "5",
    name: "Project Five",
    title: "Project Five",
    images: ["/portfolio/project5.webp"],
    imgSrc: "/portfolio/project5.webp",
    altText: "Project Five image",
    description: "Short description of Project Five",
    portfolioDescription: "Full description of Project Five",
    link: "https://github.com/yourname/project-five",
  },
  {
    id: "6",
    name: "Project Six",
    title: "Project Six",
    images: ["/portfolio/project6.webp"],
    imgSrc: "/portfolio/project6.webp",
    altText: "Project Six image",
    description: "Short description of Project Six",
    portfolioDescription: "Full description of Project Six",
    link: "https://github.com/yourname/project-six",
  },
];

export default portfolioItems;
