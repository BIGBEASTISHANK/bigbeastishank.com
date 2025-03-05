import { currencyFormatter } from "@/utility/CurrencyFormatter";

// Type defining
interface HireData {
  id: string;
  name: string;
  description: string;
  hasFeatures: string[]; // Fixed type for hasFeatures to an array of strings
  price: string;
  deliveryIn: string;
  numberOfRevision: string;
  purchaseMail: string;
}

// Feature List
// Webplan
export const webPlanFeatures: string[] = [
  "Basic Website (5-10 pages)",
  "Responsive Design",
  "Free Lifetime domain",
  "SEO Optimization",
  "Custom Design",
  "Advanced Animations/Interactions",
  "API Integration",
  "Web.dev Optimization",
  "Maintenance & Updates (1 month)",
  "Priority Support",
  "Custom Domain (1 Year)",
];

// All hire plan
export const allHirePlan: [
  { type: string; description: string; link: string }
] = [
  {
    type: "Web Develoment",
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
      "Ideal for individuals who need a simple, affordable personal website.",
    hasFeatures: [
      "Basic Website (5-10 pages)",
      "Responsive Design",
      "Free Lifetime domain",
      "SEO Optimization",
    ],
    price: currencyFormatter.format(499),
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
      "Perfect for small businesses looking for a website to increase their traffic.",
    hasFeatures: [
      "Basic Website (5-10 pages)",
      "Responsive Design",
      "Custom Design",
      "SEO Optimization",
      "Free Lifetime domain",
      "Advanced Animations/Interactions",
    ],
    price: currencyFormatter.format(1499),
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
      "For medium-sized businesses seeking a more feature-rich website functionality and optimization.",
    hasFeatures: [
      "Basic Website (5-10 pages)",
      "Responsive Design",
      "Custom Design",
      "SEO Optimization",
      "Advanced Animations/Interactions",
      "Free Lifetime domain",
      "API Integration",
      "Web.dev Optimization",
      "Maintenance & Updates (1 month)",
    ],
    price: currencyFormatter.format(3999),
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
      "For large-scale projects requiring extensive customization, performance optimization, and backend support.",
    hasFeatures: [
      "Basic Website (5-10 pages)",
      "Responsive Design",
      "Custom Design",
      "SEO Optimization",
      "Advanced Animations/Interactions",
      "API Integration",
      "Web.dev Optimization",
      "Maintenance & Updates (1 month)",
      "Priority Support",
      "Custom Domain (1 Year)",
      "Free Lifetime domain",
    ],
    price: currencyFormatter.format(8999),
    deliveryIn: "14 days",
    numberOfRevision: "5",
    purchaseMail:
      "mailto:business@bigbeastishank.com?subject=[Hire Web] Inquiry about Gold Tier Plan [bigbeastishank.com/hire/web]&body=Hello, I am interested in the Gold Tier plan. Please provide more details about the features and how to proceed.",
  },
];
