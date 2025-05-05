import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6">
            From Idea to Finished Supplement
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Your trusted partner for premium supplement manufacturing, packaging, and delivery with uncompromising quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              Request a Quote
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
