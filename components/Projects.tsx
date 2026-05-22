// components/sections/Projects.tsx (or wherever your Projects component lives)
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data/projects";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Get the latest 3 projects (assuming projects are ordered by id or date)
  const latestProjects = [...projects]
    .sort((a, b) => {
      // If you have a date field, use that. Otherwise, assume id like "01", "02"...
      return b.id.localeCompare(a.id);
    })
    .slice(0, 3); // Show only 3 latest projects

  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto" ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUp}
      >
        <p className="font-mono text-sm text-muted mb-4">// selected work</p>
        <h2 className="font-display text-5xl mb-4">Projects I've shipped</h2>
        <p className="text-text-dim max-w-2xl mb-12">
          A collection of my recent work – from SaaS landing pages to open-source component libraries.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {latestProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
            className="transition-all duration-200"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button to view all projects */}
      <motion.div
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  variants={fadeUp}
  className="text-center mt-12"
>
  <Link
    href="/projects"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-transparent font-mono text-sm text-purple tracking-wide hover:border-purple/50 hover:bg-purple/5 transition-all duration-300 group hover:gap-3"
  >
    View all projects
    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
  </Link>
</motion.div>
    </section>
  );
}