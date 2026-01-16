
import React from 'react';
import { OFFICES } from '../constants';

const Contact: React.FC = () => {
  const faqs = [
    { q: "What types of properties does Osaro specialize in?", a: "We specialize in premium residential developments in prime Central London locations, as well as high-yield commercial real estate opportunities across the UK's major cities." },
    { q: "How do you support international investors?", a: "Our dedicated team handles every aspect of the investment process for overseas clients, from virtual viewings and legal compliance to tax structuring and full property management." },
    { q: "Do you offer property management services?", a: "Yes, Osaro Investment provides comprehensive property management services including tenant acquisition, maintenance, and full regulatory compliance." },
    { q: "What is the minimum investment requirement?", a: "Investment thresholds vary. Generally, our opportunities start from £250,000 for individual units, with larger portfolios available for institutional investors." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-brand-green">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[65%]">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUCW3ZHu-R5Iwu8n43o7gDJsBx7fJWvj7O-Upwr8u2OUKMiyVLhcw3R8TtkGcHU9HqVPco6QvxWY13DhDdWyWp201VuPKyzl-fkikGf_Bfe-EpLip-FrHjqPoQUKJPcdTe0yvxE8hSh-o3c4BzS92e-BtzP3yCGYudtJbBU2JjRINKRgF5jyvm2hB68mr6rsj6SIIbqXLT63QiTLaCCl0wqUtNEKnS9VDG7cF5CLDsbjp6oZZmq1RVFTRxAzKiErMnnM6I1epg6p1H" 
            alt="London Skyline" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-brand-green/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
          <div className="max-w-xl bg-brand-green p-12 lg:p-20 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            <p className="text-primary text-[10px] tracking-[0.3em] uppercase font-bold mb-6">Contact Us</p>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Get in <br/> <span className="italic font-light text-primary">Touch</span>
            </h1>
            <p className="text-gray-300 text-lg font-light leading-relaxed mb-10">
              Connect with our dedicated team of property experts. We are here to serve your global ambitions.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-[10px] text-white uppercase tracking-[0.3em] font-bold">London Headquarters</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-32 bg-background-light dark:bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-4 space-y-16">
              <div>
                <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8">Contact Details</h3>
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <span className="material-icons-outlined text-primary text-2xl">email</span>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email</p>
                      <p className="text-lg font-display text-gray-900 dark:text-white">info@osaroinvestment.uk</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <span className="material-icons-outlined text-primary text-2xl">call</span>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Phone</p>
                      <p className="text-lg font-display text-gray-900 dark:text-white">+44 (0) 20 7123 4567</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <span className="material-icons-outlined text-primary text-2xl">location_on</span>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Visit Us</p>
                      <p className="text-lg font-display text-gray-900 dark:text-white leading-relaxed">
                        123 Canary Wharf,<br/> London, E14 5AB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative h-64 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKhQ3kYS3Y2KXAPDgkalfd9QJtY6MgNxg6jxdwysDdDZicMDPAO3yvP1_j6Ilwbt6vOs7l_KOij3-1rHt7pqeb_tHDBf26sgs53SD6VW8-3AouRAicj2fi-wKNDWLySE1kBdqNK9Fiov4v8EFGwNrLh01Gt--OEmtgH_R0l2yICe9s9d2ls_QdIb_pef3bQE5mUp98-QkDZ9DrWdYUk-Ur-Ve1AzfUVoyO3E6yPLNWzIeRE-OrwcSzf94ZtdhU7EA2j0D75QVy1PJ_" 
                  alt="Map" 
                  className="w-full h-full object-cover shadow-2xl"
                />
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="bg-white dark:bg-surface-dark p-12 lg:p-20 shadow-2xl border border-gray-100 dark:border-white/5">
                <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">Send an Enquiry</h2>
                <p className="text-gray-500 mb-12">Please fill out the form below. Fields marked with * are required.</p>
                
                <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">First Name *</label>
                      <input type="text" className="w-full bg-transparent border-0 border-b border-gray-200 dark:border-white/10 py-3 px-0 focus:ring-0 focus:border-primary dark:text-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Last Name *</label>
                      <input type="text" className="w-full bg-transparent border-0 border-b border-gray-200 dark:border-white/10 py-3 px-0 focus:ring-0 focus:border-primary dark:text-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address *</label>
                      <input type="email" className="w-full bg-transparent border-0 border-b border-gray-200 dark:border-white/10 py-3 px-0 focus:ring-0 focus:border-primary dark:text-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                      <input type="tel" className="w-full bg-transparent border-0 border-b border-gray-200 dark:border-white/10 py-3 px-0 focus:ring-0 focus:border-primary dark:text-white" />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">I am interested in</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Residential Investment', 'Commercial Real Estate', 'Property Management', 'Other Enquiry'].map(type => (
                        <label key={type} className="flex items-center gap-4 p-5 border border-gray-100 dark:border-white/5 cursor-pointer hover:border-primary transition-all">
                          <input type="radio" name="interest" className="text-primary focus:ring-primary h-4 w-4" />
                          <span className="text-sm text-gray-700 dark:text-gray-300 font-medium uppercase tracking-widest text-[10px]">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Message *</label>
                    <textarea rows={4} className="w-full bg-transparent border-0 border-b border-gray-200 dark:border-white/10 py-3 px-0 focus:ring-0 focus:border-primary dark:text-white resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  
                  <button className="bg-brand-green text-white px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] shadow-2xl hover:bg-brand-green-light transition-all">
                    Submit Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-32 bg-white dark:bg-brand-green-light border-t border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <span className="text-primary text-[10px] tracking-[0.3em] uppercase font-bold mb-4 block">Global Network</span>
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white">Our Global Offices</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {OFFICES.map(office => (
              <div key={office.city} className="group overflow-hidden bg-background-light dark:bg-brand-green border border-gray-100 dark:border-white/5 shadow-xl transition-all hover:-translate-y-2">
                <div className="h-56 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={office.imageUrl} alt={office.city} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute bottom-6 left-6 bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-brand-green">{office.region}</div>
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">{office.city}</h3>
                  <p className="text-sm text-gray-500 mb-6 font-light">{office.address}</p>
                  <p className="text-sm font-bold text-primary tracking-widest uppercase">{office.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-brand-green text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-display font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-400 font-light">Common inquiries for our prospective investors.</p>
          </div>
          
          <div className="space-y-8">
            {faqs.map(faq => (
              <div key={faq.q} className="border-b border-white/10 pb-8 group">
                <h3 className="text-xl font-display font-medium text-white mb-4 flex justify-between items-center cursor-pointer group-hover:text-primary transition-colors">
                  {faq.q}
                  <span className="material-icons-outlined text-primary text-sm">expand_more</span>
                </h3>
                <p className="text-gray-400 font-light leading-relaxed hidden group-hover:block transition-all duration-500">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
