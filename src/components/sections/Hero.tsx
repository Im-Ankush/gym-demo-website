"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, MapPin, ShieldCheck, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { scrollToSection } from "@/lib/scroll";

export interface HeroProps {
  config?: typeof siteConfig;
}

export const Hero: React.FC<HeroProps> = ({ config = siteConfig }) => {
  const { hero } = config;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center bg-bg-main overflow-hidden pt-28 md:pt-32 pb-16 md:pb-24"
      aria-label="Hero Section"
    >
      {/* 1. Cinematic Background Image Layer with Right-Weighted Athlete */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src={hero.imageSrc}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center] md:object-[82%_center] lg:object-right filter brightness-[0.92] contrast-[1.08]"
        />

        {/* Refined Cinematic Gradients: Maximum Readability on Left, Clear Athlete Visibility on Right */}
        {/* Horizontal Left-to-Right Dark Falloff */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/80 sm:via-bg-main/60 md:via-bg-main/45 lg:via-bg-main/25 to-transparent" />

        {/* Vertical Bottom-to-Top Fade for Seamless Section Transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/50 to-transparent" />

        {/* Top Navbar Shadow for Header Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/20 to-transparent h-36" />

        {/* Subtle Atmospheric Red Radial Glow behind athlete */}
        <div className="absolute top-1/4 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand-red/12 rounded-full blur-[140px] pointer-events-none" />

        {/* Subtle Grid Texture */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
      </div>

      {/* 2. Hero Foreground Content */}
      <Container className="relative z-10 w-full">
        <div className="max-w-2xl lg:max-w-[700px] xl:max-w-[740px] flex flex-col items-start">
          {/* Eyebrow & Location Badges */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-charcoal/90 border border-border-subtle rounded-xs backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span className="font-display uppercase tracking-widest text-xs font-bold text-text-primary">
                {hero.eyebrow}
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-card/70 border border-border-subtle/60 rounded-xs text-text-secondary text-xs font-sans backdrop-blur-sm">
              <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0" />
              <span className="font-bold tracking-wider uppercase text-[11px] text-zinc-300">
                {hero.location}
              </span>
            </div>
          </div>

          {/* Main Cinematic Headline */}
          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[88px] xl:text-[96px] uppercase text-white leading-[0.92] tracking-tight mb-5 sm:mb-6">
            {hero.headlinePart1}{" "}
            <span className="text-brand-red relative inline-block">
              {hero.headlineHighlight}
              {/* Subtle red underline bar */}
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-brand-red/80 hidden sm:block" />
            </span>
            <br />
            {hero.headlinePart2}
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-xl mb-7 sm:mb-9">
            {hero.supportingText}
          </p>

          {/* CTAs Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-8">
            <Button
              href={hero.primaryCta.href}
              variant="primary"
              size="lg"
              className="h-13 sm:h-14 px-8 text-sm sm:text-base tracking-widest shadow-xl shadow-brand-red/20"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(hero.primaryCta.href, { plan: "" });
              }}
            >
              {hero.primaryCta.label}
            </Button>

            <Button
              href={hero.secondaryCta.href}
              variant="secondary"
              size="lg"
              className="h-13 sm:h-14 px-8 text-sm sm:text-base tracking-widest"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(hero.secondaryCta.href);
              }}
            >
              {hero.secondaryCta.label}
            </Button>
          </div>

          {/* Supporting Trust Statement */}
          <div className="flex items-center gap-2.5 text-xs text-text-muted font-display uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-brand-red shrink-0" />
            <span className="font-bold text-zinc-400">
              {hero.trustStatement}
            </span>
          </div>
        </div>
      </Container>

      {/* 3. Subtle Understated Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1 text-text-muted pointer-events-none select-none">
        <span className="font-display uppercase tracking-[0.25em] text-[10px] font-bold text-zinc-400">
          Scroll to Explore
        </span>
        <ChevronDown className="w-4 h-4 text-brand-red animate-bounce" />
      </div>
    </section>
  );
};
