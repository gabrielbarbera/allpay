
export interface Feature {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  proof: string;
  image: string;
}

export interface Solution {
  title: string;
  description: string;
  bullets: string[];
  type: 'saas' | 'marketplace' | 'ecommerce' | 'enterprise';
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface CodeSnippet {
  language: string;
  label: string;
  code: string;
}
