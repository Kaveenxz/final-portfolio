export interface Product {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: any;
  screenshots: string[];
  tags: string[];
  price: string;
  link: string;
  features: string[];
  featured?: boolean;
}
import img1 from "@/images/img1.png";
import img2 from "@/images/3 portfolio designs showcasing David.png"
import img3 from "@/images/ChatGPT Image Apr 25, 2026, 01_19_15 PM.png"
import img4 from "@/images/Modern dashboard design with orange accents.png"
import img5 from "@/images/Photography portfolio web design showcase.png"
import img6 from "@/images/original-2c6ae08ef52b4f2e280d8f240612608b.webp"

export const products: Product[] = [
  {
    slug: "modern-portfolio",
    title: "Modern Portfolio UI",
    shortDescription: "A sleek dark portfolio template built for developers and creatives.",
    description:
      "A fully responsive, dark-mode portfolio template designed to make a bold first impression. Built with Next.js App Router and Tailwind CSS, it includes animated hero, project grid, about section, and contact form — all production-ready.",
    image: img1,
    screenshots: ["/images/portfolio.png", "/images/portfolio-2.png"],
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    price: "$29",
    link: "https://gumroad.com/your-product",
    features: [
      "Dark mode with subtle gradient accents",
      "Framer Motion page transitions",
      "Fully responsive on all screen sizes",
      "SEO-optimized with Next.js metadata",
      "Easy to customize via Tailwind config",
    ],
    featured: true,
  },
  {
    slug: "saas-landing",
    title: "SaaS Landing Page",
    shortDescription: "High-converting landing page for SaaS products and startups.",
    description:
      "A conversion-focused SaaS landing page with hero, feature grid, pricing table, testimonials, and CTA sections. Built with a premium dark aesthetic and smooth scroll animations.",
    image: img6,
    screenshots: ["/images/saas.png", "/images/saas-2.png"],
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    price: "$39",
    link: "https://gumroad.com/your-product",
    features: [
      "Pricing table with toggle (monthly/yearly)",
      "Animated feature cards with icons",
      "Testimonials carousel",
      "Gradient CTA sections",
      "Mobile-first responsive layout",
    ],
    featured: true,
  },
  {
    slug: "dashboard-ui",
    title: "Analytics Dashboard",
    shortDescription: "Admin dashboard template with charts, tables, and dark UI.",
    description:
      "A modern analytics dashboard template featuring sidebar navigation, chart widgets, data tables, and user management screens. Perfect for SaaS admin panels and internal tools.",
    image: img3,
    screenshots: ["/images/dashboard.png", "/images/dashboard-2.png"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    price: "$49",
    link: "https://gumroad.com/your-product",
    features: [
      "Collapsible sidebar navigation",
      "Chart and metric widgets",
      "Sortable data tables",
      "Dark UI with clean component library",
      "Role-based layout placeholders",
    ],
    featured: true,
  },
  {
    slug: "docs-template",
    title: "Documentation Site",
    shortDescription: "Clean docs template with sidebar nav, search, and MDX support.",
    description:
      "A minimal, fast documentation site template inspired by the best dev-tool docs. Includes sidebar navigation, breadcrumbs, code blocks with syntax highlighting, and a search bar.",
    image: img4,
    screenshots: ["/images/docs.png", "/images/docs-2.png"],
    tags: ["Next.js", "MDX", "Tailwind CSS"],
    price: "$29",
    link: "https://gumroad.com/your-product",
    features: [
      "MDX-powered content pages",
      "Nested sidebar with active state",
      "Code blocks with copy button",
      "Responsive mobile drawer nav",
      "Dark/light mode support",
    ],
    featured: true,
  },
  {
    slug: "blog-platform",
    title: "Minimal Blog Platform",
    shortDescription: "Editorial-style blog template with great typography.",
    description:
      "A refined, typography-first blog template designed for writers and developers. Features a clean article layout, tag filtering, reading time, and a newsletter CTA section.",
    image: img2,
    screenshots: ["/images/blog.png", "/images/blog-2.png"],
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    price: "$24",
    link: "https://gumroad.com/your-product",
    features: [
      "Beautiful article typography",
      "Tag-based filtering system",
      "Reading time estimates",
      "Newsletter section with form",
      "Open Graph meta tags",
    ],
    featured: false,
  },
  {
    slug: "ecommerce-ui",
    title: "E-Commerce Storefront",
    shortDescription: "Product listing and checkout UI for digital and physical goods.",
    description:
      "A polished e-commerce storefront template with product grid, filters, product detail page, cart drawer, and checkout flow. Clean dark design with smooth hover effects.",
    image: img5,
    screenshots: ["/images/ecommerce.png", "/images/ecommerce-2.png"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    price: "$54",
    link: "https://gumroad.com/your-product",
    features: [
      "Product grid with filter sidebar",
      "Cart drawer with quantity controls",
      "Product detail with image gallery",
      "Checkout flow UI",
      "Wishlist and comparison features",
    ],
    featured: false,
  },
];
