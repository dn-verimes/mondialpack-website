import React, { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { PenTool, Tablet, Pill, Droplet, Candy, Wine, Package, ScrollText, Box, Archive, ArrowRight, Download, ChevronRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Button from '@/components/Button';

// Format specifications data
const formatSpecs = {
  capsules: {
    title: "Capsules",
    image: "/assets/capsules-macro.jpg", // Placeholder for now
    specs: [
      "Size range: 000–4",
      "Shells: Gelatin, HPMC (vegan)",
      "Fill weight: 100 mg – 1,000 mg",
      "Colour/print: up to 2 PMS inks",
      "MOQ: 250 k units",
      "Lead time: 4–6 weeks"
    ],
    icon: <PenTool size={24} className="text-primary" />
  },
  tablets: {
    title: "Tablets",
    image: "/assets/tablets-macro.jpg", // Placeholder for now
    specs: [
      "Shape: Round, oval, custom",
      "Size: 5-16mm diameter",
      "Weight: 80mg - 1,500mg",
      "Coating: Film, sugar, enteric",
      "MOQ: 300 k units",
      "Lead time: 5–7 weeks"
    ],
    icon: <Tablet size={24} className="text-primary" />
  },
  softgels: {
    title: "Softgels",
    image: "/assets/softgels-macro.jpg", // Placeholder for now
    specs: [
      "Sizes: 2-22 minims",
      "Fill type: Oil, suspension",
      "Shell: Gelatin, plant-based",
      "Shape: Oval, round, oblong",
      "MOQ: 500 k units",
      "Lead time: 6–8 weeks"
    ],
    icon: <Pill size={24} className="text-primary" />
  },
  powders: {
    title: "Powders",
    image: "/assets/powders-macro.jpg", // Placeholder for now
    specs: [
      "Types: Direct compressible, granulated",
      "Particle size: 50-300 microns",
      "Flow properties: Excellent",
      "Fill weight accuracy: ±3%",
      "MOQ: 1,000 kg",
      "Lead time: 3–5 weeks"
    ],
    icon: <Droplet size={24} className="text-primary" />
  },
  gummies: {
    title: "Gummies",
    image: "/assets/gummies-macro.jpg", // Placeholder for now
    specs: [
      "Base: Pectin, gelatin",
      "Weight: 2.5-5g per unit",
      "Shapes: Custom molds available",
      "Flavors: 20+ options",
      "MOQ: 200 k units",
      "Lead time: 6–8 weeks"
    ],
    icon: <Candy size={24} className="text-primary" />
  }
};

// Packaging data
const packagingData = [
  {
    title: "Bottles",
    description: "High-quality PET and HDPE bottles with various closure options",
    icon: <Wine size={24} className="text-primary" />,
    details: [
      "Volumes: 60 ml – 1 L",
      "Closures: CT, CRC, induction seal",
      "Label area dimensions available",
      "Suggested pack counts: 30, 60, 90, 180"
    ]
  },
  {
    title: "Blisters",
    description: "PVC/PVDC and Alu-Alu blister packaging for solid dosage forms",
    icon: <Package size={24} className="text-primary" />,
    details: [
      "Pocket pitches, cavity depths customizable",
      "Max tablet Ø 16 mm",
      "Options: cold-form, push-through foils",
      "Custom perforation patterns available"
    ]
  },
  {
    title: "Sachets",
    description: "Single-dose sachets for powders and granules",
    icon: <ScrollText size={24} className="text-primary" />,
    details: [
      "Weights: 1–30 g",
      "Material: PET/Alu/PE",
      "Print: up to 6 color flexo",
      "Tear notch options"
    ]
  },
  {
    title: "Stick-packs",
    description: "Convenient single-dose packaging for powders",
    icon: <Box size={24} className="text-primary" />,
    details: [
      "Dimensions: 8-15mm width",
      "Length: 50-180mm",
      "Fill weight: 0.5-10g",
      "Heat-seal or cold-seal options"
    ]
  },
  {
    title: "Display boxes",
    description: "Retail-ready counter displays and packaging",
    icon: <Archive size={24} className="text-primary" />,
    details: [
      "Custom die-lines available",
      "4-color offset printing",
      "Matte or gloss lamination",
      "Shelf or counter configurations"
    ]
  }
];

// HeroSection Component
const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-primary/70 z-10"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/blister-line.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Hero content */}
      <div className="container relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#FBFBFC] mb-6">
            Precision in Every Format & Pack
          </h1>
          <p className="text-xl text-[#FBFBFC]/90 mb-8 max-w-2xl mx-auto">
            From formulation to finished product, discover our comprehensive manufacturing capabilities.
          </p>
          <Button size="lg" className="group">
            Explore Our Capabilities
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// StickyNav Component
const StickyNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 70);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div 
      className={cn(
        "w-full py-3 bg-[#FBFBFC] transition-all duration-300 z-40",
        isScrolled ? "sticky top-0 shadow-md" : ""
      )}
    >
      <div className="container flex justify-center space-x-4">
        <a href="#formats" className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
          Formats
        </a>
        <a href="#packaging" className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
          Packaging
        </a>
      </div>
    </div>
  );
};

