
import React from 'react';

const REVIEWS = [
  {
    id: 1,
    name: "James Walcott",
    location: "London, UK",
    date: "2 days ago",
    title: "Unrivalled Portfolio Sourcing",
    content: "Osaro found me an off-market development in Marylebone that exceeded my yield expectations by 2%. Their professionalism is second to none."
  },
  {
    id: 2,
    name: "Sarah Lindemann",
    location: "New York, USA",
    date: "1 week ago",
    title: "Seamless International Management",
    content: "Managing my UK assets from NYC used to be a nightmare until I partnered with Osaro. Transparent, efficient, and highly reliable."
  },
  {
    id: 3,
    name: "David Kingston",
    location: "Toronto, Canada",
    date: "3 weeks ago",
    title: "Exquisite Attention to Detail",
    content: "From legal structuring to the final renovation touches, the Osaro team handles everything with a level of elegance rarely seen in the industry."
  }
];

const TrustpilotSection: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-brand-green border-y border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Global <span className="italic font-light text-primary">Investors.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-light max-w-lg">
              Our commitment to transparency and performance is reflected in our client feedback.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">Excellent</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className="w-6 h-6 bg-[#00b67a] flex items-center justify-center text-white text-[10px]">
                    <span className="material-icons-outlined text-sm">star</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Based on 450+ reviews on</span>
              <div className="flex items-center gap-1">
                <span className="material-icons-outlined text-[#00b67a] text-sm">star</span>
                <span className="font-bold text-gray-900 dark:text-white text-sm tracking-tighter">Trustpilot</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-background-light dark:bg-surface-dark p-8 border border-gray-100 dark:border-white/5 transition-all hover:shadow-xl group">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="material-icons-outlined text-[#00b67a] text-sm">star</span>
                ))}
              </div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-3">{review.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-light leading-relaxed mb-6 italic">
                "{review.content}"
              </p>
              <div className="pt-6 border-t border-gray-200 dark:border-white/10 flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-gray-900 dark:text-white tracking-tight">{review.name}</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">{review.location}</p>
                </div>
                <div className="flex items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                  <span className="material-icons-outlined text-[10px] text-[#00b67a]">verified</span>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-3 text-[10px] font-bold text-primary uppercase tracking-[0.4em] group">
            View all 458 reviews
            <span className="w-8 h-px bg-primary group-hover:w-16 transition-all duration-500"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustpilotSection;
