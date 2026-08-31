import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "red" | "solid-red" | "dark" | "outline" | "success";
  size?: "sm" | "md";
  dot?: boolean;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "red",
  size = "md",
  dot = false,
  icon,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center font-display uppercase tracking-widest font-bold select-none rounded-xs";

  const variantStyles = {
    red: "bg-brand-red/15 text-brand-red border border-brand-red/30",
    "solid-red":
      "bg-brand-red text-white border border-brand-red shadow-lg shadow-brand-red/25",
    dark: "bg-surface-elevated text-text-primary border border-border-subtle",
    outline: "bg-transparent text-text-secondary border border-border-medium",
    success:
      "bg-brand-whatsapp/15 text-brand-whatsapp border border-brand-whatsapp/30",
  };

  const dotColors = {
    red: "bg-brand-red animate-pulse",
    "solid-red": "bg-white animate-pulse",
    dark: "bg-text-secondary",
    outline: "bg-text-muted",
    success: "bg-brand-whatsapp animate-pulse",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 gap-1.5",
    md: "text-xs px-2.5 py-1 gap-2",
  };

  return (
    <span
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotColors[variant])}
          aria-hidden="true"
        />
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
