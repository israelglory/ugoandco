import { Fragment } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GoldDot, GoldRing } from "@/components/ui/GoldRing";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Monogram } from "@/components/ui/Monogram";
import { NumberedItem } from "@/components/ui/NumberedItem";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { Body, Eyebrow, Heading, Lede, ShortRule } from "@/components/ui/Typography";
import { home, homeFeatures, homeMeta } from "@/content/home";
import { cn, reveal } from "@/lib/cn";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(homeMeta, "/", { absoluteTitle: true });

export default function HomePage() {
  const { hero, disciplines, whatWeDo, cta } = home;
  const { exhibitions, corporate, global, founder } = homeFeatures;

  return (
    <>
      {/* Type and image scale with viewport height so the whole hero fits in the first screen. */}
      <Section pt={48} pb={56} ptSm={40} pbSm={64} clip innerClassName="flex flex-wrap items-center gap-x-20 gap-y-14">
        <div className="flex min-w-0 flex-[1.15_1_540px] flex-col gap-[22px]">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <Heading as="h1" size="clamp(44px, 5.4svh + 8px, 64px)" sizeSm={42} accent={hero.title.accent}>
            {hero.title.text}
          </Heading>
          <ShortRule />
          <Lede>{hero.lede}</Lede>
          <Body>{hero.body}</Body>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="outline">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
        <div className="flex min-w-0 flex-[1_1_420px] justify-center">
          <ImageFrame
            slot={hero.image}
            aspect="4/5"
            eager
            className="max-w-[460px] min-[1120px]:max-w-[min(460px,calc((100svh-196px)*0.8))]"
          >
            <GoldRing className="-bottom-[12%] -left-[20%] w-[74%]" />
            <GoldDot className="top-[18%] -right-[5px]" />
          </ImageFrame>
        </div>
      </Section>

      <div className="on-dark bg-ink">
        <Container className="flex flex-wrap items-center justify-center gap-x-9 gap-y-[18px] py-[26px]">
          {disciplines.map((label, i) => (
            <Fragment key={label}>
              {i > 0 && <span aria-hidden="true" className="h-[18px] w-px bg-gold" />}
              <p className="eyebrow text-on-dark-body">{label}</p>
            </Fragment>
          ))}
        </Container>
      </div>

      <Section
        id={whatWeDo.id}
        aria-labelledby="what-we-do"
        className="scroll-mt-[76px]"
        innerClassName="flex flex-col gap-20"
      >
        <div className="flex flex-wrap items-end gap-x-24 gap-y-12">
          <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-6" {...reveal(0)}>
            <Eyebrow>{whatWeDo.eyebrow}</Eyebrow>
            <Heading id="what-we-do" size={60} sizeSm={38} accent={whatWeDo.title.accent}>
              {whatWeDo.title.text}
            </Heading>
          </div>
          <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-[18px]" {...reveal(1)}>
            {whatWeDo.intro.map((p) => (
              <Body key={p}>{p}</Body>
            ))}
            <Body strong>{whatWeDo.introStrong}</Body>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(500px,100%),1fr))] gap-x-[72px] border-t border-ink">
          {whatWeDo.services.map((service, i) => (
            <NumberedItem
              key={service.title}
              variant="inline"
              numeral={service.numeral}
              title={service.title}
              titleSize={36}
              className="gap-5 border-b border-rule pt-12 pb-14"
              {...reveal(i % 2)}
            >
              {service.body.map((p) => (
                <Body key={p}>{p}</Body>
              ))}
              <div className="pt-2">
                <TextLink href={service.link.href}>{service.link.label}</TextLink>
              </div>
            </NumberedItem>
          ))}
        </div>
      </Section>

      {/* 4. Featured Private Exhibitions */}
      <Section variant="ink" clip innerClassName="flex flex-wrap items-center gap-x-20 gap-y-14">
        <div className="flex min-w-0 flex-[1.15_1_520px] flex-col gap-6" {...reveal(0)}>
          <Eyebrow>{exhibitions.eyebrow}</Eyebrow>
          <Heading size={54} accent={exhibitions.title.accent}>
            {exhibitions.title.text}
          </Heading>
          <ShortRule />
          <Lede>{exhibitions.body}</Lede>
          <div className="pt-2">
            <Button href={exhibitions.link.href} variant="goldOutline">
              {exhibitions.link.label}
            </Button>
          </div>
        </div>
        <div className="flex min-w-0 flex-[1_1_380px] justify-center" {...reveal(1)}>
          <ImageFrame slot={exhibitions.image} aspect="5/6" tone="dark" className="max-w-[440px]">
            <GoldRing className="-top-[10%] -right-[14%] w-[60%]" />
          </ImageFrame>
        </div>
      </Section>

      {/* 5. Featured Corporate Finance */}
      <Section variant="paper" innerClassName="flex flex-wrap items-center gap-x-24 gap-y-14">
        <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-6" {...reveal(0)}>
          <Eyebrow>{corporate.eyebrow}</Eyebrow>
          <Heading size={54} accent={corporate.title.accent}>
            {corporate.title.text}
          </Heading>
          <Lede>{corporate.body}</Lede>
          <div className="pt-2">
            <TextLink href={corporate.link.href}>{corporate.link.label}</TextLink>
          </div>
        </div>
        <ol className="m-0 flex min-w-0 flex-[1_1_420px] list-none flex-col border-t border-ink p-0" {...reveal(1)}>
          {corporate.practices.map((practice) => (
            <li
              key={practice.title}
              className="flex items-baseline gap-5 border-b border-rule-strong py-[20px] font-serif text-[28px] leading-[1.2]"
            >
              <span aria-hidden="true" className="numeral text-[20px]">
                {practice.numeral}
              </span>
              {practice.title}
            </li>
          ))}
        </ol>
      </Section>

      {/* 6. International / Global Partnerships */}
      <Section
        variant="ink"
        decor={<GoldRing tone="dark" className="-bottom-[220px] -left-[220px] w-[560px]" />}
        innerClassName="flex flex-wrap items-center gap-x-24 gap-y-14"
      >
        <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-6" {...reveal(0)}>
          <Eyebrow>{global.eyebrow}</Eyebrow>
          <Heading size={54}>{global.title}</Heading>
          <Body strong>{global.body[0]}</Body>
          <Body>{global.body[1]}</Body>
          <div className="pt-4">
            <Button href={global.link.href} variant="goldOutline">
              {global.link.label}
            </Button>
          </div>
        </div>
        <ul className="m-0 flex min-w-0 flex-[1_1_420px] list-none flex-col border-t border-gold p-0" {...reveal(1)}>
          {global.markets.map((market) => (
            <li
              key={market.label}
              className={cn(
                "border-b border-rule-dark py-[20px] font-serif text-[30px]",
                market.primary ? "text-on-dark" : "text-on-dark-muted",
              )}
            >
              {market.label}
              {market.note && (
                <>
                  {" "}
                  <em className="accent text-[22px]">{market.note}</em>
                </>
              )}
            </li>
          ))}
        </ul>
      </Section>

      {/* 7. About Ugochi D. Nwoga */}
      <Section innerClassName="flex flex-wrap items-center gap-x-24 gap-y-14">
        <div className="min-w-0 flex-[1_1_360px]" {...reveal(0)}>
          <ImageFrame slot={founder.portrait} aspect="4/5" frame="left" className="mx-auto max-w-[420px]" />
        </div>
        <div className="flex min-w-0 flex-[1.3_1_480px] flex-col gap-[22px]" {...reveal(1)}>
          <Eyebrow>{founder.eyebrow}</Eyebrow>
          <div className="flex flex-col gap-2">
            <Heading size={54}>{founder.name}</Heading>
            <p className="m-0 font-serif text-[24px] text-gold-text italic">{founder.role}</p>
          </div>
          <ShortRule />
          <Lede>{founder.body}</Lede>
          <div className="pt-2">
            <TextLink href={founder.link.href}>{founder.link.label}</TextLink>
          </div>
        </div>
      </Section>

      {/* 8. Start a Conversation */}
      <Section variant="paper" ruleTop pt={120} pb={120} innerClassName="flex flex-col items-center gap-7 text-center">
        <div className="flex flex-col items-center gap-7" {...reveal(0)}>
          <Monogram width={84} />
          <Heading size={56} sizeSm={38}>
            {cta.title}
          </Heading>
          <Lede className="max-w-[560px]">{cta.lede}</Lede>
          <div className="pt-2">
            <Button href={cta.button.href}>{cta.button.label}</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
