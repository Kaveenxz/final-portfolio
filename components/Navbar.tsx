"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Shop", href: "#shop" },
  { label: "YouTube", href: "#youtube" },
  { label: "Contact", href: "/contact" },
];

// Helper to get current active section based on scroll position
const getActiveSection = (): string => {
  const sections = navLinks.map((link) => link.href.substring(1));
  for (const section of sections.reverse()) {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 150) return `#${section}`;
    }
  }
  return "";
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle scroll: change navbar background and update active section
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          setActiveHash(getActiveSection());
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on window resize (if becoming desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  // Smooth scroll with offset for fixed navbar
  const handleHashClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offset = 80; // navbar height + extra padding
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        // Update URL without causing scroll jump
        window.history.pushState(null, "", href);
        setActiveHash(href);
      }
      setMobileOpen(false);
    }
  };

  // CTA button component (reused)
  const CTAButton = ({ onClick }: { onClick?: () => void }) => (
    <Link
      href="/contact"
      onClick={(e) => {
        handleHashClick(e, "/contact");
        onClick?.();
      }}
      className="bg-purple text-white px-5 py-2 rounded-lg font-mono text-sm tracking-wide hover:bg-purple-dim transition inline-block text-center"
    >
      Hire me →
    </Link>
  );

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 z-50 bg-purple text-white px-4 py-2 rounded"
      >
        Skip to content
      </a>

      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-bg/80 border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 group focus:outline-none focus:ring-2 focus:ring-purple rounded"
            aria-label="Home"
          >
            <span className="font-mono text-lg text-text transition group-hover:text-purple">
              KH<span className="text-purple">.</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleHashClick(e, link.href)}
                className={`text-sm font-medium transition-colors ${
                  activeHash === link.href
                    ? "text-purple"
                    : "text-text-dim hover:text-text"
                }`}
                aria-current={activeHash === link.href ? "section" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <CTAButton />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-text focus:outline-none focus:ring-2 focus:ring-purple rounded p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          ref={menuRef}
          className={`md:hidden fixed top-16 left-0 right-0 bg-bg/95 backdrop-blur-md border-b border-border transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ zIndex: 40 }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleHashClick(e, link.href)}
                className={`text-lg transition ${
                  activeHash === link.href
                    ? "text-purple font-medium"
                    : "text-text-dim hover:text-text"
                }`}
                aria-current={activeHash === link.href ? "section" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2">
              <CTAButton onClick={() => setMobileOpen(false)} />
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}