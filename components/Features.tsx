
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
import { motion } from 'framer-motion';

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
    <section id="features" className="py-16 sm:py-24 lg:py-32 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight">Everything You Need to Accept Payments</h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium px-2">
            Powerful features designed for modern businesses that need reliable, scalable payment infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {FEATURES.map((feature, index) => {
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
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-brand-600/30 hover:shadow-2xl flex flex-col justify-between overflow-hidden ${gridClass}`}
              >
                {/* Subtle Background Glow on Hover */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-brand-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-600 mb-8 group-hover:bg-brand-50 group-hover:border-brand-100 transition-all">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight group-hover:text-brand-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                    {feature.description}
                  </p>

                  <>
                    {feature.bullets && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        whileHover={{ height: 'auto', opacity: 1 }}
                        className="space-y-2 mt-4 overflow-hidden"
                      >
                        {feature.bullets.map((bullet, idx) => (
                          <motion.li
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            key={bullet}
                            className="text-sm text-slate-500 flex items-start gap-2"
                          >
                            <span className="text-brand-600 mt-1">✓</span>
                            <span>{bullet}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
