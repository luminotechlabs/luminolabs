"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HoverMember, HoverMemberItem } from "@/components/v1/skiper6";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// The four services with short, crisp, human descriptions
const HERO_SERVICES: HoverMemberItem[] = [
  {
    name: "Web Development",
    description: "Highly available apps tailored for speed & scale.",
    image: "/photos/website.jpg",
  },
  {
    name: "Mobile App Development",
    description: "Silky smooth native iOS & Android experiences.",
    image: "/photos/app.jpg",
  },
  {
    name: "Digital Marketing",
    description: "Algorithmic SEO pipelines engineered for real revenue.",
    image: "/photos/seo.jpg",
  },
  {
    name: "Social Media Handling",
    description: "Compounding brand presence & cultural resonance.",
    image: "/photos/social.png",
  },
];

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-[85vh] w-full flex-col items-center justify-center pt-24 pb-14 md:pt-32 md:pb-20 overflow-hidden">
      {/* Organic ambient radial background glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-sage-200/35 blur-[150px] -z-10" />

      {/* Full width container */}
      <div className="w-full max-w-full mx-auto flex flex-col items-center text-center px-2 sm:px-4 lg:px-8 overflow-hidden">
        {/* Skiper UI skiper6 Component: Full desktop width + kinetic text animation + mobile touch support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full mb-6 sm:mb-8"
        >
          <HoverMember
            items={HERO_SERVICES}
            defaultName="Luminotechlabs"
            defaultDescription="Digital craft for serious brands. No fluff, no corporate noise."
            className="w-full"
          />
        </motion.div>

        {/* Single Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button
            asChild
            size="lg"
            className="group rounded-full shadow-sm hover:shadow-md transition-all text-sm sm:text-base px-8 py-3 bg-sage-700 text-white hover:bg-sage-800 cursor-pointer"
          >
            <Link href="#services" className="flex items-center gap-2">
              Explore Our Services
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
