"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const roleVariants = [
  "frontend developer & creator",
  "Next.js architect",
  "UI/UX enthusiast",
  "design engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roleVariants[roleIndex];
    let i = 0;
    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (i <= currentRole.length) {
          setDisplayText(currentRole.slice(0, i));
          i++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => setIsTyping(false), 2000);
        }
      }, 80);
      return () => clearInterval(typingInterval);
    } else {
      const deletingInterval = setInterval(() => {
        if (i >= 0) {
          setDisplayText(currentRole.slice(0, i));
          i--;
        } else {
          clearInterval(deletingInterval);
          setIsTyping(true);
          setRoleIndex((prev) => (prev + 1) % roleVariants.length);
        }
      }, 60);
      return () => clearInterval(deletingInterval);
    }
  }, [isTyping, roleIndex]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Mouse parallax for blobs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  const moveBlob1 = useTransform(springX, (x) => x * 0.02);
  const moveBlob2 = useTransform(springX, (x) => x * -0.015);
  const moveBlobY1 = useTransform(springY, (y) => y * 0.02);
  const moveBlobY2 = useTransform(springY, (y) => y * -0.01);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 100;
      const y = (e.clientY / window.innerHeight - 0.5) * 100;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-16 md:pt-20 bg-[#0a0a0f] text-[#e8e8f0]">
      {/* ─── BACKGROUND GLOW BLOBS ─── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-30">
          <div
            className="absolute inset-0 rounded-full blur-[120px]"
            style={{
              background:
                "radial-gradient(ellipse at 40% 40%, #7c3aed 0%, #2563eb 60%, transparent 100%)",
            }}
          />
        </div>
        <motion.div
          className="absolute top-1/3 -right-48 w-[40rem] h-[40rem] rounded-full bg-purple/20 blur-3xl"
          style={{ x: moveBlob1, y: moveBlobY1 }}
        />
        <motion.div
          className="absolute bottom-1/3 -left-48 w-[35rem] h-[35rem] rounded-full bg-blue/20 blur-3xl"
          style={{ x: moveBlob2, y: moveBlobY2 }}
        />
      </div>

      {/* ─── SUBTLE GRID (opacity 0.04) ─── */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ─── MAIN CONTENT ─── */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-300 text-xs font-medium mb-8"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Frontend engineer & creator
        </motion.div>

        {/* Role typewriter – fixed alignment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-sm md:text-base text-[#9ca3af] mb-6 tracking-wide flex justify-center items-center"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <span>// </span>
          <span className="relative">
            {displayText}
            {showCursor && (
              <span className="absolute -right-[2px] top-0 inline-block w-[2px] h-full bg-violet-400 animate-pulse" />
            )}
          </span>
        </motion.div>

        {/* Main headline – using --font-display */}
        <h1
          className="text-[clamp(4rem,12vw,9rem)] leading-none mb-6 font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block text-white"
          >
            Kaveen
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block bg-gradient-to-r from-violet-400 via-violet-500 to-blue-500 bg-clip-text text-transparent italic"
          >
            Hansith
          </motion.span>
        </h1>

        {/* Description – body font */}
        <motion.p
          className="text-base md:text-lg text-[#9ca3af] max-w-xl mx-auto mb-10"
          style={{ fontFamily: "var(--font-body)" }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
          }}
        >
          {"I build fast, beautiful websites with Next.js & Tailwind. Documenting the journey from developer to business."
            .split(" ")
            .map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            href="#work"
            className="group relative bg-violet-600 text-white px-7 py-3.5 rounded-xl font-mono text-sm tracking-wide overflow-hidden transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            style={{ fontFamily: "var(--font-body)" }}
          >
            View my work →
          </Link>
          <Link
            href="#shop"
            className="border border-[#1e1e2e] bg-[#111118] text-[#e8e8f0] px-7 py-3.5 rounded-xl font-mono text-sm tracking-wide hover:border-violet-500/50 hover:bg-violet-500/5 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Browse shop
          </Link>
        </motion.div>

        {/* Social proof line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 text-xs text-[#4b5563] font-mono"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Building in public · 3+ years of experience · Open to work
        </motion.p>
      </div>

      
    </section>
  );
}