"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Lock } from "lucide-react";

interface Project {
  title: string;
  url: string;
  displayUrl: string;
  category: string;
  description: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    title: "TCE Materials",
    url: "https://tcematerials.tech",
    displayUrl: "tcematerials.tech",
    category: "Academic Resource Sharing Platform",
    description:
      "A fast, centralized study hub built for engineering students to discover and share handwritten lecture notes, curated study materials, and semester resources with zero friction.",
    tags: ["Resource Hub", "Notes Sharing", "Responsive UI"],
  },
  {
    title: "NIX",
    url: "https://nix-ai.dev",
    displayUrl: "nix-ai.dev",
    category: "AI Platform",
    description:
      "A modern, clean paper trading platform for beginners powered by AI agents for optimised decisions and advanced portfolio and order management service.",
    tags: ["AI Platform", "Real-Time Dashboard", "Paper Trading"],
  },
];

export const WorksSection = () => {
  return (
    <section id="work" className="w-full px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Section Header with persistent scroll animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 max-w-xl"
        >
          <div className="inline-flex items-center rounded-full border border-sage-200/70 bg-white px-3 py-1 text-xs font-mono tracking-wider text-sage-600 mb-3 shadow-xs">
            <span >REAL-TIME LIVE WORKS</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-sage-900 sm:text-4xl">
            Selected Works
          </h2>
          <p className="mt-2 text-sm sm:text-base text-sage-600 leading-relaxed">
            Direct live embeds of platforms shipped into production by us. No static or stock photos — interact with real work.
          </p>
        </motion.div>

        {/* Project Cards Grid with persistent scroll & hover animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-3xl border border-sage-200/80 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-sage-400 transition-all duration-300"
            >
              {/* Browser Window Mockup Frame */}
              <div className="flex flex-col border-b border-sage-200/70 bg-sage-50/80">
                {/* Browser top chrome */}
                <div className="flex items-center justify-between px-4 py-2.5">
                  {/* Window control dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/80" />
                  </div>

                  {/* Browser URL Bar */}
                  <div className="flex items-center gap-1.5 rounded-full bg-white/90 border border-sage-200/60 px-3 py-0.5 text-[11px] font-mono text-sage-600 shadow-xs">
                    <Lock className="h-2.5 w-2.5 text-sage-400" />
                    <span className="truncate max-w-[150px] sm:max-w-[200px]">
                      https://{project.displayUrl}
                    </span>
                  </div>

                  {/* Live Status indicator */}
                  <div className="flex items-center">
                    <span className="text-[10px] font-mono font-medium text-emerald-700 hidden sm:inline">
                      LIVE
                    </span>
                  </div>
                </div>

                {/* Scaled Live Iframe Preview Container (No Stock Images) */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
                  {/* Live embedded website */}
                  <iframe
                    src={project.url}
                    title={`${project.title} live interactive preview`}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                    className="w-[200%] h-[200%] origin-top-left transform scale-50 border-0 pointer-events-none select-none bg-white"
                  />

                  {/* Glass Interactive Overlay */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} in new tab`}
                    className="absolute inset-0 flex items-center justify-center bg-sage-950/0 hover:bg-sage-950/20 backdrop-blur-[0px] hover:backdrop-blur-[1px] transition-all duration-300 group/overlay cursor-pointer"
                  >
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-sage-900 shadow-md opacity-0 transform translate-y-2 group-hover/overlay:opacity-100 group-hover/overlay:translate-y-0 transition-all duration-200">
                      <span>Explore Live Platform</span>
                      <ExternalLink className="h-3.5 w-3.5 text-sage-600" />
                    </span>
                  </a>

                  {/* Category Pill at bottom left */}
                  <span className="absolute bottom-3 left-3 rounded-full bg-sage-900/80 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-sage-100 backdrop-blur-sm pointer-events-none">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold tracking-tight text-sage-900 group-hover:text-sage-700 transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sage-400 group-hover:text-sage-700 transition-colors p-1"
                    >
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>

                  <p className="text-sm text-sage-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags and CTA */}
                <div className="pt-3 border-t border-sage-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-sage-50 border border-sage-200/60 px-2.5 py-0.5 text-[11px] font-medium text-sage-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage-700 hover:text-sage-900 transition-colors group/link"
                  >
                    <span>{project.displayUrl}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
