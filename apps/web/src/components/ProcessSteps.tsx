import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShieldCheck, Factory, PackageCheck, Truck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-soft"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-medium text-secondary mb-2">{title}</h3>
        <p className="text-secondary/80">{description}</p>
      </div>
    </motion.div>
  );
};

const ProcessSteps: React.FC = () => {
  const { t } = useTranslation();
  
  const steps = [
    {
      icon: <Search size={40} className="text-primary" />,
      title: t('home.process.steps.sourcing.title'),
      description: t('home.process.steps.sourcing.description'),
    },
    {
      icon: <ShieldCheck size={40} className="text-primary" />,
      title: t('home.process.steps.qualityControl.title'),
      description: t('home.process.steps.qualityControl.description'),
    },
    {
      icon: <Factory size={40} className="text-primary" />,
      title: t('home.process.steps.production.title'),
      description: t('home.process.steps.production.description'),
    },
    {
      icon: <PackageCheck size={40} className="text-primary" />,
      title: t('home.process.steps.packaging.title'),
      description: t('home.process.steps.packaging.description'),
    },
    {
      icon: <Truck size={40} className="text-primary" />,
      title: t('home.process.steps.logistics.title'),
      description: t('home.process.steps.logistics.description'),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-secondary mb-4">{t('home.process.title')}</h2>
          <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
            {t('home.process.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
