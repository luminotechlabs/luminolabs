import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "default", asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const variants: Record<string, string> = {
      default:
        "bg-sage-700 text-white hover:bg-sage-800 active:bg-sage-900 shadow-sm",
      outline:
        "border border-sage-300 text-sage-700 hover:bg-sage-50 active:bg-sage-100",
      ghost:
        "text-sage-600 hover:bg-sage-100/60 active:bg-sage-100",
    };

    const sizes: Record<string, string> = {
      default: "h-10 px-5 text-sm",
      sm: "h-8 px-3.5 text-xs",
      lg: "h-12 px-7 text-base",
    };

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
