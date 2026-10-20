import { cn } from "@/lib/cn";

type EyebrowProps = {
  as?: "p" | "span" | "h2" | "h3";
  size?: "md" | "sm";
  tone?: "gold" | "muted";
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function Eyebrow({ as: Tag = "p", size = "md", tone = "gold", id, className, children }: EyebrowProps) {
  return (
    <Tag
      id={id}
      className={cn("eyebrow", size === "sm" && "eyebrow-sm", tone === "muted" && "eyebrow-muted", className)}
    >
      {children}
    </Tag>
  );
}

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "p";
  /** Visual style; defaults to the element level. */
  look?: "h1" | "h2" | "h3";
  /** Desktop font size in px. */
  size?: number;
  /** Font size at 640px and below (h1 and h2 only). */
  sizeSm?: number;
  /** Italic display statement, e.g. "Analysis should lead to action." */
  statement?: boolean;
  /** A phrase inside the text to set in italic gold. */
  accent?: string;
  id?: string;
  className?: string;
  children: string;
};

export function Heading({ as = "h2", look, size, sizeSm, statement, accent, id, className, children }: HeadingProps) {
  const Tag = as;
  const style = look ?? (as === "p" ? "h3" : as);
  const vars = {
    ...(size ? { "--fs": `${size}px` } : {}),
    ...(sizeSm ? { "--fs-sm": `${sizeSm}px` } : {}),
  } as React.CSSProperties;
  return (
    <Tag id={id} className={cn(style, statement && "statement", className)} style={vars}>
      {withAccent(children, accent)}
    </Tag>
  );
}

function withAccent(text: string, accent?: string) {
  const at = accent ? text.indexOf(accent) : -1;
  if (!accent || at < 0) return text;
  return (
    <>
      {text.slice(0, at)}
      <em className="accent">{accent}</em>
      {text.slice(at + accent.length)}
    </>
  );
}

type TextProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export function Lede({ className, style, children }: TextProps) {
  return (
    <p className={cn("lede", className)} style={style}>
      {children}
    </p>
  );
}

export function Body({ strong, className, style, children }: TextProps & { strong?: boolean }) {
  return (
    <p className={cn("body", strong && "body-strong", className)} style={style}>
      {children}
    </p>
  );
}

export function FinePrint({ className, children }: TextProps) {
  return <p className={cn("fine", className)}>{children}</p>;
}

export function ShortRule({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("short-rule", className)} />;
}
