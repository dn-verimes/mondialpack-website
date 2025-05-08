import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { client } from '@/lib/sanity';
import { productInspirationQuery } from '@/sanity/queries/productInspiration';

interface Product {
  image: {
    asset: {
      url: string;
    };
  };
  name: {
    en: string;
    nl: string;
  };
  claim: {
    en: string;
    nl: string;
  };
  tags: Array<{
    en: string;
    nl: string;
  }>;
}

interface ProductInspirationData {
  title: {
    en: string;
    nl: string;
  };
  subtitle: {
    en: string;
    nl: string;
  };
  mainText: {
    en: string;
    nl: string;
  };
  products: Product[];
}

const ProductInspirationCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const { data, isLoading } = useQuery<ProductInspirationData>({
    queryKey: ['productInspiration'],
    queryFn: () => client.fetch(productInspirationQuery),
  });

  const nextSlide = () => {
    if (!data?.products) return;
    setCurrentIndex((prev) => (prev + 1) % data.products.length);
  };

  const prevSlide = () => {
    if (!data?.products) return;
    setCurrentIndex((prev) => (prev - 1 + data.products.length) % data.products.length);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    dragStartX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    const dragEndX = 'touches' in e ? e.changedTouches[0].clientX : e.clientX;
    const dragDistance = dragEndX - dragStartX.current;

    if (Math.abs(dragDistance) > 50) {
      if (dragDistance > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  };

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-secondary mb-4">
            {data.title[currentLanguage as keyof typeof data.title]}
          </h2>
          <p className="text-xl text-secondary/80 max-w-3xl mx-auto">
            {data.subtitle[currentLanguage as keyof typeof data.subtitle]}
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div
              ref={containerRef}
              className="overflow-hidden"
              onMouseDown={handleDragStart}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchEnd={handleDragEnd}
            >
              <motion.div
                className="flex"
                animate={{
                  x: `-${currentIndex * 100}%`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {data.products.map((product, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="bg-white rounded-lg shadow-soft overflow-hidden">
                      <div className="aspect-[4/3] relative">
                        <img
                          src={product.image.asset.url}
                          alt={product.name[currentLanguage as keyof typeof product.name]}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="text-base font-medium text-secondary mb-0.5">
                          {product.name[currentLanguage as keyof typeof product.name]}
                        </h3>
                        <p className="text-xs text-secondary/80 mb-2 line-clamp-2">
                          {product.claim[currentLanguage as keyof typeof product.claim]}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {product.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-1.5 py-0.5 rounded-full text-[10px] bg-primary/10 text-primary"
                            >
                              {tag[currentLanguage as keyof typeof tag]}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Main Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-secondary"
            >
              <p className="text-lg leading-relaxed whitespace-pre-line">
                {data.mainText[currentLanguage as keyof typeof data.mainText]}
              </p>
            </motion.div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {data.products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  currentIndex === index ? "bg-primary" : "bg-gray-200"
                )}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/products"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
          >
            {t('home.productInspiration.seeMore')}
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductInspirationCarousel; 