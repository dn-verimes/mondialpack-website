import { PortableTextBlock } from '@portabletext/types';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface Capability {
  _id: string;
  language: string;
  title: Record<string, string>;
  description: Record<string, string>;
  icon?: string;
  image?: SanityImageSource;
  order?: number;
  category?: string;
  longDescription?: PortableTextBlock[];
  keyFeatures?: {
    icon?: string;
    title: string;
    description: string;
  }[];
  specifications?: {
    name: string;
    value: string;
  }[];
  applications?: string[];
  benefits?: {
    title: string;
    description: string;
  }[];
  processSteps?: {
    title: string;
    description: string;
    image?: SanityImageSource;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
} 