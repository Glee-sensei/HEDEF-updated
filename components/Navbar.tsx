
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync body scroll with menu state
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Partner', path: '/partner' },
    { name: 'Programs', path: '/#programs' },
    { name: 'Team', path: '/#team' },
    { name: 'Impact', path: '/#impact' },
    { name: 'Contact', path: '/#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    setIsMobileMenuOpen(false);
    
    // Check if it's a section anchor on the home page
    if (path.startsWith('/#')) {
      e.preventDefault();
      const elementId = path.substring(2);
      
      if (location.pathname !== '/') {
        // If not on home page, navigate home first then scroll
        navigate('/');
        // Use a timeout to wait for the page to render before scrolling
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        const element = document.getElementById(elementId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (path === '/') {
      e.preventDefault();
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-white border-b border-slate-100 ${isScrolled ? 'shadow-lg py-2' : 'py-3 md:py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center scale-90 md:scale-100 transform origin-left" onClick={() => window.scrollTo(0, 0)}>
          <Logo light={false} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={(e) => {
                if (link.path.startsWith('/#') || link.path === '/') {
                   handleLinkClick(e as any, link.path);
                }
              }}
              className={`font-semibold transition-colors hover:text-red-600 text-[11px] uppercase tracking-wider ${
                location.pathname === link.path ? 'text-red-600' : 'text-slate-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop/Mobile Right Actions */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <Link 
            to="/donate" 
            className="bg-red-600 hover:bg-red-700 text-white px-4 md:px-8 py-2 md:py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all shadow-lg hover:shadow-red-500/20 active:scale-95 inline-block"
          >
            Donate Now
          </Link>

          {/* Mobile Toggle Button */}
          {!isMobileMenuOpen && (
            <button 
              className="lg:hidden p-2 text-slate-800 focus:outline-none border-2 border-slate-100 rounded-xl"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Fullscreen Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[110] flex flex-col animate-in fade-in duration-200">
          {/* Header in Mobile Menu */}
          <div className="p-4 flex justify-between items-center border-b border-slate-50">
            <Logo light={false} className="h-10 scale-90 origin-left" />
            <div className="flex items-center space-x-2">
              <Link 
                to="/donate" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-red-600 text-white px-4 py-2 rounded-xl font-bold text-xs shadow-lg"
              >
                Donate Now
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-slate-900 border-2 border-slate-100 rounded-xl hover:bg-slate-50 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Links List */}
          <div className="flex-grow flex flex-col px-6 py-8 space-y-6 overflow-y-auto">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-2xl font-bold text-slate-800 hover:text-red-600 transition-colors flex items-center justify-between group"
                onClick={(e) => handleLinkClick(e as any, link.path)}
              >
                {link.name}
                <svg className="w-6 h-6 text-slate-200 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          {/* Footer in Mobile Menu */}
          <div className="p-8 border-t border-slate-50 bg-slate-50/50">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 tracking-widest uppercase">
              <span>HEdEF Nigeria</span>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/humaneeducationempowerment/" className="hover:text-teal-600 transition-colors">Instagram</a>
                <a href="#" className="hover:text-teal-600 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
