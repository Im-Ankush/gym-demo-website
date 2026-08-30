import React from "react";
import { Check, ShieldCheck, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export interface PricingProps {
  config?: typeof siteConfig;
}

export const Pricing: React.FC<PricingProps> = ({ config = siteConfig }) => {
  const { pricing } = config;

  return (
    <section
      id="pricing"
      aria-label="Membership Pricing Plans"
      className="relative py-20 sm:py-24 lg:py-32 bg-bg-main overflow-hidden border-b border-border-subtle/60"
    >
      {/* Subtle Ambient Red Glow Accent behind featured plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[160px] pointer-events-none" />

      <Container>
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            badge={pricing.overline}
            title={pricing.headline}
            highlightText={pricing.highlightText}
            subtitle={pricing.supportingText}
            align="left"
            size="lg"
          />
        </div>

        {/* 3-Tier Membership Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pricing.plans.map((plan) => {
            const isFeatured = plan.featured;

            return (
              <div
                key={plan.id}
                className={`relative rounded-xs flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? "bg-surface-charcoal border-2 border-brand-red shadow-2xl shadow-brand-red/10 md:-translate-y-2"
                    : "bg-surface-charcoal/80 border border-border-subtle hover:border-border-medium"
                }`}
              >
                {/* Featured Badge Top Highlight */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <Badge variant={isFeatured ? "red" : "dark"} dot={isFeatured}>
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                {/* Plan Header */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-display font-black text-2xl uppercase tracking-wider text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed min-h-[32px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="pt-4 border-t border-border-subtle/80 flex items-baseline gap-1.5">
                    <span className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-none">
                      {plan.price}
                    </span>
                    <span className="text-xs font-display uppercase tracking-wider text-text-muted font-bold">
                      {plan.period}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="pt-6 border-t border-border-subtle/60 space-y-3">
                    <span className="text-[11px] font-display uppercase tracking-widest text-text-muted font-bold block">
                      Plan Inclusions
                    </span>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                          <div className="w-4 h-4 rounded-full bg-brand-red/15 border border-brand-red/40 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-brand-red stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div className="p-6 sm:p-8 pt-0">
                  <Button
                    href={plan.ctaHref}
                    variant={isFeatured ? "primary" : "secondary"}
                    size="md"
                    fullWidth
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Membership Trust Strip */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-border-subtle/70 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {pricing.trustStrip.map((item, idx) => (
            <div key={idx} className="flex items-center justify-center gap-2 text-xs text-text-muted font-display uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-brand-red shrink-0" />
              <span className="font-bold text-zinc-400">{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
