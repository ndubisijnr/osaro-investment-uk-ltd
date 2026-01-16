
import React from 'react';
import TrustpilotSection from '../components/TrustpilotSection';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Property Sourcing',
      desc: 'Access to off-market opportunities and primary developments across the UK, curated for maximum capital growth.',
      icon: 'search_insider',
      features: ['Off-market Access', 'Feasibility Reports', 'Local Market Analysis']
    },
    {
      title: 'Investment Management',
      desc: 'End-to-end management of your assets, from acquisition and structuring to ongoing yield optimization.',
      icon: 'account_balance',
      features: ['Portfolio Structuring', 'Yield Monitoring', 'Exit Strategies']
    },
    {
      title: 'Legal & Compliance',
      desc: 'Expert navigation of UK property law, SDLT tax structuring, and AML compliance for international investors.',
      icon: 'gavel',
      features: ['Conveyancing Oversight', 'Tax Efficiency Planning', 'Regulatory Filing']
    },
    {
      title: 'Lettings & Management',
      desc: 'Hands-off property ownership through our full-service management including tenant vetting and maintenance.',
      icon: 'home_work',
      features: ['Tenant Sourcing', '24/7 Maintenance', 'Rent Collection']
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center bg-brand-green">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30 grayscale" 
            alt="City architecture" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <span className="text-primary text-[10px] tracking-[0.3em] uppercase font-bold mb-6 block">Our Solutions</span>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-8">
            Tailored <br/> <span className="italic font-light text-primary">Wealth Building</span>
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-background-light dark:bg-brand-green">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <div key={idx} className="group bg-white dark:bg-surface-dark p-16 shadow-2xl transition-all hover:-translate-y-2 border-l-8 border-primary">
                <span className="material-icons-outlined text-primary text-6xl mb-10 block">{service.icon}</span>
                <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-tight">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg font-light leading-relaxed mb-10">
                  {service.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map(f => (
                    <div key={f} className="flex items-center gap-3">
                      <span className="material-icons-outlined text-primary text-sm">check_circle</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trustpilot Section */}
      <TrustpilotSection />

      {/* Process Section */}
      <section className="py-32 bg-brand-green text-white relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="mb-24">
            <span className="text-primary text-[10px] tracking-[0.3em] uppercase font-bold mb-4 block">Our Method</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">How We Work</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: '01', title: 'Consultation', text: 'Defining your investment goals and risk appetite.' },
              { step: '02', title: 'Sourcing', text: 'Curating properties that align with your strategy.' },
              { step: '03', title: 'Acquisition', text: 'Handling legal, tax, and purchase formalities.' },
              { step: '04', title: 'Management', text: 'Ongoing care and yield optimization of your asset.' }
            ].map((s, i) => (
              <div key={i} className="relative">
                <span className="text-7xl font-display font-bold text-white/5 absolute -top-12 left-0">{s.step}</span>
                <h3 className="text-xl font-bold mb-4 text-primary relative z-10">{s.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
