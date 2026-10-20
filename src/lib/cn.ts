export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/** Props that fade an element up as it enters the viewport, staggered 60ms by `index`. */
export function reveal(index = 0) {
  return {
    "data-reveal": "",
    style: { "--reveal-delay": `${index * 60}ms` } as React.CSSProperties,
  };
}
