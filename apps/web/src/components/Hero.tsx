import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './Button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const buttonsY = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-[80vh] flex items-center">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-primary/70 z-10"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/Business Video Mondial Pack.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content */}
      <div className="container relative z-20 mt-16">
        <div className="max-w-3xl">
          <motion.h1 
            style={{ y: titleY, opacity }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6"
          >
            {t('home.hero.title')}
          </motion.h1>
          <motion.p 
            style={{ y: subtitleY, opacity }}
            className="text-xl text-white/90 mb-8 max-w-2xl"
          >
            {t('home.hero.subtitle')}
          </motion.p>
          <motion.div 
            style={{ y: buttonsY, opacity }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="group">
              {t('home.hero.cta.primary')}
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              {t('home.hero.cta.secondary')}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
