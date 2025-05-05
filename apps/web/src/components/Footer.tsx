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
            <img 
              src="/assets/mondial-pack-logo-white-rgb.svg" 
              alt="Mondial Pack" 
              className="h-10 w-auto mb-4"
            />
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
            <h3 className="text-xl font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/80 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/capabilities" className="text-white/80 hover:text-primary transition-colors">Capabilities</Link></li>
              <li><Link to="/resources" className="text-white/80 hover:text-primary transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="text-primary mr-3 mt-1" size={20} />
                <span className="text-white/80">info@mondialpack.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-primary mr-3 mt-1" size={20} />
                <span className="text-white/80">+31 (0)53 431 00 00</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-primary mr-3 mt-1" size={20} />
                <address className="not-italic text-white/80">
                  Rigtersbleek-Aalten 18<br />
                  7521 RB Enschede<br />
                  The Netherlands
                </address>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-medium mb-4">Stay Updated</h3>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for the latest updates and industry insights.
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Mondial Pack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
