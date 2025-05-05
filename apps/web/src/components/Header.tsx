import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change threshold if needed, e.g., based on hero height
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define base and scrolled text colors
  const logoTextColor = isScrolled ? 'text-primary' : 'text-white';
  const navTextColor = isScrolled ? 'text-secondary hover:text-primary' : 'text-white hover:text-gray-200';
  const iconColor = isScrolled ? 'text-primary border-primary hover:bg-primary/10' : 'text-white border-white hover:bg-white/20';
  const mobileMenuIconColor = isScrolled ? 'bg-primary' : 'bg-white';


  return (
    <header
      className={cn(
        "fixed w-full top-0 left-0 z-50 py-6",
        isMenuOpen ? "bg-transparent" : (isScrolled ? "glass-morphism shadow-sm" : "bg-transparent")
      )}
    >
      <div className="container flex items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={isScrolled ? "/assets/mondial-pack-logo-full-colour-rgb.svg" : "/assets/mondial-pack-logo-white-rgb.svg"} 
            alt="Mondial Pack" 
            className="h-10 w-auto"
          />
        </Link>

        {/* Mobile menu toggle */}
        <button
          className={cn("md:hidden transition-colors duration-300 z-50", isScrolled ? 'text-primary' : 'text-white')}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={cn("block w-6 h-0.5 mb-1.5 transition-all duration-300", mobileMenuIconColor, isMenuOpen ? "transform rotate-45 translate-y-2" : "")}></span>
          <span className={cn("block w-6 h-0.5 mb-1.5 transition-all duration-300", mobileMenuIconColor, isMenuOpen ? "opacity-0" : "")}></span>
          <span className={cn("block w-6 h-0.5 transition-all duration-300", mobileMenuIconColor, isMenuOpen ? "transform -rotate-45 -translate-y-2" : "")}></span>
        </button>

        {/* Navigation */}
        <nav className={cn(
          // Mobile styles
          "fixed md:relative inset-0 md:inset-auto top-0 left-0 w-full h-screen md:h-auto md:w-auto transition-all duration-200 ease-in-out",
          "backdrop-blur-md md:backdrop-blur-none",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible md:opacity-100 md:visible",
          "bg-white/5 md:bg-transparent"
        )}>
          <ul className="flex flex-col md:flex-row h-full md:h-auto items-center justify-center md:justify-start space-y-8 md:space-y-0 md:space-x-8 p-4 md:p-0">
            <li><Link to="/" className={cn("font-semibold text-2xl md:text-base transition-colors duration-300", navTextColor)} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" className={cn("font-semibold text-2xl md:text-base transition-colors duration-300", navTextColor)} onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/capabilities" className={cn("font-semibold text-2xl md:text-base transition-colors duration-300", navTextColor)} onClick={() => setIsMenuOpen(false)}>Capabilities</Link></li>
            <li><Link to="/resources" className={cn("font-semibold text-2xl md:text-base transition-colors duration-300", navTextColor)} onClick={() => setIsMenuOpen(false)}>Resources</Link></li>
            <li><Link to="/contact" className={cn("font-semibold text-2xl md:text-base transition-colors duration-300", navTextColor)} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>

        {/* User icon */}
        <div className="hidden md:flex items-center">
          <Link
            to="/login"
            className={cn("flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors duration-300", iconColor)}
          >
            <User size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;