// components/ui/ProjectCard.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/data/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const defaultGradient = "from-purple/20 to-blue/10";

export default function ProjectCard({ project }: { project: Project }) {
  const isFeatured = project.featured;
  const [imageFailed, setImageFailed] = useState(false);
  const fallbackGradient = project.gradient ?? defaultGradient;

  return (
    <motion.div
      variants={cardVariants}
      className={`border border-border rounded-xl bg-surface overflow-hidden group hover:border-border-bright hover:shadow-glow-purple transition-all ${
        isFeatured ? "md:col-span-2 flex flex-col md:flex-row" : ""
      }`}
    >
      {/* Preview area - image or gradient fallback */}
      <div
        className={`relative overflow-hidden ${
          isFeatured ? "md:w-1/2 min-h-[200px]" : "h-48"
        }`}
      >
        {!imageFailed ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={() => setImageFailed(true)}
          />
        ) : (
          // Gradient fallback with browser dots
          <div
            className={`h-full w-full bg-gradient-to-br ${fallbackGradient} flex items-center justify-center relative`}
          >
            {/* Browser mockup dots */}
            <div className="absolute top-3 left-3 flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
            </div>
            <span className="font-mono text-xs text-text-dim/40">Preview</span>
          </div>
        )}
      </div>

      <div className={`p-6 ${isFeatured ? "md:w-1/2" : ""}`}>
        <div className="flex items-start justify-between mb-2">
          <span className="font-mono text-xs text-purple">{project.id}</span>
          {isFeatured && (
            <span className="font-mono text-[10px] text-purple bg-purple/10 px-2 py-0.5 rounded">
              featured
            </span>
          )}
        </div>
        <h3 className="font-display text-2xl mb-2">{project.title}</h3>
        <p className="text-text-dim text-sm mb-4">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-border rounded-md px-2 py-0.5 font-mono text-[10px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs text-purple hover:underline"
          >
            Live demo <ExternalLink size={12} />
          </Link>
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs text-muted hover:text-purple transition"
          >
            GitHub <Github size={12} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}