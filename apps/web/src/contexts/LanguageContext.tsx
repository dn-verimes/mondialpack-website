import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from 'i18next';

type Language = 'en' | 'nl' | 'es' | 'fr' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    // Default to browser language or English
    return savedLanguage || (navigator.language.split('-')[0] as Language) || 'en';
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language);
    // Update HTML lang attribute
    document.documentElement.lang = language;
    // Sync with i18next
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 