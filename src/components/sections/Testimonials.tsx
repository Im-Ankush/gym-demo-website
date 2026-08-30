import React from "react";
import { Quote } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export interface TestimonialsProps {
  config?: typeof siteConfig;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  config = siteConfig,
}) => {
  const { testimonials } = config;
  const items = testimonials.items;

  const featured = items.find((t) => t.featured) || items[0];
  const supporting = items.filter((t) => t.id !== featured.id);

  return (
    <section
      id="testimonials"
      aria-label="Member Stories & Experiences"
      className="relative py-20 sm:py-24 lg:py-32 bg-surface-charcoal overflow-hidden border-b border-border-subtle/60"
    >
      {/* Subtle Ambient Red Glow Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            badge={testimonials.overline}
            title={testimonials.headline}
            highlightText={testimonials.highlightText}
            subtitle={testimonials.supportingText}
            align="left"
            size="lg"
          />
        </div>

        {/* Editorial Testimonials Grid: 1 Featured (7 cols) + 3 Stacked (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* 1. Large Featured Testimonial Card (7 cols) */}
          <div className="lg:col-span-7 bg-surface-card border border-border-medium rounded-xs p-8 sm:p-10 lg:p-12 relative flex flex-col justify-between shadow-2xl overflow-hidden group">
            {/* Top Red Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red" />

            {/* Subtle Watermark Quote Icon in Background */}
            <Quote className="absolute -bottom-4 -right-4 w-40 h-40 text-surface-elevated/40 pointer-events-none -rotate-12" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <Badge variant="red" dot>
                  {featured.categoryTag}
                </Badge>
              </div>

              {/* Large Quote */}
              <blockquote className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white uppercase leading-[1.1] tracking-wide">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
            </div>

            {/* Author Info */}
            <div className="pt-8 mt-6 border-t border-border-subtle/80 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xs bg-surface-elevated border border-border-subtle flex items-center justify-center text-brand-red font-display font-black text-lg">
                  {featured.author.charAt(0)}
                </div>
                <div>
                  <div className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
                    {featured.author}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {featured.role}
                  </div>
                </div>
              </div>

              <div className="text-xs text-text-muted font-display uppercase tracking-wider">
                <span>{featured.categoryTag}</span>
              </div>
            </div>
          </div>

          {/* 2. Stack of 3 Supporting Testimonials (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            {supporting.map((item) => (
              <div
                key={item.id}
                className="bg-surface-card/90 border border-border-subtle hover:border-border-medium rounded-xs p-6 flex flex-col justify-between space-y-4 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="dark" size="sm">
                      {item.categoryTag}
                    </Badge>
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed pt-1">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-border-subtle/50 flex items-center justify-between text-xs">
                  <span className="font-display font-bold text-white uppercase tracking-wider">
                    {item.author}
                  </span>
                  <span className="text-text-muted">{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
