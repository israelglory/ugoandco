"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { LinkItem } from "@/content/types";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { isActivePath } from "./nav";

export type MobileMenuLabels = {
  open: string;
  close: string;
  label: string;
};

const DESKTOP_QUERY = "(min-width: 1180px)";

export function MobileMenu({ navigation, labels }: { navigation: LinkItem[]; labels: MobileMenuLabels }) {
  const pathname = usePathname();
  // Remember the route the menu was opened on, so any navigation closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const close = () => setOpenOn(null);

  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpenOn(null);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !rootRef.current) return;
      const focusable = Array.from(rootRef.current.querySelectorAll<HTMLElement>("button, a[href]")).filter(
        (el) => el.offsetParent !== null,
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onBreakpoint = () => desktop.matches && setOpenOn(null);

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      root.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="nav:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-label={open ? labels.close : labels.open}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpenOn(open ? null : pathname)}
        className="inline-flex size-12 cursor-pointer items-center justify-center border border-ink bg-transparent text-ink transition-colors duration-200 hover:bg-ink hover:text-ivory"
      >
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          aria-hidden="true"
        >
          {open ? <path d="M3 0l14 14M17 0L3 14" /> : <path d="M0 1h20M0 7h20M0 13h20" />}
        </svg>
      </button>

      <nav
        id="mobile-nav"
        aria-label={labels.label}
        hidden={!open}
        className="absolute inset-x-0 top-full h-[calc(100dvh-var(--header-h))] overflow-y-auto overscroll-contain border-t border-rule bg-ivory"
      >
        <Container className="flex flex-col pt-2 pb-7">
          {navigation.map((link) => {
            const active = isActivePath(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "border-b border-rule py-3 font-serif text-[26px] leading-[1.25] transition-colors duration-200 hover:text-gold-text",
                  active ? "text-gold-text" : "text-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </Container>
      </nav>
    </div>
  );
}
