"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Youtube,
  Github,
  Linkedin,
  Instagram,
  Music,
} from "lucide-react";

const socials = [
  { label: "YouTube", icon: Youtube, href: "https://youtube.com/@KaveenX" },
  { label: "GitHub", icon: Github, href: "https://github.com/Kaveenxz" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/kaveenxz/" },
  { label: "Instagram", icon: Instagram, href: "https://instagram.com/kavee.xz" },
  { label: "TikTok", icon: Music, href: "https://tiktok.com/@kaveen.xz" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden bg-[#0a0a0f]">
      {/* Subtle background depth – consistent with other sections */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft glow blobs */}
        <div className="absolute top-20 -left-32 w-80 h-80 bg-purple/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 -right-32 w-80 h-80 bg-blue/10 rounded-full blur-[100px]" />
        {/* Very faint grid (opacity 0.02) – matches hero but much subtler */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <p className="font-mono text-sm text-muted mb-4">// get in touch</p>
          <h2 className="font-display text-5xl mb-4">
            Let’s build{" "}
            <span className="italic bg-gradient-to-r from-purple to-blue bg-clip-text text-transparent">
              something
            </span>{" "}
            together
          </h2>
          <p className="text-text-dim max-w-xl mx-auto mb-10">
            I’m currently available for freelance projects and collaborations.
            Whether you need a landing page, a full site, or just some advice —
            reach out.
          </p>
        </motion.div>

        {/* Email link – enhanced with smooth underline glow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <a
            href="mailto:kaveenhansithx@gmail.com"
            className="group font-display text-3xl md:text-4xl inline-block text-purple pb-1 mb-12 relative"
          >
            kaveenhansithx@gmail.com
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple to-blue transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0" />
          </a>
        </motion.div>

        {/* Social links – pill-shaped with refined hover */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {socials.map(({ label, icon: Icon, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/50 backdrop-blur-sm font-mono text-xs text-text-dim hover:text-purple hover:border-purple/50 hover:bg-purple/5 transition-all duration-200"
            >
              <Icon size={14} className="transition-transform group-hover:scale-110" />
              {label}
            </motion.a>
          ))}
        </motion.div>

        {/* Availability badge – subtle pulse + glow */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/5 shadow-[0_0_8px_rgba(34,197,94,0.2)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          whileHover={{ scale: 1.02 }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="font-mono text-xs text-green-400">
            Available for projects
          </span>
        </motion.div>
      </div>
    </section>
  );
}