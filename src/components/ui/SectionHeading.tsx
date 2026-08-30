import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

export interface SectionHeadingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  badge?: string | React.ReactNode;
  badgeVariant?: "red" | "dark" | "outline" | "success";
  title: string | React.ReactNode;
  highlightText?: string;
  subtitle?: string | React.ReactNode;
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg" | "xl";
  as?: "h1" | "h2" | "h3";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeVariant = "red",
  title,
  highlightText,
  subtitle,
  align = "left",
  size = "lg",
  as: HeadingTag = "h2",
  className,
  ...props
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const titleSizes = {
    sm: "text-2xl sm:text-3xl lg:text-4xl",
    md: "text-3xl sm:text-4xl lg:text-5xl",
    lg: "text-4xl sm:text-5xl lg:text-6xl tracking-tight",
    xl: "text-5xl sm:text-6xl lg:text-7xl tracking-tighter",
  };

  // Render title with optional highlight replacement if title is a string
  const renderTitleContent = () => {
    if (typeof title === "string" && highlightText) {
      const parts = title.split(new RegExp(`(${highlightText})`, "gi"));
      return parts.map((part, i) =>
        part.toLowerCase() === highlightText.toLowerCase() ? (
          <span key={i} className="text-brand-red">
            {part}
          </span>
        ) : (
          part
        )
      );
    }
    return title;
  };

  return (
    <div
      className={cn(
        "flex flex-col space-y-3 max-w-3xl",
        alignClasses[align],
        className
      )}
      {...props}
    >
      {badge && (
        <div className="mb-1">
          {typeof badge === "string" ? (
            <Badge variant={badgeVariant} dot>
              {badge}
            </Badge>
          ) : (
            badge
          )}
        </div>
      )}

      <HeadingTag
        className={cn(
          "font-display font-black uppercase text-white leading-[0.95]",
          titleSizes[size]
        )}
      >
        {renderTitleContent()}
      </HeadingTag>

      {subtitle && (
        <p className="text-base sm:text-lg text-text-secondary font-normal leading-relaxed max-w-2xl pt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
};
