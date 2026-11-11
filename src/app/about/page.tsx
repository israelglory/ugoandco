import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Section } from "@/components/ui/Section";
import { Body, Eyebrow, Heading, Lede, ShortRule } from "@/components/ui/Typography";
import { about, aboutMeta } from "@/content/about";
import { routes } from "@/content/site";
import { reveal } from "@/lib/cn";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(aboutMeta, routes.about);

export default function AboutPage() {
  const { hero, approach, founder } = about;

  return (
    <>
      <Section pt={48} ptSm={40} pb={112} innerClassName="flex flex-col gap-14">
        <div className="flex flex-wrap items-end gap-x-24 gap-y-10">
          <div className="flex min-w-0 flex-[1_1_560px] flex-col gap-7">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <Heading as="h1" size={76} accent={hero.title.accent}>
              {hero.title.text}
            </Heading>
          </div>
          <Body className="min-w-0 flex-[1_1_380px]">{hero.body}</Body>
        </div>
        <nav aria-labelledby="about-areas" className="flex flex-col gap-2">
          <Eyebrow as="h2" id="about-areas" size="sm" tone="muted" className="pb-2.5">
            {hero.areasLabel}
          </Eyebrow>
          <ul className="m-0 grid list-none grid-cols-1 gap-x-8 border-t border-ink p-0 min-[600px]:grid-cols-2 min-[1100px]:grid-cols-4">
            {hero.areas.map((area) => (
              <li key={area.href}>
                <Link
                  href={area.href}
                  className="flex h-full items-end justify-between gap-4 border-b border-rule py-7 pr-6 font-serif text-[28px] leading-[1.2] text-ink transition-colors duration-200 hover:text-gold-text"
                >
                  {area.label}
                  <Arrow className="mb-2 text-gold" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Section>

      <Section variant="paper" ruleTop ruleBottom pt={112} pb={120} innerClassName="flex flex-col gap-14">
        <Heading size={46} className="max-w-[760px]">
          {approach.title}
        </Heading>
        <ol className="m-0 grid list-none grid-cols-1 gap-6 p-0 min-[560px]:grid-cols-2 min-[1100px]:grid-cols-4">
          {approach.steps.map((step, i) => (
            <li key={step} className="flex flex-col gap-[18px] border-t border-gold pt-6" {...reveal(i)}>
              <span aria-hidden="true" className="font-serif text-[56px] leading-none text-gold">
                {i + 1}
              </span>
              <p className="m-0 font-serif text-[28px] leading-[1.25]">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section innerClassName="flex flex-wrap items-start gap-x-24 gap-y-16">
        <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-5" {...reveal(0)}>
          <ImageFrame slot={founder.portrait} aspect="4/5" frame="left" />
        </div>
        <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-[22px]" {...reveal(1)}>
          <Eyebrow>{founder.eyebrow}</Eyebrow>
          <div className="flex flex-col gap-2">
            <Heading size={60}>{founder.name}</Heading>
            <p className="m-0 font-serif text-[24px] text-gold-text italic">{founder.role}</p>
          </div>
          <ShortRule />
          <Lede>{founder.lede}</Lede>
          {founder.body.map((p) => (
            <Body key={p}>{p}</Body>
          ))}
          <Body strong>{founder.closing}</Body>
        </div>

        <div className="flex basis-full flex-col gap-6 border-t border-ink pt-10" {...reveal(0)}>
          <Eyebrow as="h3">{founder.highlights.label}</Eyebrow>
          <ul className="m-0 grid list-none grid-cols-1 gap-x-8 gap-y-8 p-0 min-[560px]:grid-cols-2 min-[1100px]:grid-cols-4">
            {founder.highlights.items.map((item) => (
              <li key={item.figure} className="flex flex-col gap-2 border-l border-gold pl-5">
                <span className="font-serif text-[44px] leading-none text-gold-text">{item.figure}</span>
                <span className="body text-[15px] leading-[1.6]">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
