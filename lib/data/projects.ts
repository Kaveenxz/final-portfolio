// lib/data/projects.ts
import pr1 from '@/images/pr1.png'
export interface Project {
  id: string;
  featured?: boolean;
  title: string;
  desc: string;
  tags: string[];
  demo: string;
  github: string;
  image: any;
  gradient?: string; // optional custom gradient for fallback
}

export const projects: Project[] = [
  {
    id: "01",
    featured: true,
    title: "SaaS Landing Page Kit",
    desc: "Production-ready landing page template for SaaS products. Hero, features, pricing, testimonials — all pixel perfect.",
    tags: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
    demo: "https://food-cort-amber.vercel.app/",
    github: "https://github.com/Kaveenxz/food-cort",
    image: pr1,
    gradient: "from-purple/20 to-blue/10",
  },
  // {
  //   id: "02",
  //   title: "Restaurant Website Redesign",
  //   desc: "Speculative redesign of a local restaurant. Modern dark UI, online menu, mobile-first.",
  //   tags: ["Next.js", "Tailwind", "Responsive"],
  //   demo: "#",
  //   github: "#",
  //   image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format",
  //   gradient: "from-blue/20 to-purple/10",
  // },
  // {
  //   id: "03",
  //   title: "Tailwind Component Library",
  //   desc: "50+ reusable components — cards, navbars, modals, forms. Dark mode included.",
  //   tags: ["Tailwind", "React", "Dark mode"],
  //   demo: "#",
  //   github: "#",
  //   image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format",
  //   gradient: "from-purple/20 to-purple-dim/10",
  // },
 
];