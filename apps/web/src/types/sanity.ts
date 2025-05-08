import { PortableTextBlock } from '@portabletext/types';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface SanityCapability {
  _id: string;
  _type: string;
  language: string;
  title: string;
  description: string;
  icon?: string;
  order: number;
  image?: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  category: string;
  longDescription?: any[];
  keyFeatures?: {
    title: string;
    description: string;
    icon?: string;
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
    image?: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  translations?: {
    _id: string;
    language: string;
    title: string;
    description: string;
  }[];
  slug: {
    _type: string;
    current: string;
  };
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