import * as z from "zod/mini";
import { contact, inquiryOptions } from "@/content/contact";

const v = contact.form.validation;

/** Shared by the client form and the server action. */
export const contactSchema = z.object({
  name: z.string().check(z.minLength(1, v.name), z.maxLength(200, v.tooLong)),
  company: z.string().check(z.maxLength(200, v.tooLong)),
  email: z.email(v.email).check(z.maxLength(254, v.email)),
  phone: z.string().check(z.maxLength(40, v.tooLong)),
  inquiry: z.array(z.enum(inquiryOptions, v.inquiry)).check(z.minLength(1, v.inquiry)),
  message: z.string().check(z.minLength(20, v.messageShort), z.maxLength(2000, v.messageLong)),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactField = keyof ContactInput;
export type FieldErrors = Partial<Record<ContactField, string>>;

/** Field order, used to focus the first invalid field. */
export const contactFields: ContactField[] = ["name", "company", "email", "phone", "inquiry", "message"];

export const HONEYPOT_FIELD = "website";

export function readContactForm(formData: FormData) {
  const text = (key: ContactField) => {
    const value = formData.get(key);
    return typeof value === "string" ? value.trim() : "";
  };
  return {
    name: text("name"),
    company: text("company"),
    email: text("email"),
    phone: text("phone"),
    inquiry: formData.getAll("inquiry").filter((value): value is string => typeof value === "string"),
    message: text("message"),
  };
}

export function validateContact(input: ReturnType<typeof readContactForm>) {
  const result = contactSchema.safeParse(input);
  if (result.success) return { success: true as const, data: result.data };

  const errors: FieldErrors = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0] as ContactField;
    errors[field] ??= issue.message;
  }
  return { success: false as const, errors };
}
