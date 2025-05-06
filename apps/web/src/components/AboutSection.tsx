import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef} 
            className={cn(
              "rounded-2xl overflow-hidden h-[400px] animate-on-scroll",
              "shadow-soft"
            )}
          >
            <img 
              src="/assets/about-image.jpg" 
              alt="Mondial Pack Facility" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div ref={contentRef} className="animate-on-scroll" style={{ transitionDelay: "200ms" }}>
            <h2 className="text-3xl md:text-4xl font-medium text-secondary mb-6">
              {t('home.about.title')}
            </h2>
            <p className="text-lg text-secondary/80 mb-6">
              {t('home.about.description')}
            </p>
            <p className="text-lg text-secondary/80 mb-8">
              {t('home.about.subDescription')}
            </p>
            <Button className="group" href="/about">
              {t('home.about.cta')}
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </Button>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-medium text-secondary mb-6 text-center">Our Facilities</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Netherlands Facility */}
            <div className="bg-alice rounded-lg p-6 glass-morphism">
              <div className="flex items-start mb-4">
                <Building className="text-primary mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-medium text-secondary text-xl mb-2">Netherlands Headquarters</h4>
                  <address className="not-italic text-secondary/80">
                    Mondial Pack B.V.<br />
                    Rigtersbleek-Aalten 18<br />
                    7521 RB Enschede<br />
                    The Netherlands
                  </address>
                </div>
              </div>
            </div>
            
            {/* Spain Facility */}
            <div className="bg-alice rounded-lg p-6 glass-morphism">
              <div className="flex items-start mb-4">
                <Building className="text-primary mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-medium text-secondary text-xl mb-2">Spain Production Facility</h4>
                  <address className="not-italic text-secondary/80">
                    Mondial Pack Europe S.L.<br />
                    Poligono La Moraga, nave 21B<br />
                    29130 Alhaurín de la Torre<br />
                    España
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
