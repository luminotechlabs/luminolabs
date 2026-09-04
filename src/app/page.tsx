"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Preloader } from "@/components/v1/skiper8";
import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero";
import { ServicesBento } from "@/components/sections/services-bento";
import { WorksSection } from "@/components/sections/works-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";

const PRELOADER_WORDS = [
  "Welcome To",
  "LuminoLabs",
  "Your Digital",
  "Solution Providers",
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scroll while preloader is active
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <>
      {/* Skiper UI skiper8 Words Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader
            words={PRELOADER_WORDS}
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="relative min-h-screen bg-background text-foreground selection:bg-sage-200 selection:text-sage-900"
      >
        <Navbar />
        <main>
          <HeroSection />
          <ServicesBento />
          <WorksSection />
          <ContactSection />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
