import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Clock, Building } from 'lucide-react';
import Button from '@/components/Button';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

const AboutPage: React.FC = () => {
  // References for scroll animations
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Timeline milestones data
  const timelineMilestones = [
    {
      year: "1995",
      milestone: "Piet van Riel opens a 300 m² bottle‑filling shop in Enschede, supplying Dutch pharmacies."
    },
    {
      year: "2002",
      milestone: "First GMP capsule turret installed; Mondial Pack enters the nutraceutical market."
    },
    {
      year: "2008",
      milestone: "Factory 2.0 adds high‑speed tablet presses and blister thermoformers, lifting annual output above 200 million units."
    },
    {
      year: "2013",
      milestone: "In‑house R&D lab allows clients to taste pilot samples in under ten days."
    },
    {
      year: "2017",
      milestone: "Softgel department launched; vegan alginate and omega‑3 formats go live."
    },
    {
      year: "2022",
      milestone: "Rooftop solar array cuts CO₂ / pack by 38 %."
    },
    {
      year: "Jan 2024",
      milestone: "Night‑time fire severely damages our primary production hall. No injuries, but 100% of capacity lost."
    },
    {
      year: "Mar 2024 → today",
      milestone: "Temporary production secured via partner sites; design of a next‑generation plant begins."
    },
    {
      year: "May 2025",
      milestone: "Construction starts at Aluminiumsteden 10 – a two‑storey, ± 6,000 m² facility with:\n• 1,820 m² climate‑controlled warehouse\n• 740 m² high‑speed filling hall\n• 360 m² dedicated blister suites\n• 900 m² capsule & powder floor on level 1"
    },
    {
      year: "2026 (planned)",
      milestone: "Re‑opening: rebuilt site triples softgel output, doubles blister capacity, and features real‑time batch‑tracking for clients."
    }
  ];

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
    <>
      <Header />
      <main>
        <PageHero 
          title="Our Story"
          subtitle="From humble beginnings to industry leader in supplement manufacturing"
          showButtons={false}
        />
        {/* Rest of the About page content */}
        <section ref={timelineRef} className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium text-secondary mb-6">
                Our Journey
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
              {timelineMilestones.map((item, index) => (
                <motion.div 
                  key={index} 
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
        
        {/* Facilities Section */}
        <section className="py-16 bg-alice">
          <div className="container">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-medium text-secondary mb-10 text-center">
                Our Facilities
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Netherlands Facility */}
                <div className="bg-white rounded-xl p-6 shadow-soft">
                  <div className="flex items-start">
                    <Building className="text-primary mr-4 flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="font-medium text-secondary text-xl mb-3">Netherlands Headquarters</h3>
                      <address className="not-italic text-secondary/80 leading-relaxed">
                        Mondial Pack B.V.<br />
                        Rigtersbleek-Aalten 18<br />
                        7521 RB Enschede<br />
                        The Netherlands
                      </address>
                    </div>
                  </div>
                </div>
                
                {/* Spain Facility */}
                <div className="bg-white rounded-xl p-6 shadow-soft">
                  <div className="flex items-start">
                    <Building className="text-primary mr-4 flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="font-medium text-secondary text-xl mb-3">Spain Production Facility</h3>
                      <address className="not-italic text-secondary/80 leading-relaxed">
                        Mondial Pack Europe S.L.<br />
                        Poligono La Moraga, nave 21B<br />
                        29130 Alhaurín de la Torre<br />
                        España
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* What Rebuild Means Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-medium text-secondary mb-10">
                What the rebuild means for you
              </h2>
              
              <div className="glass-morphism rounded-xl p-8 mb-10 bg-alice">
                <p className="text-xl text-secondary/80 mb-6">
                  <strong>More capacity, faster lead‑times:</strong> purpose‑built lines for capsules, powders, tablets, blisters and pouches.
                </p>
                
                <p className="text-xl text-secondary/80">
                  <strong>Tougher quality & greener footprint:</strong> IFS Food, GMP ready from day one, with solar, energy‑recovery HVAC and smart logistics.
                </p>
              </div>
              
              <Button className="group">
                Follow Our Rebuild Updates
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
