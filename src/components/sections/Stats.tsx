import React from "react";
import { Users, Award, Dumbbell, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";

export interface StatsProps {
  config?: typeof siteConfig;
}

export const Stats: React.FC<StatsProps> = ({ config = siteConfig }) => {
  const { stats } = config;

  const renderIcon = (iconName?: string) => {
    switch (iconName) {
      case "users":
        return <Users className="w-5 h-5 text-brand-red shrink-0" />;
      case "award":
        return <Award className="w-5 h-5 text-brand-red shrink-0" />;
      case "dumbbell":
        return <Dumbbell className="w-5 h-5 text-brand-red shrink-0 transform -rotate-45" />;
      case "shield":
      default:
        return <ShieldCheck className="w-5 h-5 text-brand-red shrink-0" />;
    }
  };

  return (
    <section
      id="stats"
      aria-label="Gym Trust Statistics"
      className="relative z-20 bg-surface-charcoal/95 border-y border-border-subtle/80 backdrop-blur-md"
    >
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x-0 sm:divide-x-0 lg:divide-x divide-border-subtle/60 py-6 sm:py-8 lg:py-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 sm:gap-5 px-4 sm:px-6 lg:px-8 py-4 lg:py-0 ${
                index % 2 === 1 ? "border-l border-border-subtle/60 lg:border-l-0" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xs bg-surface-elevated/90 border border-border-subtle flex items-center justify-center shadow-inner shrink-0">
                {renderIcon(item.iconName)}
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none">
                  {item.value}
                </span>
                <span className="font-display uppercase tracking-widest text-[11px] sm:text-xs font-bold text-zinc-400 mt-1 leading-tight">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
