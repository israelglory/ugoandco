import { cn } from "@/lib/cn";
import { Body, Eyebrow, Heading } from "./Typography";

type BaseProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & { "data-reveal"?: string };

/** Exhibitions experience tile: serif text bottom-aligned in a hairline box. */
export function Tile({ className, children, ...rest }: BaseProps) {
  return (
    <li
      className={cn(
        "flex min-h-[120px] items-end border border-rule bg-ivory px-6 py-7 font-serif text-[24px] leading-[1.2] text-ink",
        className,
      )}
      {...rest}
    >
      {children}
    </li>
  );
}

type ConceptCardProps = BaseProps & {
  numeral: string;
  title: string;
  body: string[];
  /** The wide fifth card with a full gold border. */
  featured?: boolean;
};

/** Dark-grid exhibition concept. */
export function ConceptCard({ numeral, title, body, featured, className, ...rest }: ConceptCardProps) {
  if (featured) {
    return (
      <article
        className={cn("flex flex-wrap items-center gap-x-20 gap-y-8 border border-gold px-11 py-12", className)}
        {...rest}
      >
        <div className="flex min-w-0 flex-[1_1_300px] flex-col gap-3.5">
          <span aria-hidden="true" className="numeral text-[20px]">
            {numeral}
          </span>
          <Heading as="h3" size={38}>
            {title}
          </Heading>
        </div>
        <div className="flex min-w-0 flex-[2_1_480px] flex-col gap-3.5">
          {body.map((p, i) => (
            <Body key={p} strong={i === 0}>
              {p}
            </Body>
          ))}
        </div>
      </article>
    );
  }

  return (
    <article className={cn("flex min-h-[340px] flex-col gap-5 bg-ink px-8 py-10", className)} {...rest}>
      <span aria-hidden="true" className="numeral text-[20px]">
        {numeral}
      </span>
      <Heading as="h3" size={30}>
        {title}
      </Heading>
      {body.map((p) => (
        <Body key={p} className="text-[15.5px]">
          {p}
        </Body>
      ))}
    </article>
  );
}

type PanelProps = BaseProps & {
  tone?: "ivory" | "paper";
  as?: "article" | "div";
};

/** Hairline-bordered content panel (Strategic Engagements). */
export function Panel({ tone = "ivory", as: Tag = "article", className, children, ...rest }: PanelProps) {
  return (
    <Tag
      className={cn(
        "flex flex-col gap-5 border border-rule px-12 py-[52px] sm-down:px-6 sm-down:py-9",
        tone === "paper" && "bg-paper",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <li className="border border-chip-line bg-ivory px-4 py-2.5 font-sans text-[14px] tracking-[0.04em] text-ink">
      {children}
    </li>
  );
}

type NoticeProps = BaseProps & {
  label: string;
  title: string;
};

/** Gold-bordered regulatory notice with a "Please Note" eyebrow. */
export function Notice({ label, title, className, children, ...rest }: NoticeProps) {
  return (
    <aside
      aria-labelledby="notice-title"
      className={cn(
        "flex flex-wrap gap-x-20 gap-y-10 border border-gold px-[52px] py-14 sm-down:px-6 sm-down:py-9",
        className,
      )}
      {...rest}
    >
      <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-[18px]">
        <Eyebrow>{label}</Eyebrow>
        <Heading as="h2" look="h3" size={36} id="notice-title">
          {title}
        </Heading>
      </div>
      <div className="flex min-w-0 flex-[2_1_480px] flex-col gap-[18px]">{children}</div>
    </aside>
  );
}
