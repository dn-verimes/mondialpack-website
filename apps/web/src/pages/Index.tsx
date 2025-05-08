import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Mondial Pack - Professional Packaging Solutions</title>
        <meta name="description" content="Mondial Pack offers professional packaging solutions for your business needs." />
        <meta property="og:title" content="Mondial Pack - Professional Packaging Solutions" />
        <meta property="og:description" content="Mondial Pack offers professional packaging solutions for your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/mondial-pack-logo-full-colour-rgb.svg" />
        <meta property="og:url" content="https://mondialpack.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mondialpack" />
        <meta name="twitter:image" content="/assets/mondial-pack-logo-full-colour-rgb.svg" />
      </Helmet>
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
