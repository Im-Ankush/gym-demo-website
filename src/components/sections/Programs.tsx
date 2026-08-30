import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export interface ProgramsProps {
  config?: typeof siteConfig;
}

export const Programs: React.FC<ProgramsProps> = ({
  config = siteConfig,
}) => {
  const { programs } = config;
  const items = programs.items;

  const featuredProgram = items.find((p) => p.featured) || items[0];
  const supportingPrograms = items.filter((p) => p.id !== featuredProgram.id);

  return (
    <section
      id="programs"
      aria-label="FITZONE Training Programs"
      className="relative py-20 sm:py-24 lg:py-32 bg-bg-main overflow-hidden border-b border-border-subtle/60"
    >
      <Container>
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            badge={programs.overline}
            title={programs.headline}
            highlightText={programs.highlightText}
            subtitle={programs.supportingText}
            align="left"
            size="lg"
          />
        </div>

        {/* Visual Editorial Program Composition */}
        <div className="space-y-6">
          {/* Top Row: 1 Large Featured Program (7 cols) + 2 Vertical Supporting Programs (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* 1. Large Featured Program: Strength Training (7 cols) */}
            <div className="lg:col-span-7 group relative rounded-xs overflow-hidden border border-border-subtle hover:border-brand-red/60 transition-all duration-300 bg-surface-charcoal aspect-[16/10] sm:aspect-[16/9] flex flex-col justify-end p-6 sm:p-8">
              <Image
                src={featuredProgram.imageSrc}
                alt={featuredProgram.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center filter brightness-[0.88] contrast-[1.1] group-hover:scale-[1.04] transition-transform duration-500 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/75 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <Badge variant="red" dot>
                  {featuredProgram.tag}
                </Badge>
                <div className="w-10 h-10 rounded-full bg-surface-charcoal/80 border border-border-subtle text-white group-hover:text-brand-red group-hover:border-brand-red flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              <div className="relative z-10 space-y-2 max-w-xl">
                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl uppercase text-white tracking-wide group-hover:text-zinc-100 transition-colors">
                  {featuredProgram.title}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {featuredProgram.description}
                </p>
              </div>
            </div>

            {/* 2 & 3. Supporting Programs Stack (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {supportingPrograms.slice(0, 2).map((program) => (
                <div
                  key={program.id}
                  className="group relative rounded-xs overflow-hidden border border-border-subtle hover:border-brand-red/60 transition-all duration-300 bg-surface-charcoal aspect-[16/9] sm:aspect-[4/3] lg:aspect-[21/9] flex flex-col justify-end p-5 sm:p-6"
                >
                  <Image
                    src={program.imageSrc}
                    alt={program.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center filter brightness-[0.88] contrast-[1.1] group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/80 to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <Badge variant="dark">{program.tag}</Badge>
                    <div className="w-8 h-8 rounded-full bg-surface-charcoal/80 border border-border-subtle text-white group-hover:text-brand-red flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  <div className="relative z-10 space-y-1">
                    <h3 className="font-display font-black text-xl uppercase text-white tracking-wide">
                      {program.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                      {program.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row: 3 Programs (Personal Training, Functional Training, HIIT & Conditioning) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportingPrograms.slice(2, 5).map((program) => (
              <div
                key={program.id}
                className="group relative rounded-xs overflow-hidden border border-border-subtle hover:border-brand-red/60 transition-all duration-300 bg-surface-charcoal aspect-[4/3] flex flex-col justify-end p-6"
              >
                <Image
                  src={program.imageSrc}
                  alt={program.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center filter brightness-[0.88] contrast-[1.1] group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/80 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <Badge variant="dark">{program.tag}</Badge>
                  <div className="w-8 h-8 rounded-full bg-surface-charcoal/80 border border-border-subtle text-white group-hover:text-brand-red flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <div className="relative z-10 space-y-1">
                  <h3 className="font-display font-black text-xl uppercase text-white tracking-wide">
                    {program.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
