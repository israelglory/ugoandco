"use server";

import { headers } from "next/headers";
import { HONEYPOT_FIELD, readContactForm, validateContact, type FieldErrors } from "@/lib/contact-schema";
import { deliverInquiry } from "@/lib/email";
import { clientIp, rateLimit } from "@/lib/rate-limit";

export type ContactState =
  { status: "idle" } | { status: "success" } | { status: "invalid"; errors: FieldErrors } | { status: "error" };

export async function submitContact(_previous: ContactState, formData: FormData): Promise<ContactState> {
  // Bots that fill the hidden field get a quiet success and nothing is sent.
  const honeypot = formData.get(HONEYPOT_FIELD);
  if (typeof honeypot === "string" && honeypot.trim() !== "") return { status: "success" };

  const result = validateContact(readContactForm(formData));
  if (!result.success) return { status: "invalid", errors: result.errors };

  if (!rateLimit(clientIp(await headers()))) {
    console.warn("[contact] rate limit exceeded");
    return { status: "error" };
  }

  try {
    await deliverInquiry(result.data);
    return { status: "success" };
  } catch (error) {
    console.error("[contact] delivery failed", error);
    return { status: "error" };
  }
}
