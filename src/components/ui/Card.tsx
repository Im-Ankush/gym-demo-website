import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outline" | "interactive";
  accentTop?: boolean;
  as?: React.ElementType;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = "default",
  accentTop = false,
  as: Component = "div",
  ...props
}) => {
  const variantStyles = {
    default:
      "bg-surface-charcoal border border-border-subtle text-text-primary",
    elevated:
      "bg-surface-card border border-border-medium shadow-xl text-text-primary",
    outline:
      "bg-transparent border border-border-subtle hover:border-border-medium text-text-primary",
    interactive:
      "bg-surface-charcoal border border-border-subtle hover:border-brand-red/60 transition-colors duration-200 cursor-pointer text-text-primary group",
  };

  return (
    <Component
      className={cn(
        "relative rounded-xs overflow-hidden flex flex-col",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {accentTop && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red" />
      )}
      {children}
    </Component>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("p-6 pb-3 flex flex-col space-y-1.5", className)} {...props}>
      {children}
    </div>
  );
};

export const CardTitle: React.FC<
  React.HTMLAttributes<HTMLHeadingElement> & { as?: "h2" | "h3" | "h4" | "h5" }
> = ({ children, className, as: Component = "h3", ...props }) => {
  return (
    <Component
      className={cn(
        "font-display text-xl md:text-2xl font-bold uppercase tracking-wide text-white",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const CardDescription: React.FC<
  React.HTMLAttributes<HTMLParagraphElement>
> = ({ children, className, ...props }) => {
  return (
    <p
      className={cn("text-sm text-text-secondary leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
};

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("p-6 pt-0 flex-1", className)} {...props}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "p-6 pt-0 flex items-center border-t border-border-subtle/50 mt-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
