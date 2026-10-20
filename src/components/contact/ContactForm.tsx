"use client";

import { startTransition, useActionState, useEffect, useRef, useState } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";
import { Button } from "@/components/ui/Button";
import { Monogram } from "@/components/ui/Monogram";
import { Eyebrow } from "@/components/ui/Typography";
import type { contact, inquiryOptions } from "@/content/contact";
import { cn } from "@/lib/cn";
import {
  contactFields,
  HONEYPOT_FIELD,
  readContactForm,
  validateContact,
  type ContactField,
  type FieldErrors,
} from "@/lib/contact-schema";
import { InquiryPills } from "./InquiryPills";

type ContactFormProps = {
  content: (typeof contact)["form"];
  options: typeof inquiryOptions;
};

type TextField = Exclude<ContactField, "inquiry">;

const initialState: ContactState = { status: "idle" };
const emptyValues: Record<TextField, string> = { name: "", company: "", email: "", phone: "", message: "" };

const cardClass =
  "flex min-w-0 flex-[1.3_1_520px] flex-col gap-[34px] border border-rule bg-card px-[52px] py-14 shadow-card sm-down:px-[22px] sm-down:py-8";

export function ContactForm({ content, options }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const [values, setValues] = useState(emptyValues);
  const [inquiry, setInquiry] = useState<string[]>([]);
  const [clientErrors, setClientErrors] = useState<FieldErrors | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const errors: FieldErrors = clientErrors ?? (state.status === "invalid" ? state.errors : {});

  useEffect(() => {
    if (state.status === "success") successRef.current?.focus();
    if (state.status === "invalid") focusFirstInvalid(formRef.current, state.errors);
  }, [state]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Submit through the action manually so React does not reset the fields on error.
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = validateContact(readContactForm(formData));
    if (!result.success) {
      setClientErrors(result.errors);
      focusFirstInvalid(event.currentTarget, result.errors);
      return;
    }
    setClientErrors(null);
    startTransition(() => formAction(formData));
  };

  const update = (field: TextField) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...values, [field]: event.target.value };
    setValues(next);
    // Once errors are showing, re-validate as the visitor corrects them.
    if (clientErrors) setClientErrors(validateFields(next, inquiry));
  };

  const updateInquiry = (next: string[]) => {
    setInquiry(next);
    if (clientErrors) setClientErrors(validateFields(values, next));
  };

  if (state.status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className={cn(cardClass, "outline-none")}>
        <FormHeader label={content.label} />
        <p className="m-0 font-serif text-[30px] leading-[1.2] text-ink">{content.success}</p>
      </div>
    );
  }

  const fieldProps = (field: TextField) => ({
    id: `contact-${field}`,
    name: field,
    value: values[field],
    onChange: update(field),
    "data-field": field,
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
  });

  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={onSubmit}
      noValidate
      aria-labelledby="contact-form-title"
      className={cardClass}
    >
      <FormHeader label={content.label} id="contact-form-title" />

      {state.status === "error" && (
        <div role="alert" className="border border-error px-5 py-4 font-sans text-[15px] leading-[1.6] text-error">
          {content.error}
        </div>
      )}

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-x-8 gap-y-[30px]">
        <Field label={content.fields.name} field="name" error={errors.name}>
          <input type="text" autoComplete="name" aria-required="true" className={inputClass} {...fieldProps("name")} />
        </Field>
        <Field label={content.fields.company} field="company" error={errors.company}>
          <input type="text" autoComplete="organization" className={inputClass} {...fieldProps("company")} />
        </Field>
        <Field label={content.fields.email} field="email" error={errors.email}>
          <input
            type="email"
            autoComplete="email"
            aria-required="true"
            className={inputClass}
            {...fieldProps("email")}
          />
        </Field>
        <Field label={content.fields.phone} hint={content.fields.phoneHint} field="phone" error={errors.phone}>
          <input type="tel" autoComplete="tel" className={inputClass} {...fieldProps("phone")} />
        </Field>
      </div>

      <InquiryPills
        legend={content.fields.inquiry}
        options={options}
        selected={inquiry}
        onChange={updateInquiry}
        error={errors.inquiry}
        errorId="contact-inquiry-error"
      />

      <Field label={content.fields.message} field="message" error={errors.message}>
        <textarea
          rows={5}
          aria-required="true"
          className={cn(inputClass, "min-h-[140px] resize-y leading-[1.6]")}
          {...fieldProps("message")}
        />
      </Field>

      {/* Honeypot: hidden from people and assistive tech, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex pt-1">
        <Button type="submit" size="lg" arrow disabled={pending} aria-busy={pending || undefined}>
          {pending ? content.submitting : content.submit}
        </Button>
      </div>
    </form>
  );
}

function focusFirstInvalid(form: HTMLFormElement | null, fieldErrors: FieldErrors) {
  const first = contactFields.find((field) => fieldErrors[field]);
  form?.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus();
}

function validateFields(values: Record<TextField, string>, inquiry: string[]) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(values)) formData.set(key, value);
  for (const item of inquiry) formData.append("inquiry", item);
  const result = validateContact(readContactForm(formData));
  return result.success ? {} : result.errors;
}

const inputClass =
  "min-h-[52px] w-full rounded-none border-0 border-b border-field-line bg-transparent py-3 font-sans text-[17px] text-ink transition-colors duration-200 focus:border-gold-text aria-invalid:border-error";

function FormHeader({ label, id }: { label: string; id?: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <Eyebrow as={id ? "h2" : "p"} id={id}>
        {label}
      </Eyebrow>
      <Monogram width={40} />
    </div>
  );
}

type FieldProps = {
  label: string;
  hint?: string;
  field: TextField;
  error?: string;
  children: React.ReactNode;
};

function Field({ label, hint, field, error, children }: FieldProps) {
  return (
    <div className="flex min-w-0 flex-col gap-2.5">
      <label
        htmlFor={`contact-${field}`}
        className="font-sans text-[11.5px] font-medium tracking-[0.2em] text-ink-soft uppercase"
      >
        {label}
        {hint && <span className="text-[13px] font-normal tracking-[0.12em] text-field-hint normal-case"> {hint}</span>}
      </label>
      {children}
      {error && (
        <p id={`contact-${field}-error`} className="m-0 font-sans text-[13px] text-error">
          {error}
        </p>
      )}
    </div>
  );
}
