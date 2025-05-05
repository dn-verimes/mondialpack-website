import React from 'react';
import { motion } from 'framer-motion';
import { Building, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProductionFacilities: React.FC = () => {
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
            Our Production Facilities
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                <h3 className="text-2xl font-medium text-secondary mb-2">Netherlands Headquarters</h3>
                <p className="text-secondary/80 mb-4">
                  Our main production facility in Enschede, equipped with state-of-the-art manufacturing capabilities.
                </p>
                <div className="flex items-center text-secondary/60">
                  <MapPin className="mr-2" size={16} />
                  <address className="not-italic">
                    Mondial Pack B.V.<br />
                    Rigtersbleek-Aalten 18<br />
                    7521 RB Enschede<br />
                    The Netherlands
                  </address>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Spain Facility */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-alice rounded-xl p-8 glass-morphism"
          >
            <div className="flex items-start mb-6">
              <Building className="text-primary mr-4 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-2xl font-medium text-secondary mb-2">Spain Production Facility</h3>
                <p className="text-secondary/80 mb-4">
                  Our specialized facility in Alhaurín de la Torre, focused on high-volume production and distribution.
                </p>
                <div className="flex items-center text-secondary/60">
                  <MapPin className="mr-2" size={16} />
                  <address className="not-italic">
                    Mondial Pack Europe S.L.<br />
                    Poligono La Moraga, nave 21B<br />
                    29130 Alhaurín de la Torre<br />
                    España
                  </address>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductionFacilities; 