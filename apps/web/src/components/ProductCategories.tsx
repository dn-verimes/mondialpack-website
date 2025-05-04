
import React from 'react';
import { PenTool, Tablet, Pill, Droplet, Candy, Wine, Package, ScrollText, Box, Archive } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CategoryItemProps {
  icon: React.ReactNode;
  title: string;
  index: number;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ icon, title, index }) => {
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
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "flex flex-col items-center p-4 backdrop-blur-md bg-white/20 rounded-2xl",
        "border border-white/30 shadow-soft hover:shadow-md transition-all duration-300",
      )}
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 mb-3">
        {icon}
      </div>
      <p className="font-medium text-center">{title}</p>
    </motion.div>
  );
};

const ProductCategories: React.FC = () => {
  const formats = [
    { icon: <PenTool size={24} className="text-primary" />, title: "Capsules" },
    { icon: <Tablet size={24} className="text-primary" />, title: "Tablets" },
    { icon: <Pill size={24} className="text-primary" />, title: "Softgels" },
    { icon: <Droplet size={24} className="text-primary" />, title: "Powders" },
    { icon: <Candy size={24} className="text-primary" />, title: "Gummies" }
  ];

  const packaging = [
    { icon: <Wine size={24} className="text-primary" />, title: "Bottles" },
    { icon: <Package size={24} className="text-primary" />, title: "Blisters" },
    { icon: <ScrollText size={24} className="text-primary" />, title: "Sachets" },
    { icon: <Box size={24} className="text-primary" />, title: "Stick-packs" },
    { icon: <Archive size={24} className="text-primary" />, title: "Display boxes" }
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

        <div className="space-y-12">
          {/* Formats Section */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-medium mb-6 text-secondary"
            >
              Formats
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {formats.map((item, index) => (
                <CategoryItem key={index} {...item} index={index} />
              ))}
            </div>
          </div>

          {/* Packaging Section */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-medium mb-6 text-secondary"
            >
              Packaging
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {packaging.map((item, index) => (
                <CategoryItem key={index} {...item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
