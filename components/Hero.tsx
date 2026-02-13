
import React from 'react';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import DashboardMock from './DashboardMock';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-white">
      {/* Subtle animated background gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-gradient-to-br from-brand-200/80 to-blue-200/70 blur-[120px] rounded-full animate-float-slow" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[45%] h-[45%] bg-gradient-to-tr from-blue-200/70 to-brand-200/60 blur-[100px] rounded-full animate-float-slower" />
        <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] bg-gradient-to-br from-brand-100/70 to-transparent blur-[80px] rounded-full animate-pulse-subtle" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[55%_45%] gap-16 items-center relative z-10">
        {/* Left Column: Copy & CTAs */}
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl lg:text-[4.75rem] font-bold tracking-tight text-slate-900 leading-[1.1]">
            Modern Payment <br />
            <span className="text-brand-600">Infrastructure</span> <br />
            for Growing Businesses
          </h1>

          <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
            Streamline inbound payments, automate reconciliation, and get paid faster with AllPay's enterprise-grade payment platform.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-bold transition-all border border-brand-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.05),0_20px_40px_-10px_rgba(21,112,239,0.3)] active:scale-95 flex items-center gap-2 group">
              Schedule a Demo
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-full font-bold transition-all border border-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_2px_rgba(0,0,0,0.05)] active:scale-95 flex items-center gap-2">
              View Documentation
              <FileText size={18} className="text-slate-400" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-8 pt-4">
            {[
              { label: 'Bank-level security', icon: <CheckCircle2 size={16} className="text-brand-600" /> },
              { label: '99.9% uptime', icon: <CheckCircle2 size={16} className="text-brand-600" /> },
              { label: 'SOC 2 compliant', icon: <CheckCircle2 size={16} className="text-brand-600" /> }
            ].map((chip) => (
              <div key={chip.label} className="flex items-center gap-2 text-xs text-slate-500 uppercase tracking-widest font-bold">
                {chip.icon}
                <span>{chip.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Dashboard Mock */}
        <div className="relative group perspective-2000 hidden lg:flex items-center justify-center">
          <div className="relative z-20 w-full transform -rotate-y-6 rotate-x-2 hover:rotate-0 transition-all duration-700 ease-out scale-105">
            <DashboardMock />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, -30px) rotate(5deg); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-25px, 20px) rotate(-5deg); }
        }
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 25s ease-in-out infinite;
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 8s ease-in-out infinite;
        }
      ` }} />
    </section>
  );
};

export default Hero;
