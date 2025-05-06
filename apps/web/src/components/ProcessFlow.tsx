import React from 'react';
import { motion } from 'framer-motion';
import { Package, Beaker, Factory, Truck, ShoppingCart } from 'lucide-react';

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Sourcing",
    description: "Strategic procurement of high-quality raw materials and ingredients from trusted suppliers worldwide."
  },
  {
    icon: <Beaker className="w-8 h-8" />,
    title: "Mixing",
    description: "Precise formulation and blending of ingredients using state-of-the-art mixing technology."
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Production",
    description: "Advanced manufacturing processes ensuring consistent quality and optimal efficiency."
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Packaging",
    description: "Custom packaging solutions that protect your products and enhance brand presentation."
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Delivery",
    description: "Reliable logistics and distribution services to get your products to market efficiently."
  }
];

const ProcessFlow: React.FC = () => {
  return (
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
            Our Value Chain
          </h2>
          <p className="text-lg text-secondary/80 max-w-3xl mx-auto">
            From raw materials to finished products, we handle every step of the process with expertise and care.
          </p>
        </motion.div>

        <div className="relative mb-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center">
                  {/* Icon Circle */}
                  <div className="relative z-10 w-16 h-16 bg-white rounded-full shadow-soft flex items-center justify-center mb-3 border-2 border-primary/20">
                    <div className="text-primary">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-secondary mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-secondary/80">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Production Line Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center"
        >
          <img 
            src="/assets/Line-of-production.svg" 
            alt="Production Line" 
            className="w-full max-w-[800px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessFlow; 