import { cn } from "@/lib/cn";

type RuledListProps = {
  items: string[];
  /** Colour of the rule above the first item. */
  top?: "rule" | "ink";
  className?: string;
};

export function RuledList({ items, top = "rule", className }: RuledListProps) {
  return (
    <ul
      className={cn(
        "m-0 flex list-none flex-col p-0",
        top === "ink" ? "border-t border-ink" : "border-t border-rule",
        className,
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-baseline gap-3.5 border-b border-rule py-[13px] font-sans text-[16px] leading-[1.5] text-ink-soft before:h-px before:flex-[0_0_14px] before:-translate-y-[5px] before:bg-gold before:content-['']"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
