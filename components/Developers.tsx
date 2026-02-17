
import React from 'react';
import { Terminal, ExternalLink } from 'lucide-react';
import { CODE_SNIPPETS } from '../constants';

const Developers: React.FC = () => {
  const activeSnippet = CODE_SNIPPETS[0];

  return (
    <section id="developers" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-8">
            <h2 className="text-sm font-bold text-brand-600 uppercase tracking-[0.4em] mb-4">Developer-First API</h2>
            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              A modern stack built for <br />
              <span className="text-brand-600">Interac gateway integration.</span>
            </h3>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
              Modern RESTful API with comprehensive documentation and SDKs for every major language. Get up and running in minutes.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {[
                { label: 'Documentation', detail: 'Comprehensive API reference' },
                { label: 'SDKs', detail: 'Native libraries for every stack' },
                { label: 'Webhooks', detail: 'Real-time event notifications' },
                { label: 'Test Mode', detail: 'Safe sandbox environment' }
              ].map(item => (
                <div key={item.label} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="mt-1 w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center text-[10px] font-bold text-brand-600 shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.label}</h4>
                    <p className="text-xs text-slate-500 font-medium">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="relative group min-w-0">
            <div className="absolute -inset-4 bg-brand-600/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative bg-[#f6f8fa] rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm leading-relaxed">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border-b border-slate-200">
            <div className="flex items-center gap-2 sm:gap-3">
              <Terminal size={14} className="text-slate-400" />
            </div>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-8 overflow-x-auto min-h-[260px] sm:min-h-[300px] text-slate-700 bg-white/50">
                <pre>
                  <code>
                    {activeSnippet.code.split('\n').map((line, i) => (
                      <div key={i} className="table-row">
                        <span className="table-cell pr-6 text-slate-300 select-none text-right">{i + 1}</span>
                        <span className="table-cell whitespace-pre">{line}</span>
                      </div>
                    ))}
                  </code>
                </pre>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 py-4 border-t border-slate-200 bg-slate-50/50 flex justify-center">
            <a
              href="https://wallet.allpay.ca/api/documentation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-full text-sm font-bold transition-all border border-brand-700 focus:ring-4 focus:ring-brand-300 focus:outline-none"
              aria-label="Access API Documentation"
            >
              Access API Docs
              <ExternalLink size={14} className="shrink-0" aria-hidden="true" />
            </a>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developers;
