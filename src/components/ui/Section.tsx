import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = {
  variant?: "ivory" | "paper" | "ink";
  /** Hairline above / below the section. */
  ruleTop?: boolean;
  ruleBottom?: boolean;
  /** Desktop vertical padding in px. Collapses to 72px at 640px and below. */
  pt?: number;
  pb?: number;
  /** Vertical padding in px at 640px and below (default 72). */
  ptSm?: number;
  pbSm?: number;
  id?: string;
  className?: string;
  innerClassName?: string;
  /** Decorative elements (rings) placed behind the content; the section clips them. */
  decor?: React.ReactNode;
  /** Clip overflowing decoration inside the content (e.g. a ring on a hero image). */
  clip?: boolean;
  children: React.ReactNode;
} & Pick<React.HTMLAttributes<HTMLElement>, "aria-labelledby" | "aria-label">;

const surfaces = {
  ivory: "bg-ivory",
  paper: "bg-paper",
  ink: "on-dark bg-ink text-on-dark",
};

export function Section({
  variant = "ivory",
  ruleTop,
  ruleBottom,
  pt = 128,
  pb = 128,
  ptSm,
  pbSm,
  id,
  className,
  innerClassName,
  decor,
  clip,
  children,
  ...aria
}: SectionProps) {
  const ruleColor = variant === "ink" ? "border-rule-dark" : "border-rule";
  return (
    <section
      id={id}
      className={cn(
        surfaces[variant],
        ruleTop && `border-t ${ruleColor}`,
        ruleBottom && `border-b ${ruleColor}`,
        Boolean(decor || clip) && "relative overflow-hidden",
        className,
      )}
      {...aria}
    >
      {decor}
      <Container
        className={cn("section-pad relative", innerClassName)}
        style={
          {
            "--pt": `${pt}px`,
            "--pb": `${pb}px`,
            ...(ptSm !== undefined ? { "--pt-sm": `${ptSm}px` } : {}),
            ...(pbSm !== undefined ? { "--pb-sm": `${pbSm}px` } : {}),
          } as React.CSSProperties
        }
      >
        {children}
      </Container>
    </section>
  );
}
