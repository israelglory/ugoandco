"use client";

import { cn } from "@/lib/cn";

type InquiryPillsProps = {
  legend: string;
  options: readonly string[];
  selected: string[];
  onChange: (next: string[]) => void;
  error?: string;
  errorId: string;
};

/** Multi-select "Nature of Inquiry" pills: real checkboxes, so it also works without JS. */
export function InquiryPills({ legend, options, selected, onChange, error, errorId }: InquiryPillsProps) {
  const toggle = (option: string, checked: boolean) =>
    onChange(checked ? [...selected, option] : selected.filter((item) => item !== option));

  return (
    <fieldset aria-describedby={error ? errorId : undefined} className="m-0 flex min-w-0 flex-col border-0 p-0">
      <legend className="mb-4 p-0 font-sans text-[11.5px] font-medium tracking-[0.2em] text-ink-soft uppercase">
        {legend}
      </legend>
      <div className="flex flex-wrap gap-2.5">
        {options.map((option, i) => {
          const checked = selected.includes(option);
          return (
            <label
              key={option}
              className={cn(
                "inline-flex min-h-11 cursor-pointer items-center border px-[18px] font-sans text-[14px] tracking-[0.03em] transition-colors duration-200 select-none",
                "has-focus-visible:outline-2 has-focus-visible:outline-offset-3 has-focus-visible:outline-gold-text",
                checked
                  ? "border-ink bg-ink text-on-dark"
                  : "border-pill-line bg-ivory text-ink hover:border-gold-text",
              )}
            >
              <input
                type="checkbox"
                name="inquiry"
                value={option}
                checked={checked}
                onChange={(event) => toggle(option, event.target.checked)}
                data-field={i === 0 ? "inquiry" : undefined}
                className="sr-only"
              />
              {option}
            </label>
          );
        })}
      </div>
      {error && (
        <p id={errorId} className="m-0 mt-3 font-sans text-[13px] text-error">
          {error}
        </p>
      )}
    </fieldset>
  );
}
