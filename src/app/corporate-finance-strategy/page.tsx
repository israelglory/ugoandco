import { Button } from "@/components/ui/Button";
import { GoldRing } from "@/components/ui/GoldRing";
import { NumberedItem } from "@/components/ui/NumberedItem";
import { RuledList } from "@/components/ui/RuledList";
import { Section } from "@/components/ui/Section";
import { Body, Eyebrow, FinePrint, Heading, Lede } from "@/components/ui/Typography";
import { corporate, corporateMeta } from "@/content/corporate";
import { routes } from "@/content/site";
import { cn, reveal } from "@/lib/cn";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(corporateMeta, routes.corporate);

export default function CorporatePage() {
  const { hero, services, international, approach } = corporate;

  return (
    <>
      <Section pt={48} ptSm={40} pb={112} innerClassName="flex flex-col gap-14">
        <div className="flex max-w-[980px] flex-col gap-7">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <Heading as="h1" size={70} accent={hero.title.accent}>
            {hero.title.text}
          </Heading>
        </div>
        <div className="flex flex-wrap gap-x-24 gap-y-12 border-t border-ink pt-12">
          <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-5">
            <Lede>{hero.lede}</Lede>
            <Body>{hero.body}</Body>
          </div>
          <ul className="m-0 grid min-w-0 flex-[1_1_360px] list-none grid-cols-3 self-start border border-rule p-0">
            {hero.models.map((model, i) => (
              <li
                key={model.label}
                className={cn("flex flex-col gap-2.5 px-5 py-7", i < hero.models.length - 1 && "border-r border-rule")}
              >
                <span aria-hidden="true" className="numeral text-[18px]">
                  {model.numeral}
                </span>
                <span className="font-serif text-[26px]">{model.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        variant="paper"
        ruleTop
        ruleBottom
        pt={120}
        pb={120}
        innerClassName="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-x-14 gap-y-16"
      >
        {services.map((service, i) => (
          <NumberedItem
            key={service.title}
            as="div"
            variant="big"
            numeral={service.numeral}
            title={service.title}
            titleAs="h2"
            titleSize={34}
            className="gap-6"
            {...reveal(i)}
          >
            {service.intro && <Body className="text-[16px]">{service.intro}</Body>}
            {service.listLabel && <Eyebrow size="sm">{service.listLabel}</Eyebrow>}
            <RuledList items={service.items} />
            {service.note && <FinePrint>{service.note}</FinePrint>}
          </NumberedItem>
        ))}
      </Section>

      <Section innerClassName="flex flex-wrap items-center gap-x-24 gap-y-16">
        <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-6" {...reveal(0)}>
          <Eyebrow>{international.eyebrow}</Eyebrow>
          <Heading size={54}>{international.title}</Heading>
          {international.body.map((p) => (
            <Body key={p}>{p}</Body>
          ))}
        </div>
        <ul className="m-0 flex min-w-0 flex-[1_1_420px] list-none flex-col border-t border-ink p-0" {...reveal(1)}>
          {international.markets.map((market) => (
            <li
              key={market.label}
              className={cn(
                "border-b border-rule py-[22px] font-serif text-[32px]",
                market.primary ? "text-ink" : "text-muted",
              )}
            >
              {market.label}
              {market.note && (
                <>
                  {" "}
                  <em className="accent text-[24px]">{market.note}</em>
                </>
              )}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        variant="ink"
        decor={<GoldRing tone="dark" className="-top-[160px] -right-[200px] w-[640px]" />}
        innerClassName="flex flex-wrap gap-x-24 gap-y-14"
      >
        <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-6" {...reveal(0)}>
          <Eyebrow>{approach.eyebrow}</Eyebrow>
          <Heading size={72} statement>
            {approach.title}
          </Heading>
        </div>
        <div className="flex min-w-0 flex-[1_1_420px] flex-col justify-end gap-5" {...reveal(1)}>
          <Lede>{approach.lede}</Lede>
          <Body>{approach.body}</Body>
          <div className="pt-4">
            <Button href={approach.cta.href} variant="goldOutline">
              {approach.cta.label}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
