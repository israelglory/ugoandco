import { Button } from "@/components/ui/Button";
import { Chip, Notice, Panel } from "@/components/ui/Cards";
import { GoldRing } from "@/components/ui/GoldRing";
import { Section } from "@/components/ui/Section";
import { Body, Eyebrow, Heading, Lede } from "@/components/ui/Typography";
import { routes } from "@/content/site";
import { strategic, strategicMeta } from "@/content/strategic";
import { reveal } from "@/lib/cn";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(strategicMeta, routes.strategic);

export default function StrategicEngagementsPage() {
  const { hero, selective, panels, transactions } = strategic;

  return (
    <>
      <Section
        pt={48}
        ptSm={40}
        pb={112}
        decor={<GoldRing tone="light" className="-top-[240px] -right-[260px] w-[720px]" />}
        innerClassName="flex flex-col gap-14"
      >
        <div className="flex max-w-[1000px] flex-col gap-7">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <Heading as="h1" size={72} accent={hero.title.accent}>
            {hero.title.text}
          </Heading>
        </div>
        <div className="flex flex-wrap gap-x-24 gap-y-10 border-t border-ink pt-12">
          <Lede className="min-w-0 flex-[1_1_420px]">{hero.lede}</Lede>
          <Body className="min-w-0 flex-[1_1_480px]">{hero.body}</Body>
        </div>
      </Section>

      <Section variant="ink" pt={112} pb={112} innerClassName="flex flex-wrap items-center gap-x-24 gap-y-12">
        <Heading size={60} statement className="min-w-0 flex-[1_1_440px]">
          {selective.title}
        </Heading>
        <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-5" {...reveal(1)}>
          <Body strong>{selective.body}</Body>
        </div>
      </Section>

      <Section innerClassName="grid grid-cols-[repeat(auto-fit,minmax(min(500px,100%),1fr))] gap-6">
        {panels.map((panel, i) => (
          <Panel key={panel.title} tone={panel.tone} {...reveal(i % 2)}>
            <span aria-hidden="true" className="numeral text-[20px]">
              {panel.numeral}
            </span>
            <Heading look="h3" size={36}>
              {panel.title}
            </Heading>
            {panel.lead && <Body strong>{panel.lead}</Body>}
            {panel.body.map((p) => (
              <Body key={p}>{p}</Body>
            ))}
            {panel.sub && (
              <div className="mt-2 flex flex-col gap-5 border-t border-rule-strong pt-7">
                <Heading as="h3" size={28}>
                  {panel.sub.title}
                </Heading>
                <Body strong>{panel.sub.lead}</Body>
                {panel.sub.body.map((p) => (
                  <Body key={p}>{p}</Body>
                ))}
              </div>
            )}
            {panel.chips && (
              <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
                {panel.chips.map((chip) => (
                  <Chip key={chip}>{chip}</Chip>
                ))}
              </ul>
            )}
          </Panel>
        ))}
      </Section>

      <Section ruleTop pt={112} pb={128} innerClassName="flex flex-col gap-12">
        <Notice label={transactions.label} title={transactions.title} {...reveal(0)}>
          {transactions.body.map((p) => (
            <Body key={p}>{p}</Body>
          ))}
          <Body strong className="font-medium">
            {transactions.emphasis}
          </Body>
        </Notice>
        <div className="flex justify-center pt-4">
          <Button href={transactions.cta.href}>{transactions.cta.label}</Button>
        </div>
      </Section>
    </>
  );
}
