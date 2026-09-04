"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Link001 } from "@/components/v1/skiper40";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "w-full max-w-3xl flex items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-300",
          scrolled
            ? "border-sage-200/80 bg-white/85 shadow-sm backdrop-blur-xl"
            : "border-sage-200/50 bg-white/60 backdrop-blur-md"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-base font-bold tracking-tight text-sage-900 transition-opacity hover:opacity-80"
        >
          Luminolabs
        </Link>

        {/* Desktop nav (Skiper UI animated links) */}
        <div className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((l) => (
            <Link001 key={l.name} href={l.href}>
              {l.name}
            </Link001>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden sm:block">
          <Button asChild size="sm" className="bg-sage-700 hover:bg-sage-800 text-white rounded-full">
            <Link href="#contact">Start Project</Link>
          </Button>
        </div>

        {/* Mobile Hamburger menu - Covers the entire page */}
        <div className="sm:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="rounded-full p-2 text-sage-700 hover:bg-sage-100/80 transition-colors"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            {/* side="full" covers the entire page on mobile */}
            <SheetContent side="full" className="flex flex-col justify-between p-8 sm:p-12 overflow-y-auto">
              <div>
                <div className="pt-2 pb-6 border-b border-sage-200/60">
                  <SheetTitle className="text-2xl font-bold tracking-tight text-sage-900">
                    Luminolabs
                  </SheetTitle>
                </div>

                <div className="mt-12 flex flex-col space-y-6">
                  {NAV_LINKS.map((l, index) => (
                    <motion.a
                      key={l.name}
                      href={l.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                      onClick={() => setOpen(false)}
                      className="text-3xl font-extrabold text-sage-900 hover:text-sage-600 transition-colors flex items-center justify-between group py-2"
                    >
                      <span>{l.name}</span>
                      <ArrowRight className="h-5 w-5 text-sage-400 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-sage-200/60">
                <Button asChild size="lg" className="w-full justify-center bg-sage-700 text-white rounded-full">
                  <Link href="#contact" onClick={() => setOpen(false)}>
                    Start Project
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
};
