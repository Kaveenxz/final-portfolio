"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/lib/data/products";
import { ArrowLeft } from "lucide-react";

const categories = [
  { id: "all", label: "All", value: "all" },
  { id: "templates", label: "Templates", value: "templates" },
  { id: "components", label: "Components", value: "components" },
  { id: "courses", label: "Courses", value: "courses" },
] as const;

type CategoryValue = (typeof categories)[number]["value"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AllProductsPage() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryValue>("all");

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;

    return products.filter(
      (p) => p.category === activeCategory
    );
  }, [activeCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryValue, number> = {
      all: products.length,
      templates: 0,
      components: 0,
      courses: 0
    };

    categories.forEach((cat) => {
      if (cat.value !== "all") {
        counts[cat.value] = products.filter(
          (p) => p.category === cat.value
        ).length;
      }
    });

    return counts;
  }, []);

  const handleSubscribe = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
  
    console.log("SUBMITTING");
  
    try {
      setLoading(true);
      setError("");
      setSuccess(false);
  
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
  
      console.log("RESPONSE:", res);
  
      if (!res.ok) {
        throw new Error("Failed to subscribe");
      }
  
      setSuccess(true);
      setEmail("");
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-12"
        >
          <Link
            href="/#shop"
            className="inline-flex items-center gap-2 text-muted hover:text-purple transition-colors font-mono text-sm mb-6 group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to home
          </Link>

          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            All Products
          </h1>

          <p className="text-text-dim max-w-2xl">
            Browse our complete collection of templates,
            components, and courses — built to help you
            ship faster.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1 mt-8 mb-8 border-b border-border overflow-x-auto pb-px">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;

            const count =
              categoryCounts[
                cat.value as CategoryValue
              ] || 0;

            return (
              <button
                key={cat.id}
                onClick={() =>
                  setActiveCategory(cat.value)
                }
                className={`relative px-4 py-2 font-mono text-sm font-medium transition-all duration-200 rounded-t-lg ${
                  isActive
                    ? "text-purple"
                    : "text-muted hover:text-text"
                }`}
              >
                {cat.label}

                <span className="ml-1.5 text-[10px] text-muted/60">
                  ({count})
                </span>

                {isActive && (
                  <motion.span
                    layoutId="products-page-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={cardVariants}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="transition-all duration-200"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))
            ) : (
              <motion.div
                variants={fadeUp}
                className="col-span-full text-center py-12 text-muted font-mono"
              >
                No products in this category yet.
                Check back soon!
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Product Count */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mt-16 text-muted font-mono text-sm"
        >
          {filteredProducts.length} product
          {filteredProducts.length !== 1
            ? "s"
            : ""}{" "}
          • One-time purchase • Lifetime updates
        </motion.div>

        {/* Subscribe Section */}
        <motion.div
          className="mt-20 bg-surface border border-border rounded-xl p-8 flex flex-col sm:flex-row items-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-80px",
          }}
          variants={fadeUp}
        >
          <div className="flex-1">
            <h3 className="font-display text-2xl mb-1">
              Get notified when new products drop
            </h3>

            <p className="text-text-dim text-sm">
              No spam, just updates on templates,
              components, and courses.
            </p>
          </div>

          <div className="w-full sm:w-auto">
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
      </div>
    </div>
  );
}