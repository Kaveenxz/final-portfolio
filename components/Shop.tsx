// components/sections/Shop.tsx
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/lib/data/products";
import { ArrowRight } from "lucide-react";

const categories = [
  { id: "all", label: "All", value: "all" },
  { id: "templates", label: "Templates", value: "templates" },
  { id: "components", label: "Components", value: "components" },
  { id: "courses", label: "Courses", value: "courses" },
] as const;

type CategoryValue = (typeof categories)[number]["value"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<CategoryValue>("all");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Filter products by category
  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // For homepage: show only first 3 products (or you can sort/featured)
  const displayedProducts = filteredProducts.slice(0, 3);

  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryValue, number> = {
      all: products.length,
      templates: 0,
      components: 0,
      courses: 0
    };
    categories.forEach((cat) => {
      if (cat.value !== "all") {
        counts[cat.value] = products.filter((p) => p.category === cat.value).length;
      }
    });
    return counts;
  }, []);

  const handleSubscribe = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
  
    if (!email) return;
  
    try {
      setLoading(true);
      setError("");
      setSuccess(false);
  
      const response = await fetch(
        "/api/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(
          data.error || "Failed"
        );
      }
  
      setSuccess(true);
      setEmail("");
    } catch (err: any) {
      console.error(err);
  
      setError(
        err.message ||
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="shop" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        <p className="font-mono text-sm text-muted mb-4">// digital products</p>
        <h2 className="font-display text-5xl mb-4">
          Everything you need to{" "}
          <span className="italic bg-gradient-to-r from-purple to-blue bg-clip-text text-transparent">
            ship faster
          </span>
        </h2>
        <p className="text-text-dim max-w-2xl mb-12">
          Premium templates, reusable components, and in-depth courses — all crafted to accelerate your workflow.
        </p>
      </motion.div> 

      {/* Category tabs (optional, keep if you want filtering on homepage) */}
      <div className="flex flex-wrap gap-1 mt-12 mb-8 border-b border-border overflow-x-auto pb-px">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.value;
          const count = categoryCounts[cat.value as CategoryValue] || 0;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.value)}
              className={`relative px-4 py-2 font-mono text-sm font-medium transition-all duration-200 rounded-t-lg ${isActive
                  ? "text-purple"
                  : "text-muted hover:text-text"
                }`}
            >
              {cat.label}
              <span className="ml-1.5 text-[10px] text-muted/60">({count})</span>
              {isActive && (
                <motion.span
                  layoutId="shop-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Product grid - shows only first 3 products */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: 20 }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <motion.div
              variants={fadeUp}
              className="col-span-full text-center py-12 text-muted font-mono"
            >
              No products in this category yet. Check back soon!
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Transparent "View all products" button */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="text-center mt-12"
      >
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-transparent font-mono text-sm text-purple tracking-wide hover:border-purple/50 hover:bg-purple/5 transition-all duration-300 group hover:gap-3"
        >
          View all products
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      {/* Email capture card (keep your existing one) */}
      <motion.div
        className="mt-16 bg-surface border border-border rounded-xl p-8 flex flex-col sm:flex-row items-center gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        <div className="flex-1">
          <h3 className="font-display text-2xl mb-1">
            Get notified when new products drop
          </h3>
          <p className="text-text-dim text-sm">
            No spam, just updates on templates, components, and courses.
          </p>
        </div>
        <form
  className="flex w-full sm:w-auto gap-2"
  onSubmit={handleSubscribe}
>
<input
  type="email"
  placeholder="you@email.com"
  value={email}
  onChange={(e) =>
    setEmail(e.target.value)
  }
  className="bg-bg border border-border rounded-lg px-4 py-3 text-sm w-full sm:w-64 focus:outline-none focus:border-purple transition"
  required
/>
<button
  type="submit"
  disabled={loading}
  className="bg-purple text-white px-6 py-3 rounded-lg font-mono text-sm tracking-wide hover:bg-purple-dim transition whitespace-nowrap disabled:opacity-50"
>
  {loading
    ? "Joining..."
    : "Subscribe"}
</button>
        </form>

        <div className="w-full sm:w-auto">
  {success && (
    <p className="text-green-400 text-sm mt-3">
      Successfully subscribed.
    </p>
  )}

  {error && (
    <p className="text-red-400 text-sm mt-3">
      {error}
    </p>
  )}
</div>
      </motion.div>
    </section>
  );
} 