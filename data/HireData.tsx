import { currencyFormatter } from "@/utility/CurrencyFormatter";

// Type defining
interface HireData {
  id: string;
  name: string;
  description: string;
  hasFeatures: string[]; // Fixed type for hasFeatures to an array of strings
  originalPrice: string;
  discountedPrice: string;
  deliveryIn: string;
  numberOfRevision: string;
  purchaseMail: string;
}

// Plan Price (per thing)
// Static Page: 500
// Responsive Design: 500
// Free Lifetime domain: 0
// SEO Optimization (On Page): 500
// Dynamic Page: 3,000
// Custom Design: 1,500
// Advanced Animations / Interactions: 800
// API Integration: 2,000
// Web.dev Optimization: 500
// Maintenance & Updates: 1,000
// Priority Support: 1,500
// Custom Domain (1 Year): 550
// Minor Revision: 200
// Major Revision: 2,000

// Feature List
// Webplan
export const webPlanFeatures: string[] = [
  "Static Page",
  "Responsive Design",
  "Free Lifetime domain",
  "SEO Optimization (On Page)",
  "Custom Design",
  "Advanced Animations / Interactions",
  "Dynamic Page",
  "API Integration",
  "Web.dev Optimization",
  "Maintenance & Updates",
  "Priority Support",
  "Custom Domain (1 Year)",
];

// All hire plan
export const allHirePlan: [
  { type: string; description: string; link: string }
] = [
  {
    type: "Web Development",
    description:
      "Explore affordable and high-quality web development services tailored to meet your needs. Our team specializes in building innovative, responsive, and scalable websites using the latest technologies.",
    link: "/hire/web",
  },
];

// Web hire
export const webHire: HireData[] = [
  // Iron Tier
  {
    id: "ironTier",
    name: "Iron Tier",
    description:
      "Ideal for individuals who need a simple, affordable personal website. (Note: Price may vary depending on your needs.)",
    hasFeatures: [
      "Static Page",
      "Responsive Design",
      "Free Lifetime domain",
      "SEO Optimization (On Page)",
    ],
    originalPrice: currencyFormatter.format(1500),
    discountedPrice: currencyFormatter.format(799),
    deliveryIn: "3 days",
    numberOfRevision: "1",
    purchaseMail:
      "mailto:business@bigbeastishank.com?subject=[Hire Web] Inquiry about Iron Tier Plan [bigbeastishank.com/hire/web]&body=Hello, I am interested in the Iron Tier plan. Please provide more details about the features and how to proceed.",
  },

  // Bronze Tier
  {
    id: "bronzeTier",
    name: "Bronze Tier",
    description:
      "Perfect for small businesses looking for a website to increase their traffic. (Note: Price may vary depending on your needs.)",
    hasFeatures: [
      "Static Page",
      "Responsive Design",
      "Custom Design",
      "SEO Optimization (On Page)",
      "Free Lifetime domain",
      "Advanced Animations / Interactions",
    ],
    originalPrice: currencyFormatter.format(4000),
    discountedPrice: currencyFormatter.format(1499),
    deliveryIn: "5 days",
    numberOfRevision: "2",
    purchaseMail:
      "mailto:business@bigbeastishank.com?subject=[Hire Web] Inquiry about Bronze Tier Plan [bigbeastishank.com/hire/web]&body=Hello, I am interested in the Bronze Tier plan. Please provide more details about the features and how to proceed.",
  },

  // Silver Tier
  {
    id: "silverTier",
    name: "Silver Tier",
    description:
      "For medium-sized businesses seeking a more feature-rich website functionality and optimization. (Note: Price may vary depending on your needs.)",
    hasFeatures: [
      "Static Page",
      "Responsive Design",
      "Custom Design",
      "SEO Optimization (On Page)",
      "Advanced Animations / Interactions",
      "Free Lifetime domain",
      "API Integration",
      "Web.dev Optimization",
      "Dynamic Page",
    ],
    originalPrice: currencyFormatter.format(9700),
    discountedPrice: currencyFormatter.format(3999),
    deliveryIn: "7 days",
    numberOfRevision: "3",
    purchaseMail:
      "mailto:business@bigbeastishank.com?subject=[Hire Web] Inquiry about Silver Tier Plan [bigbeastishank.com/hire/web]&body=Hello, I am interested in the Silver Tier plan. Please provide more details about the features and how to proceed.",
  },

  // Gold Tier
  {
    id: "goldTier",
    name: "Gold Tier",
    description:
      "For large-scale projects requiring extensive customization, performance optimization, and backend support. (Note: Price may vary depending on your needs.)",
    hasFeatures: [
      "Static Page",
      "Responsive Design",
      "Custom Design",
      "SEO Optimization (On Page)",
      "Advanced Animations / Interactions",
      "API Integration",
      "Web.dev Optimization",
      "Maintenance & Updates",
      "Priority Support",
      "Custom Domain (1 Year)",
      "Free Lifetime domain",
      "Dynamic Page",
    ],
    originalPrice: currencyFormatter.format(13150),
    discountedPrice: currencyFormatter.format(6999),
    deliveryIn: "14 days",
    numberOfRevision: "5",
    purchaseMail:
      "mailto:business@bigbeastishank.com?subject=[Hire Web] Inquiry about Gold Tier Plan [bigbeastishank.com/hire/web]&body=Hello, I am interested in the Gold Tier plan. Please provide more details about the features and how to proceed.",
  },
];
