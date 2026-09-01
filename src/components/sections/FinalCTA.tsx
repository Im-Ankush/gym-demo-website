"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, MessageSquare, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { scrollToSection } from "@/lib/scroll";

export interface FinalCTAProps {
  config?: typeof siteConfig;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  config = siteConfig,
}) => {
  const { finalCta, contact } = config;
  const encodedMessage = encodeURIComponent(contact.whatsappMessage);
  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodedMessage}`;

  return (
    <section
      id="join"
      aria-label="Join FITZONE Fitness"
      className="relative py-24 sm:py-28 lg:py-36 bg-bg-main overflow-hidden border-b border-border-subtle/80"
    >
      {/* Cinematic Background Image Layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src={finalCta.imageSrc}
          alt={finalCta.imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-[75%_center] md:object-[80%_center] filter brightness-[0.65] contrast-[1.15]"
        />

        {/* Cinematic Multi-Stop Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/90 md:via-bg-main/80 lg:via-bg-main/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-main/80 via-transparent to-transparent" />

        {/* Ambient Red Glow */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/12 rounded-full blur-[160px] pointer-events-none" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-8">
          {/* Overline */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="red" dot>
              {finalCta.overline}
            </Badge>
          </div>

          {/* Headline */}
          <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase text-white leading-[0.9] tracking-tight">
            {finalCta.headlinePart1}{" "}
            <span className="text-brand-red relative inline-block">
              {finalCta.headlineHighlight}
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-brand-red/80 hidden sm:block" />
            </span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-xl">
            {finalCta.supportingText}
          </p>

          {/* Conversion Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-lg sm:max-w-none">
            <Button
              href={finalCta.primaryCta.href}
              variant="primary"
              size="lg"
              className="h-13 sm:h-14 px-8 text-sm sm:text-base tracking-widest shadow-xl shadow-brand-red/20"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(finalCta.primaryCta.href, { plan: "" });
              }}
            >
              {finalCta.primaryCta.label}
            </Button>

            <Button
              href={whatsappUrl}
              isExternal
              variant="whatsapp"
              size="lg"
              className="h-13 sm:h-14 px-7 text-sm sm:text-base tracking-widest"
              leftIcon={<MessageSquare className="w-4 h-4" />}
            >
              {finalCta.secondaryCta.label}
            </Button>
          </div>

          {/* Supporting Trust Row */}
          <div className="pt-2 flex items-center gap-2.5 text-xs text-text-muted font-display uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-brand-red shrink-0" />
            <span className="font-bold text-zinc-400">
              {finalCta.trustStatement}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};
