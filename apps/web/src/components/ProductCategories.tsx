import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Tablet, Droplet, Candy, Wine, ScrollText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CapabilityItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const CapabilityItem: React.FC<CapabilityItemProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-soft hover:shadow-md transition-shadow"
    >
      <div className="flex flex-col">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-medium text-secondary mb-2">{title}</h3>
        <p className="text-secondary/80">{description}</p>
      </div>
    </motion.div>
  );
};

const ProductCategories: React.FC = () => {
  const { t } = useTranslation();
  
  const capabilities = [
    {
      icon: <PenTool size={28} className="text-primary" />,
      title: t('home.capabilities.categories.capsules.title'),
      description: t('home.capabilities.categories.capsules.description')
    },
    {
      icon: <Tablet size={28} className="text-primary" />,
      title: t('home.capabilities.categories.tablets.title'),
      description: t('home.capabilities.categories.tablets.description')
    },
    {
      icon: <Droplet size={28} className="text-primary" />,
      title: t('home.capabilities.categories.powders.title'),
      description: t('home.capabilities.categories.powders.description')
    },
    {
      icon: <Candy size={28} className="text-primary" />,
      title: t('home.capabilities.categories.gummies.title'),
      description: t('home.capabilities.categories.gummies.description')
    },
    {
      icon: <Wine size={28} className="text-primary" />,
      title: t('home.capabilities.categories.liquids.title'),
      description: t('home.capabilities.categories.liquids.description')
    },
    {
      icon: <ScrollText size={28} className="text-primary" />,
      title: t('home.capabilities.categories.sachets.title'),
      description: t('home.capabilities.categories.sachets.description')
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
          <h2 className="text-3xl md:text-4xl font-medium text-secondary mb-4">{t('home.capabilities.title')}</h2>
          <p className="text-lg text-secondary/80 max-w-3xl mx-auto">
            {t('home.capabilities.subtitle')}
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
