import React from 'react';
import PageHero from '@/components/PageHero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Resources: React.FC = () => {
  return (
    <main>
      <PageHero
        title="Resources"
        subtitle="Explore our valuable resources to enhance your packaging knowledge."
        videoSrc="/assets/Business Video Mondial Pack.mp4"
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
              Explore Our Resources
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Example Resource Card 1 */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Packaging Guides</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Download our comprehensive guides on packaging materials, design principles, and sustainability.
                </p>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Download Guides
                </Button>
              </CardContent>
            </Card>

            {/* Example Resource Card 2 */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Case Studies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Learn how we helped businesses like yours succeed with innovative packaging solutions.
                </p>
                <Button variant="outline" className="w-full">View Case Studies</Button>
              </CardContent>
            </Card>

            {/* Example Resource Card 3 */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Industry Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Stay updated with the latest trends, news, and insights from the packaging industry.
                </p>
                <Button variant="outline" className="w-full">Read Insights</Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Optional: Add other sections like FAQs, Blog Links, etc. */}
      {/*
      <div className="bg-muted py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          {/* Add FAQ Accordion or list here *}
        </div>
      </div>
      */}
    </main>
  );
};

export default Resources; 