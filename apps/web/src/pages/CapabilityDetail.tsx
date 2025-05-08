import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { useCapabilities } from '@/hooks/useCapabilities';
import { useLanguage } from '@/contexts/LanguageContext';
import { urlFor } from '@/lib/sanity';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import type { SanityCapability } from '@/types/sanity';

const CapabilityDetail = () => {
  const { id } = useParams();
  const { data: capabilities, isLoading } = useCapabilities();
  const { language } = useLanguage();

  const capability = capabilities?.find((cap: SanityCapability) => cap._id === id);

  if (isLoading) {
    return (
      <>
        <Header />
        <main>
          <div className="container py-16">
            <Skeleton className="h-96 w-full" />
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!capability) {
    return (
      <>
        <Header />
        <main>
          <div className="container py-16 text-center">
            <h1 className="text-3xl font-bold mb-4">Capability Not Found</h1>
            <p className="mb-8">The capability you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/capabilities">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Capabilities
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <PageHero
          title={capability.title}
          subtitle={capability.description}
          showButtons={false}
        />
        
        <div className="container py-16">
          {/* Full Size Image and Detailed Description */}
          <section className="mb-16">
            <div className="relative">
              {/* Full Size Image */}
              {capability.fullSizeImage && (
                <div className="float-left mr-8 mb-4 w-1/2 lg:w-1/3">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                      src={urlFor(capability.fullSizeImage).url()}
                      alt={capability.fullSizeImage.alt || capability.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              
              {/* Detailed Description */}
              {capability.longDescription && capability.longDescription.length > 0 && (
                <div className="prose prose-lg max-w-none">
                  <PortableText 
                    value={capability.longDescription}
                    components={{
                      block: {
                        normal: ({children}) => <p className="mb-4">{children}</p>,
                        h1: ({children}) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
                        h2: ({children}) => <h2 className="text-2xl font-bold mb-3">{children}</h2>,
                        h3: ({children}) => <h3 className="text-xl font-bold mb-2">{children}</h3>,
                      },
                      list: {
                        bullet: ({children}) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
                        number: ({children}) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
                      },
                      listItem: {
                        bullet: ({children}) => <li className="text-secondary/80">{children}</li>,
                        number: ({children}) => <li className="text-secondary/80">{children}</li>,
                      },
                      marks: {
                        strong: ({children}) => <strong className="font-bold">{children}</strong>,
                        em: ({children}) => <em className="italic">{children}</em>,
                      },
                    }}
                  />
                </div>
              )}
              <div className="clear-both"></div>
            </div>
          </section>

          {/* Key Features */}
          {capability.keyFeatures && capability.keyFeatures.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-medium mb-8">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {capability.keyFeatures.map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {feature.icon && (
                          <span className="text-2xl mr-3 text-primary">{feature.icon}</span>
                        )}
                        <h3 className="text-xl font-medium">{feature.title}</h3>
                      </div>
                      <p className="text-secondary/80">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Photo Gallery */}
          {capability.gallery && capability.gallery.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-medium mb-8">Photo Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {capability.gallery.map((image, index) => (
                  <div key={index} className="group relative aspect-square rounded-lg overflow-hidden">
                    <img
                      src={urlFor(image).url()}
                      alt={image.alt || `Gallery image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {image.caption && (
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="text-white p-4 text-sm">{image.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technical Specifications */}
          {capability.specifications && capability.specifications.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-medium mb-8">Technical Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {capability.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between p-4 bg-secondary/5 rounded-lg hover:bg-secondary/10 transition-colors">
                    <span className="font-medium">{spec.name}</span>
                    <span>{spec.value}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Applications */}
          {capability.applications && capability.applications.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-medium mb-8">Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {capability.applications.map((app, index) => (
                  <div key={index} className="p-4 bg-secondary/5 rounded-lg hover:bg-secondary/10 transition-colors">
                    {app}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Benefits */}
          {capability.benefits && capability.benefits.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-medium mb-8">Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {capability.benefits.map((benefit, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
                      <p className="text-secondary/80">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Process Steps */}
          {capability.processSteps && capability.processSteps.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-medium mb-8">Process Steps</h2>
              <div className="space-y-8">
                {capability.processSteps.map((step, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-8 items-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-full md:w-1/3">
                      {step.image && (
                        <img
                          src={urlFor(step.image).url()}
                          alt={step.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      )}
                    </div>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                      <p className="text-secondary/80">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FAQs */}
          {capability.faqs && capability.faqs.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-medium mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {capability.faqs.map((faq, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium mb-3">{faq.question}</h3>
                      <p className="text-secondary/80">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Back Button */}
          <div className="mt-16 text-center">
            <Button asChild>
              <Link to="/capabilities">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Capabilities
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CapabilityDetail; 