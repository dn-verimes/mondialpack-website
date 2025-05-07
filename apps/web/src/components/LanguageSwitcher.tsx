import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'nl', name: 'Nederlands' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
] as const;

interface LanguageSwitcherProps {
  isScrolled: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isScrolled }) => {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (langCode: typeof languages[number]['code']) => {
    setLanguage(langCode);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={cn(
          "flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-300",
          isScrolled ? "text-secondary hover:text-primary" : "text-white hover:text-gray-200"
        )}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden md:inline-block text-sm font-medium">
          {languages.find(lang => lang.code === language)?.name}
        </span>
      </button>
      
      <div className={cn(
        "absolute right-0 mt-2 w-48 rounded-lg shadow-lg py-1 z-50 transition-all duration-200",
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
        isScrolled ? "bg-white" : "bg-secondary/95 backdrop-blur-sm"
      )}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={cn(
              "w-full text-left px-4 py-2 text-sm transition-colors duration-200",
              language === lang.code 
                ? (isScrolled ? "bg-primary/10 text-primary" : "bg-white/10 text-white")
                : (isScrolled ? "text-secondary hover:bg-primary/5 hover:text-primary" : "text-white/80 hover:bg-white/10 hover:text-white")
            )}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher; 