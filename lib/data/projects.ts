// lib/data/projects.ts
import pr1 from '@/images/pr1.png'
import pr4 from '@/images/pr4.png'
import pr5 from '@/images/pr5.png'
export interface Project {
  id: string;
  featured?: boolean;
  title: string;
  desc: string;
  tags: string[];
  demo: string;
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
    image: pr4,
    gradient: "from-purple/20 to-blue/10",
  },
  {
    id: "02",
    title: "Restaurant Website Redesign",
    desc: "Speculative redesign of a local restaurant. Modern dark UI, online menu, mobile-first.",
    tags: ["Next.js", "Tailwind", "Responsive", "TypeScript", "Dark mode", "Framer Motion"], 
    demo: "https://saas-appx.vercel.app/",
    image: pr1,
    gradient: "from-blue/20 to-purple/10",
  },
  {
    id: "03",
    title: "Lynk — Premium Link in Bio Page Template",
    desc: "A beautiful, fully custom Link in Bio page. No Linktree. No monthly fees. Just yours — forever.",
    tags: ["Tailwind", "HTML", "Dark mode"],
    demo: "https://lynkxz.vercel.app/",
    image: pr5,
    gradient: "from-purple/20 to-purple-dim/10",
  },
 
];