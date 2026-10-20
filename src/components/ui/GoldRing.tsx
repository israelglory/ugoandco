import { cn } from "@/lib/cn";

const tones = {
  gold: "border-gold",
  light: "border-circle-light",
  dark: "border-circle-dark",
};

type GoldRingProps = {
  /** Size and position utilities, e.g. "w-[74%] -left-[20%] -bottom-[12%]". */
  className: string;
  tone?: keyof typeof tones;
  /** Draw the ring in once when it scrolls into view. */
  draw?: boolean;
};

/** Decorative 1px circle from the logo. The parent clips it (overflow hidden). */
export function GoldRing({ className, tone = "gold", draw = true }: GoldRingProps) {
  return (
    <div
      aria-hidden="true"
      data-ring-draw={draw ? "" : undefined}
      className={cn("pointer-events-none absolute aspect-square rounded-full border", tones[tone], className)}
    />
  );
}

export function GoldDot({ className }: { className: string }) {
  return <div aria-hidden="true" className={cn("absolute size-2.5 rounded-full bg-gold", className)} />;
}
