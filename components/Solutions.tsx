
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SOLUTIONS } from '../constants';

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-[0.4em] mb-4">Built for Your Business Model</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Whether you're a SaaS company, marketplace, or enterprise, AllPay scales with you</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SOLUTIONS.map((item) => (
            <div key={item.title} className="group p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xl hover:border-brand-600/30 hover:bg-white transition-all duration-500 flex flex-col">
              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">{item.title}</h4>
              <p className="text-slate-600 mb-8 font-medium leading-relaxed flex-grow">
                {item.description}
              </p>
              
              <div className="space-y-3 mb-10">
                {item.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                    <Check size={14} className="text-brand-600 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-200 mt-auto flex items-center justify-between text-brand-600 font-bold text-sm cursor-pointer group-hover:gap-2 transition-all">
                <span>Learn more</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
