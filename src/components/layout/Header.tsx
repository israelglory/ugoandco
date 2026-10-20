"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { LinkItem } from "@/content/types";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Monogram } from "@/components/ui/Monogram";
import { MobileMenu, type MobileMenuLabels } from "./MobileMenu";
import { isActivePath } from "./nav";

type HeaderProps = {
  name: string;
  homeLabel: string;
  navLabel: string;
  navigation: LinkItem[];
  menuLabels: MobileMenuLabels;
};

export function Header({ name, homeLabel, navLabel, navigation, menuLabels }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const links = navigation.slice(0, -1);
  const cta = navigation[navigation.length - 1];
  const ctaActive = isActivePath(pathname, cta.href);

  return (
    <>
      {/* Fixed, with an in-flow spacer, so shrinking on scroll never shifts the page. */}
      <header
        className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-ivory"
        style={{ "--header-h": scrolled ? "76px" : "92px" } as React.CSSProperties}
      >
        <Container className="flex min-h-(--header-h) items-center justify-between gap-6 transition-[min-height] duration-300 ease-out motion-reduce:transition-none">
          <Link href="/" aria-label={homeLabel} className="flex items-center gap-3.5 text-ink">
            <Monogram width={48} priority />
            <span className="font-serif text-[25px] font-medium tracking-[0.06em] whitespace-nowrap">{name}</span>
          </Link>

          <nav aria-label={navLabel} className="hidden items-center gap-[26px] nav:flex">
            {links.map((link) => {
              const active = isActivePath(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "hit-area border-b py-2.5 font-sans text-[12.5px] tracking-[0.07em] whitespace-nowrap transition-colors duration-200 hover:border-gold",
                    active ? "border-gold text-gold-text" : "border-transparent text-ink",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href={cta.href}
              aria-current={ctaActive ? "page" : undefined}
              className={cn(
                "inline-flex min-h-11 items-center border border-ink px-5 font-sans text-[11.5px] tracking-[0.14em] whitespace-nowrap uppercase transition-colors duration-200 hover:bg-ink hover:text-ivory",
                ctaActive ? "bg-ink text-ivory" : "text-ink",
              )}
            >
              {cta.label}
            </Link>
          </nav>

          <MobileMenu navigation={navigation} labels={menuLabels} />
        </Container>
      </header>
      <div aria-hidden="true" className="h-[92px]" />
    </>
  );
}
