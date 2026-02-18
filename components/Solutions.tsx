
import React from 'react';
import { Check } from 'lucide-react';
import { SOLUTIONS } from '../constants';

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-xs sm:text-sm font-bold text-brand-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4">Built for Your Business Model</h2>
          <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight">Whether you're a SaaS company, marketplace, or enterprise, AllPay scales with you</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {SOLUTIONS.map((item) => (
            <div key={item.title} className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 shadow-2xl hover:border-brand-600/30 hover:bg-white transition-all duration-500 flex flex-col">
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-brand-600 transition-colors">{item.title}</h4>
              <p className="text-slate-600 mb-8 font-medium leading-relaxed flex-grow">
                {item.description}
              </p>
              
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-10">
                {item.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                    <Check size={14} className="text-brand-600 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
