
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PROPERTIES } from '../constants';
import TrustpilotSection from '../components/TrustpilotSection';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000", // London Luxury
  "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=2000", // New York Skyline
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000", // Toronto Cityscape
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=2000", // Modern Penthouse Interior
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000"  // Luxury Estate
];

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const featuredProperties = PROPERTIES.slice(0, 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white dark:bg-brand-green">
      {/* Cinematic Full-Screen Dynamic Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0">
        <div className="absolute inset-0 z-0">
          {HERO_IMAGES.map((img, idx) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
                idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={img} 
                alt={`Luxury Property View ${idx + 1}`} 
                className={`w-full h-full object-cover brightness-[0.45] transition-transform duration-[8000ms] ease-linear ${
                  idx === currentImageIndex ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-green/60 via-transparent to-brand-green/90"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto flex flex-col justify-center h-full">
          <div className="inline-flex items-center self-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 border border-primary/40 bg-brand-green/30 backdrop-blur-md mb-6 sm:mb-10 animate-in fade-in slide-in-from-top-4 duration-1000">
            <span className="w-6 sm:w-8 h-px bg-primary"></span>
            <span className="text-primary text-[8px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.6em] uppercase font-bold">Your one stop shop for real estate services</span>
            <span className="w-6 sm:w-8 h-px bg-primary"></span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-[10rem] font-display font-bold text-white mb-6 sm:mb-10 leading-[0.95] sm:leading-[0.9] tracking-tighter">
            Elegance <br/> 
            <span className="italic font-light text-primary">Preserved.</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-10 sm:mb-16 leading-relaxed opacity-90 tracking-tight">
            Strategically curating high-yield property portfolios for the world's most discerning institutional and private investors.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
            <Link to="/properties" className="group relative bg-primary hover:bg-primary-dark text-white px-10 sm:px-14 py-4 sm:py-6 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] transition-all shadow-2xl overflow-hidden">
              <span className="relative z-10">The Collection</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link to="/contact" className="backdrop-blur-md border border-white/20 text-white px-10 sm:px-14 py-4 sm:py-6 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-brand-green transition-all">
              Private Consultation
            </Link>
          </div>
        </div>

        {/* Market Ticker */}
        <div className="absolute bottom-0 left-0 w-full bg-brand-green/80 backdrop-blur-xl border-t border-white/5 py-4 overflow-hidden z-20">
          <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap text-white/50 text-[10px] font-bold uppercase tracking-[0.4em] gap-12 items-center">
            <span>Global Real Estate Yields: +4.8%</span>
            <span className="text-primary">●</span>
            <span>New York Manhattan Growth: +10%</span>
            <span className="text-primary">●</span>
            <span>Toronto Tech Hub Premium: +9.2%</span>
            <span className="text-primary">●</span>
            <span>Asset Management Growth: £650M+</span>
            <span className="text-primary">●</span>
            <span>London Prime Yields: +4.2%</span>
            <span className="text-primary">●</span>
            <span>Global Market Growth: +7.5%</span>
            <span className="text-primary">●</span>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 sm:py-32 lg:py-40 bg-white dark:bg-brand-green overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden shadow-[20px_20px_40px_-10px_rgba(0,0,0,0.3)] lg:shadow-[40px_40px_80px_-20px_rgba(0,0,0,0.3)] dark:shadow-[20px_20px_40px_-10px_rgba(0,0,0,0.8)] lg:dark:shadow-[40px_40px_80px_-20px_rgba(0,0,0,0.8)]">
                <img 
                  src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1000" 
                  alt="Luxury Penthouse Interior" 
                  className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
                />
              </div>
              {/* Decorative Floating Element */}
              <div className="absolute -bottom-12 -right-12 w-64 h-64 lg:w-80 lg:h-80 bg-brand-green-light border-4 lg:border-8 border-white dark:border-surface-dark p-8 lg:p-12 flex flex-col justify-center hidden xl:flex">
                <div className="w-10 lg:w-12 h-1 bg-primary mb-4 lg:mb-6"></div>
                <p className="text-white font-display text-4xl lg:text-5xl font-bold mb-2 lg:mb-3 tracking-tighter">0.1%</p>
                <p className="text-white/60 text-[8px] lg:text-[9px] font-bold uppercase tracking-[0.3em] leading-relaxed">
                  Of global properties meet our acquisition criteria.
                </p>
              </div>
            </div>
            
            <div className="lg:pl-8 xl:pl-16">
              <span className="text-primary text-[10px] tracking-[0.5em] uppercase font-bold mb-6 sm:mb-8 block">Our Philosophy</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-gray-900 dark:text-white mb-8 sm:mb-10 leading-[1.1]">
                Wealth is a <br/> <span className="italic font-light text-primary">Masterpiece.</span>
              </h2>
              <div className="w-20 lg:w-24 h-px bg-primary mb-8 lg:mb-12"></div>
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-8 lg:mb-10">
                At Osaro, we view real estate as more than mere square footage; it is a vehicle for legacy. Our acquisition team operates at the intersection of global insight and financial precision.
              </p>
              <div className="space-y-6 mb-12 lg:mb-16">
                {[
                  { title: "Exclusive Access", desc: "Priority entry to off-market developments before public listing." },
                  { title: "Risk Mitigation", desc: "Rigorous due diligence overseen by our global legal partners." }
                ].map(item => (
                  <div key={item.title} className="flex gap-4 sm:gap-6">
                    <span className="material-icons-outlined text-primary">verified</span>
                    <div>
                      <h4 className="text-[10px] sm:text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-[10px] sm:text-xs text-gray-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center gap-4 sm:gap-6 text-[10px] font-bold text-brand-green dark:text-white uppercase tracking-[0.4em] group">
                The Founder's Letter
                <span className="w-12 sm:w-16 h-px bg-primary group-hover:w-20 sm:group-hover:w-28 transition-all duration-500"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trustpilot Section */}
      <TrustpilotSection />

      {/* The Osaro Strategy */}
      <section className="py-24 sm:py-32 lg:py-40 bg-brand-green-light text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none hero-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 shadow-2xl">
            {[
              { num: 'I', title: 'Identify', text: 'Using proprietary algorithms to track planning applications and urban regeneration cycles across global markets.' },
              { num: 'II', title: 'Institutionalise', text: 'Transforming residential assets into professional-grade investment vehicles with optimal international tax structures.' },
              { num: 'III', title: 'Increase', text: 'Active asset management and bespoke renovation programs to force appreciation across our global portfolio.' }
            ].map((pillar) => (
              <div key={pillar.num} className="bg-brand-green-light p-10 sm:p-12 lg:p-16 hover:bg-brand-green transition-colors duration-500">
                <span className="text-primary font-display text-3xl sm:text-4xl font-bold mb-8 lg:mb-10 block">{pillar.num}</span>
                <h3 className="text-xl sm:text-2xl font-display font-bold mb-4 sm:mb-6 tracking-tight uppercase">{pillar.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-xs sm:text-sm">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Collection Preview */}
      <section className="py-24 sm:py-32 lg:py-40 bg-background-light dark:bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-20 lg:mb-32 gap-8">
            <div className="max-w-xl">
              <span className="text-primary text-[10px] tracking-[0.5em] uppercase font-bold mb-4 sm:mb-6 block">Prime Opportunities</span>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-gray-900 dark:text-white leading-tight">The Collection</h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 font-light max-w-sm text-sm leading-relaxed pb-2">
              A curated snapshot of our current high-performance assets. Available exclusively through Osaro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {featuredProperties.map((property) => (
              <div key={property.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden mb-8 lg:mb-10 shadow-2xl">
                  <img 
                    src={property.imageUrl} 
                    alt={property.title} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-green/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white transform rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      <span className="material-icons-outlined text-sm">north_east</span>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8">
                    <span className="bg-primary/90 backdrop-blur-sm text-white px-4 py-1.5 lg:px-5 lg:py-2 text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.2em]">
                      {property.status}
                    </span>
                  </div>
                </div>
                <div className="space-y-3 lg:space-y-4 px-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-display font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300 leading-snug">{property.title}</h3>
                      <p className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mt-2 lg:mt-3">{property.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 lg:gap-6 pt-4 lg:pt-6 border-t border-gray-100 dark:border-white/5">
                    <span className="font-display font-bold text-xl lg:text-2xl text-gray-900 dark:text-white">{property.price}</span>
                    {property.yield && (
                      <span className="text-primary text-[8px] lg:text-[10px] font-bold tracking-widest px-2 py-1 border border-primary/20">
                        {property.yield} YIELD
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 lg:mt-32 text-center">
            <Link to="/properties" className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-8 group">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.5em] text-brand-green dark:text-white group-hover:text-primary transition-colors">Complete Portfolio Access</span>
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                <span className="material-icons-outlined text-primary group-hover:text-white transition-colors">east</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="relative py-24 sm:py-32 lg:py-40 bg-brand-green overflow-hidden">
        <div className="absolute inset-0 opacity-5 grayscale pointer-events-none">
          <img src="https://images.unsplash.com/photo-1512453979798-5eaad0ff3e01?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="World Map" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div>
              <span className="text-primary text-[10px] tracking-[0.5em] uppercase font-bold mb-6 sm:mb-8 block">Global Intelligence</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-8 sm:mb-10 leading-tight">
                Masterful <br/> <span className="italic font-light text-primary">Global Presence.</span>
              </h2>
              <div className="space-y-8 lg:space-y-12">
                {[
                  { city: 'London', role: 'European Operations & Sourcing', phone: '+44 20 7123 4567' },
                  { city: 'United States', role: 'North American Investment Hub', phone: '+1 212 555 0199' },
                  { city: 'Canada', role: 'Northern Expansion Gateway', phone: '+1 416 555 0122' },
                ].map((office) => (
                  <div key={office.city} className="flex items-center gap-6 lg:gap-10 group">
                    <div className="w-12 lg:w-20 h-px bg-white/20 group-hover:w-20 lg:group-hover:w-32 group-hover:bg-primary transition-all duration-500"></div>
                    <div>
                      <h4 className="text-white font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-1 lg:mb-2">{office.city}</h4>
                      <p className="text-gray-500 text-[8px] sm:text-[10px] font-medium tracking-wider">{office.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-2xl p-10 lg:p-16 border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] lg:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4 leading-tight">Request Access</h3>
              <p className="text-gray-400 mb-8 lg:mb-12 font-light text-sm leading-relaxed">Begin your global portfolio evaluation with our Senior Investment Associates.</p>
              <form className="space-y-6 lg:space-y-8">
                <div className="relative">
                  <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-white/10 py-3 lg:py-4 text-white focus:border-primary outline-none transition-all placeholder:text-white/20 text-sm" />
                </div>
                <div className="relative">
                  <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/10 py-3 lg:py-4 text-white focus:border-primary outline-none transition-all placeholder:text-white/20 text-sm" />
                </div>
                <div className="pt-4 lg:pt-6">
                  <button className="w-full bg-primary hover:bg-primary-dark text-white py-4 lg:py-6 text-[10px] font-bold uppercase tracking-[0.4em] transition-all shadow-xl group flex items-center justify-center gap-4">
                    Send Inquiry
                    <span className="material-icons-outlined text-sm group-hover:translate-x-2 transition-transform">east</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Tagline */}
      <section className="py-16 sm:py-20 bg-white dark:bg-brand-green border-t border-gray-100 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-primary font-display italic text-xl sm:text-2xl dark:text-primary/60 leading-relaxed">
              "Your one stop shop for real estate services."
            </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
