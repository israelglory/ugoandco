import Image from "next/image";
import { cn } from "@/lib/cn";
import monogram from "@/assets/monogram.png";
import monogramLight from "@/assets/monogram-light.png";

type MonogramProps = {
  width: number;
  tone?: "light" | "dark";
  /** Load immediately (above-the-fold images) instead of lazily. */
  eager?: boolean;
  className?: string;
};

/** The UN monogram. Always decorative: the wordmark beside it carries the name. */
export function Monogram({ width, tone = "light", eager, className }: MonogramProps) {
  const src = tone === "dark" ? monogramLight : monogram;
  return (
    <Image
      src={src}
      alt=""
      width={width}
      height={Math.round((width * src.height) / src.width)}
      sizes={`${width}px`}
      loading={eager ? "eager" : undefined}
      className={cn("h-auto", className)}
    />
  );
}
