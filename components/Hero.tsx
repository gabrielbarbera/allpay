
import React from 'react';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import DashboardMock from './DashboardMock';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-20 flex items-center overflow-hidden bg-white">
      {/* Subtle animated background gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-gradient-to-br from-brand-200/80 to-blue-200/70 blur-[120px] rounded-full animate-float-slow" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[45%] h-[45%] bg-gradient-to-tr from-blue-200/70 to-brand-200/60 blur-[100px] rounded-full animate-float-slower" />
        <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] bg-gradient-to-br from-brand-100/70 to-transparent blur-[80px] rounded-full animate-pulse-subtle" />
      </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[60%_40%] gap-16 items-center relative z-10">
        {/* Left Column: Copy & CTAs */}
        <div className="flex flex-col gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 leading-[1.2]"
          >
            Modern <br />
            <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-blue-600 bg-clip-text text-transparent">Payment Infrastructure</span> <br />
            for Growing Businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-600 max-w-xl leading-relaxed font-medium"
          >

          <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
            Streamline inbound payments, automate reconciliation, and get paid faster with AllPay's enterprise-grade payment platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button 
              onClick={() => window.location.href = 'https://calendly.com/allpay/demo'}
              className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-bold transition-all border border-brand-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.05),0_20px_40px_-10px_rgba(21,112,239,0.3)] active:scale-95 flex items-center gap-2 group focus:ring-4 focus:ring-brand-300 focus:outline-none"
              aria-label="Schedule a product demo with AllPay"
            >
              Schedule a Demo
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </button>
            <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => window.location.href = 'https://docs.allpay.com'}
            className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-full font-bold transition-all border border-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_2px_rgba(0,0,0,0.05)] active:scale-95 flex items-center gap-2 focus:ring-4 focus:ring-slate-300 focus:outline-none"
            aria-label="View AllPay documentation"
          > 
              onClick={() => window.location.href = 'https://docs.allpay.com'}
              className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-full font-bold transition-all border border-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_2px_rgba(0,0,0,0.05)] active:scale-95 flex items-center gap-2 focus:ring-4 focus:ring-slate-300 focus:outline-none"
              aria-label="View AllPay documentation"
            >
              View Documentation
              <FileText size={18} className="text-slate-400" aria-hidden="true" />
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-slate-400"
            >
              <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M19 12l-7 7m0-0l-7-7m0 0" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </motion.div>
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

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-8 pt-6"
          >
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="font-semibold">Trusted by</span>
              <span className="font-bold text-slate-700">500+</span>
              <span>companies worldwide</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="font-semibold">$50M+</span>
              </div>
              <span>processed monthly</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Dashboard Mock */}
        <div className="relative group perspective-2000 hidden lg:flex items-center justify-center">
          {/* Mobile dashboard preview - simplified */}
          <div className="lg:hidden w-full max-w-md mx-auto px-6 mb-12">
            <div className="relative bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                </div>
                <div className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.2em]">Payment Analytics</div>
                <div className="w-6"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center space-y-1">
                  <p className="text-2xl font-bold text-slate-900">$2.4M</p>
                  <p className="text-[8px] text-slate-400 uppercase font-bold">Processed</p>
                </div>
                <div className="text-center space-y-1">
                  <p className="text-2xl font-bold text-slate-900">98.7%</p>
                  <p className="text-[8px] text-slate-400 uppercase font-bold">Success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
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
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      ` }} />
    </section>
  );
};

export default Hero;
