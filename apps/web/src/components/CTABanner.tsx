
import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const CTABanner: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-white"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
            Ready to Bring Your Supplement Idea to Life?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Partner with Mondial Pack for end-to-end supplement manufacturing and packaging solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 group">
              Request a Quote
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
