"use client";

import Link from "next/link";
import { ArrowUp, Github, Linkedin, Instagram, Youtube } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-purple/20 bg-gradient-to-r from-bg via-bg/95 to-bg pt-12 pb-6 px-6 overflow-hidden">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left column */}
          <div className="space-y-3 text-center md:text-left">
            <Link
              href="/"
              className="inline-block font-mono text-xl font-bold tracking-tight bg-gradient-to-r from-purple to-purple-dim bg-clip-text text-transparent hover:from-purple-dim hover:to-purple transition-all duration-300"
            >
              KH<span className="text-purple">.</span>
            </Link>
            <p className="text-xs text-muted font-mono max-w-xs mx-auto md:mx-0">
              Building thoughtful, high‑performance web experiences.
            </p>
            <div className="text-xs text-muted/70 font-mono">
              © {currentYear} Kaveen Hansith
            </div>
          </div>

          {/* Middle column */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-purple">
              Explore
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
              {["About", "Work", "Shop", "YouTube", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="group relative text-sm text-muted hover:text-text transition-colors duration-200 font-mono"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex gap-4">
              <a
                href="https://github.com/Kaveenxz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-border text-muted hover:text-purple hover:border-purple/50 transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/kaveenxz/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-border text-muted hover:text-purple hover:border-purple/50 transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com/kavee.xz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-border text-muted hover:text-purple hover:border-purple/50 transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com/@KaveenX"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-border text-muted hover:text-purple hover:border-purple/50 transition-all duration-300 hover:-translate-y-1"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>

            {/* Back to top button – black background, purple on hover */}
            {showScrollTop && (
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 backdrop-blur-sm border border-gray-700 text-white text-xs font-mono transition-all duration-300 hover:bg-purple hover:border-purple hover:shadow-[0_0_12px_rgba(168,85,247,0.5)] hover:scale-105"
                aria-label="Scroll to top"
              >
                <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                <span>Back to top</span>
              </button>
            )}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 pt-6 border-t border-border/40 text-center">
          <div className="flex flex-wrap justify-center gap-2 text-[11px] font-mono text-muted/60">
            <span className="px-2 py-1 rounded-full bg-white/5">Next.js 15</span>
            <span className="px-2 py-1 rounded-full bg-white/5">Tailwind CSS</span>
            <span className="px-2 py-1 rounded-full bg-white/5">TypeScript</span>
            <span className="px-2 py-1 rounded-full bg-white/5">Framer Motion</span>
          </div>
          <p className="mt-3 text-[11px] text-muted/50">
            Designed & developed with <span className="text-red-400">❤</span> by Kaveen
          </p>
        </div>
      </div>
    </footer>
  );
}