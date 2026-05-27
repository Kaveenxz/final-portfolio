// lib/data/products.ts
import img1 from '@/images/img1.png'
import pr1 from '@/images/pr1.png'
import pr2 from '@/images/pr2.png'
import pr3 from '@/images/pr3.png'
import pr4 from '@/images/pr4.png'
import pr5 from '@/images/pr5.png'

export interface Product {
  id: number;
  category: "templates" | "components" | "courses";
  title: string;
  desc: string;
  tags: string[];
  price: string;
  gumroad: string;
  image: any;
  gradient?: string; // fallback gradient (optional)
  badge?: "bestseller" | "coming soon";
}

export const products: Product[] = [
  {
    id: 1,
    category: "templates",
    title: "FoodCourt — Luxury Restaurant Website Template",
    desc: "Complete Next.js + Tailwind landing page. Hero, pricing, features, CTA and more... — ready to ship.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    price: "$19",
    gumroad: "https://kaveenhansith.gumroad.com/l/srxjkt",
    image: pr1,
    gradient: "from-purple/20 to-blue/10",
  },
  {
    id: 2,
    category: "templates",
    title: "5 Clean Website UI Templates",
    desc: "A collection of 5 clean, responsive website UI templates built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "Tailwind"],
    price: "$29",
    gumroad: "https://kaveenhansith.gumroad.com/l/rtqlg",
    image: pr3,
    gradient: "from-blue/20 to-purple/10",
  },
  {
    id: 3,
    category: "templates",
    title: "Modern Portfolio UI (Next.js + Tailwind)",
    desc: "Portfolio design with Next.js App Router, Tailwind CSS, and Framer Motion.",
    tags: ["Tailwind", "Next.js"],
    price: "$19",
    gumroad: "https://kaveenhansith.gumroad.com/l/lbgilp",
    image: pr2,
    gradient: "from-purple/20 to-purple-dim/10",
  },
  {
    id: 4,
    category: "templates",
    title: "Modern SaaS Landing Page Template",
    desc: "Premium glassmorphism landing page built with Next.js 14, TypeScript & Tailwind CSS. Ship your SaaS in hours, not weeks.",
    tags: ["Framer Motion", "Next Js", "Tailwind"],
    price: "$39",
    gumroad: "https://kaveenhansith.gumroad.com/l/kfgfxt",
    image: pr4,
    gradient: "from-blue/20 to-blue/5",
  },
  {
    id: 5,
    category: "templates",
    title: "Modern Link in BIO Page Template",
    desc: "Premium Link in Bio page template built with pure HTML and Tailwind CSS. One file. No frameworks, no npm, no build tools.",
    tags: [ "HTML", "Tailwind"],
    price: "$19",
    gumroad: "https://kaveenhansith.gumroad.com/l/qirvd",
    image: pr5,
    gradient: "from-blue/20 to-blue/5",
  },
  // {
  //   id: 5,
  //   category: "courses",
  //   title: "Build a Website with AI in 7 Days",
  //   desc: "Full course: build and ship a complete website using AI tools + Next.js. Beginner friendly.",
  //   tags: ["Next.js", "AI Tools", "Tailwind"],
  //   price: "$149",
  //   gumroad: "#",
  //   image: img1,
  //   gradient: "from-purple/30 to-blue/20",
  //   badge: "bestseller",
  // },
  // {
  //   id: 6,
  //   category: "courses",
  //   title: "Next.js + Tailwind Masterclass",
  //   desc: "Learn to build production-ready UIs from scratch. Real projects, real code.",
  //   tags: ["Next.js", "Tailwind", "TypeScript"],
  //   price: "$99",
  //   gumroad: "#",
  //   image:img1,
  //   gradient: "from-blue/25 to-purple/15",
  //   badge: "coming soon",
  // },
];