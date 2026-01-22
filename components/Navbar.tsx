
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Programs', path: '/#programs' },
    { name: 'Impact', path: '/#impact' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-slate-100 ${isScrolled ? 'shadow-lg py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo - Always Dark version for white background */}
        <Link to="/" className="flex items-center">
          <Logo light={false} />
        </Link>

        {/* Desktop Menu - Centered as per screenshot style */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.path} 
              className="font-semibold text-slate-600 transition-colors hover:text-red-600 text-sm uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button - Right aligned */}
        <div className="hidden md:block">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-2.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-red-500/20 active:scale-95">
            Donate Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.path}
                className="text-lg font-bold text-slate-700 hover:text-red-600 px-4 py-2 border-b border-slate-50 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-red-600 text-white px-6 py-4 rounded-xl font-bold w-full mt-4 shadow-xl">
              Donate Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
