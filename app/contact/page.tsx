// app/contact/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Send, Mail, Github, Linkedin, Youtube, Instagram } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
  
    try {
      setIsSubmitting(true);
  
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(
          data.error || "Failed to send"
        );
      }
  
      setSubmitted(true);
  
      setFormData({
        name: "",
        email: "",
        projectType: "",
        message: "",
      });
  
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header with back link */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-10"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted hover:text-purple transition-colors font-mono text-sm mb-6 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Let's work together
          </h1>
          <p className="text-text-dim max-w-2xl">
            I'm currently available for freelance projects, collaborations, or just a chat.
            Fill out the form and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Left: Contact info & socials */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-6"
          >
            <motion.div variants={fadeUp}>
              <h3 className="font-display text-xl mb-3">Direct contact</h3>
              <a
                href="mailto:hello@kaveenhansith.com"
                className="inline-flex items-center gap-2 text-purple font-mono text-sm hover:underline"
              >
                <Mail size={14} />
                kaveenhansithx@gmail.com
              </a>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="font-display text-xl mb-3">Socials</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Github, href: "https://github.com/Kaveenxz", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/kaveenxz/", label: "LinkedIn" },
                  { icon: Youtube, href: "https://youtube.com/@KaveenX", label: "YouTube" },
                  { icon: Instagram, href: "https://instagram.com/kavee.xz", label: "Instagram" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-border bg-surface/50 text-muted hover:text-purple hover:border-purple/50 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="font-display text-xl mb-3">Availability</h3>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="font-mono text-sm text-green-400">Open for work</span>
              </div>
              <p className="text-text-dim text-sm mt-2">
                Based in Sri Lanka · Remote worldwide
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="md:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs text-muted mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple transition"
                    placeholder="Kaveen Hansith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-xs text-muted mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple transition"
                    placeholder="hello@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block font-mono text-xs text-muted mb-1">
                  Project type (optional)
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple transition"
                >
                  <option value="">Select an option</option>
                  <option value="Website / Landing page">Website / Landing page</option>
                  <option value="Template / Component">Template / Component</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-xs text-muted mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple transition resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-purple text-white font-mono text-sm tracking-wide hover:bg-purple-dim transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : submitted ? (
                  "Sent! ✓"
                ) : (
                  <>
                    Send message
                    <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}