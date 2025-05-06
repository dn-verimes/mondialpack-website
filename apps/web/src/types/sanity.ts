export interface SanityCapability {
  _id: string;
  _type: 'capability';
  language: string;
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  description: string;
  image: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  };
  specifications: string[];
  icon: string;
  category: 'format' | 'packaging';
  order: number;
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