
import React from 'react';
import { 
  Landmark, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  RefreshCw, 
  Globe 
} from 'lucide-react';

const FEATURE_DATA = [
  {
    id: 'bank-verification',
    title: 'Instant Bank Verification',
    description: 'Connect and verify bank accounts in seconds using our secure authentication flow. Support for all major financial institutions.',
    icon: Landmark,
    gridClass: 'lg:col-span-2 lg:row-span-1'
  },
  {
    id: 'real-time',
    title: 'Real-Time Processing',
    description: 'Process payments instantly with real-time settlement and notifications. No more waiting days for funds to clear.',
    icon: Zap,
    gridClass: 'lg:col-span-1 lg:row-span-2'
  },
  {
    id: 'security',
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, PCI DSS compliant, and SOC 2 certified. Your data and your customers\' data is always protected.',
    icon: ShieldCheck,
    gridClass: 'lg:col-span-1 lg:row-span-1'
  },
  {
    id: 'analytics',
    title: 'Advanced Analytics',
    description: 'Deep insights into payment flows, revenue trends, and customer behavior. Make data-driven decisions with confidence.',
    icon: BarChart3,
    gridClass: 'lg:col-span-1 lg:row-span-1'
  },
  {
    id: 'reconciliation',
    title: 'Automated Reconciliation',
    description: 'Match payments to invoices automatically. Save hours of manual work and eliminate reconciliation errors.',
    icon: RefreshCw,
    gridClass: 'lg:col-span-1 lg:row-span-1'
  },
  {
    id: 'multi-currency',
    title: 'Multi-Currency Support',
    description: 'Accept payments in 135+ currencies with automatic conversion and competitive FX rates. Go global effortlessly.',
    icon: Globe,
    gridClass: 'lg:col-span-2 lg:row-span-1'
  }
];

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
          {FEATURE_DATA.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.id}
                className={`group relative bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:border-brand-600/30 shadow-2xl flex flex-col justify-between overflow-hidden ${feature.gridClass}`}
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
