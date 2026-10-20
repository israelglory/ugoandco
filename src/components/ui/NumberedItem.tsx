import { cn } from "@/lib/cn";
import { Heading } from "./Typography";

type NumberedItemProps = {
  numeral: string;
  title: string;
  titleAs?: "h2" | "h3";
  /** Title size in px. */
  titleSize: number;
  /**
   * `inline`: small italic numeral on the title baseline (Home service cards).
   * `stacked`: small italic numeral above the title.
   * `big`: large gold numeral above the title (Corporate services).
   */
  variant?: "inline" | "stacked" | "big";
  as?: "article" | "div";
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & { "data-reveal"?: string };

export function NumberedItem({
  numeral,
  title,
  titleAs = "h3",
  titleSize,
  variant = "stacked",
  as: Tag = "article",
  className,
  children,
  ...rest
}: NumberedItemProps) {
  const heading = (
    <Heading as={titleAs} look="h3" size={titleSize}>
      {title}
    </Heading>
  );

  return (
    <Tag className={cn("flex flex-col", className)} {...rest}>
      {variant === "inline" ? (
        <div className="flex items-baseline gap-5">
          <span aria-hidden="true" className="numeral text-[22px]">
            {numeral}
          </span>
          {heading}
        </div>
      ) : (
        <>
          <span
            aria-hidden="true"
            className={variant === "big" ? "font-serif text-[64px] leading-none text-gold" : "numeral text-[20px]"}
          >
            {numeral}
          </span>
          {heading}
        </>
      )}
      {children}
    </Tag>
  );
}
