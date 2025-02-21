import { currencyFormatter } from "@/utility/CurrencyFormatter";

// Type defining
interface HireData {
  id: string;
  name: string;
  description: string;
  hasFeatures: any;
  price: string;
  deliveryIn: string; // Corrected spelling here
  numberOfRevision: string;
  purchaseMail: string;
}

export const planFeatures = [
  "Basic Website (5-10 pages)",
  "Responsive Design",
  "Custom Design",
  "SEO Optimization",
  "E-commerce Functionality (Shopify)",
  "Advanced Animations/Interactions",
  "API Integration",
  "Web.dev Optimization",
  "Maintenance & Updates (1 month)",
  "Priority Support",
  "Custom Domain (1 Year)",
];

export const hireData: HireData[] = [
  {
    id: "ironTier",
    name: "Iron Tier",
    description:
      "Ideal for individuals who need a simple, affordable personal website.",
    hasFeatures: ["Basic Website (5-10 pages)", "Responsive Design"],
    price: currencyFormatter.format(499),
    deliveryIn: "3 days", // Corrected here
    numberOfRevision: "1",
    purchaseMail:
      "mailto:business@bigbeastishank.com?subject=Inquiry about Iron Tier Plan&body=Hello, I am interested in the Iron Tier plan. Please provide more details about the features and how to proceed.",
  },
  {
    id: "bronzeTier",
    name: "Bronze Tier",
    description:
      "Perfect for small businesses looking for a website with basic customization.",
    hasFeatures: [
      "Basic Website (5-10 pages)",
      "Responsive Design",
      "Custom Design",
    ],
    price: currencyFormatter.format(1499),
    deliveryIn: "5 days", // Corrected here
    numberOfRevision: "2",
    purchaseMail:
      "mailto:business@bigbeastishank.com?subject=Inquiry about Bronze Tier Plan&body=Hello, I am interested in the Bronze Tier plan. Please provide more details about the features and how to proceed.",
  },
  {
    id: "silverTier",
    name: "Silver Tier",
    description:
      "For medium-sized businesses seeking a more feature-rich website with e-commerce functionality.",
    hasFeatures: [
      "Basic Website (5-10 pages)",
      "Responsive Design",
      "Custom Design",
      "SEO Optimization",
      "E-commerce Functionality (Shopify)",
      "Advanced Animations/Interactions",
    ],
    price: currencyFormatter.format(3999),
    deliveryIn: "7 days", // Corrected here
    numberOfRevision: "3",
    purchaseMail:
      "mailto:business@bigbeastishank.com?subject=Inquiry about Silver Tier Plan&body=Hello, I am interested in the Silver Tier plan. Please provide more details about the features and how to proceed.",
  },
  {
    id: "goldTier",
    name: "Gold Tier",
    description:
      "For large-scale projects requiring extensive customization, performance optimization, and premium support.",
    hasFeatures: [
      "Basic Website (5-10 pages)",
      "Responsive Design",
      "Custom Design",
      "SEO Optimization",
      "E-commerce Functionality (Shopify)",
      "Advanced Animations/Interactions",
      "API Integration",
      "Web.dev Optimization",
      "Maintenance & Updates (1 month)",
      "Priority Support",
      "Custom Domain (1 Year)",
    ],
    price: currencyFormatter.format(8999),
    deliveryIn: "14 days", // Corrected here
    numberOfRevision: "5",
    purchaseMail:
      "mailto:business@bigbeastishank.com?subject=Inquiry about Gold Tier Plan&body=Hello, I am interested in the Gold Tier plan. Please provide more details about the features and how to proceed.",
  },
];
