import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  details: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  images: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  collection?: string;
}

export const products: Product[] = [
  {
    id: "navy-polo",
    name: "Premium Navy Polo",
    category: "Shirts",
    price: 189,
    description: "Crafted from the finest Pima cotton, this polo shirt combines casual elegance with superior comfort. Perfect for both business casual and weekend wear.",
    details: [
      "100% Pima Cotton",
      "Mother-of-pearl buttons",
      "Ribbed collar and cuffs",
      "Slim fit",
      "Made in Italy"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Navy", hex: "#1e3a5f" },
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#0a0a0a" }
    ],
    images: [product1],
    isNew: true,
    collection: "Essentials"
  },
  {
    id: "oxford-shirt",
    name: "White Oxford Dress Shirt",
    category: "Shirts",
    price: 245,
    description: "The quintessential dress shirt, tailored to perfection. Features a crisp Oxford weave and mother-of-pearl buttons for an unmistakably refined look.",
    details: [
      "Premium Oxford cotton",
      "Spread collar",
      "French cuffs",
      "Tailored fit",
      "Made in Italy"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Light Blue", hex: "#b3d4fc" }
    ],
    images: [product2],
    isBestSeller: true,
    collection: "Tailored"
  },
  {
    id: "leather-shoes",
    name: "Classic Leather Oxfords",
    category: "Footwear",
    price: 495,
    originalPrice: 595,
    description: "Hand-crafted leather oxfords featuring Goodyear welt construction. These timeless shoes are designed to develop a beautiful patina over time.",
    details: [
      "Full-grain calfskin leather",
      "Goodyear welt construction",
      "Leather sole",
      "Blake stitched",
      "Made in Italy"
    ],
    sizes: ["40", "41", "42", "43", "44", "45", "46"],
    colors: [
      { name: "Black", hex: "#0a0a0a" },
      { name: "Cognac", hex: "#8b4513" }
    ],
    images: [product3],
    collection: "Footwear"
  },
  {
    id: "wool-trousers",
    name: "Charcoal Wool Trousers",
    category: "Trousers",
    price: 345,
    description: "Impeccably tailored trousers in premium Italian wool. Featuring a modern slim silhouette with just enough room for comfort.",
    details: [
      "100% Italian wool",
      "Half-canvas construction",
      "Side adjusters",
      "Slim fit",
      "Made in Italy"
    ],
    sizes: ["28", "30", "32", "34", "36", "38", "40"],
    colors: [
      { name: "Charcoal", hex: "#36454f" },
      { name: "Navy", hex: "#1e3a5f" },
      { name: "Black", hex: "#0a0a0a" }
    ],
    images: [product4],
    isNew: true,
    collection: "Tailored"
  },
  {
    id: "cashmere-sweater",
    name: "Camel Cashmere Sweater",
    category: "Knitwear",
    price: 425,
    description: "Luxuriously soft cashmere crew neck sweater. The perfect layering piece that transitions effortlessly from office to evening.",
    details: [
      "100% Grade-A Mongolian cashmere",
      "12-gauge knit",
      "Ribbed cuffs and hem",
      "Regular fit",
      "Made in Scotland"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Camel", hex: "#c19a6b" },
      { name: "Charcoal", hex: "#36454f" },
      { name: "Navy", hex: "#1e3a5f" }
    ],
    images: [product5],
    isBestSeller: true,
    collection: "Knitwear"
  },
  {
    id: "navy-blazer",
    name: "Navy Wool Blazer",
    category: "Outerwear",
    price: 695,
    description: "The cornerstone of any refined wardrobe. This unstructured blazer offers Italian craftsmanship with a contemporary silhouette.",
    details: [
      "Super 120s wool",
      "Half-canvas construction",
      "Horn buttons",
      "Patch pockets",
      "Made in Italy"
    ],
    sizes: ["46", "48", "50", "52", "54", "56"],
    colors: [
      { name: "Navy", hex: "#1e3a5f" },
      { name: "Charcoal", hex: "#36454f" }
    ],
    images: [product6],
    isNew: true,
    collection: "Tailored"
  },
  {
    id: "leather-belt",
    name: "Brown Leather Belt",
    category: "Accessories",
    price: 175,
    description: "A refined leather belt featuring a brushed silver buckle. The perfect finishing touch for any tailored ensemble.",
    details: [
      "Full-grain calfskin leather",
      "Brushed silver buckle",
      "35mm width",
      "Made in Italy"
    ],
    sizes: ["85", "90", "95", "100", "105", "110"],
    colors: [
      { name: "Brown", hex: "#5c4033" },
      { name: "Black", hex: "#0a0a0a" }
    ],
    images: [product7],
    collection: "Accessories"
  },
  {
    id: "essential-tee",
    name: "Essential Cotton T-Shirt",
    category: "T-Shirts",
    price: 95,
    description: "Elevated basics crafted from premium Supima cotton. Features a refined fit that's neither too loose nor too tight.",
    details: [
      "100% Supima cotton",
      "200gsm weight",
      "Reinforced collar",
      "Regular fit",
      "Made in Portugal"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Grey", hex: "#808080" },
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#0a0a0a" },
      { name: "Navy", hex: "#1e3a5f" }
    ],
    images: [product8],
    isBestSeller: true,
    collection: "Essentials"
  }
];

export const collections = [
  {
    id: "tailored",
    name: "Tailored",
    subtitle: "Formal Wear",
    description: "Impeccably crafted suits and separates for the modern gentleman",
  },
  {
    id: "essentials",
    name: "Essentials",
    subtitle: "Everyday Luxury",
    description: "Premium basics that form the foundation of a refined wardrobe",
  },
  {
    id: "knitwear",
    name: "Knitwear",
    subtitle: "Cashmere & Wool",
    description: "Luxurious knits crafted from the finest natural fibers",
  },
  {
    id: "outerwear",
    name: "Outerwear",
    subtitle: "Coats & Jackets",
    description: "Statement pieces that elevate any ensemble",
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
};

export const getNewArrivals = (): Product[] => {
  return products.filter((p) => p.isNew);
};

export const getBestSellers = (): Product[] => {
  return products.filter((p) => p.isBestSeller);
};
