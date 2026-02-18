import React from 'react';

const Privacy: React.FC = () => {
  const formatDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-3xl mx-auto px-6">
        <header className="mb-16">
          <h1 className="text-5xl font-bold text-slate-900 tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-slate-500 font-mono text-sm uppercase tracking-widest font-bold">Last Updated: {formatDate}</p>
        </header>

        <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Introduction</h2>
            <p className="mb-4">
              At AllPay, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect information when you use our payment infrastructure and services. By using AllPay, you consent to the data practices described in this policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">2. Information We Collect</h2>
            <p className="mb-4">We collect information that is necessary to provide our payment processing services securely and efficiently:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li><strong>Business Information:</strong> Name, address, and legal entity details.</li>
              <li><strong>Transaction Data:</strong> Payment amounts, currency, and timestamps.</li>
              <li><strong>Technical Data:</strong> IP addresses, browser types, and API usage logs.</li>
              <li><strong>Financial Data:</strong> Encrypted payment method details (stored according to PCI standards).</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">3. How We Use Information</h2>
            <p className="mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>Process and settle payment transactions.</li>
              <li>Detect and prevent fraud and unauthorized activities.</li>
              <li>Comply with financial regulations and "Know Your Customer" (KYC) requirements.</li>
              <li>Improve and optimize our API and infrastructure performance.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Data Sharing</h2>
            <p className="mb-4">
              We do not sell your personal or business data. We share information only with trusted financial partners (such as bank networks and card schemes) and service providers necessary to complete transactions or maintain security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">5. Data Security</h2>
            <p className="mb-4">
              AllPay implements bank-level security. We use AES-256 encryption for data at rest and TLS for data in transit. We are SOC 2 Type II certified and maintain Level 1 PCI DSS compliance to ensure the highest standards of data protection.
            </p>
          </section>

          <section className="mb-12 border-t border-slate-100 pt-12">
            <p className="text-sm italic">
              For privacy-related inquiries or to exercise your data rights, please contact <a href="mailto:legal@allpay.ca" className="text-brand-600 hover:underline">legal@allpay.ca</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;