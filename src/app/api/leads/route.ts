import { NextRequest, NextResponse } from "next/server";
import { createLead, LeadPayload } from "@/lib/leads";
import { notifyNewLead } from "@/lib/notifications";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Basic honeypot anti-spam check
    if (body._gotcha) {
      // Silently reject bot submissions without raising alarms
      return NextResponse.json({ success: true, message: "Enquiry submitted successfully." });
    }

    const { name, phone, email, goal, preferredContact, selectedPlan, message, source } = body;

    // 2. Server-side validation & boundaries
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid full name (between 2 and 100 characters)." },
        { status: 400 }
      );
    }

    const cleanPhone = (phone && typeof phone === "string" ? phone : "").replace(/[\s\-()]/g, "");
    if (!cleanPhone || cleanPhone.length < 10 || cleanPhone.length > 20) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid phone number (at least 10 digits)." },
        { status: 400 }
      );
    }

    if (email && typeof email === "string" && email.trim()) {
      if (email.trim().length > 150) {
        return NextResponse.json(
          { success: false, message: "Email address cannot exceed 150 characters." },
          { status: 400 }
        );
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return NextResponse.json(
          { success: false, message: "Please provide a valid email address." },
          { status: 400 }
        );
      }
    }

    if (message && typeof message === "string" && message.trim().length > 1000) {
      return NextResponse.json(
        { success: false, message: "Message cannot exceed 1,000 characters." },
        { status: 400 }
      );
    }

    // 3. Process lead storage
    const leadPayload: LeadPayload = {
      name: name.trim(),
      phone: cleanPhone,
      email: email ? String(email).trim() : undefined,
      goal: goal ? String(goal).trim() : undefined,
      preferredContact: preferredContact ? String(preferredContact).trim() : "WhatsApp",
      selectedPlan: selectedPlan ? String(selectedPlan).trim() : undefined,
      message: message ? String(message).trim() : undefined,
      source: source || "Website Lead Form",
    };

    const result = await createLead(leadPayload);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 400 }
      );
    }

    // 4. Dispatch notification
    await notifyNewLead(leadPayload);

    return NextResponse.json(
      {
        success: true,
        message: "Your trial enquiry has been received! Our coach will connect with you shortly.",
        leadId: result.leadId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API /api/leads] Error processing lead:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again or chat with us on WhatsApp." },
      { status: 500 }
    );
  }
}
