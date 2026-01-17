
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  // Navbar should be solid if we've scrolled OR if we are not on the home page
  const isSolid = scrolled || !isHome;
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isSolid ? 'bg-white/95 dark:bg-brand-green/95 backdrop-blur-md shadow-lg py-1.5' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-row gap-2 items-center justify-center group">
            <img src="./LOGO.png" alt="OSARO Investment Logo" className="h-8 w-auto group-hover:opacity-80 transition-opacity duration-300" />
            <div className="flex flex-col leading-tight">
              <span className={`font-display font-bold tracking-tighter transition-all duration-500 ${isSolid ? 'text-sm sm:text-base text-brand-green dark:text-white' : 'text-base sm:text-lg text-white'}`}>
                OSARO <span className="text-primary italic">INVESTMENT</span>
              </span>
              <span className={`text-[5px] sm:text-[6px] font-bold tracking-[0.3em] uppercase transition-all duration-500 ${isSolid ? 'text-brand-green/40 dark:text-white/40' : 'text-white/60'}`}>
                UK LTD. RC NO: 08453211
              </span>
            </div>
          </Link>

          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase transition-colors hover:text-primary-dark ${isActive(link.path)
                    ? 'text-primary'
                    : (isSolid ? 'text-brand-green dark:text-gray-100' : 'text-white')
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`px-5 py-2 sm:px-7 sm:py-2.5 rounded-none text-[9px] font-bold uppercase tracking-widest transition-all shadow-xl shadow-primary/20 ${isSolid
                  ? 'bg-brand-green text-white hover:bg-brand-green-light'
                  : 'bg-primary text-white hover:bg-primary-dark'
                }`}
            >
              Consultation
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${isSolid ? 'text-brand-green dark:text-white' : 'text-white'}`}
            >
              <span className="material-icons-outlined text-3xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-brand-green border-t border-gray-100 dark:border-white/10 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-lg font-display font-medium hover:text-primary transition-colors ${isActive(link.path) ? 'text-primary' : 'text-brand-green dark:text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full bg-primary text-white text-center py-4 text-sm font-bold uppercase tracking-widest"
          >
            Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
