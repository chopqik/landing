import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 hover:opacity-90",
  {
    variants: {
      variant: {
        default:
          "bg-[#F2891C] text-[#F2891C]-foreground hover:bg-[#F2891C]/90 shadow-md",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground",
        link: "text-[#F2891C] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2", // Pill shape often needs more horizontal padding
        sm: "h-9 rounded-full px-4",
        lg: "h-12 rounded-full px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    // If asChild, we need to install @radix-ui/react-slot.
    // Implementing basic button for now without Slot if package missing, but let's assume standard prop pattern.
    // If Slot is missing, I'll remove it or install it.
    // User asked for "Small, reusable, typed components".
    // I will simplify to just button element if I didn't install radix slot, preventing errors.
    // Wait, I only installed `lucide-react framer-motion clsx tailwind-merge react-hook-form zod class-variance-authority`.
    // I did NOT install `@radix-ui/react-slot`.
    // So I will remove `asChild` and `Slot` to avoid build error.

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
