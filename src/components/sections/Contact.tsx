import React from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeadForm } from "@/components/forms/LeadForm";

export interface ContactProps {
  config?: typeof siteConfig;
}

export const Contact: React.FC<ContactProps> = ({
  config = siteConfig,
}) => {
  const { contact, contactSection, hours } = config;
  const encodedDefaultMsg = encodeURIComponent(contact.whatsappMessage);
  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodedDefaultMsg}`;

  return (
    <section
      id="contact"
      aria-label="Contact and Free Trial Enquiry"
      className="relative py-20 sm:py-24 lg:py-32 bg-surface-charcoal overflow-hidden border-b border-border-subtle/60"
    >
      {/* Ambient Red Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[160px] pointer-events-none" />

      <Container>
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            badge={contactSection.overline}
            title={contactSection.headline}
            highlightText={contactSection.highlightText}
            subtitle={contactSection.supportingText}
            align="left"
            size="lg"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Details & Location Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* Phone & WhatsApp Card */}
              <div className="p-5 rounded-xs bg-surface-card border border-border-subtle space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xs bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-display uppercase tracking-widest text-text-muted font-bold block">
                      Phone & Call
                    </span>
                    <a
                      href={`tel:${contact.phone.replace(/[\s+]/g, "")}`}
                      className="font-display font-bold text-lg text-white hover:text-brand-red transition-colors"
                    >
                      {contact.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* Direct WhatsApp link */}
                <div className="pt-2 border-t border-border-subtle/60">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Chat on WhatsApp &rarr;</span>
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-xs bg-surface-card border border-border-subtle space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xs bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-display uppercase tracking-widest text-text-muted font-bold block">
                      Email Enquiry
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-display font-bold text-base text-white hover:text-brand-red transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="p-5 rounded-xs bg-surface-card border border-border-subtle space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xs bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-display uppercase tracking-widest text-text-muted font-bold block">
                      Location & Gym Studio
                    </span>
                    <p className="text-sm text-zinc-300 font-medium leading-relaxed">
                      {contact.address.street}, {contact.address.city}, {contact.address.state} — {contact.address.zip}
                    </p>
                  </div>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="p-5 rounded-xs bg-surface-card border border-border-subtle space-y-2.5">
                <div className="flex items-center gap-2.5 text-text-muted">
                  <Clock className="w-4 h-4 text-brand-red" />
                  <span className="text-[11px] font-display uppercase tracking-widest font-bold">
                    Training Hours
                  </span>
                </div>
                <div className="space-y-1 text-xs">
                  {hours.map((h, idx) => (
                    <div key={idx} className="flex items-center justify-between text-zinc-300">
                      <span className="text-text-secondary">{h.days}:</span>
                      <span className="font-semibold text-white font-mono">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Maps Location Embed */}
            <div className="rounded-xs overflow-hidden border border-border-subtle bg-surface-card aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/9] relative">
              <iframe
                title="FITZONE FITNESS Gym Studio Location Map"
                src={contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.2)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Lead Capture / Free Trial Form (7 cols) */}
          <div className="lg:col-span-7">
            <LeadForm config={config} />
          </div>
        </div>
      </Container>
    </section>
  );
};
