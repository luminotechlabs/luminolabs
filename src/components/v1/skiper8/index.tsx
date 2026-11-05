"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface PreloaderProps {
  words?: string[];
  onComplete?: () => void;
}

const DEFAULT_WORDS = [
  "welcome",
  "to",
  "luminotechlabs",
  "your digital",
  "solution providers",
];

export const Preloader: React.FC<PreloaderProps> = ({
  words = DEFAULT_WORDS,
  onComplete,
}) => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (index === words.length - 1) {
      const timeout = setTimeout(() => {
        if (onComplete) onComplete();
      }, 750);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setIndex((prev) => prev + 1);
      },
      index === 0 ? 550 : index === 2 ? 600 : 420
    );

    return () => clearTimeout(timeout);
  }, [index, words.length, onComplete]);

  // Dennis Snellenberg curved SVG exit bottom path
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  } L0 0`;

  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curveVariants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] as const },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] as const, delay: 0.2 },
    },
  };

  const slideUp = {
    initial: {
      y: "0",
    },
    exit: {
      y: "-100%",
      transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] as const, delay: 0.15 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#152317] select-none pointer-events-auto"
    >
      {dimension.width > 0 && (
        <>
          {/* Central words animation (No bubbles/dots as requested) */}
          <div className="relative z-10 flex items-center justify-center px-6 text-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -24, filter: "blur(4px)" }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#f9faf8] lowercase"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Dennis Snellenberg curved SVG bottom curtain for screen lifting effect */}
          <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none fill-[#152317]">
            <motion.path
              variants={curveVariants}
              initial="initial"
              exit="exit"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;
