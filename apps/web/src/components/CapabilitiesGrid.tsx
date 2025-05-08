import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useCapabilities } from '@/hooks/useCapabilities';
import { SanityCapability } from '@/types/sanity';
import { Skeleton } from '@/components/ui/skeleton';
import { urlFor } from '@/lib/sanity';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface CapabilityItemProps {
  capability: SanityCapability;
  index: number;
}

const CapabilityItem: React.FC<CapabilityItemProps> = ({ capability, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const getImageUrl = (image: any) => {
    if (!image) return null;
    
    // If the image is still uploading, use the preview image
    if (image._upload?.previewImage) {
      return image._upload.previewImage;
    }
    
    // If the image is fully processed, use urlFor
    if (image.asset?._ref) {
      return urlFor(image).width(120).height(120).url();
    }
    
    return null;
  };

  const handleClick = () => {
    const titleSlug = capability.title
      .toLowerCase()
      .trim()
      .replace(/[\u200B-\u200D\uFEFF]/g, '') // Remove zero-width spaces
      .replace(/[^a-z0-9]+/g, '-') // Replace any non-alphanumeric chars with hyphens
      .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
    navigate(`/capabilities/${capability._id}/${titleSlug}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      className={cn(
        "relative flex flex-col items-center p-6 backdrop-blur-md bg-white rounded-2xl",
        "border border-gray-100 shadow-soft hover:shadow-lg transition-all duration-300",
        "min-h-[200px] cursor-pointer"
      )}
    >
      {/* Image Container */}
      <div className="w-24 h-24 mb-4">
        {capability.image ? (
          <img 
            src={getImageUrl(capability.image)} 
            alt={capability.title}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full bg-primary/10 flex items-center justify-center rounded-lg">
            <span className="text-3xl text-primary">{capability.icon}</span>
          </div>
        )}
      </div>

      {/* Title Only */}
      <h3 className="text-lg font-medium text-center">{capability.title}</h3>

      {/* Hover Overlay with Description */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center p-6 rounded-2xl"
      >
        <h3 className="text-lg font-medium mb-3">{capability.title}</h3>
        <p className="text-secondary/80 text-sm text-center">{capability.description}</p>
      </motion.div>
    </motion.div>
  );
};

const CapabilitiesGrid: React.FC = () => {
  const { data: capabilities, isLoading } = useCapabilities();
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i} className="h-[200px] w-full rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-secondary mb-4">{t('home.capabilities.title')}</h2>
          <p className="text-lg text-secondary/80 max-w-3xl mx-auto">
            {t('home.capabilities.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {capabilities?.map((capability, index) => (
            <CapabilityItem key={capability._id} capability={capability} index={index} />
          ))}
        </div>

        {/* Production Line Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center"
        >
          <img 
            src="/assets/Line-of-production.svg" 
            alt="Production Line" 
            className="w-full max-w-[800px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilitiesGrid; 