import React from 'react';

const Terms: React.FC = () => {
  const formatDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-3xl mx-auto px-6">
        <header className="mb-16">
          <h1 className="text-5xl font-bold text-slate-900 tracking-tight mb-4">Terms of Service</h1>
          <p className="text-slate-500 font-mono text-sm uppercase tracking-widest font-bold">Last Updated: {formatDate}</p>
        </header>

        <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing or using AllPay's payment infrastructure, APIs, and dashboard (collectively, the "Services"), you agree to be bound by these Terms of Service. If you are using the Services on behalf of an organization, you are agreeing to these Terms for that organization and promising that you have the authority to bind that organization to these terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">2. Use of Services</h2>
            <p className="mb-4">
              AllPay provides infrastructure for processing payments. You are responsible for ensuring your use of our Services complies with all applicable laws and regulations, including PCI DSS compliance and anti-money laundering regulations.
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>You must provide accurate and complete information when creating an account.</li>
              <li>You are responsible for maintaining the security of your API keys and account credentials.</li>
              <li>You may not use the Services for any illegal or unauthorized purpose.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Fees and Payments</h2>
            <p className="mb-4">
              Fees for the Services are as set forth in your service agreement or as displayed on the AllPay website. AllPay reserves the right to change fees upon 30 days' notice. Processing fees are typically deducted at the time of transaction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Intellectual Property</h2>
            <p className="mb-4">
              AllPay retains all rights, title, and interest in and to the Services, including all software, documentation, and intellectual property. You are granted a limited, non-exclusive, non-transferable license to use the Services solely for your internal business purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">5. Termination</h2>
            <p className="mb-4">
              We reserve the right to suspend or terminate your access to the Services at any time, with or without cause, and with or without notice. Upon termination, you must immediately cease all use of the Services and API keys.
            </p>
          </section>

          <section className="mb-12 border-t border-slate-100 pt-12">
            <p className="text-sm italic">
              If you have any questions about these Terms, please contact our legal team at <a href="mailto:legal@allpay.ca" className="text-brand-600 hover:underline">legal@allpay.ca</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;