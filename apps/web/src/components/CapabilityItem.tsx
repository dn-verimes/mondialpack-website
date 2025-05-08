import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { urlFor } from '@/lib/sanity';
import type { SanityCapability } from '@/types/sanity';

interface CapabilityItemProps {
  capability: SanityCapability;
}

const CapabilityItem: React.FC<CapabilityItemProps> = ({ capability }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {capability.icon && (
            <span className="text-2xl mr-3 text-primary">{capability.icon}</span>
          )}
          <h3 className="text-xl font-medium">{capability.title}</h3>
        </div>
        <p className="text-secondary/80">{capability.description}</p>
        {capability.image && (
          <div className="mt-4">
            <img
              src={urlFor(capability.image).url()}
              alt={capability.image.alt || capability.title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CapabilityItem; 