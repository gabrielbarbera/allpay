
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import DashboardMock from './DashboardMock';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 flex items-center overflow-hidden bg-white">
      {/* Subtle animated background gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-gradient-to-br from-brand-200/80 to-blue-200/70 blur-[120px] rounded-full animate-float-slow" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[45%] h-[45%] bg-gradient-to-tr from-blue-200/70 to-brand-200/60 blur-[100px] rounded-full animate-float-slower" />
        <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] bg-gradient-to-br from-brand-100/70 to-transparent blur-[80px] rounded-full animate-pulse-subtle" />
      </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-[60%_40%] gap-8 lg:gap-16 items-center relative z-10">
        {/* Left Column: Copy & CTAs */}
        <div className="flex flex-col gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 flex flex-col gap-3 sm:gap-4"
          >
            <span className="block">Modern</span>
            <span className="block text-brand-600">Interac Technology</span>
            <span className="block">for Growing Businesses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed font-medium"
          >
            Streamline inbound payments, automate reconciliation, and get paid faster with the most reliable Interac gateway for enterprise-grade payments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => window.location.href = 'https://docs.allpay.com'}
              className="w-full sm:w-auto px-6 py-4 sm:px-10 sm:py-5 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-bold transition-all border border-brand-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.05),0_20px_40px_-10px_rgba(21,112,239,0.3)] active:scale-95 flex items-center justify-center gap-2 group focus:ring-4 focus:ring-brand-300 focus:outline-none min-h-[44px] text-left sm:text-center text-base sm:text-lg max-w-2xl"
              aria-label="Learn more about AllPay's PSP and Interac payment technology solutions"
            >
              Click here to learn more about AllPay's PSP & Interac payment technology solutions.
              <ArrowRight size={20} className="flex-shrink-0 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </motion.button>
          </motion.div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-4">
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
            className="flex flex-wrap items-center gap-4 sm:gap-8 pt-6"
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

        {/* Right Column: Dashboard Mock - Desktop */}
        <div className="relative group perspective-2000 hidden lg:flex items-center justify-center">
          <div className="relative z-20 w-full transform -rotate-y-6 rotate-x-2 hover:rotate-0 transition-all duration-700 ease-out scale-105">
            <DashboardMock />
          </div>
        </div>

        {/* Mobile dashboard preview - simplified card */}
        <div className="lg:hidden w-full max-w-sm mx-auto mt-4 order-last lg:order-none">
          <div className="relative bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Payment Analytics</div>
              <div className="w-6"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center space-y-1">
                <p className="text-xl sm:text-2xl font-bold text-slate-900">$1M+</p>
                <p className="text-[10px] text-slate-400 uppercase font-bold">Interac transferred processed monthly</p>
              </div>
              <div className="text-center space-y-1">
                <p className="text-xl sm:text-2xl font-bold text-slate-900">99.3%</p>
                <p className="text-[10px] text-slate-400 uppercase font-bold">Success rate</p>
              </div>
              <div className="text-center space-y-1">
                <p className="text-xl sm:text-2xl font-bold text-slate-900">1.2s</p>
                <p className="text-[10px] text-slate-400 uppercase font-bold">Avg processing</p>
              </div>
              <div className="text-center space-y-1">
                <p className="text-xl sm:text-2xl font-bold text-slate-900">50M+</p>
                <p className="text-[10px] text-slate-400 uppercase font-bold">Processed monthly</p>
              </div>
            </div>
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
