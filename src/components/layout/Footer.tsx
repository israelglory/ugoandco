import Link from "next/link";
import { navigation, site } from "@/content/site";
import { OVICO_URL } from "@/lib/config";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Monogram } from "@/components/ui/Monogram";
import { Eyebrow } from "@/components/ui/Typography";

const footerLink =
  "hit-area font-sans text-[14px] text-on-dark-body transition-colors duration-200 hover:text-gold-light";

export function Footer() {
  const { footer } = site;
  const ovicoLinkClass = cn(footerLink, "self-start border-b border-gold pb-1");

  return (
    <footer className="on-dark border-t border-rule-dark bg-ink text-on-dark-body">
      <Container className="flex flex-col gap-16 pt-[88px] pb-10">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-14">
          <div className="flex flex-col gap-[18px]">
            <Monogram width={64} tone="dark" />
            <p className="m-0 font-serif text-[32px] font-medium tracking-[0.05em] text-on-dark">{site.name}</p>
            <p className="m-0 font-sans text-[14px] leading-[1.8] text-on-dark-muted">{footer.areasLine}</p>
            <p className="m-0 font-serif text-[22px] text-gold-light italic">{site.tagline}</p>
          </div>

          <nav aria-label={footer.navAriaLabel} className="flex flex-col gap-3.5">
            <Eyebrow as="h2" className="pb-1.5">
              {footer.navigationLabel}
            </Eyebrow>
            {navigation.map((link) => (
              <Link key={link.href} href={link.href} className={cn(footerLink, "self-start")}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3.5">
            <Eyebrow as="h2" className="pb-1.5">
              {footer.ovico.title}
            </Eyebrow>
            <p className="m-0 font-sans text-[14px] leading-[1.8] text-on-dark-muted">{footer.ovico.text}</p>
            {OVICO_URL ? (
              <a href={OVICO_URL} target="_blank" rel="noopener noreferrer" className={ovicoLinkClass}>
                {footer.ovico.linkLabel}
                <span className="sr-only"> {site.externalLinkHint}</span>
              </a>
            ) : (
              <span className={ovicoLinkClass}>{footer.ovico.linkLabel}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-rule-dark pt-8">
          <Eyebrow as="h2" size="sm" tone="muted">
            {footer.disclaimerLabel}
          </Eyebrow>
          <p className="m-0 max-w-[980px] font-sans text-[13px] leading-[1.8] text-on-dark-muted">
            {footer.disclaimer.join(" ")}
          </p>
          <p className="m-0 font-sans text-[13px] text-on-dark-muted">{footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
