import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export interface GalleryProps {
  config?: typeof siteConfig;
}

export const Gallery: React.FC<GalleryProps> = ({
  config = siteConfig,
}) => {
  const { gallery } = config;
  const items = gallery.items;

  const item1 = items[0]; // Featured Strength Arena
  const item2 = items[1]; // Free weights
  const item3 = items[2]; // Gym floor
  const item4 = items[3]; // Functional turf
  const item5 = items[4]; // Cardio suite
  const item6 = items[5]; // Recovery

  return (
    <section
      id="gallery"
      aria-label="FITZONE Gym Photography Gallery"
      className="relative py-20 sm:py-24 lg:py-32 bg-surface-charcoal overflow-hidden border-b border-border-subtle/60"
    >
      <Container>
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            badge={gallery.overline}
            title={gallery.headline}
            highlightText={gallery.highlightText}
            subtitle={gallery.supportingText}
            align="left"
            size="lg"
          />
        </div>

        {/* Editorial Photo Wall Composition */}
        <div className="space-y-6">
          {/* Top Row: 1 Large Feature (8 cols) + 2 Stacked Cards (4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* 1. Large Feature Card (8 cols) */}
            <div className="lg:col-span-8 group relative rounded-xs overflow-hidden border border-border-subtle hover:border-brand-red/60 transition-all duration-300 bg-surface-card aspect-[16/10] sm:aspect-[16/9] flex flex-col justify-end p-6 sm:p-8">
              <Image
                src={item1.imageSrc}
                alt={item1.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center filter brightness-[0.9] contrast-[1.08] group-hover:scale-[1.04] transition-transform duration-500 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/60 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <Badge variant="red" dot>
                  {item1.category}
                </Badge>
                <div className="w-9 h-9 rounded-full bg-surface-charcoal/80 border border-border-subtle text-white group-hover:text-brand-red flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="relative z-10 space-y-1">
                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-white tracking-wide">
                  {item1.title}
                </h3>
              </div>
            </div>

            {/* 2 & 3. Stacked 4-Column Cards */}
            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {[item2, item3].map((item) => (
                <div
                  key={item.id}
                  className="group relative rounded-xs overflow-hidden border border-border-subtle hover:border-brand-red/60 transition-all duration-300 bg-surface-card aspect-[16/9] sm:aspect-[4/3] lg:aspect-[21/9] flex flex-col justify-end p-5"
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-center filter brightness-[0.9] contrast-[1.08] group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/70 to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <Badge variant="dark" size="sm">
                      {item.category}
                    </Badge>
                    <div className="w-7 h-7 rounded-full bg-surface-charcoal/80 border border-border-subtle text-white group-hover:text-brand-red flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="relative z-10 space-y-0.5">
                    <h3 className="font-display font-black text-lg uppercase text-white tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Row: 2 Balanced Cards (6 cols each) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[item4, item5].map((item) => (
              <div
                key={item.id}
                className="group relative rounded-xs overflow-hidden border border-border-subtle hover:border-brand-red/60 transition-all duration-300 bg-surface-card aspect-[16/9] flex flex-col justify-end p-6"
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center filter brightness-[0.9] contrast-[1.08] group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/70 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <Badge variant="dark">{item.category}</Badge>
                  <div className="w-8 h-8 rounded-full bg-surface-charcoal/80 border border-border-subtle text-white group-hover:text-brand-red flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="relative z-10 space-y-0.5">
                  <h3 className="font-display font-black text-xl uppercase text-white tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 1 Wide Panoramic Card (12 cols) */}
          <div className="group relative rounded-xs overflow-hidden border border-border-subtle hover:border-brand-red/60 transition-all duration-300 bg-surface-card aspect-[16/9] sm:aspect-[21/9] lg:aspect-[28/9] flex flex-col justify-end p-6 sm:p-8">
            <Image
              src={item6.imageSrc}
              alt={item6.imageAlt}
              fill
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.9] contrast-[1.08] group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/75 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
              <Badge variant="red" dot>
                {item6.category}
              </Badge>
              <div className="w-10 h-10 rounded-full bg-surface-charcoal/80 border border-border-subtle text-white group-hover:text-brand-red flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            <div className="relative z-10 space-y-1 max-w-xl">
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-white tracking-wide">
                {item6.title}
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
