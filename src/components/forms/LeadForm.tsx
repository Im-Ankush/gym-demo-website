"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, AlertCircle, MessageSquare, RotateCcw, ArrowRight, Loader2, Dumbbell } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";

export interface LeadFormProps {
  config?: typeof siteConfig;
  className?: string;
  defaultPlan?: string;
}

function normalizePlanValue(plan: string): string {
  if (!plan) return "";
  const lower = plan.toLowerCase();
  if (lower.includes("quarter")) {
    return "Quarterly (₹2499)";
  }
  if (lower.includes("year")) {
    return "Yearly (₹7999)";
  }
  if (lower.includes("month")) {
    return "Monthly (₹999)";
  }
  return plan;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  config = siteConfig,
  className = "",
  defaultPlan = "",
}) => {
  const { contact } = config;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    goal: "",
    preferredContact: "WhatsApp",
    selectedPlan: normalizePlanValue(defaultPlan),
    message: "",
    _gotcha: "", // Honeypot spam trap
  });

  useEffect(() => {
    const handlePlanEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ plan?: string }>;
      const rawPlan = customEvent.detail?.plan;
      if (rawPlan !== undefined) {
        setFormData((prev) => ({
          ...prev,
          selectedPlan: normalizePlanValue(rawPlan),
        }));
      }
    };

    window.addEventListener("fitzone:select-plan", handlePlanEvent);
    return () => {
      window.removeEventListener("fitzone:select-plan", handlePlanEvent);
    };
  }, []);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const cleanPhone = formData.phone.replace(/[\s\-()]/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+]{10,14}$/.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (serverError) {
      setServerError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
      } else {
        setServerError(data.message || "Failed to submit enquiry. Please try again.");
      }
    } catch {
      setServerError("Network error. Please check your internet connection or connect via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      goal: "",
      preferredContact: "WhatsApp",
      selectedPlan: defaultPlan,
      message: "",
      _gotcha: "",
    });
    setErrors({});
    setIsSuccess(false);
    setServerError(null);
  };

  // WhatsApp prefilled URL generator for confirmation
  const whatsappPreFilledUrl = React.useMemo(() => {
    const messageLines = [
      `Hi ${contact.address.city} FITZONE FITNESS,`,
      `I would like to confirm my Free Trial Enquiry.`,
      ``,
      `*Name:* ${formData.name || "Member"}`,
      `*Phone:* ${formData.phone || ""}`,
      formData.selectedPlan ? `*Plan:* ${formData.selectedPlan}` : null,
      formData.goal ? `*Goal:* ${formData.goal}` : null,
      `*Preferred Contact:* ${formData.preferredContact}`,
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(messageLines)}`;
  }, [contact.whatsapp, contact.address.city, formData]);

  // 1. Success State View
  if (isSuccess) {
    return (
      <div className={`bg-surface-card border border-brand-red/40 rounded-xs p-8 sm:p-10 relative overflow-hidden shadow-2xl ${className}`}>
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red" />

        <div className="text-center space-y-6 max-w-md mx-auto py-4">
          <div className="w-16 h-16 rounded-full bg-brand-red/10 border border-brand-red/40 flex items-center justify-center mx-auto text-brand-red">
            <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-display uppercase tracking-widest text-brand-red font-bold">
              REQUEST RECEIVED
            </span>
            <h3 className="font-display font-black text-3xl sm:text-4xl uppercase text-white tracking-wide leading-none">
              WE&apos;LL BE IN TOUCH
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed pt-1">
              Thanks for reaching out, <span className="text-white font-semibold">{formData.name}</span>! Our head coach will connect with you via {formData.preferredContact} to schedule your free trial session.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 space-y-3">
            <Button
              href={whatsappPreFilledUrl}
              isExternal
              variant="whatsapp"
              size="md"
              fullWidth
              leftIcon={<MessageSquare className="w-4 h-4" />}
            >
              CONTINUE ON WHATSAPP
            </Button>

            <button
              type="button"
              onClick={handleReset}
              className="w-full py-2.5 text-xs font-display uppercase tracking-wider text-text-muted hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Send Another Request</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. Active Enquiry Form View
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-surface-card border border-border-subtle hover:border-border-medium rounded-xs p-6 sm:p-8 lg:p-10 shadow-2xl relative transition-all duration-300 ${className}`}
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red/80" />

      {/* Spam Honeypot Field (Hidden from humans) */}
      <input
        type="text"
        name="_gotcha"
        value={formData._gotcha}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="hidden opacity-0 pointer-events-none absolute w-0 h-0"
        aria-hidden="true"
      />

      <div className="space-y-5">
        {/* Form Title */}
        <div className="space-y-1 pb-2 border-b border-border-subtle/80">
          <div className="flex items-center gap-2 text-brand-red text-xs font-display uppercase tracking-widest font-bold">
            <Dumbbell className="w-4 h-4" />
            <span>CLAIM 1-DAY PASS</span>
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-white tracking-wide">
            REQUEST A FREE TRIAL
          </h3>
          <p className="text-xs text-text-secondary">
            Fill in your details below and our team will prepare your trial session.
          </p>
        </div>

        {/* Server Error Alert */}
        {serverError && (
          <div className="p-3.5 rounded-xs bg-red-950/40 border border-brand-red/50 flex items-start gap-2.5 text-xs text-red-200">
            <AlertCircle className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p>{serverError}</p>
              <a
                href={whatsappPreFilledUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-white hover:text-brand-red font-medium block"
              >
                Or message us directly on WhatsApp &rarr;
              </a>
            </div>
          </div>
        )}

        {/* Field Grid: Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label htmlFor="lead-name" className="block text-xs font-display uppercase tracking-wider text-zinc-300 font-bold">
              Full Name <span className="text-brand-red">*</span>
            </label>
            <input
              id="lead-name"
              type="text"
              name="name"
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`w-full h-11 px-3.5 rounded-xs bg-surface-charcoal border text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors ${
                errors.name
                  ? "border-brand-red focus:border-brand-red focus:ring-1 focus:ring-brand-red/50"
                  : "border-border-subtle focus:border-brand-red focus:ring-1 focus:ring-brand-red/30"
              }`}
            />
            {errors.name && (
              <p id="name-error" className="text-[11px] text-brand-red font-medium">
                {errors.name}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-1.5">
            <label htmlFor="lead-phone" className="block text-xs font-display uppercase tracking-wider text-zinc-300 font-bold">
              Phone Number <span className="text-brand-red">*</span>
            </label>
            <input
              id="lead-phone"
              type="tel"
              name="phone"
              placeholder="e.g. 9876543210"
              value={formData.phone}
              onChange={handleChange}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={`w-full h-11 px-3.5 rounded-xs bg-surface-charcoal border text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors ${
                errors.phone
                  ? "border-brand-red focus:border-brand-red focus:ring-1 focus:ring-brand-red/50"
                  : "border-border-subtle focus:border-brand-red focus:ring-1 focus:ring-brand-red/30"
              }`}
            />
            {errors.phone && (
              <p id="phone-error" className="text-[11px] text-brand-red font-medium">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Field Grid: Email & Fitness Goal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Email Address (Optional) */}
          <div className="space-y-1.5">
            <label htmlFor="lead-email" className="block text-xs font-display uppercase tracking-wider text-zinc-300 font-bold">
              Email Address <span className="text-text-muted font-normal">(Optional)</span>
            </label>
            <input
              id="lead-email"
              type="email"
              name="email"
              placeholder="you@domain.com"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`w-full h-11 px-3.5 rounded-xs bg-surface-charcoal border text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors ${
                errors.email
                  ? "border-brand-red focus:border-brand-red focus:ring-1 focus:ring-brand-red/50"
                  : "border-border-subtle focus:border-brand-red focus:ring-1 focus:ring-brand-red/30"
              }`}
            />
            {errors.email && (
              <p id="email-error" className="text-[11px] text-brand-red font-medium">
                {errors.email}
              </p>
            )}
          </div>

          {/* Fitness Goal Dropdown */}
          <div className="space-y-1.5">
            <label htmlFor="lead-goal" className="block text-xs font-display uppercase tracking-wider text-zinc-300 font-bold">
              Primary Goal <span className="text-text-muted font-normal">(Optional)</span>
            </label>
            <select
              id="lead-goal"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              className="w-full h-11 px-3.5 rounded-xs bg-surface-charcoal border border-border-subtle text-sm text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/30 transition-colors"
            >
              <option value="" className="bg-surface-charcoal text-zinc-400">
                Select your fitness goal...
              </option>
              {contact.goals.map((g, idx) => (
                <option key={idx} value={g} className="bg-surface-charcoal text-white">
                  {g}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Selected Plan & Contact Preference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Selected Plan */}
          <div className="space-y-1.5">
            <label htmlFor="lead-plan" className="block text-xs font-display uppercase tracking-wider text-zinc-300 font-bold">
              Interested Plan <span className="text-text-muted font-normal">(Optional)</span>
            </label>
            <select
              id="lead-plan"
              name="selectedPlan"
              value={formData.selectedPlan}
              onChange={handleChange}
              className="w-full h-11 px-3.5 rounded-xs bg-surface-charcoal border border-border-subtle text-sm text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/30 transition-colors"
            >
              <option value="" className="bg-surface-charcoal text-zinc-400">
                Free Trial / General Pass
              </option>
              <option value="Monthly (₹999)" className="bg-surface-charcoal text-white">
                Monthly Membership (₹999)
              </option>
              <option value="Quarterly (₹2499)" className="bg-surface-charcoal text-white">
                Quarterly Membership (₹2,499 - Most Popular)
              </option>
              <option value="Yearly (₹7999)" className="bg-surface-charcoal text-white">
                Yearly Membership (₹7,999 - Best Value)
              </option>
            </select>
          </div>

          {/* Preferred Contact Method */}
          <div className="space-y-1.5">
            <label htmlFor="lead-pref" className="block text-xs font-display uppercase tracking-wider text-zinc-300 font-bold">
              Preferred Contact <span className="text-text-muted font-normal">(Optional)</span>
            </label>
            <select
              id="lead-pref"
              name="preferredContact"
              value={formData.preferredContact}
              onChange={handleChange}
              className="w-full h-11 px-3.5 rounded-xs bg-surface-charcoal border border-border-subtle text-sm text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/30 transition-colors"
            >
              {contact.contactPreferences.map((p, idx) => (
                <option key={idx} value={p} className="bg-surface-charcoal text-white">
                  {p}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Optional Message */}
        <div className="space-y-1.5">
          <label htmlFor="lead-msg" className="block text-xs font-display uppercase tracking-wider text-zinc-300 font-bold">
            Message or Questions <span className="text-text-muted font-normal">(Optional)</span>
          </label>
          <textarea
            id="lead-msg"
            name="message"
            rows={3}
            placeholder="Tell us about your fitness schedule or any specific requirements..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3.5 rounded-xs bg-surface-charcoal border border-border-subtle text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/30 transition-colors resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="primary"
            size="lg"
            fullWidth
            className="h-13 tracking-widest shadow-xl shadow-brand-red/20 font-bold text-sm sm:text-base cursor-pointer"
            rightIcon={
              isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <ArrowRight className="w-5 h-5" />
              )
            }
          >
            {isSubmitting ? "PROCESSING REQUEST..." : "REQUEST FREE TRIAL"}
          </Button>
          <p className="text-[11px] text-text-muted text-center mt-2.5">
            No spam. We respect your privacy and will never share your contact details.
          </p>
        </div>
      </div>
    </form>
  );
};
