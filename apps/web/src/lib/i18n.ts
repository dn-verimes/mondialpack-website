import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Import all locale files
import enTranslations from '../locales/en.json';
import nlTranslations from '../locales/nl.json';
import esTranslations from '../locales/es.json';
import frTranslations from '../locales/fr.json';
import deTranslations from '../locales/de.json';

const resources = {
  en: { translation: enTranslations },
  nl: { translation: nlTranslations },
  es: { translation: esTranslations },
  fr: { translation: frTranslations },
  de: { translation: deTranslations },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

// Sync i18next language with our LanguageContext
export const useI18nSync = () => {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setLanguage(lng as 'en' | 'nl' | 'es' | 'fr' | 'de');
    };

    i18n.on('languageChanged', handleLanguageChange);

    // Initial sync
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [language, setLanguage]);
};

export default i18n; 