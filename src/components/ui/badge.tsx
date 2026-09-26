import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-sans text-xs font-semibold transition-all duration-200 select-none",
  {
    variants: {
      variant: {
        default: "bg-accent/15 text-accent border border-accent/20",
        secondary: "bg-bg-warm text-ink-soft border border-line",
        studied: "bg-studied/15 text-studied border border-studied/20",
        primary: "bg-primary text-white shadow-2xs",
        outline: "border border-line bg-surface text-ink",
        amber: "bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950/50 dark:text-amber-200 dark:border-amber-800",
        emerald: "bg-emerald-100 text-emerald-900 border border-emerald-300 dark:bg-emerald-950/50 dark:text-emerald-200 dark:border-emerald-800",
        purple: "bg-purple-100 text-purple-900 border border-purple-300 dark:bg-purple-950/50 dark:text-purple-200 dark:border-purple-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
