import React from 'react';
import { useTranslation } from 'react-i18next';

const TrustBadges: React.FC = () => {
  const { t } = useTranslation();
  
  const badges = [
    {
      name: t('home.trust.badges.gmp.name'),
      image: "/assets/badge-gmp.svg",
      description: t('home.trust.badges.gmp.description')
    },
    {
      name: t('home.trust.badges.fda.name'),
      image: "/assets/badge-fda.svg",
      description: t('home.trust.badges.fda.description')
    },
    {
      name: t('home.trust.badges.iso.name'),
      image: "/assets/badge-iso.svg",
      description: t('home.trust.badges.iso.description')
    },
    {
      name: t('home.trust.badges.organic.name'),
      image: "/assets/badge-organic.svg",
      description: t('home.trust.badges.organic.description')
    },
    {
      name: t('home.trust.badges.nonGmo.name'),
      image: "/assets/badge-non-gmo.svg",
      description: t('home.trust.badges.nonGmo.description')
    }
  ];

  return (
    <section className="py-16 bg-neutral">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-medium text-secondary mb-4">{t('home.trust.title')}</h2>
          <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
            {t('home.trust.subtitle')}
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
