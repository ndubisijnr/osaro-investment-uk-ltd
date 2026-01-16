
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green text-gray-300 pt-20 pb-10 border-t border-brand-green-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-8">
              <h2 className="font-display font-bold text-lg text-white tracking-tighter">
                OSARO <span className="text-primary italic">INVESTMENT</span>
              </h2>
              <p className="text-[8px] font-bold tracking-[0.3em] text-primary/60 uppercase">UK LTD. RC NO: 08453211</p>
            </div>
            <p className="text-sm text-gray-400 mb-8 font-light leading-relaxed">
              Your one stop shop for real estate services.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <span className="material-icons-outlined text-sm">facebook</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <span className="material-icons-outlined text-sm">link</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <span className="material-icons-outlined text-sm">camera_alt</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-8">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'Properties', 'Services', 'About Us', 'Contact'].map(item => (
                <li key={item}>
                  <Link to={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '')}`} className="text-sm text-gray-400 hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-8">Our Services</h3>
            <ul className="space-y-4">
              {['Property Sourcing', 'Investment Management', 'Legal & Compliance', 'Renovations'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-8">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <span className="material-icons-outlined text-primary text-sm mt-1 mr-4">location_on</span>
                <span className="text-gray-400 text-sm leading-relaxed">123 Business District, Canary Wharf,<br/>London, E14 5AB, UK</span>
              </li>
              <li className="flex items-center">
                <span className="material-icons-outlined text-primary text-sm mr-4">email</span>
                <a href="mailto:info@osaroinvestment.uk" className="text-gray-400 hover:text-white text-sm">info@osaroinvestment.uk</a>
              </li>
              <li className="flex items-center">
                <span className="material-icons-outlined text-primary text-sm mr-4">phone</span>
                <span className="text-gray-400 text-sm">+44 (0) 20 7123 4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest">
          <p>© 2026 Osaro Investment UK LTD. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
