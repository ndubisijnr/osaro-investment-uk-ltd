
import React from 'react';
import { MILESTONES } from '../constants';
import TrustpilotSection from '../components/TrustpilotSection';

const About: React.FC = () => {
  const partners = [
    { name: 'Barclays Private Bank', category: 'Finance' },
    { name: 'Knight Frank', category: 'Real Estate' },
    { name: 'Savills', category: 'Consultancy' },
    { name: 'Berkeley Group', category: 'Development' },
    { name: 'Taylor Wessing', category: 'Legal' },
    { name: 'HSBC Expat', category: 'Banking' }
  ];

  return (
    <div className="pt-24 min-h-screen overflow-hidden">
      {/* Hero Header */}
      <section className="relative py-32 bg-brand-green overflow-hidden">
        <div className="absolute inset-0 opacity-10 hero-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <span className="text-primary text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block">Our Heritage</span>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-8">
            Excellence in <br/> <span className="italic font-light text-primary">Every Detail</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-400 font-light leading-relaxed">
            Since 2013, Osaro Investment has been the silent partner behind some of the UK's most successful private property portfolios.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-white dark:bg-brand-green">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="p-12 bg-background-light dark:bg-surface-dark border-t-4 border-primary shadow-xl">
              <span className="material-icons-outlined text-primary text-5xl mb-8">security</span>
              <h3 className="text-2xl font-display font-bold mb-6 text-gray-900 dark:text-white">Trust & Security</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                We prioritize the security of your capital above all else, focusing on prime assets with proven long-term resilience.
              </p>
            </div>
            <div className="p-12 bg-background-light dark:bg-surface-dark border-t-4 border-primary shadow-xl">
              <span className="material-icons-outlined text-primary text-5xl mb-8">visibility</span>
              <h3 className="text-2xl font-display font-bold mb-6 text-gray-900 dark:text-white">Absolute Transparency</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Our investors enjoy full visibility through our digital platform, providing real-time analytics and performance tracking.
              </p>
            </div>
            <div className="p-12 bg-background-light dark:bg-surface-dark border-t-4 border-primary shadow-xl">
              <span className="material-icons-outlined text-primary text-5xl mb-8">diamond</span>
              <h3 className="text-2xl font-display font-bold mb-6 text-gray-900 dark:text-white">Bespoke Approach</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                No two investors are the same. We tailor our sourcing and management strategies to your specific risk profile and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-brand-green-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary text-[10px] tracking-[0.3em] uppercase font-bold mb-4 block">Our Leadership</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">The Minds Behind Osaro</h2>
            </div>
            <p className="text-gray-400 max-w-sm text-sm font-light leading-relaxed">
              Our team combines decades of experience in UK law, property management, and international finance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { name: 'Osa Robinson', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
              { name: 'Marcus Sterling', role: 'Head of Investment', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
              { name: 'Elena Vance', role: 'Legal Director', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
              { name: 'David Chen', role: 'Portfolio Manager', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
            ].map((member) => (
              <div key={member.name} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-green/20 group-hover:bg-transparent transition-all"></div>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">{member.name}</h3>
                <p className="text-primary text-[10px] font-bold uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trustpilot Section */}
      <TrustpilotSection />

      {/* Partners Section */}
      <section className="py-32 bg-background-light dark:bg-brand-green border-y border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-primary text-[10px] tracking-[0.3em] uppercase font-bold mb-4 block">Strategic Network</span>
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white">Institutional Partners</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-8"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 border border-gray-200 dark:border-white/10 bg-gray-200 dark:bg-white/10 shadow-2xl">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-white dark:bg-surface-dark p-10 flex flex-col items-center justify-center text-center group transition-colors hover:bg-gray-50 dark:hover:bg-brand-green-light">
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  {partner.category}
                </span>
                <span className="font-display font-bold text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-12 text-sm text-gray-500 font-light italic">
            Collaborating with industry leaders to secure your investment future.
          </p>
        </div>
      </section>

      {/* History Timeline Re-use */}
      <section className="py-32 bg-white dark:bg-brand-green">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-24">
            <span className="text-primary text-[10px] tracking-[0.3em] uppercase font-bold mb-4 block">Our History</span>
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white">A Decade of Growth</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {MILESTONES.map((item) => (
              <div key={item.year} className="relative p-8 bg-background-light dark:bg-surface-dark shadow-lg">
                <span className="text-5xl font-display font-bold text-primary/20 absolute -top-4 -right-4">{item.year}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
