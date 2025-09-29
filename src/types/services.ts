// src/types/services.ts
import { IconType } from 'react-icons';

export interface ServiceText {
  gb: string;
  ua: string;
  de: string;
  pl: string;
  fr: string;
  it: string;
}

export interface Service {
  id: string;
  icon: IconType;
  title: ServiceText;
  description: ServiceText;
}