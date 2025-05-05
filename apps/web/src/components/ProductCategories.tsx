import React, { useState } from 'react';
import { PenTool, Tablet, Droplet, Candy, Wine, ScrollText } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CapabilityItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const CapabilityItem: React.FC<CapabilityItemProps> = ({ icon, title, description, index }) => {
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
        {icon}
      </div>
      <h3 className="text-xl font-medium text-center mb-2">{title}</h3>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center p-6 bg-white rounded-2xl"
      >
        <p className="text-secondary/80 text-center">{description}</p>
      </motion.div>
    </motion.div>
  );
};

const ProductCategories: React.FC = () => {
  const capabilities = [
    {
      icon: <PenTool size={28} className="text-primary" />,
      title: "Capsules",
      description: "Hard-shell capsules in various sizes and materials, including vegetarian options. Custom printing and filling capabilities."
    },
    {
      icon: <Tablet size={28} className="text-primary" />,
      title: "Tablets",
      description: "Compressed tablets with precise dosing, various shapes and coatings. Specialized in both immediate and controlled release."
    },
    {
      icon: <Droplet size={28} className="text-primary" />,
      title: "Powders",
      description: "High-quality powder blends with excellent flow properties. Custom particle size distribution and mixing capabilities."
    },
    {
      icon: <Candy size={28} className="text-primary" />,
      title: "Gummies & Soft Chews",
      description: "Delicious gummies and soft chews with precise dosing. Custom shapes, flavors, and textures available."
    },
    {
      icon: <Wine size={28} className="text-primary" />,
      title: "Liquids & Sprays",
      description: "Liquid formulations and spray solutions with precise dosing. Specialized in both water and oil-based products."
    },
    {
      icon: <ScrollText size={28} className="text-primary" />,
      title: "Sachets & Stick Packs",
      description: "Single-dose sachets and stick packs for powders and granules. Custom sizes and materials available."
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, index) => (
            <CapabilityItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
