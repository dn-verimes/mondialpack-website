import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

interface Product {
  id: number;
  image: string;
  name: string;
  claim: string;
  tags: string[];
}

const products: Product[] = [
  {
    id: 1,
    image: "/assets/products/vitamin-d3.jpg",
    name: "Vitamin D3 + K2",
    claim: "Enhanced bone health and immune support",
    tags: ["Vegan", "Sugar-free"]
  },
  {
    id: 2,
    image: "/assets/products/omega-3.jpg",
    name: "Omega-3 Complex",
    claim: "Premium fish oil with optimal EPA/DHA ratio",
    tags: ["High-potency", "Enteric-coated"]
  },
  {
    id: 3,
    image: "/assets/products/probiotic.jpg",
    name: "Daily Probiotic",
    claim: "10 billion CFU with 8 clinically studied strains",
    tags: ["Dairy-free", "Shelf-stable"]
  },
  {
    id: 4,
    image: "/assets/products/multivitamin.jpg",
    name: "Complete Multivitamin",
    claim: "Comprehensive daily nutrition in one capsule",
    tags: ["Vegan", "Gluten-free"]
  },
  {
    id: 5,
    image: "/assets/products/curcumin.jpg",
    name: "Curcumin Complex",
    claim: "Enhanced absorption with black pepper extract",
    tags: ["Vegan", "High-potency"]
  },
  {
    id: 6,
    image: "/assets/products/collagen.jpg",
    name: "Collagen Peptides",
    claim: "Type I & III collagen for skin and joint health",
    tags: ["Unflavored", "Non-GMO"]
  },
  {
    id: 7,
    image: "/assets/products/magnesium.jpg",
    name: "Magnesium Complex",
    claim: "Four forms of magnesium for optimal absorption",
    tags: ["Vegan", "Sugar-free"]
  },
  {
    id: 8,
    image: "/assets/products/ashwagandha.jpg",
    name: "Ashwagandha Extract",
    claim: "Standardized for maximum potency and efficacy",
    tags: ["Vegan", "KSM-66®"]
  }
];

const ProductInspirationCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
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
          <h2 className="text-3xl md:text-4xl font-medium text-secondary mb-4">{t('home.productInspiration.title')}</h2>
          <p className="text-xl text-secondary/80 max-w-3xl mx-auto">
            {t('home.productInspiration.subtitle')}
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
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="bg-white rounded-lg shadow-soft overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-base font-medium text-secondary mb-0.5">{product.name}</h3>
                      <p className="text-xs text-secondary/80 mb-2 line-clamp-2">{product.claim}</p>
                      <div className="flex flex-wrap gap-1">
                        {product.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-1.5 py-0.5 rounded-full text-[10px] bg-primary/10 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {products.map((_, index) => (
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
            See 50+ more formulas
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductInspirationCarousel; 