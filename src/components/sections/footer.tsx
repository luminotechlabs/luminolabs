import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full border-t border-sage-200/60 py-10 text-center"
    >
      <div className="mx-auto flex flex-col items-center justify-center gap-3">
        <Image
          src="/logo.png"
          alt="Luminotechlabs Logo"
          width={28}
          height={28}
          className="h-7 w-7 rounded-md object-contain opacity-80"
        />
        <p className="text-sm text-sage-500">Luminotechlabs &copy; 2026</p>
      </div>
    </footer>
  );
};
