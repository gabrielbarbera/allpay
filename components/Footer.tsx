import React from 'react';
import { Twitter, Github, Linkedin, Slack } from 'lucide-react';

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

  const socialIcons = [
    { Icon: Twitter, href: '#' },
    { Icon: Github, href: '#' },
    { Icon: Linkedin, href: '#' },
    { Icon: Slack, href: '#' },
  ];

  return (
    <footer className="bg-white border-t border-slate-200 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <button onClick={onLogoClick} className="flex items-center gap-2 group self-start focus:outline-none">
              <img src="/Logo-dark.svg" alt="AllPay" className="h-8 w-auto transform group-hover:rotate-12 transition-transform" />
            </button>
            <p className="text-slate-600 leading-relaxed font-medium text-lg max-w-md">
              The world's most advanced payment infrastructure. Designed for scale, built for developers, and trusted by global enterprises.
            </p>
            <div className="flex gap-4 hidden">
              {socialIcons.map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href}
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-brand-600/50 hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_10px_20px_-5px_rgba(0,0,0,0.1)] transition-all cursor-pointer group shadow-sm active:scale-95"
                >
                  <Icon size={18} className="text-slate-400 group-hover:text-brand-600 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-12">
            <div>
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-[0.25em] mb-8 font-mono">Platform</h5>
              <ul className="space-y-4">
                {platformLinks.map(link => (
                  <li key={link.name}>
                    <button 
                      onClick={() => onSectionClick(link.id)}
                      className="text-sm text-slate-500 hover:text-brand-600 transition-colors font-semibold"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-[0.25em] mb-8 font-mono">Legal</h5>
              <ul className="space-y-4">
                <li><button onClick={onPrivacyClick} className="text-sm text-slate-500 hover:text-brand-600 transition-colors font-semibold">Privacy Policy</button></li>
                <li><button onClick={onTermsClick} className="text-sm text-slate-500 hover:text-brand-600 transition-colors font-semibold">Terms of Service</button></li>
                <li><button onClick={() => onSectionClick('security')} className="text-sm text-slate-500 hover:text-brand-600 transition-colors font-semibold">Security Compliance</button></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-slate-100">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-sm text-slate-500 font-bold tracking-tight">
              © 2026 AllPay Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;