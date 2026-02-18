import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onLogoClick: () => void;
  onSectionClick?: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick, onSectionClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions', id: 'solutions' },
    { name: 'Features', href: '#features', id: 'features' },
    { name: 'Developers', href: '#developers', id: 'developers' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onSectionClick?.(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-6 sm:gap-10">
          <button onClick={onLogoClick} className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg min-h-[44px] min-w-[44px] items-center justify-center sm:min-h-0 sm:min-w-0 sm:justify-start" aria-label="AllPay Home">
            <img src="/Logo-dark.svg" alt="AllPay Logo" className="h-7 sm:h-8 w-auto transform group-hover:rotate-12 transition-transform" />
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg px-2 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => window.location.href = 'https://wallet.allpay.ca/merchant'}
            className="hidden sm:block text-sm font-bold text-slate-600 hover:text-brand-600 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg px-2 py-1"
            aria-label="Sign in to your account"
          >
            Sign in
          </button>
          <motion.button
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => window.location.href = 'https://calendly.com/allpay/demo'}
            className="hidden lg:flex px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-full text-sm font-bold transition-all border border-brand-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.05),0_10px_20px_-5px_rgba(21,112,239,0.3)] active:scale-95 items-center gap-2 group focus:ring-4 focus:ring-brand-300 focus:outline-none"
            aria-label="Get started with AllPay"
          >
            Launch Interac for Business
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </motion.button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 -m-2 text-slate-600 hover:text-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg py-2 sm:py-4 max-h-[calc(100vh-4rem)] overflow-y-auto" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-4 px-6 text-base font-semibold text-slate-600 hover:bg-brand-50 hover:text-brand-600 transition-colors"
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.name}
            </a>
          ))}
          <div className="mt-4 px-6 pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => {
                window.location.href = 'https://wallet.allpay.ca/merchant';
                setMobileMenuOpen(false);
              }}
              className="text-base font-semibold text-slate-600 hover:text-brand-600 text-left focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg px-2 py-1"
            >
              Sign in
            </button>
            <button
              onClick={() => {
                window.location.href = 'https://calendly.com/allpay/demo';
                setMobileMenuOpen(false);
              }}
              className="w-full px-5 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-bold transition-colors focus:ring-4 focus:ring-brand-300 focus:outline-none"
            >
              Launch Interac for Business
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;