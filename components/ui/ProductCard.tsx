// components/ui/ProductCard.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/data/products";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const defaultGradient = "from-purple/20 to-blue/10";

export default function ProductCard({ product }: { product: Product }) {
  const [imageFailed, setImageFailed] = useState(false);

  // Determine which gradient to use (fallback to default if product.gradient missing)
  const fallbackGradient = product.gradient ?? defaultGradient;

  return (
    <motion.div
      variants={cardVariants}
      layout
      className="border border-border rounded-xl bg-surface overflow-hidden group hover:border-border-bright hover:shadow-glow-purple transition-all"
    >
      {/* Preview area - either image or gradient fallback */}
      <div className="relative h-40 w-full overflow-hidden bg-bg">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-purple text-white text-[10px] font-mono px-2 py-0.5 rounded uppercase">
            {product.badge}
          </span>
        )}

        {!imageFailed ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            onError={() => setImageFailed(true)}
          />
        ) : (
          // Fallback gradient (exactly as original design)
          <div
            className={`h-full w-full bg-gradient-to-br ${fallbackGradient} flex items-center justify-center`}
          >
            <span className="font-mono text-xs text-text-dim/50 capitalize">
              {product.category}
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        <span className="font-mono text-[10px] text-muted uppercase tracking-wide">
          {product.category}
        </span>
        <h3 className="font-display text-xl mt-1 mb-2 group-hover:text-purple transition-colors">
          {product.title}
        </h3>
        <p className="text-text-dim text-sm mb-4">{product.desc}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="border border-border rounded-md px-2 py-0.5 font-mono text-[10px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-purple text-sm">{product.price}</span>
          <Link
            href={product.gumroad}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-purple hover:underline inline-flex items-center gap-1"
          >
            Buy on Gumroad →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}