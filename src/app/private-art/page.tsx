import { Button } from "@/components/ui/Button";
import { GoldRing } from "@/components/ui/GoldRing";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { NumberedItem } from "@/components/ui/NumberedItem";
import { Section } from "@/components/ui/Section";
import { Body, Eyebrow, Heading, Lede, ShortRule } from "@/components/ui/Typography";
import { privateArt, privateArtMeta } from "@/content/private-art";
import { routes } from "@/content/site";
import { OVICO_URL } from "@/lib/config";
import { reveal } from "@/lib/cn";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(privateArtMeta, routes.privateArt);

export default function PrivateArtPage() {
  const { hero, areas, collaborative, ovico } = privateArt;

  return (
    <>
      <Section clip pt={48} ptSm={40} pb={120} innerClassName="flex flex-wrap items-center gap-x-[88px] gap-y-16">
        <div className="flex min-w-0 flex-[1_1_540px] flex-col gap-7">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <Heading as="h1" size={76} accent={hero.title.accent}>
            {hero.title.text}
          </Heading>
          <ShortRule />
          <Lede>{hero.lede}</Lede>
          {hero.body.map((p) => (
            <Body key={p}>{p}</Body>
          ))}
        </div>
        <div className="flex min-w-0 flex-[1_1_400px] justify-center">
          <ImageFrame slot={hero.image} aspect="3/4" frame="right" eager className="max-w-[460px]" />
        </div>
      </Section>

      <Section ruleTop innerClassName="flex flex-col gap-16">
        <div className="flex flex-col gap-[22px]">
          <Eyebrow>{areas.eyebrow}</Eyebrow>
          <Heading size={60}>{areas.title}</Heading>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-x-14 border-t border-ink">
          {areas.items.map((item, i) => (
            <NumberedItem
              key={item.title}
              numeral={item.numeral}
              title={item.title}
              titleSize={30}
              className="gap-4 border-b border-rule pt-10 pb-11"
              {...reveal(i % 3)}
            >
              <Body className="text-[16px]">{item.body}</Body>
            </NumberedItem>
          ))}
        </div>
      </Section>

      <Section
        variant="ink"
        decor={<GoldRing tone="dark" className="-bottom-[220px] -left-[220px] w-[560px]" />}
        innerClassName="flex flex-wrap gap-x-24 gap-y-14"
      >
        <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-6" {...reveal(0)}>
          <Eyebrow>{collaborative.eyebrow}</Eyebrow>
          <Heading size={54}>{collaborative.title}</Heading>
        </div>
        <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-5" {...reveal(1)}>
          <Body strong>{collaborative.lead}</Body>
          {collaborative.body.map((p) => (
            <Body key={p}>{p}</Body>
          ))}
          <Body className="border-t border-circle-dark pt-5">{collaborative.closing}</Body>
        </div>
      </Section>

      <Section innerClassName="flex flex-wrap items-center gap-x-24 gap-y-14">
        <div className="min-w-0 flex-[1_1_440px]" {...reveal(0)}>
          <ImageFrame slot={ovico.image} aspect="4/3" />
        </div>
        <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-[22px]" {...reveal(1)}>
          <Eyebrow>{ovico.eyebrow}</Eyebrow>
          <Heading size={46}>{ovico.title}</Heading>
          {ovico.body.map((p) => (
            <Body key={p}>{p}</Body>
          ))}
          <div className="pt-2.5">
            <Button href={OVICO_URL} external variant="outline">
              {ovico.linkLabel}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
