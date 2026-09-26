import * as React from "react";
import { cn } from "@/lib/utils";

export interface SwitchProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, checked = false, onCheckedChange, disabled, ...props }, ref) => {
    return (
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        ref={ref}
        onClick={(e) => {
          if (disabled) return;
          props.onClick?.(e);
          onCheckedChange?.(!checked);
        }}
        className={cn(
          "inline-flex h-5.5 w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent p-0.5 transition-colors duration-250 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 active:scale-95 will-change-transform",
          checked ? "bg-accent shadow-xs" : "bg-line hover:bg-line/80",
          className,
        )}
        {...props}
      >
        <span
          className={cn(
            "pointer-events-none block size-4.5 rounded-full bg-surface shadow-sm ring-0 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform",
            checked ? "translate-x-4.5" : "translate-x-0",
          )}
        />
      </button>
    );
  },
);

Switch.displayName = "Switch";
