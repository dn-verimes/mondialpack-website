
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import KpiCounter from '@/components/KpiCounter';
import ProcessSteps from '@/components/ProcessSteps';
import FormatCards from '@/components/FormatCards';
import AboutSection from '@/components/AboutSection';
import TrustBadges from '@/components/TrustBadges';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import ProductCategories from '@/components/ProductCategories';
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
        <ProductCategories />
        <ProcessSteps />
        <AboutSection />
        <FormatCards />
        <TrustBadges />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
};

export default Index;
