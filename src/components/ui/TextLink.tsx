import Link from "next/link";
import { cn } from "@/lib/cn";
import { Arrow } from "./Arrow";

type TextLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function TextLink({ href, className, children }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-3 border-b border-gold pt-2.5 pb-2 font-sans text-[12.5px] font-medium tracking-[0.16em] text-ink uppercase transition-colors duration-200 hover:text-gold-text",
        className,
      )}
    >
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}
