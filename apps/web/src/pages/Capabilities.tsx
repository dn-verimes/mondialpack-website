import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShoppingCart, Beaker, Factory, Package, Truck } from 'lucide-react';
import CapabilitiesGrid from '@/components/CapabilitiesGrid';

const Capabilities = () => {
  const { t } = useTranslation();

  const valueChainSteps = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: t('home.processFlow.steps.sourcing.title'),
      description: t('home.processFlow.steps.sourcing.description')
    },
    {
      icon: <Beaker className="w-8 h-8" />,
      title: t('home.processFlow.steps.mixing.title'),
      description: t('home.processFlow.steps.mixing.description')
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: t('home.processFlow.steps.production.title'),
      description: t('home.processFlow.steps.production.description')
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: t('home.processFlow.steps.packaging.title'),
      description: t('home.processFlow.steps.packaging.description')
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: t('home.processFlow.steps.delivery.title'),
      description: t('home.processFlow.steps.delivery.description')
    }
  ];

  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Our Capabilities"
          subtitle="Discover our range of packaging solutions"
          showButtons={false}
        />
        
        {/* Capabilities Grid */}
        <CapabilitiesGrid />

        {/* Value Chain Section */}
        <section className="py-8 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-medium text-secondary mb-3">
                {t('home.processFlow.title')}
              </h2>
              <p className="text-lg text-secondary/80 max-w-3xl mx-auto">
                {t('home.processFlow.subtitle')}
              </p>
            </motion.div>

            <div className="relative mb-4">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {valueChainSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                    <p className="text-secondary/80 text-sm">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Capabilities;
