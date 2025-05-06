import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ value, suffix, label }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-medium text-primary mb-2">
        {value}{suffix}
      </div>
      <div className="text-secondary/80">{label}</div>
    </motion.div>
  );
};

const KpiCounter: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="bg-accent py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-secondary mb-4">{t('home.kpi.title')}</h2>
          <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
            {t('home.kpi.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter value={150} suffix="+" label={t('home.kpi.metrics.products')} />
          <Counter value={98} suffix="%" label={t('home.kpi.metrics.satisfaction')} />
          <Counter value={25} label={t('home.kpi.metrics.countries')} />
          <Counter value={10000} suffix="+" label={t('home.kpi.metrics.production')} />
        </div>
      </div>
    </section>
  );
};

export default KpiCounter;
