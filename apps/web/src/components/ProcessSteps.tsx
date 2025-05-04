
import React, { useEffect, useRef } from 'react';
import { Search, ShieldCheck, Factory, PackageCheck, Truck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        "flex flex-col items-center text-center backdrop-blur-sm",
        "bg-white/10 p-6 rounded-2xl border border-white/20 shadow-soft hover:shadow-md transition-all duration-300",
      )}
    >
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/10 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-secondary/80">{description}</p>
    </motion.div>
  );
};

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      icon: <Search size={40} className="text-primary" />,
      title: "Sourcing",
      description: "Careful selection of premium quality raw materials",
    },
    {
      icon: <ShieldCheck size={40} className="text-primary" />,
      title: "Quality Control",
      description: "Rigorous testing of all raw materials",
    },
    {
      icon: <Factory size={40} className="text-primary" />,
      title: "Production",
      description: "Manufacturing in state-of-the-art facilities",
    },
    {
      icon: <PackageCheck size={40} className="text-primary" />,
      title: "Packaging",
      description: "Custom solutions for your brand",
    },
    {
      icon: <Truck size={40} className="text-primary" />,
      title: "Logistics",
      description: "Reliable shipping and global distribution",
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
          <h2 className="text-3xl md:text-4xl font-medium text-secondary mb-4">Our Five-Step Process</h2>
          <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
            We've perfected our supplement manufacturing process to ensure quality at every stage.
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
