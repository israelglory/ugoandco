import { ContactForm } from "@/components/contact/ContactForm";
import { GoldRing } from "@/components/ui/GoldRing";
import { Section } from "@/components/ui/Section";
import { Body, Eyebrow, Heading, Lede, ShortRule } from "@/components/ui/Typography";
import { contact, contactMeta, inquiryOptions } from "@/content/contact";
import { routes } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(contactMeta, routes.contact);

export default function ContactPage() {
  const { hero, areas, form } = contact;

  return (
    <Section
      pt={48}
      ptSm={40}
      pb={128}
      decor={<GoldRing tone="light" className="-top-[200px] -left-[300px] w-[640px]" />}
      innerClassName="flex flex-wrap items-start gap-x-[88px] gap-y-16"
    >
      <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-7">
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <Heading as="h1" size={76} sizeSm={46} accent={hero.title.accent}>
          {hero.title.text}
        </Heading>
        <ShortRule />
        <Lede>{hero.lede}</Lede>
        <div className="mt-3 flex flex-col border-t border-ink">
          {areas.map((area) => (
            <div key={area.title} className="flex flex-col gap-2 border-b border-rule py-6">
              <Heading look="h3" size={26}>
                {area.title}
              </Heading>
              <Body className="text-[15px] leading-[1.65]">{area.body}</Body>
            </div>
          ))}
        </div>
      </div>

      <ContactForm content={form} options={inquiryOptions} />
    </Section>
  );
}
