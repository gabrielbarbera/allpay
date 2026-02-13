import React, { useEffect, useState, Suspense, lazy, useCallback } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Developers from './components/Developers';
import Footer from './components/Footer';

const Terms = lazy(() => import('./components/Terms'));
const Privacy = lazy(() => import('./components/Privacy'));

type View = 'landing' | 'terms' | 'privacy';

const App: React.FC = () => {
  const [view, setView] = useState<View>('landing');

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
    <div className="min-h-screen selection:bg-brand-600 selection:text-white bg-white font-sans antialiased overflow-x-hidden text-slate-900 flex flex-col">
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

                <section id="security" className="py-32 bg-slate-50 relative border-t border-slate-200">
                  <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-sm font-bold text-brand-600 uppercase tracking-[0.4em] mb-4">Security first</h2>
                    <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Enterprise-grade by default</h3>
                <p className="text-slate-600 max-w-2xl mx-auto mb-20 text-xl leading-relaxed font-medium">
                  AllPay maintains the highest security standards. We're audited regularly to ensure your data and your customers' funds are protected.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { title: 'Data Encryption', desc: 'AES-256 for all stored data at rest and in transit.' },
                    { title: 'Access Control', desc: 'Granular RBAC and mandatory multi-factor authentication.' },
                    { title: 'Fraud Prevention', desc: 'Real-time AI-driven risk scoring and anomaly detection.' },
                    { title: 'Audit Logs', desc: 'Immutable, tamper-proof logs for every system action.' }
                  ].map(box => (
                    <div key={box.title} className="p-10 rounded-3xl bg-white border border-slate-200 text-left group hover:border-brand-600/30 shadow-2xl transition-all duration-500">
                      <h4 className="font-bold text-slate-900 mb-4 text-xl tracking-tight">{box.title}</h4>
                      <p className="text-base text-slate-600 leading-relaxed font-medium">{box.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-40 relative overflow-hidden bg-white">
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-200 blur-[120px] rounded-full" />
              </div>
              <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-10 tracking-tighter leading-[1.1]">
                  Ready to Transform <br /> Your Payments?
                </h2>
                <p className="text-2xl text-slate-600 mb-14 leading-relaxed font-medium max-w-2xl mx-auto">
                  Join hundreds of businesses that trust AllPay with their payment infrastructure. Build your future with the most powerful API on the market.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <button
                    onClick={() => window.location.href = 'https://calendly.com/allpay/demo'}
                    className="px-12 py-5 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-bold transition-all border border-brand-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.05),0_30px_60px_-15px_rgba(21,112,239,0.3)] active:scale-95 flex items-center gap-3 group text-lg focus:ring-4 focus:ring-brand-300 focus:outline-none"
                    aria-label="Schedule a product demo with AllPay"
                  >
                    Schedule a Demo
                    <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </button>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-10 mt-20 opacity-40">
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
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-brand-600 border-t-transparent"></div>
                </div>
              }>
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