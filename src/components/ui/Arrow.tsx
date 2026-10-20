import { cn } from "@/lib/cn";

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="10"
      viewBox="0 0 18 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
      focusable="false"
      className={cn("shrink-0", className)}
    >
      <path d="M0 5h17M13 1l4 4-4 4" />
    </svg>
  );
}
