export interface SanityCapability {
  _id: string;
  _type: 'capability';
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
  };
  specifications: string[];
  icon: string;
  category: 'format' | 'packaging';
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