// FormatSection Component
const FormatSection = () => {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("capsules");
  
  // Simulate image loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsImagesLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Parallax effect for images
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  return (
    <section id="formats" className="py-20 bg-gradient-to-b from-[#FBFBFC] to-[#EFF6FF]" ref={containerRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-10%" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-secondary mb-4">Product Formats</h2>
          <p className="text-lg text-secondary/80 max-w-3xl mx-auto">
            Explore our diverse range of dosage forms designed to meet your specific requirements
          </p>
        </motion.div>
        
        <Tabs 
          defaultValue="capsules" 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="w-full flex justify-center mb-10 bg-transparent border-b border-gray-200 overflow-x-auto no-scrollbar">
            {Object.entries(formatSpecs).map(([key, format]) => (
              <TabsTrigger 
                key={key} 
                value={key}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 text-secondary data-[state=active]:border-b-2 data-[state=active]:border-primary",
                  "data-[state=active]:text-primary data-[state=active]:bg-transparent",
                  "transition-all duration-200 rounded-none"
                )}
              >
                {format.icon}
                {format.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {Object.entries(formatSpecs).map(([key, format]) => (
            <TabsContent 
              key={key} 
              value={key}
              className="focus-visible:outline-none focus-visible:ring-0"
            >
              <div className="grid md:grid-cols-5 gap-8">
                {/* Left column with image - 3/5 width */}
                <div className="md:col-span-3 rounded-2xl overflow-hidden h-[400px] md:h-[500px] relative">
                  {!isImagesLoaded ? (
                    <Skeleton className="w-full h-full rounded-2xl bg-[#EFF6FF]" />
                  ) : (
                    <motion.div className="w-full h-full" style={{ y }}>
                      <img 
                        src={format.image || "https://placehold.co/1200x800/EFF6FF/0046BA?text=" + format.title}
                        alt={format.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                  )}
                </div>
                
                {/* Right column with spec sheet - 2/5 width */}
                <motion.div 
                  className="md:col-span-2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="bg-[#EFF6FF] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    whileHover={{ y: -4 }}
                  >
                    <h3 className="text-2xl font-medium text-secondary mb-6">{format.title} Specifications</h3>
                    
                    <ul className="space-y-4 mb-8">
                      {format.specs.map((spec, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-4">
                      <Button className="w-full gap-2">
                        <Download size={18} />
                        Download Full Tech Sheet
                      </Button>
                      <p className="text-center text-sm text-secondary/70">
                        Need something custom? <a href="#" className="text-primary underline">Request a prototype</a>
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

// Packaging Item Component
const PackagingItem = ({ item, index }: { item: any, index: number }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-5%" }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg cursor-pointer transition-all duration-300"
        >
          <div className="h-14 w-14 flex items-center justify-center rounded-full bg-[#EFF6FF] mb-4">
            {item.icon}
          </div>
          <h3 className="text-xl font-medium text-secondary mb-2">{item.title}</h3>
          <p className="text-secondary/70 mb-4">{item.description}</p>
          <div className="inline-flex items-center text-primary">
            View specifications <ChevronRight size={16} className="ml-1" />
          </div>
        </motion.div>
      </DrawerTrigger>
      <DrawerContent className="p-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-medium text-secondary mb-4">{item.title} Specifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-[#EFF6FF]/50 backdrop-blur-sm p-6 rounded-2xl">
                <ul className="space-y-4">
                  {item.details.map((detail: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src={`https://placehold.co/600x400/EFF6FF/0046BA?text=${item.title}`}
                alt={item.title}
                className="rounded-lg max-h-[300px] w-auto"
              />
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline">
              Download Technical Specifications
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

// PackagingSection Component
const PackagingSection = () => {
  return (
    <section id="packaging" className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-10%" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-secondary mb-4">Packaging Solutions</h2>
          <p className="text-lg text-secondary/80 max-w-3xl mx-auto">
            Protect and present your products with our diverse range of packaging options
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packagingData.map((item, index) => (
            <PackagingItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Capabilities Page Component
const Capabilities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StickyNav />
      <FormatSection />
      <PackagingSection />
      <Footer />
    </div>
  );
};

export default Capabilities;
