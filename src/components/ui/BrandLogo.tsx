import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Dumbbell, Flame, Trophy, Zap, Activity } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

export interface BrandLogoProps {
  name?: string;
  highlightWord?: string;
  location?: string;
  logoType?: "text" | "image";
  logoSrc?: string;
  iconName?: "dumbbell" | "flame" | "trophy" | "zap" | "activity" | "custom";
  customIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  name = siteConfig.brand.name,
  highlightWord = siteConfig.brand.highlightWord,
  location = siteConfig.contact.locationLabel,
  logoType = siteConfig.brand.logo?.type || "text",
  logoSrc = siteConfig.brand.logo?.src,
  iconName = "dumbbell",
  customIcon,
  size = "md",
  href = "#hero",
  className,
}) => {
  // If an image logo is configured, render it cleanly
  if (logoType === "image" && logoSrc) {
    const imgHeights = {
      sm: 28,
      md: 36,
      lg: 44,
    };

    return (
      <Link
        href={href}
        className={cn(
          "group flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-xs select-none",
          className
        )}
        aria-label={`${name} Home`}
      >
        <Image
          src={logoSrc}
          alt={name}
          width={160}
          height={imgHeights[size]}
          className="object-contain w-auto h-auto max-h-9 sm:max-h-11"
        />
      </Link>
    );
  }

  // Text & Monogram Logo
  const nameParts = name.split(" ");
  const firstWord = nameParts[0] || name;
  const remainingWords = nameParts.slice(1).join(" ");

  const renderIcon = () => {
    if (customIcon) return customIcon;
    switch (iconName) {
      case "flame":
        return <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-white" />;
      case "trophy":
        return <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-white" />;
      case "zap":
        return <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />;
      case "activity":
        return <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-white" />;
      case "dumbbell":
      default:
        return <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 text-white transform -rotate-45" />;
    }
  };

  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-9 h-9 sm:w-10 sm:h-10",
    lg: "w-11 h-11 sm:w-12 sm:h-12",
  };

  const titleSizes = {
    sm: "text-xl sm:text-2xl",
    md: "text-2xl sm:text-3xl",
    lg: "text-3xl sm:text-4xl",
  };

  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-xs select-none",
        className
      )}
      aria-label={`${name} Home`}
    >
      <div
        className={cn(
          "bg-brand-red flex items-center justify-center rounded-xs group-hover:bg-brand-red-hover transition-colors shadow-sm shrink-0",
          iconSizes[size]
        )}
      >
        {renderIcon()}
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-black tracking-tight text-white group-hover:text-zinc-100 leading-none",
            titleSizes[size]
          )}
        >
          {firstWord}{" "}
          <span className="text-brand-red">
            {highlightWord || remainingWords}
          </span>
        </span>
        {location && (
          <span className="text-[9px] sm:text-[10px] font-display uppercase tracking-widest text-text-muted mt-0.5">
            {location}
          </span>
        )}
      </div>
    </Link>
  );
};
