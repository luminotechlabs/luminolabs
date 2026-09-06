"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Code2, Smartphone, TrendingUp, Share2, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Static & dynamic applications tailored for speed. Server components, edge caching, the whole stack — built around how your users actually behave.",
    icon: Code2,
    span: "md:col-span-7",
    minH: "md:min-h-[220px]",
    tag: "Scalable applications",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Native-feeling iOS & Android builds. We care about the smooth scroll and the haptic feedback on that confirm button.",
    icon: Smartphone,
    span: "md:col-span-5",
    minH: "md:min-h-[220px]",
    tag: "iOS & Android",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "SEO and data-driven algorithmic growth. Not the kind where we send you a PDF of keyword rankings — the kind where revenue actually moves.",
    icon: TrendingUp,
    span: "md:col-span-5",
    minH: "md:min-h-[200px]",
    tag: "Organic Growth",
  },
  {
    slug: "social-media-handling",
    title: "Social Media Handling",
    description:
      "Authentic brand presence and architecture. We build the system, not just the posts. We handle with care not glasses but your business values",
    icon: Share2,
    span: "md:col-span-7",
    minH: "md:min-h-[200px]",
    tag: "Brand Presence",
  },
];

export const ServicesBento = () => {
  return (
    <section id="services" className="w-full px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        {/* Section label — scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 max-w-lg md:mb-14"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-sage-500">
            What we actually do
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-sage-900 sm:text-4xl">
            Four things, done properly.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-sage-600 leading-relaxed">
            Click any service to view technical architecture, deliverable breakdowns, and timeline expectations.
          </p>
        </motion.div>

        {/* Asymmetric bento grid with clickable card links to detailed service pages */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {SERVICES.map((s, index) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.21, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
                className={`${s.span} group`}
              >
                <Link href={`/services/${s.slug}`} className="block h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 rounded-3xl">
                  <Card
                    className={`${s.minH} flex h-full flex-col justify-between p-0 transition-all duration-300 group-hover:border-sage-400 group-hover:shadow-md bg-white`}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sage-100 text-sage-700 transition-colors duration-300 group-hover:bg-sage-200">
                          <Icon className="h-[18px] w-[18px]" />
                        </div>
                        <span className="text-[11px] font-mono font-medium text-sage-500 bg-sage-50 border border-sage-100 rounded-full px-2.5 py-0.5">
                          {s.tag}
                        </span>
                      </div>
                      <CardTitle className="flex items-center justify-between text-sage-900 group-hover:text-sage-700 transition-colors">
                        <span>{s.title}</span>
                        <ArrowRight className="h-4 w-4 text-sage-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-sage-700" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-sage-600">
                        {s.description}
                      </CardDescription>

                      <div className="pt-3 border-t border-sage-100 flex items-center justify-between text-xs font-semibold text-sage-700 group-hover:text-sage-900 transition-colors">
                        <span>Read detailed breakdown</span>
                        <span className="text-sage-400 group-hover:translate-x-1 transition-transform">
                          &rarr;
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesBento;
