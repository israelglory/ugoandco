import { Button } from "@/components/ui/Button";
import { ConceptCard, Tile } from "@/components/ui/Cards";
import { GoldRing } from "@/components/ui/GoldRing";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { RuledList } from "@/components/ui/RuledList";
import { Section } from "@/components/ui/Section";
import { Body, Eyebrow, FinePrint, Heading, Lede, ShortRule } from "@/components/ui/Typography";
import { exhibitions, exhibitionsMeta } from "@/content/exhibitions";
import { routes } from "@/content/site";
import { reveal } from "@/lib/cn";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(exhibitionsMeta, routes.exhibitions);

export default function PrivateExhibitionsPage() {
  const { hero, audience, why, experiences, concepts, howWeWork, experience, whoWeWorkWith } = exhibitions;

  return (
    <>
      {/* Same scale as the Home hero: type and image follow viewport height so it fits one screen. */}
      <Section
        variant="ink"
        clip
        pt={48}
        ptSm={40}
        pb={64}
        pbSm={64}
        innerClassName="flex flex-wrap items-center gap-x-20 gap-y-14"
      >
        <div className="flex min-w-0 flex-[1.15_1_520px] flex-col gap-[22px]">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <Heading as="h1" size="clamp(44px, 5.4svh + 8px, 64px)" sizeSm={42} accent={hero.title.accent}>
            {hero.title.text}
          </Heading>
          <ShortRule />
          <Lede>{hero.lede}</Lede>
          <div className="pt-2">
            <Button href={hero.cta.href} variant="goldOutline">
              {hero.cta.label}
            </Button>
          </div>
        </div>
        <div className="flex min-w-0 flex-[1_1_420px] justify-center">
          <ImageFrame
            slot={hero.image}
            aspect="5/6"
            tone="dark"
            className="max-w-[460px] min-[1100px]:max-w-[min(460px,calc((100svh-204px)/1.2))]"
          >
            <GoldRing className="-top-[10%] -right-[14%] w-[60%]" />
          </ImageFrame>
        </div>
      </Section>

      <Section innerClassName="flex flex-col gap-[72px]">
        <Lede className="max-w-[820px] text-[22px]">{audience.emphasis}</Lede>
        <div className="flex flex-wrap gap-x-24 gap-y-12 border-t border-ink pt-14">
          <Heading size={60} accent={audience.title.accent} className="min-w-0 flex-[1_1_440px]">
            {audience.title.text}
          </Heading>
          <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-5" {...reveal(1)}>
            {audience.body.map((p) => (
              <Body key={p}>{p}</Body>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="paper" ruleTop ruleBottom innerClassName="flex flex-wrap items-center gap-x-24 gap-y-16">
        <div className="min-w-0 flex-[1_1_400px]" {...reveal(0)}>
          <ImageFrame slot={why.image} aspect="4/5" />
        </div>
        <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-[22px]" {...reveal(1)}>
          <Eyebrow as="h2">{why.eyebrow}</Eyebrow>
          <Lede className="font-serif text-[24px] leading-[1.45] text-ink">{why.statement}</Lede>
          {why.body.map((p) => (
            <Body key={p}>{p}</Body>
          ))}
          <Body strong>{why.closing}</Body>
        </div>
      </Section>

      <Section innerClassName="flex flex-col gap-14">
        <div className="flex flex-wrap items-end gap-x-24 gap-y-8">
          <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-[22px]">
            <Eyebrow>{experiences.eyebrow}</Eyebrow>
            <Heading size={48}>{experiences.title}</Heading>
          </div>
          <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-[18px]">
            <Body>{experiences.body}</Body>
          </div>
        </div>
        <div className="flex flex-col gap-[18px]">
          <Eyebrow as="h3" size="sm" tone="muted">
            {experiences.listLabel}
          </Eyebrow>
          <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-4 p-0">
            {experiences.items.map((item, i) => (
              <Tile key={item} {...reveal(i % 4)}>
                {item}
              </Tile>
            ))}
          </ul>
        </div>
      </Section>

      <Section variant="ink" innerClassName="flex flex-col gap-14">
        <div className="flex max-w-[760px] flex-col gap-[22px]">
          <Eyebrow>{concepts.eyebrow}</Eyebrow>
          <Heading size={56}>{concepts.title}</Heading>
        </div>
        <div className="grid grid-cols-1 gap-px border border-rule-dark bg-rule-dark min-[600px]:grid-cols-2 min-[1180px]:grid-cols-4">
          {concepts.items.map((item, i) => (
            <ConceptCard key={item.title} numeral={item.numeral} title={item.title} body={[item.body]} {...reveal(i)} />
          ))}
        </div>
        <ConceptCard
          featured
          numeral={concepts.featured.numeral}
          title={concepts.featured.title}
          body={concepts.featured.body}
          {...reveal(0)}
        />
      </Section>

      <Section pb={112} innerClassName="flex flex-col items-center gap-[26px] text-center">
        <Eyebrow>{howWeWork.eyebrow}</Eyebrow>
        <Heading size={52} className="max-w-[900px]">
          {howWeWork.title}
        </Heading>
        {howWeWork.body.map((p) => (
          <Body key={p} className="max-w-[720px]">
            {p}
          </Body>
        ))}
      </Section>

      <Section ruleTop pt={112} pb={112} innerClassName="flex flex-wrap gap-x-24 gap-y-14">
        <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-[22px]">
          <Heading size={52}>{experience.title}</Heading>
          <Body>{experience.intro}</Body>
        </div>
        <div className="flex min-w-0 flex-[2_1_560px] flex-col gap-7" {...reveal(1)}>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-x-10">
            {experience.columns.map((column) => (
              <RuledList key={column[0]} items={column} top="ink" />
            ))}
          </div>
          <FinePrint>{experience.note}</FinePrint>
        </div>
      </Section>

      <Section variant="paper" ruleTop pt={112} pb={120} innerClassName="flex flex-col gap-12">
        <div className="flex flex-col gap-[22px]">
          <Eyebrow>{whoWeWorkWith.eyebrow}</Eyebrow>
          <Heading size={48}>{whoWeWorkWith.title}</Heading>
        </div>
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-x-12 border-t border-ink p-0">
          {whoWeWorkWith.items.map((item) => (
            <li key={item} className="border-b border-rule-strong py-[22px] font-serif text-[26px]">
              {item}
            </li>
          ))}
        </ul>
        <div className="pt-4">
          <Button href={whoWeWorkWith.cta.href}>{whoWeWorkWith.cta.label}</Button>
        </div>
      </Section>
    </>
  );
}
