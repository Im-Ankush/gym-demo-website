import React from "react";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Facilities } from "@/components/sections/Facilities";
import { Trainers } from "@/components/sections/Trainers";
import { Programs } from "@/components/sections/Programs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Gallery } from "@/components/sections/Gallery";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Contact } from "@/components/sections/Contact";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function HomePage() {
  return (
    <div className="relative w-full">
      {/* 1. Cinematic Hero Section */}
      <Hero />

      {/* 2. Stats / Credibility Trust Bar */}
      <Stats />

      {/* 3. Why Choose Us Editorial Section (#about) */}
      <WhyChooseUs />

      {/* 4. Facilities Gallery Showcase (#facilities) */}
      <Facilities />

      {/* 5. Expert Coaches & Trainers Showcase (#trainers) */}
      <Trainers />

      {/* 6. Training Programs Showcase (#programs) */}
      <Programs />

      {/* 7. Member Stories & Testimonials (#testimonials) */}
      <Testimonials />

      {/* 8. Membership Pricing Plans (#pricing) */}
      <Pricing />

      {/* 9. Gym Photography Gallery (#gallery) */}
      <Gallery />

      {/* 10. Final Conversion CTA (#join) */}
      <FinalCTA />

      {/* 11. Contact & Free Trial Lead Form (#contact) */}
      <Contact />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
