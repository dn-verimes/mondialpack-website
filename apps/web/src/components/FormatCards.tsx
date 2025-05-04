
import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from './Button';

interface FormatCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  isActive: boolean;
}

const FormatCard: React.FC<FormatCardProps> = ({ title, description, image, link, isActive }) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-2xl shadow-soft p-6 md:p-8 transition-all duration-300",
        "hover:shadow-lg hover:scale-[1.03] cursor-pointer",
        "flex flex-col",
        isActive ? "border-2 border-primary" : "border border-gray-100"
      )}
    >
      <div className="h-48 mb-6 overflow-hidden rounded-xl">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
      </div>
      <h3 className="text-2xl font-medium mb-3 text-secondary">{title}</h3>
      <p className="text-secondary/80 flex-grow mb-6">{description}</p>
      <Button variant="ghost" className="self-start group">
        Learn More
        <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
      </Button>
    </div>
  );
};

const FormatCards: React.FC = () => {
  const [activeFormat, setActiveFormat] = useState(0);
  
  const formats = [
    {
      title: "Capsules",
      description: "High-quality vegetarian and gelatin capsule options in various sizes.",
      image: "/assets/format-capsules.jpg",
      link: "/formats/capsules",
    },
    {
      title: "Tablets",
      description: "Compressed tablets with custom coating and precise dosage.",
      image: "/assets/format-tablets.jpg",
      link: "/formats/tablets",
    },
    {
      title: "Softgels",
      description: "Perfect for oils and fat-soluble ingredients with excellent bioavailability.",
      image: "/assets/format-softgels.jpg",
      link: "/formats/softgels",
    },
    {
      title: "Powders",
      description: "Custom powder blends with precise mixing and flavor development.",
      image: "/assets/format-powders.jpg",
      link: "/formats/powders",
    },
    {
      title: "Gummies",
      description: "Delicious gummy supplements with clean-label formulations.",
      image: "/assets/format-gummies.jpg",
      link: "/formats/gummies",
    },
  ];

  const nextFormat = () => {
    setActiveFormat((prev) => (prev + 1) % formats.length);
  };

  const prevFormat = () => {
    setActiveFormat((prev) => (prev - 1 + formats.length) % formats.length);
  };

  // Determine which formats to show based on screen size
  const displayFormats = () => {
    // On mobile, we'll just show the active format
    // On larger screens, we'll show 3 formats with the active one in the middle

    // For now, we'll just show a slice around the active format
    const beforeIndex = (activeFormat - 1 + formats.length) % formats.length;
    const afterIndex = (activeFormat + 1) % formats.length;

    return [
      { ...formats[beforeIndex], isActive: false },
      { ...formats[activeFormat], isActive: true },
      { ...formats[afterIndex], isActive: false },
    ];
  };

  return (
    <section className="py-20 bg-neutral">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-secondary mb-4">Product Formats</h2>
          <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
            We offer a wide range of delivery formats to suit your supplement needs.
          </p>
        </div>

        <div className="relative px-8">
          {/* Navigation arrows */}
          <button 
            onClick={prevFormat}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-soft hover:bg-primary hover:text-white transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextFormat}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-soft hover:bg-primary hover:text-white transition-all"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayFormats().map((format, index) => (
              <div key={index} className={cn(
                "transition-all duration-500",
                index === 1 ? "md:scale-105 z-10" : "md:scale-95 opacity-80"
              )}>
                <FormatCard {...format} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg">
            View All Formats
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FormatCards;
