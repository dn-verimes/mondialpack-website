import { useEffect } from "react";
import PageHero from '@/components/PageHero';
import { motion } from 'framer-motion';

const Contact = () => {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Update document title
    document.title = "Contact Us - MondialPack";

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main>
      <PageHero
        title="Contact Us"
        subtitle="Let's discuss how we can help with your packaging needs"
        showButtons={false}
      />

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
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div
              data-tf-live="01HXZQZQZQZQZQZQZQZQZQZQZ"
              className="w-full h-[600px]"
            ></div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact; 