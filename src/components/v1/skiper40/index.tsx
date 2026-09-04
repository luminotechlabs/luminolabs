import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Skiper UI skiper40 — Link001
 * Sliding underline with sage green accent.
 */
export const Link001: React.FC<LinkProps> = ({
  href,
  children,
  className,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center text-sm font-medium text-sage-600 transition-colors duration-200 hover:text-sage-900",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-sage-400 transition-all duration-300 ease-out group-hover:w-full"
      />
    </Link>
  );
};
