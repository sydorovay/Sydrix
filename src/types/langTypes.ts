import { ReactNode } from 'react';

export enum LangCode {
  UA = 'ua',
  GB = 'gb',
  PL = 'pl',
  DE = 'de',
  FR = 'fr',
  IT = 'it',
}

export const LANG_CODES: LangCode[] = [
  LangCode.UA,
  LangCode.GB,
  LangCode.PL,
  LangCode.DE,
  LangCode.FR,
  LangCode.IT,
];


export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export type LangData = {
  home: string;
  about: string;
  aboutTitle: string;
  aboutText: string;
  aboutSubtitle: string;
  aboutButton: string;
  aboutButtonText: string;
  aboutButtonLink: string;
  aboutImageAlt: string;
  aboutList: string[];
  aboutQuote: string;
  aboutQuoteAuthor: string;
  aboutStats: { label: string; value: string }[];
  aboutMission: string;
  aboutVision: string;
  aboutValues: string[];
  aboutTeam: string;
  aboutPartners: string;
  aboutClients: string;
  aboutHistory: string;

  services: string;
  servicesTitle: string;
  servicesContactText: string;
  servicesButton: string;
  servicesFormTitle: string;
  servicesFormPlaceholder: string;
  servicesFormButton: string;

  portfolio: string;
  portfolioTitle: string;
  portfolioText: string;
  portfolioLabel: string;

  testimonials: string;
  testimonialsText: string;

  blogTitle: string;

  contacts: string;
  contactsTitle: string;
  phone: string;
  email: string;

  faq: string;
  partnership: string;

  showAllButton: string;
  hideAllButton: string;

  title: string;
  subtitle: string[];
  button: string;

  benefitsTitle: string;
  benefitsSubtitle: string;
  benefitsText: string;
  benefits: BenefitItem[];

  goTo: string;
  footer: string;

  heroTitle: string;
  heroSubtitle: string[];
  heroButton: string;

  portfolioLink: string;
  portfolioLinkText: string;

  serviceDetailsTitle: string;
  serviceDetailsText: string;
  servicesDetailsButton: string;
  servicesDetailsSubtitle: string;
  servicesDetailsList: string[];

  notFoundTitle: string;
  notFoundText: string;
  notFoundButton: string;

  cookieConsentText: string;
  cookieConsentButton: string;
  privacyPolicy: string;
  termsOfService: string;
  loading: string;
  error: string;
  success: string;
  language: string;
  selectLanguage: string;
  close: string;

  serviceDetailsBack: string;
  faqTitle: string;
  faqSubtitle: string;
  faqText: string;
  team: string;
  teamTitle: string;
  teamText: string;
  process: string;
  processTitle: string;
  processText: string;
  technologies: string;
  technologiesTitle: string;
  technologiesText: string;
  price: string;
  priceTitle: string;
  priceText: string;

  processSubtitle: string;
  teamSubtitle: string;
  teamButton: string;
  teamButtonText: string;
  processButton: string;
  processButtonText: string;
  technologiesSubtitle: string;
  technologiesButton: string;
  technologiesButtonText: string;
  priceSubtitle: string;
  priceButton: string;
  priceButtonText: string;

  teamButtonLink: string;
  portfolioButton: string;
  portfolioButtonText: string;
  portfolioButtonLink: string;
  blogButton: string;
  blogButtonText: string;
  blogButtonLink: string;
  contactsButton: string;
  contactsButtonText: string;
  contactsButtonLink: string;
  faqButton: string;
  faqButtonText: string;
  faqButtonLink: string;
  notFoundButtonText: string;
  cookieConsentMore: string;
  privacyPolicyButton: string;
  termsOfServiceButton: string;

  contactsButtonLinkText: string;
  cookieConsentLink: string;
  privacyPolicyButtonText: string;
  termsOfServiceButtonText: string;
  aboutButtonLinkText: string;
  servicesButtonLinkText: string;
  portfolioButtonLinkText: string;
  blogButtonLinkText: string;
  faqButtonLinkText: string;
  teamButtonLinkText: string;
  processButtonLinkText: string;
  technologiesButtonLinkText: string;
  priceButtonLinkText: string;
  notFoundButtonLinkText: string;
  cookieConsentButtonText: string;
  cookieConsentMoreText: string;

  faqQuestion: string;
  faqAnswer: string;
  priceButtonLink: string;
  processButtonLink: string;
  technologiesButtonLink: string;
  servicesButtonLink: string;
  notFoundButtonLink: string;
  privacyPolicyLink: string;
  termsOfServiceLink: string;

  partnershipTitle: string;
  partnershipSubtitle: string;
  partnershipText: string;
  notFoundBackButton: string;
  extraField1: string;
  extraField2: string;

  notFoundLink: string;
  cookieConsent: string;

  openProjectLabel: string;
  modalCloseLabel: string;
  modalPrevLabel: string;
  modalNextLabel: string;
  openProject: string;
  backToTop: string;

  portfolioItems: string;
  portfolioDescription: string;

}; 

export type TFunction = <K extends keyof LangData>(
  key: K,
  params?: Record<string, string | number>
) => string;