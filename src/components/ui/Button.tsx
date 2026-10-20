import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { Arrow } from "./Arrow";

type Variant = "primary" | "outline" | "goldOutline";

type CommonProps = {
  variant?: Variant;
  /** `lg` is the 56px form button. */
  size?: "md" | "lg";
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type LinkButtonProps = CommonProps & {
  /** `null` (an external URL not provided yet) renders a non-interactive label. */
  href: string | null;
  external?: boolean;
};

type NativeButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & { href?: undefined };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const variants: Record<Variant, string> = {
  primary: "border-ink bg-ink text-ivory hover:border-gold-text hover:bg-gold-text",
  outline: "border-ink bg-transparent text-ink hover:bg-ink hover:text-ivory",
  goldOutline: "border-gold bg-transparent text-on-dark hover:bg-gold hover:text-ink",
};

export function buttonClasses({ variant = "primary", size = "md", className }: Partial<CommonProps>) {
  return cn(
    "inline-flex max-w-full items-center justify-center gap-3 border text-center font-sans text-[12.5px] leading-[1.4] font-medium uppercase transition-colors duration-200",
    size === "lg"
      ? "min-h-14 cursor-pointer px-9 py-3 tracking-[0.2em] disabled:cursor-progress"
      : "min-h-[52px] px-[30px] py-3 tracking-[0.18em]",
    variants[variant],
    className,
  );
}

export function Button(props: ButtonProps) {
  const { variant, size, arrow, className, children } = props;
  const classes = buttonClasses({ variant, size, className });
  const content = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );

  if (props.href === undefined) {
    const { variant: _v, size: _s, arrow: _a, className: _c, children: _ch, href: _h, ...rest } = props;
    return (
      <button type="button" className={classes} {...rest}>
        {content}
      </button>
    );
  }

  if (props.href === null) {
    return <span className={classes}>{content}</span>;
  }

  if (props.external) {
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
        <span className="sr-only"> {site.externalLinkHint}</span>
      </a>
    );
  }

  return (
    <Link href={props.href} className={classes}>
      {content}
    </Link>
  );
}
