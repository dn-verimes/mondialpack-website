import { PortableTextBlock } from '@portabletext/types';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface SanityCapability {
  _id: string;
  _type: 'capability';
  language: string;
  title: Record<string, string>;
  description: Record<string, string>;
  icon?: string;
  image?: SanityImageSource;
  fullSizeImage?: SanityImageSource;
  order?: number;
  category?: string;
  longDescription?: PortableTextBlock[];
  keyFeatures?: {
    icon?: string;
    title: string;
    description: string;
  }[];
  gallery?: Array<{
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
    caption?: string;
  }>;
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
  // Reference to translations in other languages
  translations?: Array<{
    _id: string;
    language: string;
    title: string;
    description: string;
  }>;
}

export interface SanityFormatCapability extends SanityCapability {
  category: 'format';
  sizeRange?: string;
  shellTypes?: string[];
  fillWeight?: string;
  colorPrint?: string;
  moq?: string;
  leadTime?: string;
}

export interface SanityPackagingCapability extends SanityCapability {
  category: 'packaging';
  volume?: string;
  closureTypes?: string[];
  labelArea?: string;
  packCounts?: string[];
} 