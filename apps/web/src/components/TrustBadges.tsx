
import React from 'react';

const TrustBadges: React.FC = () => {
  const badges = [
    {
      name: "GMP Certified",
      image: "/assets/badge-gmp.svg",
      description: "Good Manufacturing Practices"
    },
    {
      name: "FDA Registered",
      image: "/assets/badge-fda.svg",
      description: "Food & Drug Administration"
    },
    {
      name: "ISO 9001",
      image: "/assets/badge-iso.svg",
      description: "Quality Management"
    },
    {
      name: "Organic Certified",
      image: "/assets/badge-organic.svg",
      description: "Organic Processing"
    },
    {
      name: "Non-GMO",
      image: "/assets/badge-non-gmo.svg",
      description: "Non-GMO Project Verified"
    }
  ];

  return (
    <section className="py-16 bg-neutral">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-medium text-secondary mb-4">Quality & Compliance</h2>
          <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
            Our facilities and processes meet the highest standards in the industry.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-3 bg-white rounded-full shadow-soft p-4 flex items-center justify-center">
                <img src={badge.image} alt={badge.name} className="w-16 h-16" />
              </div>
              <h3 className="text-lg font-medium mb-1">{badge.name}</h3>
              <p className="text-sm text-secondary/60">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
