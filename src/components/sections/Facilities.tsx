import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export interface FacilitiesProps {
  config?: typeof siteConfig;
}

export const Facilities: React.FC<FacilitiesProps> = ({
  config = siteConfig,
}) => {
  const { facilities } = config;
  const items = facilities.items;

  const strengthZone = items.find((f) => f.id === "strength-zone") || items[0];
  const cardioZone = items.find((f) => f.id === "cardio-zone") || items[1];
  const freeWeights = items.find((f) => f.id === "free-weights") || items[3];
  const functional = items.find((f) => f.id === "functional-training") || items[2];
  const personalTraining = items.find((f) => f.id === "personal-training") || items[4];
  const recoveryArea = items.find((f) => f.id === "recovery-area") || items[5];

  return (
    <section
      id="facilities"
      aria-label="FITZONE Training Facilities"
      className="relative py-20 sm:py-24 lg:py-32 bg-bg-main overflow-hidden border-b border-border-subtle/60"
    >
      <Container>
        {/* Section Heading with Center/Editorial Alignment */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            badge={facilities.overline}
            title={facilities.headline}
            highlightText={facilities.highlightText}
            subtitle={facilities.supportingText}
            align="left"
            size="lg"
          />
        </div>

        {/* Gallery-Style Masonry Composition */}
        <div className="space-y-6">
          {/* Top Row: Large Featured Strength Zone (8 cols) + Cardio Zone (4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* 1. Large Featured Facility: Strength Zone */}
            <div className="lg:col-span-8 group relative rounded-xs overflow-hidden border border-border-subtle hover:border-brand-red/60 transition-all duration-300 bg-surface-charcoal aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/9.5] flex flex-col justify-end p-6 sm:p-8">
              <Image
                src={strengthZone.imageSrc}
                alt={strengthZone.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center filter brightness-[0.88] contrast-[1.1] group-hover:scale-[1.04] transition-transform duration-500 ease-out"
              />

              {/* Multi-gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-bg-main/80 via-transparent to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Tag & Action */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <Badge variant="red" dot>
                  {strengthZone.tag}
                </Badge>
                <div className="w-10 h-10 rounded-full bg-surface-charcoal/80 border border-border-subtle text-white group-hover:text-brand-red group-hover:border-brand-red flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-2 max-w-xl">
                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl uppercase text-white tracking-wide group-hover:text-zinc-100">
                  {strengthZone.name}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {strengthZone.description}
                </p>
              </div>
            </div>

            {/* 2. Cardio Zone */}
            <div className="lg:col-span-4 group relative rounded-xs overflow-hidden border border-border-subtle hover:border-brand-red/60 transition-all duration-300 bg-surface-charcoal aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto flex flex-col justify-end p-6 sm:p-8">
              <Image
                src={cardioZone.imageSrc}
                alt={cardioZone.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center filter brightness-[0.88] contrast-[1.1] group-hover:scale-[1.04] transition-transform duration-500 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/80 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <Badge variant="dark">
                  {cardioZone.tag}
                </Badge>
                <div className="w-9 h-9 rounded-full bg-surface-charcoal/80 border border-border-subtle text-white group-hover:text-brand-red group-hover:border-brand-red flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="relative z-10 space-y-1.5">
                <h3 className="font-display font-black text-xl sm:text-2xl uppercase text-white tracking-wide">
                  {cardioZone.name}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {cardioZone.description}
                </p>
              </div>
            </div>
          </div>

          {/* Middle Row: 3 Facilities (Free Weights, Functional Turf, Personal Training) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 3. Free Weights */}
            <div className="group relative rounded-xs overflow-hidden border border-border-subtle hover:border-brand-red/60 transition-all duration-300 bg-surface-charcoal aspect-[4/3] sm:aspect-[4/3] flex flex-col justify-end p-6">
              <Image
                src={freeWeights.imageSrc}
                alt={freeWeights.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center filter brightness-[0.88] contrast-[1.1] group-hover:scale-[1.04] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/80 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <Badge variant="dark">{freeWeights.tag}</Badge>
                <div className="w-8 h-8 rounded-full bg-surface-charcoal/80 border border-border-subtle text-white group-hover:text-brand-red flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="relative z-10 space-y-1">
                <h3 className="font-display font-black text-xl uppercase text-white tracking-wide">
                  {freeWeights.name}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {freeWeights.description}
                </p>
              </div>
            </div>

            {/* 4. Functional Training */}
            <div className="group relative rounded-xs overflow-hidden border border-border-subtle hover:border-brand-red/60 transition-all duration-300 bg-surface-charcoal aspect-[4/3] sm:aspect-[4/3] flex flex-col justify-end p-6">
              <Image
                src={functional.imageSrc}
                alt={functional.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center filter brightness-[0.88] contrast-[1.1] group-hover:scale-[1.04] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/80 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <Badge variant="dark">{functional.tag}</Badge>
                <div className="w-8 h-8 rounded-full bg-surface-charcoal/80 border border-border-subtle text-white group-hover:text-brand-red flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="relative z-10 space-y-1">
                <h3 className="font-display font-black text-xl uppercase text-white tracking-wide">
                  {functional.name}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {functional.description}
                </p>
              </div>
            </div>

            {/* 5. Personal Training */}
            <div className="group relative rounded-xs overflow-hidden border border-border-subtle hover:border-brand-red/60 transition-all duration-300 bg-surface-charcoal aspect-[4/3] sm:aspect-[4/3] flex flex-col justify-end p-6 sm:col-span-2 lg:col-span-1">
              <Image
                src={personalTraining.imageSrc}
                alt={personalTraining.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center filter brightness-[0.88] contrast-[1.1] group-hover:scale-[1.04] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/80 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <Badge variant="dark">{personalTraining.tag}</Badge>
                <div className="w-8 h-8 rounded-full bg-surface-charcoal/80 border border-border-subtle text-white group-hover:text-brand-red flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="relative z-10 space-y-1">
                <h3 className="font-display font-black text-xl uppercase text-white tracking-wide">
                  {personalTraining.name}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {personalTraining.description}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row: Full-width Luxury Recovery Suite Showcase */}
          <div className="group relative rounded-xs overflow-hidden border border-border-subtle hover:border-brand-red/60 transition-all duration-300 bg-surface-charcoal aspect-[16/9] sm:aspect-[21/9] lg:aspect-[28/9] flex flex-col justify-end p-6 sm:p-8">
            <Image
              src={recoveryArea.imageSrc}
              alt={recoveryArea.imageAlt}
              fill
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.88] contrast-[1.1] group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-main/80 via-transparent to-transparent hidden md:block" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
              <Badge variant="red" dot>
                {recoveryArea.tag}
              </Badge>
              <div className="w-10 h-10 rounded-full bg-surface-charcoal/80 border border-border-subtle text-white group-hover:text-brand-red group-hover:border-brand-red flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            <div className="relative z-10 space-y-2 max-w-2xl">
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-white tracking-wide">
                {recoveryArea.name}
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                {recoveryArea.description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
