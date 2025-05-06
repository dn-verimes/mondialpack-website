import React from 'react';
import { motion } from 'framer-motion';
import { Building, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const ProductionFacilities: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-secondary mb-6">
            {t('home.facilities.title')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Facilities Stack */}
          <div className="space-y-8">
            {/* Netherlands Facility */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-alice rounded-xl p-8 glass-morphism"
            >
              <div className="flex items-start mb-6">
                <Building className="text-primary mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-2xl font-medium text-secondary mb-2">{t('home.facilities.netherlands.title')}</h3>
                  <p className="text-secondary/80 mb-4">
                    {t('home.facilities.netherlands.description')}
                  </p>
                  <div className="flex items-center text-secondary/60">
                    <MapPin className="mr-2" size={16} />
                    <address className="not-italic">
                      {t('home.facilities.netherlands.address.company')}<br />
                      {t('home.facilities.netherlands.address.street')}<br />
                      {t('home.facilities.netherlands.address.postal')}<br />
                      {t('home.facilities.netherlands.address.country')}
                    </address>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Spain Facility */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-alice rounded-xl p-8 glass-morphism"
            >
              <div className="flex items-start mb-6">
                <Building className="text-primary mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-2xl font-medium text-secondary mb-2">{t('home.facilities.spain.title')}</h3>
                  <p className="text-secondary/80 mb-4">
                    {t('home.facilities.spain.description')}
                  </p>
                  <div className="flex items-center text-secondary/60">
                    <MapPin className="mr-2" size={16} />
                    <address className="not-italic">
                      {t('home.facilities.spain.address.company')}<br />
                      {t('home.facilities.spain.address.street')}<br />
                      {t('home.facilities.spain.address.postal')}<br />
                      {t('home.facilities.spain.address.country')}
                    </address>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Production Line Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <img 
              src="/assets/Fabric.svg" 
              alt={t('home.facilities.title')} 
              className="w-full max-w-[600px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductionFacilities; 