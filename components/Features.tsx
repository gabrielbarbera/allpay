
import React from 'react';
import {
  Landmark,
  Zap,
  ShieldCheck,
  BarChart3,
  RefreshCw,
  Globe
} from 'lucide-react';
import { FEATURES } from '../constants';

const ICONS = {
  'bank-verification': Landmark,
  'real-time': Zap,
  'security': ShieldCheck,
  'analytics': BarChart3,
  'reconciliation': RefreshCw,
  'multi-currency': Globe
} as const;

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Everything You Need to Accept Payments</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Powerful features designed for modern businesses that need reliable, scalable payment infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => {
            const Icon = ICONS[feature.id as keyof typeof ICONS];
            const gridClass = {
              'bank-verification': 'lg:col-span-2 lg:row-span-1',
              'real-time': 'lg:col-span-1 lg:row-span-2',
              'security': 'lg:col-span-1 lg:row-span-1',
              'analytics': 'lg:col-span-1 lg:row-span-1',
              'reconciliation': 'lg:col-span-1 lg:row-span-1',
              'multi-currency': 'lg:col-span-2 lg:row-span-1'
            }[feature.id] || 'lg:col-span-1 lg:row-span-1';
            return (
              <div
                key={feature.id}
                className={`group relative bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:border-brand-600/30 shadow-2xl flex flex-col justify-between overflow-hidden ${gridClass}`}
              >
                {/* Subtle Background Glow on Hover */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-brand-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-600 mb-8 group-hover:bg-brand-50 group-hover:border-brand-100 transition-colors">
                    <Icon size={24} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-brand-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
