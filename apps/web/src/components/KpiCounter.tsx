
import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ value, label, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = Math.min(value, 999999); // Cap for performance
          const increment = end / (duration / 16); // 60fps
          
          const timer = setInterval(() => {
            start += increment;
            setCount(Math.min(Math.floor(start), end));
            
            if (start >= end) {
              clearInterval(timer);
            }
          }, 16);
          
          observer.disconnect();
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.25 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => observer.disconnect();
  }, [value, duration]);
  
  return (
    <div ref={counterRef} className="text-center px-4">
      <div className="text-4xl md:text-5xl font-medium text-primary mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-secondary">{label}</p>
    </div>
  );
};

const KpiCounter: React.FC = () => {
  return (
    <section className="bg-accent py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-secondary mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
            Delivering quality supplements to millions of customers worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter value={150} suffix="+" label="Successful Products Launched" />
          <Counter value={98} suffix="%" label="Customer Satisfaction" />
          <Counter value={25} label="Countries Served" />
          <Counter value={10000} suffix="+" label="Metric Tons Produced" />
        </div>
      </div>
    </section>
  );
};

export default KpiCounter;
