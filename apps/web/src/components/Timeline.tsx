import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineMilestone {
  _id: string;
  year: string;
  milestone: string;
  order: number;
}

interface TimelineProps {
  title: string;
  milestones: TimelineMilestone[];
}

const Timeline: React.FC<TimelineProps> = ({ title, milestones }) => {
  // Debug log
  console.log('Timeline props:', { title, milestones });

  if (!milestones || milestones.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center">
            <p>No timeline milestones available.</p>
          </div>
        </div>
      </section>
    );
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-secondary mb-6">
            {title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        {/* Timeline */}
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Timeline center line */}
          <div className="absolute left-1/2 top-0 w-0.5 h-full bg-primary/20 transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Timeline items */}
          {milestones.map((item, index) => (
            <motion.div 
              key={item._id} 
              className="relative mb-16 md:mb-24 last:mb-0"
              variants={itemVariants}
            >
              {/* Mobile version (stack) */}
              <div className="flex md:hidden mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3">
                  <Clock size={18} className="text-white" />
                </div>
                <h3 className="text-xl font-medium text-secondary self-center">{item.year}</h3>
              </div>
              
              {/* Desktop version (side-by-side) */}
              <div className="hidden md:flex">
                {/* Timeline center point */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-primary flex items-center justify-center z-10">
                  <Clock size={18} className="text-primary" />
                </div>
                
                {/* Content container */}
                <div className={cn(
                  "grid md:grid-cols-2 gap-6 w-full",
                  "relative"
                )}>
                  {/* Year - alternating sides */}
                  <div className={cn(
                    "md:text-right md:pr-16",
                    index % 2 === 1 && "md:col-start-2 md:text-left md:pl-16 md:pr-0"
                  )}>
                    <div className="bg-alice rounded-lg p-5 inline-block glass-morphism">
                      <h3 className="text-xl font-medium text-secondary">{item.year}</h3>
                    </div>
                  </div>
                  
                  {/* Content - alternating sides */}
                  <div className={cn(
                    "md:text-left md:pl-16 self-start",
                    index % 2 === 1 && "md:col-start-1 md:row-start-1 md:text-right md:pr-16 md:pl-0"
                  )}>
                    <div className="bg-white shadow-soft rounded-lg p-5">
                      <p className="text-secondary/80 whitespace-pre-line">{item.milestone}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile milestone content */}
              <div className="md:hidden bg-white shadow-soft rounded-lg p-5 ml-12">
                <p className="text-secondary/80 whitespace-pre-line">{item.milestone}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline; 