"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface HoverMemberItem {
  id?: string;
  name: string;
  image: string;
  description?: string;
}

export interface HoverMemberProps {
  items?: HoverMemberItem[];
  defaultName?: string;
  defaultDescription?: string;
  className?: string;
}

export const HoverMember: React.FC<HoverMemberProps> = ({
  items = [],
  defaultName = "LUMINOLABS",
  defaultDescription = "Digital craft for serious brands. No fluff, no corporate noise.",
  className,
}) => {
  const [activeItem, setActiveItem] = useState<HoverMemberItem | null>(null);

  const displayText = activeItem ? activeItem.name.toUpperCase() : defaultName.toUpperCase();
  const currentDescription = activeItem?.description || defaultDescription;

  const isHoverSupported = () => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(hover: hover)").matches;
  };

  const handleMouseEnter = (item: HoverMemberItem) => {
    if (isHoverSupported()) {
      setActiveItem(item);
    }
  };

  const handleMouseLeave = () => {
    if (isHoverSupported()) {
      setActiveItem(null);
    }
  };

  const handleSelect = (item: HoverMemberItem) => {
    setActiveItem((prev) => (prev?.name === item.name ? null : item));
  };

  // Proportional font sizing: visually impactful while preventing horizontal page overflow
  const getFontSizeClass = (len: number) => {
    if (len > 18) {
      // Long titles: "MOBILE APP DEVELOPMENT" (22) and "SOCIAL MEDIA HANDLING" (21)
      return "text-[4.6vw] sm:text-[4.8vw] md:text-[5vw] lg:text-[5.2vw] tracking-tight";
    }
    if (len > 12) {
      // Medium titles: "DIGITAL MARKETING" (17) and "WEB DEVELOPMENT" (15)
      return "text-[5.8vw] sm:text-[6.2vw] md:text-[6.6vw] lg:text-[7vw] tracking-tight";
    }
    // Default: "LUMINOLABS" (10)
    return "text-[7.5vw] sm:text-[8vw] md:text-[8.5vw] lg:text-[9vw] tracking-tighter";
  };

  const fontSizeClass = getFontSizeClass(displayText.length);

  return (
    <div
      className={cn(
        "relative w-full flex flex-col items-center justify-center py-4 sm:py-6 overflow-hidden",
        className
      )}
    >
      {/* Top row of rounded thumbnail cards - Fully functional on both mobile touch and desktop hover */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 px-3 max-w-full z-30">
        {items.map((item, index) => {
          const isActive = activeItem?.name === item.name;

          return (
            <button
              key={item.name + index}
              type="button"
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleSelect(item)}
              aria-label={`Select ${item.name}`}
              className={cn(
                "group relative h-14 w-14 sm:h-18 sm:w-18 md:h-22 md:w-22 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 touch-manipulation active:scale-95",
                isActive
                  ? "ring-4 ring-sage-700 shadow-xl scale-110 opacity-100 z-10"
                  : "border-2 border-sage-200/90 shadow-sm opacity-85 hover:opacity-100 hover:scale-105 hover:border-sage-400"
              )}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 56px, (max-width: 768px) 72px, 88px"
                className="object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none"
              />
              <div
                className={cn(
                  "absolute inset-0 transition-opacity duration-300 pointer-events-none",
                  isActive ? "bg-sage-950/15" : "bg-black/5 group-hover:bg-transparent"
                )}
              />
            </button>
          );
        })}
      </div>

      {/* Central Typography - Fitted inside viewport with zero horizontal overflow */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-center mt-6 sm:mt-8 md:mt-10 px-2 sm:px-4 min-h-[75px] sm:min-h-[105px] md:min-h-[135px] lg:min-h-[165px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={displayText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="w-full flex flex-nowrap whitespace-nowrap items-center justify-center leading-none text-center"
          >
            {displayText.split("").map((char, i) => (
              <motion.span
                key={`${displayText}-${i}`}
                initial={{ y: 35, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -35, opacity: 0, filter: "blur(4px)" }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.012,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "inline-block font-black uppercase text-sage-900 leading-[0.9] drop-shadow-sm select-none",
                  fontSizeClass
                )}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Short, Punchy Description Below Giant Typography */}
      <div className="w-full max-w-xl px-4 mt-3 sm:mt-5 min-h-[44px] flex items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentDescription}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={cn(
              "text-xs sm:text-sm md:text-base leading-snug transition-colors",
              activeItem
                ? "text-sage-800 font-semibold tracking-tight"
                : "text-sage-600 font-normal"
            )}
          >
            {currentDescription}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HoverMember;
