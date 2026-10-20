import Image from "next/image";
import type { ImageSlot } from "@/content/types";
import { cn } from "@/lib/cn";

const aspects = {
  "4/5": "aspect-[4/5]",
  "3/4": "aspect-[3/4]",
  "5/6": "aspect-[5/6]",
  "4/3": "aspect-[4/3]",
} as const;

type ImageFrameProps = {
  slot: ImageSlot;
  aspect: keyof typeof aspects;
  tone?: "light" | "dark";
  /** Offset 1px gold frame behind the image, shifted 20px down and to the given side. */
  frame?: "right" | "left";
  /** `sizes` for the responsive image once a real photo is supplied. */
  sizes?: string;
  /** Load immediately (above-the-fold images) instead of lazily. */
  eager?: boolean;
  className?: string;
  /** Decorative motifs (GoldRing, GoldDot) layered over the image. */
  children?: React.ReactNode;
};

export function ImageFrame({
  slot,
  aspect,
  tone = "light",
  frame,
  sizes = "(max-width: 1024px) 100vw, 560px",
  eager,
  className,
  children,
}: ImageFrameProps) {
  return (
    <div className={cn("relative w-full", aspects[aspect], className)}>
      {frame && (
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 translate-y-5 border border-gold",
            frame === "right" ? "translate-x-5" : "-translate-x-5",
          )}
        />
      )}
      {slot.image ? (
        <Image
          src={slot.image.src}
          alt={slot.image.alt}
          fill
          sizes={sizes}
          loading={eager ? "eager" : undefined}
          className="object-cover"
          style={slot.image.position ? { objectPosition: slot.image.position } : undefined}
        />
      ) : (
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 flex items-center justify-center p-6 text-center",
            tone === "dark" ? "image-placeholder-dark" : "image-placeholder",
          )}
        >
          <span className="font-sans text-[11px] tracking-[0.24em] uppercase">{slot.label}</span>
        </div>
      )}
      {children}
    </div>
  );
}
