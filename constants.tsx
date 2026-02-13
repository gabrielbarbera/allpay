
import { Feature, Solution, PricingTier, CodeSnippet } from './types';

export const FEATURES: Feature[] = [
  {
    id: 'bank-verification',
    title: 'Instant Bank Verification',
    description: 'Connect and verify bank accounts in seconds using our secure authentication flow. Support for all major financial institutions.',
    bullets: [
      'Direct API connection to 11,000+ banks',
      'Instant balance checks & owner auth',
      'Seamless mobile-first flow'
    ],
    proof: 'Avg verification time: 4.2s',
    image: 'https://picsum.photos/seed/bank/800/600'
  },
  {
    id: 'real-time',
    title: 'Real-Time Processing',
    description: 'Process payments instantly with real-time settlement and notifications. No more waiting days for funds to clear.',
    bullets: [
      'TPT (Transaction Processing Time) < 150ms',
      'Dynamic routing via RTP & FedNow',
      'Intelligent retry logic'
    ],
    proof: '99.99% successful throughput',
    image: 'https://picsum.photos/seed/speed/800/600'
  },
  {
    id: 'security',
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, PCI DSS compliant, and SOC 2 certified. Your data and your customers\' data is always protected.',
    bullets: [
      'Level 1 PCI DSS compliant',
      'End-to-end AES-256 encryption',
      'Adaptive fraud detection engine'
    ],
    proof: 'Zero breaches in 4 years',
    image: 'https://picsum.photos/seed/security/800/600'
  },
  {
    id: 'analytics',
    title: 'Advanced Analytics',
    description: 'Deep insights into payment flows, revenue trends, and customer behavior. Make data-driven decisions with confidence.',
    bullets: [
      'Custom SQL-based reporting',
      'Cohort & churn analysis',
      'Export to Snowflake, BigQuery, S3'
    ],
    proof: 'Sub-second query response',
    image: 'https://picsum.photos/seed/analytics/800/600'
  },
  {
    id: 'reconciliation',
    title: 'Automated Reconciliation',
    description: 'Match payments to invoices automatically. Save hours of manual work and eliminate reconciliation errors.',
    bullets: [
      'One-click ERP sync (NetSuite, Sage)',
      'Intelligent ledger grouping',
      'Edge-case conflict resolution'
    ],
    proof: 'Saves 20+ hours / month / team',
    image: 'https://picsum.photos/seed/reco/800/600'
  },
  {
    id: 'multi-currency',
    title: 'Multi-Currency Support',
    description: 'Accept payments in 135+ currencies with automatic conversion and competitive FX rates. Go global effortlessly.',
    bullets: [
      'Mid-market FX rates',
      'Local payment methods (SEPA, Pix)',
      'Compliance in 50+ countries'
    ],
    proof: 'Global coverage in 40+ regions',
    image: 'https://picsum.photos/seed/global/800/600'
  }
];

export const SOLUTIONS: Solution[] = [
  {
    title: 'SaaS & Subscription Businesses',
    description: 'Streamline recurring billing and reduce churn with intelligent retry logic and automated dunning.',
    bullets: ['Flexible billing cycles', 'Usage-based pricing support', 'Automated invoice generation', 'Customer payment portals'],
    type: 'saas'
  },
  {
    title: 'Marketplaces & Platforms',
    description: 'Enable seamless multi-party payments with automated splits and vendor payouts.',
    bullets: ['Split payment flows', 'Vendor management tools', 'Escrow capabilities', 'Automated commission handling'],
    type: 'marketplace'
  },
  {
    title: 'E-Commerce',
    description: 'Optimize checkout conversion with one-click payments and multiple payment methods.',
    bullets: ['Saved payment methods', 'Guest checkout support', 'Mobile-optimized flows', 'Fraud detection tools'],
    type: 'ecommerce'
  },
  {
    title: 'Enterprise Organizations',
    description: 'Handle complex payment workflows with custom integrations and dedicated support.',
    bullets: ['Custom API integrations', 'White-label solutions', 'Dedicated account manager', 'SLA guarantees'],
    type: 'enterprise'
  }
];

export const PRICING: PricingTier[] = [
  {
    name: 'Starter',
    price: '0.8% + 30¢',
    description: 'Perfect for startups and builders testing new ideas.',
    features: ['Standard dashboard', 'Email support', 'Public docs', 'Core API access']
  },
  {
    name: 'Scale',
    price: '0.5% + 20¢',
    description: 'For growing businesses with high transaction volume.',
    highlighted: true,
    features: ['Priority support', 'Advanced analytics', 'Custom branding', 'Webhook monitoring']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Volume-based pricing for high-scale platforms.',
    features: ['Dedicated AM', '24/7 Phone support', 'Custom settlement', 'Full auditing']
  }
];

export const CODE_SNIPPETS: CodeSnippet[] = [
  {
    label: 'Node.js',
    language: 'javascript',
    code: `const allpay = require('@allpay/node');
const client = allpay.init('your_api_key');

// Create a payment
const payment = await client.payments.create({
  amount: '10000',
  currency: 'USD',
  customer: 'cust_12345',
  description: 'Invoice #INV-001'
});

// That's it! Payment is processed instantly`
  },
  {
    label: 'Python',
    language: 'python',
    code: `import allpay

allpay.api_key = "your_api_key"

# Create a payment
payment = allpay.Payment.create(
  amount="10000",
  currency="USD",
  customer="cust_12345",
  description="Invoice #INV-001"
)

print(f"Success: {payment.id}")`
  },
  {
    label: 'cURL',
    language: 'bash',
    code: `curl https://api.allpay.com/v1/payments \\
  -u your_api_key: \\
  -d amount=10000 \\
  -d currency=USD \\
  -d customer=cust_12345 \\
  -d description="Invoice #INV-001"`
  }
];
