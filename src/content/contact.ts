import type { PageMeta, RichHeading } from "./types";

export const contactMeta: PageMeta = {
  title: "Contact",
  description:
    "Whether you're exploring a finance and strategy engagement, private exhibition, art acquisition, global partnership or special project, we'd welcome an initial conversation.",
};

export const inquiryOptions = [
  "Corporate Finance & Strategy",
  "Fractional / Interim CFO",
  "Private Exhibition",
  "Private Art Acquisition",
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
    lede: "Whether you're exploring a finance and strategy engagement, private exhibition, art acquisition, global partnership or special project, we'd welcome an initial conversation.",
  },
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
