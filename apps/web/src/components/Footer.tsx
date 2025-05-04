
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-medium mb-4">Mondial Pack</h3>
            <p className="text-white/80 mb-6">
              Your trusted partner for premium supplement manufacturing, packaging, and delivery.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://facebook.com" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="text-white/80 hover:text-primary transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link to="/formats" className="text-white/80 hover:text-primary transition-colors">
                  Formats
                </Link>
              </li>
              <li>
                <Link to="/packaging" className="text-white/80 hover:text-primary transition-colors">
                  Packaging
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/resources/blog" className="text-white/80 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/resources/case-studies" className="text-white/80 hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/resources/white-papers" className="text-white/80 hover:text-primary transition-colors">
                  White Papers
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/80 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-primary flex-shrink-0" />
                <span className="text-white/80">
                  123 Manufacturing Way<br />
                  Industrial Park, Suite 100<br />
                  Production City, PC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-primary flex-shrink-0" />
                <a href="tel:+15551234567" className="text-white/80 hover:text-primary transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary flex-shrink-0" />
                <a href="mailto:info@mondialpack.com" className="text-white/80 hover:text-primary transition-colors">
                  info@mondialpack.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Mondial Pack. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-white/60 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-white/60 hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-white/60 hover:text-primary text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
