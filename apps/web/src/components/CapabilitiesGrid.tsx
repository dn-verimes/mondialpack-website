import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useCapabilities } from '@/hooks/useCapabilities';
import { SanityCapability } from '@/types/sanity';
import { Skeleton } from '@/components/ui/skeleton';

interface CapabilityItemProps {
  capability: SanityCapability;
  index: number;
}

const CapabilityItem: React.FC<CapabilityItemProps> = ({ capability, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.08
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "relative flex flex-col items-center p-6 backdrop-blur-md bg-white rounded-2xl",
        "border border-gray-100 shadow-soft hover:shadow-md transition-all duration-300",
        "min-h-[200px]"
      )}
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
        <span className="text-3xl text-primary">{capability.icon}</span>
      </div>
      <h3 className="text-xl font-medium text-center mb-2">{capability.title}</h3>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center p-6 bg-white rounded-2xl"
      >
        <p className="text-secondary/80 text-center">{capability.description}</p>
      </motion.div>
    </motion.div>
  );
};

const CapabilitiesGrid: React.FC = () => {
  const { data: capabilities, isLoading } = useCapabilities();

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-64 w-full rounded-2xl" />
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
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-secondary mb-4">Our Capabilities</h2>
          <p className="text-lg text-secondary/80 max-w-3xl mx-auto">
            From formulation to finished product, we offer comprehensive solutions in various formats and packaging options.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities?.map((capability, index) => (
            <CapabilityItem key={capability._id} capability={capability} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesGrid; 