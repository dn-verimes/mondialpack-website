import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import { cn } from '@/lib/utils';
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={cn("fixed w-full top-0 left-0 z-50 transition-all duration-300 py-4", isScrolled ? "glass-morphism shadow-sm" : "bg-transparent")}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-medium text-xl text-primary">
            Mondial Pack
          </span>
        </Link>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={cn("block w-6 h-0.5 bg-current mb-1.5 transition-all", isMenuOpen ? "transform rotate-45 translate-y-2" : "")}></span>
          <span className={cn("block w-6 h-0.5 bg-current mb-1.5 transition-all", isMenuOpen ? "opacity-0" : "")}></span>
          <span className={cn("block w-6 h-0.5 bg-current transition-all", isMenuOpen ? "transform -rotate-45 -translate-y-2" : "")}></span>
        </button>

        {/* Desktop navigation */}
        <nav className="">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
            <li><Link to="/" className="text-secondary hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-secondary hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/capabilities" className="text-secondary hover:text-primary transition-colors">Capabilities</Link></li>
            <li><Link to="/resources" className="text-secondary hover:text-primary transition-colors">Resources</Link></li>
            <li><Link to="/contact" className="text-secondary hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </nav>

        {/* User icon only - simplified */}
        <div className="hidden md:flex items-center">
          <Link to="/login" className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-colors">
            <User size={20} />
          </Link>
        </div>
      </div>
    </header>;
};
export default Header;