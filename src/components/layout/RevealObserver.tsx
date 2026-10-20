"use client";

import { useEffect } from "react";

const SELECTOR = "[data-reveal], [data-ring-draw]";
const EASE = "cubic-bezier(0.22, 0.61, 0.36, 1)";

/**
 * Fades `[data-reveal]` elements up and draws `[data-ring-draw]` rings as they enter
 * the viewport (DESIGN_SPEC.md section 7). CSS sets the hidden start state only when
 * JS runs and motion is allowed; animations use the Web Animations API so React-owned
 * attributes are never touched. A MutationObserver picks up client-side navigations.
 */
export function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const seen = new WeakSet<Element>();

    const play = (el: Element) => {
      if (el.hasAttribute("data-ring-draw")) {
        el.animate([{ "--ring-sweep": "0deg" }, { "--ring-sweep": "360deg" }], {
          duration: 1600,
          delay: 150,
          easing: EASE,
          fill: "forwards",
        });
        return;
      }
      const delay = parseInt(getComputedStyle(el).getPropertyValue("--reveal-delay"), 10) || 0;
      el.animate(
        [
          { opacity: 0, transform: "translateY(14px)" },
          { opacity: 1, transform: "none" },
        ],
        { duration: 600, delay, easing: EASE, fill: "forwards" },
      );
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.unobserve(entry.target);
          play(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    const observe = (el: Element) => {
      if (seen.has(el)) return;
      seen.add(el);
      io.observe(el);
    };
    const scan = (root: ParentNode) => root.querySelectorAll(SELECTOR).forEach(observe);
    scan(document);

    const mo = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(SELECTOR)) observe(node);
          scan(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
