import React from "react";
import Image from "next/image";
import Link from "next/link";

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
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-sage-500">
          <span>Luminotechlabs &copy; 2026</span>
          <span className="hidden sm:inline text-sage-300">&bull;</span>
          <Link
            href="/terms"
            className="transition-colors hover:text-sage-800 underline-offset-4 hover:underline"
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};
