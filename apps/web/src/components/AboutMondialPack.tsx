import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Award, Lightbulb, Users, Handshake } from 'lucide-react';
import Button from '@/components/Button';

const AboutMondialPack: React.FC = () => {
  const pillars = [
    {
      icon: <Clock size={24} className="text-primary" />,
      title: "Experience",
      description: "Over two decades of expertise in nutraceutical manufacturing"
    },
    {
      icon: <Award size={24} className="text-primary" />,
      title: "Quality",
      description: "Rigorous quality control and testing at every stage of production"
    },
    {
      icon: <Lightbulb size={24} className="text-primary" />,
      title: "Innovation",
      description: "State-of-the-art facilities and continuous process improvement"
    },
    {
      icon: <Users size={24} className="text-primary" />,
      title: "Partnership",
      description: "Collaborative approach to meet your unique product requirements"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-secondary mb-4">About Mondial Pack</h2>
          <p className="text-xl text-secondary/80 max-w-3xl mx-auto">
            With over 20 years of experience, we've established ourselves as a leader in nutraceutical manufacturing, combining cutting-edge technology with pharmaceutical-grade quality standards.
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <video
              className="w-full aspect-video object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/assets/Business Video Mondial Pack.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-medium text-secondary mb-2">{pillar.title}</h3>
              <p className="text-secondary/80">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button className="group">
            Learn More About Us
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMondialPack; 