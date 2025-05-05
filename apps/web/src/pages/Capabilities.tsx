import React, { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Button from '@/components/Button';
import { useCapabilities } from '@/hooks/useCapabilities';
import { SanityCapability } from '@/types/sanity';
import { urlFor } from '@/lib/sanity';
import { client, CAPABILITIES_QUERY } from '../lib/sanity'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import FormatCards from '@/components/FormatCards';

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
        "w-full py-3 bg-white transition-all duration-300 z-40",
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

// CapabilityItem Component
const CapabilityItem = ({ capability }: { capability: SanityCapability }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-lg shadow-md overflow-hidden p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <span className="text-3xl text-primary">{capability.icon}</span>
        </div>
        <h3 className="text-xl font-medium mb-2">{capability.title}</h3>
        <p className="text-secondary/80 text-sm">{capability.description}</p>
      </div>
    </motion.div>
  );
};

// CapabilitiesGrid Component
const CapabilitiesGrid = () => {
  const { data: capabilities, isLoading } = useCapabilities();
  
  if (isLoading) {
    return (
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-48 w-full" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-secondary mb-6">
            Our Manufacturing Capabilities
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {capabilities?.map((capability) => (
            <CapabilityItem key={capability._id} capability={capability} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Capabilities = () => {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Our Capabilities"
          subtitle="From formulation to finished product, discover our comprehensive manufacturing capabilities."
        />
        <StickyNav />
        <CapabilitiesGrid />
        <FormatCards />
      </main>
      <Footer />
    </>
  );
};

export default Capabilities;
