import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationLinks = ['About',  'Projects', 'Experience','Tools', 'Contact'];

  return (
    <header id="home" className="fixed w-full top-0 z-50 bg-neutral-900/90 backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with hover effect */}
          <div className="flex-shrink-0 group">
            <span className="text-white text-xl font-bold relative overflow-hidden">
              <span className="inline-block transform transition-transform duration-300 group-hover:scale-110">
                Kaviyarasan G
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </span>
          </div>

          {/* Desktop Navigation with enhanced hover effects */}
          <nav className="hidden md:flex space-x-8">
            {navigationLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-300 hover:text-white py-2 transition-colors duration-300 ease-in-out group"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button with animation */}
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none transition-transform duration-200 hover:scale-110"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 transform rotate-0 transition-transform duration-300" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6 transform rotate-0 transition-transform duration-300" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation with height animation */}
      <div className="md:hidden overflow-hidden transition-[height] duration-300 ease-in-out" 
           style={{ height: isMobileMenuOpen ? `${navigationLinks.length * 48 + 48}px` : '0' }}>
        <nav className="bg-neutral-900/90 backdrop-blur-sm">
          <ul className="flex flex-col items-center py-6">
            {navigationLinks.map((item) => (
              <li key={item} className="w-full text-center">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-white py-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white/5 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;