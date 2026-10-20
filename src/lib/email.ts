import { Resend } from "resend";
import type { ContactInput } from "./contact-schema";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function rows(input: ContactInput): [string, string][] {
  return [
    ["Name", input.name],
    ["Company / Organization", input.company || "(not provided)"],
    ["Email", input.email],
    ["Phone", input.phone || "(not provided)"],
    ["Nature of Inquiry", input.inquiry.join(", ")],
    ["Message", input.message],
  ];
}

/**
 * Sends an inquiry to the firm via Resend. Without the env vars in development the
 * payload is logged instead; in production missing configuration is an error.
 */
export async function deliverInquiry(input: ContactInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] Resend not configured; inquiry payload:", input);
      return;
    }
    throw new Error("Contact email is not configured (RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL).");
  }

  const fields = rows(input);
  const text = fields.map(([label, value]) => `${label}:\n${value}`).join("\n\n");
  const html = `<table cellpadding="8" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${fields
    .map(
      ([label, value]) =>
        `<tr><th align="left" valign="top" style="white-space:nowrap">${escapeHtml(label)}</th><td style="white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join("")}</table>`;

  const { error } = await new Resend(apiKey).emails.send({
    from,
    to: to.split(",").map((address) => address.trim()),
    replyTo: input.email,
    subject: `Website inquiry from ${input.name.replace(/\s+/g, " ")} (${input.inquiry.join(", ")})`,
    text,
    html,
  });

  if (error) throw new Error(`Resend error: ${error.name}: ${error.message}`);
}
