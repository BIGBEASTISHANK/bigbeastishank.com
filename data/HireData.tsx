import { currencyFormatter } from "@/utility/CurrencyFormatter";

// Updated Plan Price (per feature)
const planPricing = {
  "Static Page": 1000,
  "Responsive Design": 1000,
  "Free Lifetime domain": 0,
  "SEO Optimization (On Page)": 800,
  "Dynamic Page": 3000,
  "Custom Design": 2000,
  "Advanced Animations / Interactions": 1200,
  "API Integration": 1500,
  "Web.dev Optimization": 1000,
  "Custom Domain (1 Year)": 1200,
  "Maintenance & Updates": 1500,
  "Priority Support": 1500,
  "Minor Revision": 300,
  "Major Revision": 2000,
  "Admin Panel": 4000,
};

// Type defining
interface HireData {
  id: string;
  name: string;
  description: string;
  hasFeatures: string[];
  originalPrice: string;
  discountedPrice: string;
  deliveryIn: string;
  numberOfRevision: string;
  purchaseMail: string;
}

// Feature List
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
  "Custom Domain (1 Year)",
  "Admin Panel",
  "Maintenance & Updates",
  "Priority Support",
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
  // Starter Tier
  {
    id: "starterTier",
    name: "Starter Tier",
    description:
      "Best for individuals or personal projects needing a professional online presence. Includes all essentials to get started.",
    hasFeatures: [
      "Static Page",
      "Responsive Design",
      "Free Lifetime domain",
      "SEO Optimization (On Page)",
    ],
    originalPrice: currencyFormatter.format(2800),
    discountedPrice: currencyFormatter.format(1799),
    deliveryIn: "3 days",
    numberOfRevision: "1",
    purchaseMail:
      "mailto:business@bigbeastishank.com?subject=[Hire Web] Inquiry about Starter Tier Plan [bigbeastishank.com/hire/web]&body=Hello, I am interested in the Starter Tier plan. Please provide more details about the features and how to proceed.",
  },

  // Growth Tier
  {
    id: "growthTier",
    name: "Growth Tier",
    description:
      "Great for small businesses or professionals looking to showcase their services online with custom design and engaging visuals.",
    hasFeatures: [
      "Static Page",
      "Responsive Design",
      "Custom Design",
      "SEO Optimization (On Page)",
      "Free Lifetime domain",
      "Advanced Animations / Interactions",
    ],
    originalPrice: currencyFormatter.format(6000),
    discountedPrice: currencyFormatter.format(3899),
    deliveryIn: "5 days",
    numberOfRevision: "2",
    purchaseMail:
      "mailto:business@bigbeastishank.com?subject=[Hire Web] Inquiry about Growth Tier Plan [bigbeastishank.com/hire/web]&body=Hello, I am interested in the Growth Tier plan. Please provide more details about the features and how to proceed.",
  },

  // Pro Tier
  {
    id: "proTier",
    name: "Pro Tier",
    description:
      "Ideal for growing businesses that require functional backend, dynamic content, and performance optimization.",
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
      "Custom Domain (1 Year)",
    ],
    originalPrice: currencyFormatter.format(12700),
    discountedPrice: currencyFormatter.format(8499),
    deliveryIn: "7 days",
    numberOfRevision: "3",
    purchaseMail:
      "mailto:business@bigbeastishank.com?subject=[Hire Web] Inquiry about Pro Tier Plan [bigbeastishank.com/hire/web]&body=Hello, I am interested in the Pro Tier plan. Please provide more details about the features and how to proceed.",
  },

  // Business Elite Tier
  {
    id: "eliteTier",
    name: "Business Elite Tier",
    description:
      "Complete solution for advanced web apps - includes admin panel, full backend integration, optimizations, and premium support.",
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
      "Admin Panel",
      "Dynamic Page",
    ],
    originalPrice: currencyFormatter.format(19700),
    discountedPrice: currencyFormatter.format(12999),
    deliveryIn: "14 days",
    numberOfRevision: "5",
    purchaseMail:
      "mailto:business@bigbeastishank.com?subject=[Hire Web] Inquiry about Business Elite Tier Plan [bigbeastishank.com/hire/web]&body=Hello, I am interested in the Business Elite Tier plan. Please provide more details about the features and how to proceed.",
  },
];

