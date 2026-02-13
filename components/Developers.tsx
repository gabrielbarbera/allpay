
import React, { useState } from 'react';
import { AlertTriangle, Terminal } from 'lucide-react';
import { CODE_SNIPPETS } from '../constants';

const Developers: React.FC = () => {
  const [activeLang, setActiveLang] = useState('Node.js');
  const activeSnippet = CODE_SNIPPETS.find(s => s.label === activeLang) || CODE_SNIPPETS[0];

  return (
    <section id="developers" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-8">
            <h2 className="text-sm font-bold text-brand-600 uppercase tracking-[0.4em] mb-4">Developer-First API</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              A modern stack built for <br />
              <span className="text-brand-600">Infrastructure Architects.</span>
            </h3>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
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

          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-600/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative bg-[#f6f8fa] rounded-3xl border border-slate-200 shadow-2xl overflow-hidden font-mono text-sm leading-relaxed">
          <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <Terminal size={14} className="text-slate-400" />
              <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 shadow-inner">
                {CODE_SNIPPETS.map(snippet => (
                  <button
                    key={snippet.label}
                    onClick={() => setActiveLang(snippet.label)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                      activeLang === snippet.label
                        ? 'bg-white text-brand-600 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_3px_rgba(0,0,0,0.1)] border border-slate-200'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                    aria-label={`Switch to ${snippet.label} code snippet`}
                    aria-pressed={activeLang === snippet.label}
                  >
                    {snippet.label}
                  </button>
                ))}
              </div>
            </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                </div>
              </div>
              
              <div className="p-8 overflow-x-auto min-h-[300px] text-slate-700 bg-white/50">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developers;
