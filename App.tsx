import React, { useEffect, useState, Suspense, lazy, useCallback, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Developers from './components/Developers';
import Footer from './components/Footer';
import LoadingSkeleton from './components/LoadingSkeleton';

type View = 'landing' | 'terms' | 'privacy';

const Terms = lazy(() => import('./components/Terms'));
const Privacy = lazy(() => import('./components/Privacy'));

const App: React.FC = () => {
  const [view, setView] = useState<View>('landing');
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, (v) => v * 0.5);
  const containerRef = useRef<HTMLDivElement>(null);

  const navigateToSection = useCallback((sectionId: string) => {
    if (view !== 'landing') {
      setView('landing');
      // Wait for re-render before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [view]);

  useEffect(() => {
    // Scroll to top when view changes
    window.scrollTo(0, 0);

    if (view === 'landing') {
      const handleHashClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest('a');
        if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
          e.preventDefault();
          const targetId = anchor.getAttribute('href')?.substring(1);
          if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }
      };

      document.addEventListener('click', handleHashClick);
      return () => document.removeEventListener('click', handleHashClick);
    }
  }, [view]);

  return (
    <div ref={containerRef} className="min-h-screen selection:bg-brand-600 selection:text-white bg-white font-sans antialiased overflow-x-hidden text-slate-900 flex flex-col">
      <Header onLogoClick={() => setView('landing')} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {view === 'landing' ? (
              <>
            <Hero />
            <Features />
            <Solutions />
            <Developers />

            <section id="security" className="py-16 sm:py-24 lg:py-32 bg-slate-50 relative border-t border-slate-200 overflow-hidden">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-xs sm:text-sm font-bold text-brand-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4">Security first</h2>
                    <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">Enterprise-grade by default</h3>
                <p className="text-slate-600 max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20 text-lg sm:text-xl leading-relaxed font-medium">
                  AllPay maintains the highest security standards. We're audited regularly to ensure your data and your customers' funds are protected.
                </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                   {[
                     { title: 'Data Encryption', desc: 'AES-256 for all stored data at rest and in transit.' },
                     { title: 'Security & Compliance', desc: 'Bank-grade encryption and embedded regulatory compliance.' },
                     { title: 'Fraud Prevention', desc: 'Real-time AI-driven risk scoring and anomaly detection.' },
                     { title: 'Audit Logs', desc: 'Immutable, tamper-proof logs for every system action.' }
                   ].map((box, index) => (
                     <motion.div
                       key={box.title}
                       initial={{ opacity: 0, y: 50 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true, margin: "-100px" }}
                       transition={{ duration: 0.5, delay: index * 0.1 }}
                       className="p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 text-left group hover:border-brand-600/30 shadow-2xl transition-all duration-500"
                     >
                       <h4 className="font-bold text-slate-900 mb-3 sm:mb-4 text-lg sm:text-xl tracking-tight">{box.title}</h4>
                       <p className="text-base text-slate-600 leading-relaxed font-medium">{box.desc}</p>
                     </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-20 sm:py-32 lg:py-40 relative overflow-hidden bg-white">
              <motion.div
                style={{
                  translateY
                }}
                className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-200 blur-[120px] rounded-full" />
              </motion.div>
              <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="text-3xl sm:text-4xl lg:text-7xl font-bold text-slate-900 mb-6 sm:mb-10 tracking-tighter leading-[1.1]"
                >
                  Ready to <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-blue-600 bg-clip-text text-transparent">Transform</span> <br />
                  Your <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-blue-600 bg-clip-text text-transparent">Payments</span>?
                </motion.h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 mb-10 sm:mb-14 leading-relaxed font-medium max-w-2xl mx-auto">
                  Join hundreds of businesses that trust AllPay with their payment infrastructure. Build your future with the most powerful API on the market.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                  <motion.button
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    onClick={() => window.location.href = 'https://calendly.com/allpay/demo'}
                    className="px-8 py-4 sm:px-12 sm:py-5 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-bold transition-all border border-brand-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.05),0_30px_60px_-15px_rgba(21,112,239,0.3)] active:scale-95 flex items-center gap-3 group text-base sm:text-lg focus:ring-4 focus:ring-brand-300 focus:outline-none min-h-[44px]"
                    aria-label="Schedule a product demo with AllPay"
                  >
                    Schedule a Demo
                    <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </motion.button>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-12 sm:mt-20 opacity-40">
                  <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-[10px] text-slate-900">
                    <CheckCircle2 size={16} className="text-brand-600" />
                    No setup fees
                  </div>
                  <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-[10px] text-slate-900">
                    <CheckCircle2 size={16} className="text-brand-600" />
                    Custom pricing for scale
                  </div>
                  <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-[10px] text-slate-900">
                    <CheckCircle2 size={16} className="text-brand-600" />
                    Dedicated support
                  </div>
                </div>
                </div>
              </section>
              </>
            ) : (
              <Suspense fallback={<LoadingSkeleton />}>
                {view === 'terms' ? <Terms /> : <Privacy />}
              </Suspense>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer 
        onTermsClick={() => setView('terms')} 
        onPrivacyClick={() => setView('privacy')} 
        onSectionClick={navigateToSection}
        onLogoClick={() => setView('landing')}
      />
    </div>
  );
};

export default App;