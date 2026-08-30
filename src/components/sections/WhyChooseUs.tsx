import React from "react";
import Image from "next/image";
import {
  Dumbbell,
  Award,
  Apple,
  Activity,
  ShieldCheck,
  Clock,
  Play,
  CheckCircle,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export interface WhyChooseUsProps {
  config?: typeof siteConfig;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  config = siteConfig,
}) => {
  const { whyChooseUs } = config;

  const renderBenefitIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 text-brand-red shrink-0";
    switch (iconName) {
      case "dumbbell":
        return <Dumbbell className={`${iconClass} transform -rotate-45`} />;
      case "award":
        return <Award className={iconClass} />;
      case "apple":
        return <Apple className={iconClass} />;
      case "activity":
        return <Activity className={iconClass} />;
      case "shield":
        return <ShieldCheck className={iconClass} />;
      case "clock":
      default:
        return <Clock className={iconClass} />;
    }
  };

  return (
    <section
      id="about"
      aria-label="Why Choose FITZONE Fitness"
      className="relative py-20 sm:py-24 lg:py-32 bg-bg-main overflow-hidden border-b border-border-subtle/60"
    >
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          {/* LEFT COLUMN: Editorial Narrative & Benefit System (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Header Section */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <Badge variant="red" dot>
                  {whyChooseUs.overline}
                </Badge>
              </div>

              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-white leading-[0.95] tracking-tight">
                {whyChooseUs.headline.replace(whyChooseUs.highlightText, "").trim()}{" "}
                <span className="text-brand-red">{whyChooseUs.highlightText}</span>
              </h2>

              <p className="text-base sm:text-lg text-text-secondary font-normal leading-relaxed max-w-xl">
                {whyChooseUs.supportingText}
              </p>
            </div>

            {/* 6 Benefits in an Editorial 2-Column Asymmetric Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {whyChooseUs.benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="group relative bg-surface-charcoal/70 border border-border-subtle p-5 rounded-xs hover:border-brand-red/50 hover:bg-surface-charcoal transition-colors duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xs bg-surface-elevated border border-border-subtle group-hover:border-brand-red/40 flex items-center justify-center shrink-0 transition-colors shadow-inner">
                      {renderBenefitIcon(benefit.iconName)}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-display uppercase font-bold text-base tracking-wider text-white group-hover:text-zinc-100 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-text-secondary leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Dominant Gym Showcase & Virtual Tour Card (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xs overflow-hidden border border-border-medium bg-surface-charcoal shadow-2xl group">
              {/* Main Image */}
              <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={whyChooseUs.tourCard.imageSrc}
                  alt={whyChooseUs.tourCard.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center filter brightness-[0.92] contrast-[1.08] group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="dark" dot>
                    {whyChooseUs.tourCard.badgeText}
                  </Badge>
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-brand-red/90 text-white flex items-center justify-center shadow-2xl border-2 border-white/20 group-hover:scale-110 group-hover:bg-brand-red transition-all duration-300">
                    <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Tour Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-1 bg-gradient-to-t from-bg-main via-bg-main/90 to-transparent pt-12">
                  <div className="font-display font-black text-xl sm:text-2xl uppercase tracking-wider text-white flex items-center justify-between">
                    <span>{whyChooseUs.tourCard.title}</span>
                    <span className="text-xs tracking-widest text-brand-red font-bold">
                      {whyChooseUs.tourCard.ctaLabel} →
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary">
                    {whyChooseUs.tourCard.subtitle}
                  </p>
                </div>
              </div>

              {/* Supporting Credibility Strip Below Image */}
              <div className="p-4 bg-surface-card border-t border-border-subtle flex items-center justify-between text-xs text-text-secondary">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-red" />
                  <span className="font-display uppercase tracking-wider font-bold text-white">
                    15,000 SQ FT ELITE FACILITY
                  </span>
                </div>
                <span className="font-display uppercase tracking-widest text-brand-red font-bold text-[11px]">
                  SAGUNA MORE, PATNA
                </span>
              </div>
            </div>

            {/* Subtle Decorative Geometric Line */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-brand-red/30 -z-10 rounded-br-xs hidden sm:block" />
          </div>
        </div>
      </Container>
    </section>
  );
};
