import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-display uppercase tracking-wider font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-bg-main disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-brand-red text-white hover:bg-brand-red-hover active:bg-brand-red-dark shadow-sm border border-brand-red",
      secondary:
        "bg-surface-charcoal text-text-primary hover:bg-surface-card hover:text-white border border-border-subtle hover:border-border-medium",
      outline:
        "bg-transparent text-white border border-border-medium hover:border-brand-red hover:text-brand-red",
      ghost:
        "bg-transparent text-text-secondary hover:text-white hover:bg-surface-card/60",
      whatsapp:
        "bg-brand-whatsapp text-white hover:bg-brand-whatsapp-hover active:bg-green-700 border border-brand-whatsapp shadow-sm",
    };

    const sizeStyles = {
      sm: "text-xs h-9 px-3.5 gap-1.5 rounded-sm",
      md: "text-sm h-11 px-5 gap-2 rounded-sm",
      lg: "text-base h-13 px-7 gap-2.5 rounded-sm tracking-widest",
      xl: "text-lg h-15 px-9 gap-3 rounded-sm tracking-widest",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && "w-full",
      className
    );

    const content = (
      <>
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </>
    );

    const { onClick, id, title, "aria-label": ariaLabel, tabIndex, role } = props;

    if (href) {
      const linkClick = onClick as unknown as React.MouseEventHandler<HTMLAnchorElement> | undefined;

      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
            onClick={linkClick}
            id={id}
            title={title}
            aria-label={ariaLabel}
            tabIndex={tabIndex}
            role={role}
          >
            {content}
          </a>
        );
      }

      return (
        <Link
          href={href}
          className={combinedClassName}
          onClick={linkClick}
          id={id}
          title={title}
          aria-label={ariaLabel}
          tabIndex={tabIndex}
          role={role}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={combinedClassName}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
