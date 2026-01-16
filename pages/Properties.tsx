
import React, { useState } from 'react';
import { PROPERTIES } from '../constants';
import { ListingStatus, Property } from '../types';

const Properties: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const closeModal = () => setSelectedProperty(null);

  return (
    <div className="pt-24 min-h-screen bg-background-light dark:bg-brand-green">
      {/* Header */}
      <header className="relative py-20 bg-brand-green-light overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2000" 
            alt="London Skyline" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <span className="text-primary text-[10px] tracking-[0.3em] uppercase font-bold mb-4 block">Our Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Properties & <br/> <span className="italic font-light text-primary">Opportunities</span>
          </h1>
          <div className="w-24 h-1 bg-primary mb-8"></div>
          <p className="text-lg text-gray-300 max-w-xl font-light leading-relaxed">
            Curated excellence in global real estate. Discover our exclusive portfolio of premium properties and high-yield investment opportunities.
          </p>
        </div>
      </header>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 mb-20 relative z-30">
        <div className="bg-white dark:bg-surface-dark shadow-2xl p-8 border-t-4 border-primary">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 items-end">
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Listing Type</label>
              <select className="w-full bg-transparent border-0 border-b border-gray-200 dark:border-white/10 py-3 px-0 focus:ring-0 focus:border-primary dark:text-white font-display text-lg">
                <option>All Listings</option>
                <option>For Sale</option>
                <option>For Rent</option>
                <option>Investment</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Location</label>
              <select className="w-full bg-transparent border-0 border-b border-gray-200 dark:border-white/10 py-3 px-0 focus:ring-0 focus:border-primary dark:text-white font-display text-lg">
                <option>Any Location</option>
                <option>London</option>
                <option>Manchester</option>
                <option>Birmingham</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Budget</label>
              <select className="w-full bg-transparent border-0 border-b border-gray-200 dark:border-white/10 py-3 px-0 focus:ring-0 focus:border-primary dark:text-white font-display text-lg">
                <option>Any Price</option>
                <option>£200k - £500k</option>
                <option>£500k - £1M</option>
                <option>£1M+</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Type</label>
              <select className="w-full bg-transparent border-0 border-b border-gray-200 dark:border-white/10 py-3 px-0 focus:ring-0 focus:border-primary dark:text-white font-display text-lg">
                <option>Any Type</option>
                <option>Apartment</option>
                <option>Penthouse</option>
                <option>Townhouse</option>
              </select>
            </div>
            <div>
              <button className="w-full bg-brand-green hover:bg-brand-green-light text-white py-4 font-bold uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-3">
                Search <span className="material-icons-outlined text-sm">search</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-32">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white">Latest Collection</h2>
            <p className="mt-4 text-gray-500 font-light">Explore our most recent additions to the premium portfolio.</p>
          </div>
          <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] hidden md:block">
            Showing 1-6 of 24 properties
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {PROPERTIES.map(property => (
            <div key={property.id} className="group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden mb-8 shadow-xl">
                <img 
                  src={property.imageUrl} 
                  alt={property.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white/95 backdrop-blur-sm text-brand-green px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    {property.status}
                  </span>
                </div>
                <button 
                  onClick={() => setSelectedProperty(property)}
                  className="absolute bottom-6 right-6 w-12 h-12 bg-primary text-white flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-2xl"
                >
                  <span className="material-icons-outlined">north_east</span>
                </button>
              </div>
              
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">{property.location}</span>
                  <span className="font-display font-bold text-xl text-gray-900 dark:text-white">{property.price}</span>
                </div>
                <h3 className="text-2xl font-display font-medium text-gray-800 dark:text-white mb-6 group-hover:text-primary transition-colors cursor-pointer">
                  {property.title}
                </h3>
                
                <div className="flex items-center space-x-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest pt-6 border-t border-gray-100 dark:border-white/5 mb-6">
                  {property.beds && (
                    <div className="flex items-center gap-2">
                      <span className="material-icons-outlined text-sm text-primary">bed</span>
                      <span>{property.beds} Beds</span>
                    </div>
                  )}
                  {property.baths && (
                    <div className="flex items-center gap-2">
                      <span className="material-icons-outlined text-sm text-primary">bathtub</span>
                      <span>{property.baths} Baths</span>
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => setSelectedProperty(property)}
                  className="w-full py-4 border border-primary text-primary hover:bg-primary hover:text-white text-[10px] font-bold uppercase tracking-[0.3em] transition-all"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Property Details Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12 overflow-hidden">
          <div className="absolute inset-0 bg-brand-green/80 backdrop-blur-md animate-in fade-in duration-300" onClick={closeModal}></div>
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-surface-dark shadow-2xl overflow-y-auto animate-in zoom-in-95 duration-300 scrollbar-hide">
            <button 
              onClick={closeModal}
              className="absolute top-8 right-8 z-50 w-12 h-12 bg-white dark:bg-brand-green flex items-center justify-center shadow-xl hover:text-primary transition-colors"
            >
              <span className="material-icons-outlined">close</span>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Image Section */}
              <div className="lg:col-span-7 h-[400px] lg:h-auto sticky top-0">
                <img 
                  src={selectedProperty.imageUrl} 
                  alt={selectedProperty.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="lg:col-span-5 p-10 lg:p-16">
                <div className="mb-10">
                  <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">
                    {selectedProperty.location}
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
                    {selectedProperty.title}
                  </h2>
                  <div className="flex items-center gap-8 mb-8 pb-8 border-b border-gray-100 dark:border-white/5">
                    <span className="text-3xl font-display font-bold text-primary">{selectedProperty.price}</span>
                    <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 border border-primary/20">
                      {selectedProperty.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-12">
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-4">Description</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                      {selectedProperty.description || "No description available for this premium listing."}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8 py-8 border-y border-gray-100 dark:border-white/5">
                    <div>
                      <span className="block text-2xl font-display font-bold text-gray-900 dark:text-white">{selectedProperty.beds}</span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest">Bedrooms</span>
                    </div>
                    <div>
                      <span className="block text-2xl font-display font-bold text-gray-900 dark:text-white">{selectedProperty.baths}</span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest">Bathrooms</span>
                    </div>
                    {selectedProperty.sqft && (
                      <div>
                        <span className="block text-2xl font-display font-bold text-gray-900 dark:text-white">{selectedProperty.sqft}</span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest">Sq Ft</span>
                      </div>
                    )}
                    {selectedProperty.yield && (
                      <div>
                        <span className="block text-2xl font-display font-bold text-primary">{selectedProperty.yield}</span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest">Target Yield</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-6">Amenities</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedProperty.amenities?.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <span className="material-icons-outlined text-primary text-sm">verified</span>
                          <span className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest">
                            {amenity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedProperty.floorPlanUrl && (
                    <div>
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-6">Floor Plan</h4>
                      <div className="aspect-video relative overflow-hidden bg-gray-100 dark:bg-brand-green p-4 border border-gray-100 dark:border-white/5">
                        <img 
                          src={selectedProperty.floorPlanUrl} 
                          alt="Floor Plan" 
                          className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal opacity-50"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button className="bg-white/90 dark:bg-surface-dark px-6 py-3 shadow-xl text-[10px] font-bold uppercase tracking-widest border border-primary/20 hover:text-primary transition-colors">
                            Enlarge Floor Plan
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="pt-10 flex gap-4">
                    <button className="flex-grow bg-primary text-white py-5 text-[10px] font-bold uppercase tracking-[0.4em] shadow-xl hover:bg-primary-dark transition-all">
                      Request Full Pack
                    </button>
                    <button className="w-16 h-16 border border-gray-200 dark:border-white/10 flex items-center justify-center hover:text-primary transition-colors">
                      <span className="material-icons-outlined">share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Properties;
