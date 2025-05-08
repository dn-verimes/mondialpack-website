import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building } from 'lucide-react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Timeline from '@/components/Timeline';
import { useQuery } from '@tanstack/react-query';
import { client } from '@/lib/sanity';

const AboutPage: React.FC = () => {
  // First, let's fetch the timeline milestones directly
  const { data: milestones, isLoading, error } = useQuery({
    queryKey: ['timeline-milestones'],
    queryFn: async () => {
      const query = `*[_type == "timelineMilestone"] | order(order asc) {
        _id,
        _type,
        year,
        milestone,
        order
      }`;
      console.log('Fetching timeline milestones...');
      const result = await client.fetch(query);
      console.log('Timeline milestones:', result);
      return result;
    },
  });

  // Debug logs
  console.log('Query state:', {
    isLoading,
    error,
    hasData: !!milestones,
    milestones
  });

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Our Story"
          subtitle="From humble beginnings to industry leader in supplement manufacturing"
          showButtons={false}
        />
        
        {/* Timeline Section */}
        {isLoading && (
          <div className="container py-20 text-center">
            <p>Loading timeline...</p>
          </div>
        )}
        
        {error && (
          <div className="container py-20 text-center text-red-500">
            <p>Error loading timeline: {error.message}</p>
          </div>
        )}
        
        {!isLoading && milestones && milestones.length > 0 && (
          <Timeline 
            title="Our Journey"
            milestones={milestones}
          />
        )}
        
        {!isLoading && (!milestones || milestones.length === 0) && (
          <div className="container py-20 text-center">
            <p>No timeline milestones found. Please add milestones in Sanity Studio.</p>
          </div>
        )}
        
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
