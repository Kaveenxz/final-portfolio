"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const skills = [
  "Next.js",
  "Tailwind CSS",
  "React",
  "TypeScript",
  "Framer Motion",
  "Node.js",
  "Figma",
  "AI Tools",
  "Vercel",
];

const stats = [
  { label: "Years building", value: "3+" },
  { label: "Projects shipped", value: "10+" },
  { label: "Platforms posting", value: "3" },
  { label: "Building in public", value: "∞" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto" ref={ref}>
      <motion.div
        className="grid md:grid-cols-2 gap-16 items-start"
        variants={stagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Left: text – no changes, only animation already there */}
        <motion.div variants={fadeUp}>
          <p className="font-mono text-sm text-muted mb-4">// about</p>
          <h2 className="font-display text-5xl mb-8 leading-tight">
            Developer from{" "}
            <span className="italic bg-gradient-to-r from-purple to-blue bg-clip-text text-transparent">
              Sri Lanka
            </span>
          </h2>
          <div className="space-y-4 text-text-dim">
            <p>
              I’m Kaveen Hansith, a frontend developer focused on crafting
              high‑performance, visually stunning websites. I specialise in
              Next.js and Tailwind CSS, building tools and templates that help
              others ship faster.
            </p>
            <p>
              When I’m not coding, you’ll find me creating content on YouTube
              and sharing the realities of building a business as a developer.
            </p>
            <p>
              Every line of code I write is part of a larger mission: to prove
              that great design and indie development can go hand in hand.
            </p>
          </div>
        </motion.div>

        {/* Right: stats + skills – enhanced with hover & transition effects */}
        <motion.div variants={stagger}>
          {/* Stats grid */}
          <motion.div
            className="grid grid-cols-2 gap-4 mb-10"
            variants={stagger}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                  borderColor: "rgba(168, 85, 247, 0.4)", // matches purple with transparency
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-surface border border-border rounded-xl p-6 text-center transition-all duration-200 cursor-default"
              >
                <div className="font-mono text-3xl text-purple">
                  {stat.value}
                </div>
                <div className="text-xs text-muted mt-1 font-mono">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skill tags – enhanced hover effects */}
          <motion.div className="flex flex-wrap gap-2" variants={stagger}>
            {skills.map((skill) => (
              <motion.span
                key={skill}
                variants={fadeUp}
                whileHover={{
                  scale: 1.05,
                  borderColor: "#a855f7", // purple
                  color: "#a855f7",
                  transition: { duration: 0.15 },
                }}
                whileTap={{ scale: 0.98 }}
                className="border border-border rounded-md px-3 py-1 font-mono text-xs text-muted hover:border-purple hover:text-purple transition-all duration-150 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}