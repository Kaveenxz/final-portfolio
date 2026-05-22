"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Image from "next/image";

import img3 from "@/images/bgimg.png"
export default function AboutPage() {
return ( <div className="min-h-screen bg-[#0a0a0f] text-[#e8e8f0]"> <Navbar />

  {/* ─── Hero Section ─── */}
  <section className="pt-32 pb-20 relative overflow-hidden">
    {/* glow background */}
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-20 pointer-events-none blur-[100px]"
      style={{
        background:
          "radial-gradient(ellipse, #7c3aed 0%, #2563eb 100%)",
      }}
    />

    <Container>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl"
      >
        <p className="text-xs font-mono text-violet-400 uppercase tracking-widest mb-3">
          About
        </p>

        <h1
          className="text-4xl sm:text-5xl font-bold text-white mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Building modern UI experiences that feel effortless.
        </h1>

        <p className="text-[#9ca3af] text-base leading-relaxed">
          This platform is focused on creating clean, modern, and highly
          usable UI templates for developers, designers, and creators.
          Every template is crafted with attention to detail — from spacing
          and typography to motion and responsiveness.
        </p>
      </motion.div>
    </Container>
  </section>

  {/* ─── Mission Section ─── */}
  <section className="pb-20">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Why this exists
          </h2>
          <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">
            Most templates look good but are hard to actually use or scale.
            The goal here is different — create templates that are not just
            visually appealing, but also cleanly structured, easy to edit,
            and production-ready.
          </p>
          <p className="text-[#9ca3af] text-sm leading-relaxed">
            Built with modern tools like Next.js and Tailwind CSS, every
            project is designed to save you time while still giving you full
            control.
          </p>
        </div>

        <div className="relative h-60 rounded-2xl border border-[#1e1e2e] bg-[#111118] overflow-hidden">
        <div className="relative h-60 rounded-2xl border border-[#1e1e2e] bg-[#111118] overflow-hidden">
  
  {/* Image */}
  <Image
    src= {img3}
    alt="About preview"
    fill
    className="object-cover opacity-80"
  />

  {/* Optional gradient overlay (keeps your dark aesthetic) */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent" />

  {/* Glow (keep this — looks premium) */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div
      className="w-40 h-40 rounded-full opacity-30 blur-3xl"
      style={{
        background:
          "radial-gradient(circle, #8b5cf6 0%, #3b82f6 100%)",
      }}
    />
  </div>
</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-40 h-40 rounded-full opacity-30 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, #8b5cf6 0%, #3b82f6 100%)",
              }}
            />
          </div>
        </div>
      </motion.div>
    </Container>
  </section>

  {/* ─── Values Section ─── */}
  <section className="pb-24">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-violet-400 uppercase tracking-widest mb-2">
            Principles
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            What defines the work
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Clarity over complexity",
              desc: "Interfaces should feel obvious. No unnecessary clutter or confusion.",
            },
            {
              title: "Built for real use",
              desc: "Every template is designed to be used in production, not just demos.",
            },
            {
              title: "Performance first",
              desc: "Fast loading, optimized layouts, and smooth interactions.",
            },
            {
              title: "Consistency",
              desc: "Spacing, colors, and typography follow a unified system.",
            },
            {
              title: "Modern stack",
              desc: "Next.js, Tailwind CSS, and scalable architecture.",
            },
            {
              title: "Detail-driven",
              desc: "Small details create premium experiences.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-2xl border border-[#1e1e2e] bg-[#111118] hover:border-violet-500/30 transition-colors"
            >
              <h3 className="text-sm font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-[#6b7280] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </Container>
  </section>

  {/* ─── CTA Section ─── */}
  <section className="pb-28">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center p-10 rounded-2xl border border-[#1e1e2e] bg-[#111118]"
      >
        <h2 className="text-2xl font-bold text-white mb-3">
          Start building faster
        </h2>
        <p className="text-[#9ca3af] text-sm mb-6">
          Explore the templates and find the perfect starting point for your
          next project.
        </p>

        <a
          href="/products"
          className="inline-block px-6 py-3 rounded-xl bg-violet-600 text-white text-sm font-medium hover:bg-violet-500 transition"
        >
          Browse Templates
        </a>
      </motion.div>
    </Container>
  </section>

  <Footer />
</div>

);
}
