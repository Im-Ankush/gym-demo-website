import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export interface TrainersProps {
  config?: typeof siteConfig;
}

export const Trainers: React.FC<TrainersProps> = ({
  config = siteConfig,
}) => {
  const { trainers } = config;
  const items = trainers.items;

  return (
    <section
      id="trainers"
      aria-label="FITZONE Expert Coaches"
      className="relative py-20 sm:py-24 lg:py-32 bg-surface-charcoal overflow-hidden border-b border-border-subtle/60"
    >
      {/* Subtle Ambient Red Glow Accent */}
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            badge={trainers.overline}
            title={trainers.headline}
            highlightText={trainers.highlightText}
            subtitle={trainers.supportingText}
            align="left"
            size="lg"
          />
        </div>

        {/* Editorial Trainer Grid: 1 Featured Coach + 5 Supporting Coaches */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((trainer) => (
            <div
              key={trainer.id}
              className={`group relative rounded-xs overflow-hidden border border-border-subtle hover:border-brand-red/60 transition-all duration-300 bg-surface-card flex flex-col justify-end aspect-[3/4] ${
                trainer.featured ? "sm:col-span-2 lg:col-span-1 shadow-2xl" : ""
              }`}
            >
              {/* Trainer Portrait Image */}
              <Image
                src={trainer.imageSrc}
                alt={trainer.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top filter brightness-[0.9] contrast-[1.08] group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              />

              {/* Gradient Overlays for High Contrast Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/60 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Top Tag & Action */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <Badge variant={trainer.featured ? "red" : "dark"} dot={trainer.featured}>
                  {trainer.specialtyTag}
                </Badge>
                <div className="w-8 h-8 rounded-full bg-surface-charcoal/80 border border-border-subtle text-white group-hover:text-brand-red group-hover:border-brand-red flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Info & Socials */}
              <div className="relative z-10 p-6 space-y-2">
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-white tracking-wide leading-none group-hover:text-zinc-100 transition-colors">
                      {trainer.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary font-medium mt-1">
                      {trainer.role}
                    </p>
                  </div>

                  {/* Social links */}
                  {trainer.socials && (
                    <div className="flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                      {trainer.socials.instagram && (
                        <a
                          href={trainer.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${trainer.name} Instagram`}
                          className="w-7 h-7 rounded-xs bg-surface-charcoal/80 border border-border-subtle/80 flex items-center justify-center text-text-secondary hover:text-white hover:border-brand-red transition-colors"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      )}
                      {trainer.socials.twitter && (
                        <a
                          href={trainer.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${trainer.name} Twitter`}
                          className="w-7 h-7 rounded-xs bg-surface-charcoal/80 border border-border-subtle/80 flex items-center justify-center text-text-secondary hover:text-white hover:border-brand-red transition-colors"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
