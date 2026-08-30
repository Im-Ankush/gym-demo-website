export interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  goal?: string;
  preferredContact?: "WhatsApp" | "Phone Call" | "Email" | string;
  selectedPlan?: string;
  message?: string;
  source?: string;
  createdAt?: string;
}

export interface LeadResult {
  success: boolean;
  message: string;
  leadId?: string;
}

/**
 * Lead Storage Service Abstraction
 * Validates, logs, and prepares lead payloads for future database (Prisma, Supabase, Mongo),
 * CRM (HubSpot, LeadSquared), or Google Sheets webhooks.
 */
export async function createLead(data: LeadPayload): Promise<LeadResult> {
  // 1. Basic server validation
  if (!data.name || data.name.trim().length < 2 || data.name.trim().length > 100) {
    return { success: false, message: "Full name must be between 2 and 100 characters." };
  }

  const cleanPhone = data.phone?.replace(/[\s\-()]/g, "") || "";
  if (!cleanPhone || cleanPhone.length < 10 || cleanPhone.length > 20) {
    return { success: false, message: "A valid phone number (10 to 15 digits) is required." };
  }

  if (data.email && data.email.trim()) {
    if (data.email.trim().length > 150) {
      return { success: false, message: "Email address cannot exceed 150 characters." };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      return { success: false, message: "Please provide a valid email address." };
    }
  }

  if (data.message && data.message.trim().length > 1000) {
    return { success: false, message: "Message cannot exceed 1,000 characters." };
  }

  const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const timestamp = new Date().toISOString();

  const sanitizedLead: LeadPayload = {
    name: data.name.trim(),
    phone: cleanPhone,
    email: data.email?.trim() || undefined,
    goal: data.goal || undefined,
    preferredContact: data.preferredContact || "WhatsApp",
    selectedPlan: data.selectedPlan || undefined,
    message: data.message?.trim() || undefined,
    source: data.source || "Website Free Trial Form",
    createdAt: timestamp,
  };

  // 2. Safe development logging (sensitive values masked in production)
  if (process.env.NODE_ENV !== "production") {
    console.log("[FITZONE LEADS] New Lead Captured:", {
      leadId,
      name: sanitizedLead.name,
      phone: sanitizedLead.phone.slice(-4).padStart(sanitizedLead.phone.length, "*"),
      goal: sanitizedLead.goal,
      selectedPlan: sanitizedLead.selectedPlan,
      preferredContact: sanitizedLead.preferredContact,
      timestamp,
    });
  }

  // TODO: Connect future database storage here (e.g. Prisma / Supabase / MongoDB)
  // TODO: Connect CRM or webhook (e.g. Zapier / Make / WhatsApp Business Webhook)

  return {
    success: true,
    message: "Thank you for your enquiry. Our team will contact you shortly.",
    leadId,
  };
}
