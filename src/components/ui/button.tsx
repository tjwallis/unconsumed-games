import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 font-display text-xs tracking-widest uppercase transition-[color,background-color,border-color,transform] duration-200 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        ember: "bg-ember text-parchment hover:bg-ember-deep",
        navy: "bg-navy text-parchment hover:bg-navy-raised",
        outline:
          "border border-navy/15 bg-cream text-navy hover:border-ember",
      },
    },
    defaultVariants: { variant: "ember" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({
  className,
  variant,
  asChild = false,
  type = "button",
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant }), className)}
      {...(!asChild ? { type } : {})}
      {...props}
    />
  );
}
