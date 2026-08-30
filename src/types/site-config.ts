export type SocialPlatform = "instagram" | "facebook" | "youtube" | "twitter" | "tiktok";

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label: string;
}

export interface OperatingHours {
  days: string;
  hours: string;
}

export interface ContactConfig {
  phone: string;
  phoneFormatted: string;
  email: string;
  whatsapp: string;
  whatsappMessage: string;
  locationLabel: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    mapUrl?: string;
  };
  mapEmbedUrl: string;
  goals: string[];
  contactPreferences: string[];
}

export interface ContactSectionConfig {
  overline: string;
  headline: string;
  highlightText: string;
  supportingText: string;
}

export interface BrandLogoConfig {
  type: "text" | "image";
  src?: string;
  alt?: string;
}

export interface BrandConfig {
  name: string;
  shortName: string;
  highlightWord: string;
  tagline: string;
  eyebrow: string;
  shortDescription: string;
  establishedYear: number;
  badgeText: string;
  logo?: BrandLogoConfig;
}

export interface SeoConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  locale: string;
}

export interface HeroConfig {
  eyebrow: string;
  headlinePart1: string;
  headlineHighlight: string;
  headlinePart2: string;
  supportingText: string;
  location: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  trustStatement: string;
  imageSrc: string;
  imageAlt: string;
}

export interface StatItem {
  value: string;
  label: string;
  iconName?: "users" | "dumbbell" | "shield" | "award" | "trophy";
}

export interface WhyChooseUsBenefit {
  id: string;
  title: string;
  description: string;
  iconName: "dumbbell" | "award" | "apple" | "activity" | "shield" | "clock";
}

export interface WhyChooseUsConfig {
  overline: string;
  headline: string;
  highlightText: string;
  supportingText: string;
  benefits: WhyChooseUsBenefit[];
  tourCard: {
    imageSrc: string;
    imageAlt: string;
    badgeText: string;
    title: string;
    subtitle: string;
    ctaLabel: string;
  };
}

export interface FacilityItem {
  id: string;
  name: string;
  description: string;
  tag: string;
  imageSrc: string;
  imageAlt: string;
  featured?: boolean;
}

export interface FacilitiesConfig {
  overline: string;
  headline: string;
  highlightText: string;
  supportingText: string;
  items: FacilityItem[];
}

export interface TrainerItem {
  id: string;
  name: string;
  role: string;
  specialtyTag: string;
  imageSrc: string;
  imageAlt: string;
  featured?: boolean;
  socials?: {
    instagram?: string;
    twitter?: string;
  };
}

export interface TrainersConfig {
  overline: string;
  headline: string;
  highlightText: string;
  supportingText: string;
  items: TrainerItem[];
}

export interface ProgramItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  imageSrc: string;
  imageAlt: string;
  featured?: boolean;
}

export interface ProgramsConfig {
  overline: string;
  headline: string;
  highlightText: string;
  supportingText: string;
  items: ProgramItem[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  categoryTag: string;
  featured?: boolean;
}

export interface TestimonialsConfig {
  overline: string;
  headline: string;
  highlightText: string;
  supportingText: string;
  items: TestimonialItem[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
  badge?: string;
  ctaText: string;
  ctaHref: string;
}

export interface PricingConfig {
  overline: string;
  headline: string;
  highlightText: string;
  supportingText: string;
  plans: PricingPlan[];
  trustStrip: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  featured?: boolean;
}

export interface GalleryConfig {
  overline: string;
  headline: string;
  highlightText: string;
  supportingText: string;
  items: GalleryItem[];
}

export interface FinalCtaConfig {
  overline: string;
  headlinePart1: string;
  headlineHighlight: string;
  supportingText: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
  };
  trustStatement: string;
  imageSrc: string;
  imageAlt: string;
}

export interface SiteConfig {
  brand: BrandConfig;
  seo: SeoConfig;
  contact: ContactConfig;
  contactSection: ContactSectionConfig;
  hero: HeroConfig;
  stats: StatItem[];
  whyChooseUs: WhyChooseUsConfig;
  facilities: FacilitiesConfig;
  trainers: TrainersConfig;
  programs: ProgramsConfig;
  testimonials: TestimonialsConfig;
  pricing: PricingConfig;
  gallery: GalleryConfig;
  finalCta: FinalCtaConfig;
  hours: OperatingHours[];
  navigation: {
    mainNav: NavItem[];
    ctaNav: {
      label: string;
      href: string;
    };
    footerNav: {
      programs: NavItem[];
      gym: NavItem[];
      legal: NavItem[];
    };
  };
  socials: SocialLink[];
}
