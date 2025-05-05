import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import KpiCounter from '@/components/KpiCounter';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import CapabilitiesGrid from '@/components/CapabilitiesGrid';
import ProductInspirationCarousel from '@/components/ProductInspirationCarousel';
import ProductionFacilities from '@/components/ProductionFacilities';
import { setupAnimations } from '@/utils/animations';

const Index: React.FC = () => {
  useEffect(() => {
    setupAnimations();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CapabilitiesGrid />
        <ProductInspirationCarousel />
        <ProductionFacilities />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
};

export default Index;
