import React from 'react';

interface FooterProps {
  onTermsClick: () => void;
  onPrivacyClick: () => void;
  onSectionClick: (id: string) => void;
  onLogoClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onTermsClick, onPrivacyClick, onSectionClick, onLogoClick }) => {
  const platformLinks = [
    { name: 'Features', id: 'features' },
    { name: 'Solutions', id: 'solutions' },
    { name: 'Developers', id: 'developers' },
    { name: 'Security', id: 'security' },
  ];

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-24 mb-16 lg:mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <button onClick={onLogoClick} className="flex items-center gap-2 group self-start focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg" aria-label="AllPay Home">
              <img src="/Logo-dark.svg" alt="AllPay Logo" className="h-8 w-auto transform group-hover:rotate-12 transition-transform" />
            </button>
            <p className="text-slate-600 leading-relaxed font-medium text-lg max-w-md">
              The world's most advanced Interac gateway for global scale. Designed for scale, built for developers, and trusted by global enterprises.
            </p>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-6 sm:mb-8 font-mono">Platform</h5>
                <ul className="space-y-4">
                  {platformLinks.map(link => (
                    <li key={link.name}>
                      <button
                        onClick={() => onSectionClick(link.id)}
                        className="text-sm text-slate-500 hover:text-brand-600 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg px-2 py-1"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-6 sm:mb-8 font-mono">Legal</h5>
                <ul className="space-y-4">
                <li><button onClick={onPrivacyClick} className="text-sm text-slate-500 hover:text-brand-600 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg px-2 py-1" aria-label="View Privacy Policy">Privacy Policy</button></li>
                <li><button onClick={onTermsClick} className="text-sm text-slate-500 hover:text-brand-600 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg px-2 py-1" aria-label="View Terms of Service">Terms of Service</button></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-slate-100">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-sm text-slate-500 font-bold tracking-tight">
              © {new Date().getFullYear()} AllPay Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;