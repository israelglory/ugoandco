import type { PageMeta, RichHeading } from "./types";

export const contactMeta: PageMeta = {
  title: "Contact",
  description: "UGO N & Co. welcomes thoughtful inquiries across its four areas of engagement.",
};

export const inquiryOptions = [
  "Corporate Finance & Strategy",
  "Fractional / Interim CFO",
  "Private Exhibition",
  "Private Art Acquisitions",
  "Corporate Art",
  "U.S.–Africa Opportunity",
  "Strategic Engagement",
  "Special Project",
  "Other",
] as const;

export type InquiryOption = (typeof inquiryOptions)[number];

export const contact = {
  hero: {
    eyebrow: "Contact",
    title: { text: "Start a Conversation", accent: "Conversation" } satisfies RichHeading,
    lede: "UGO N & Co. welcomes thoughtful inquiries across its four areas of engagement.",
  },
  areas: [
    {
      title: "Corporate Finance & Strategy",
      body: "Fractional and interim CFO support, financial strategy, performance improvement, transformation and special finance projects.",
    },
    {
      title: "Private Exhibitions",
      body: "African contemporary art exhibitions and cultural experiences created for corporate and private audiences.",
    },
    {
      title: "Private Art Acquisitions",
      body: "African contemporary art sourcing, private opportunities, collector introductions and corporate art.",
    },
    {
      title: "Strategic Engagements",
      body: "Business development, international opportunities, strategic introductions and special projects.",
    },
  ],
  form: {
    label: "Contact Form",
    fields: {
      name: "Name",
      company: "Company / Organization",
      email: "Email",
      phone: "Phone",
      phoneHint: "(Optional)",
      inquiry: "Nature of Inquiry",
      message: "Tell us briefly about the opportunity",
    },
    submit: "Submit",
    submitting: "Sending…",
    /* TODO(client): success and error copy was not supplied. Placeholders render as-is. */
    success: "[SUCCESS MESSAGE]",
    error: "[ERROR MESSAGE]",
    /* Functional validation text, provisional until the client reviews it. */
    validation: {
      name: "Please enter your name.",
      email: "Please enter a valid email address.",
      inquiry: "Please select at least one option.",
      messageShort: "Please write at least 20 characters.",
      messageLong: "Please keep your message under 2000 characters.",
      tooLong: "This entry is too long.",
    },
  },
};
