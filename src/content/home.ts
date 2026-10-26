import homeHeroPhoto from "@/assets/images/home-hero.jpg";
import { about } from "./about";
import { corporate } from "./corporate";
import { exhibitions } from "./exhibitions";
import { routes } from "./site";
import { strategic } from "./strategic";
import type { ImageSlot, PageMeta, RichHeading } from "./types";

export const homeMeta: PageMeta = {
  title: "UGO N & Co.",
  description:
    "UGO N & Co. is a relationship-driven firm operating across corporate finance and strategy, African contemporary art and strategic opportunities.",
};

export const home = {
  hero: {
    eyebrow: "UGO N & Co.",
    title: {
      text: "Where experience, relationships and opportunity come together.",
      accent: "opportunity",
    } satisfies RichHeading,
    lede: "UGO N & Co. is a relationship-driven firm operating across corporate finance and strategy, African contemporary art and strategic opportunities.",
    body: "We provide senior-level corporate finance and strategy support, create private African contemporary art exhibitions, facilitate select art acquisitions, and undertake strategic engagements where our experience, relationships and ability to execute can create meaningful value.",
    primaryCta: { label: "Explore Our Work", href: "#work" },
    secondaryCta: { label: "Start a Conversation", href: routes.contact },
    image: {
      label: "Image · Featured artwork",
      image: {
        src: homeHeroPhoto,
        alt: "A smiling woman in a white dress with a colorful circle print, standing in front of an abstract painting",
        position: "50% 18%",
      },
    } satisfies ImageSlot,
  },
  disciplines: ["African Contemporary Art", "Finance & Strategy", "Global Partnerships"],
  whatWeDo: {
    id: "work",
    eyebrow: "What We Do",
    title: { text: "Experience. Relationships. Execution.", accent: "Execution." } satisfies RichHeading,
    intro: [
      "UGO N & Co. brings together corporate leadership experience, entrepreneurial perspective, international relationships and established relationships across African contemporary art.",
    ],
    introStrong: "Our work is organized around four areas.",
    services: [
      {
        numeral: "01",
        title: "Corporate Finance & Strategy",
        body: [
          "Senior-level finance, strategy and business support for companies navigating growth, transformation, performance challenges and complex decisions.",
          "Engagements may include fractional or interim CFO leadership, financial planning and analysis, performance improvement, strategic planning, transaction support and special finance projects.",
        ],
        link: { label: "Explore Corporate Finance & Strategy", href: routes.corporate },
      },
      {
        numeral: "02",
        title: "Private Exhibitions",
        body: [
          "Bespoke African contemporary art exhibitions and cultural experiences created for corporations, private banks, executives and select private audiences.",
          "Each exhibition is developed around the host, its audience and the purpose of the engagement.",
        ],
        link: { label: "Discover Private Exhibitions", href: routes.exhibitions },
      },
      {
        numeral: "03",
        title: "Private Art Acquisitions",
        body: [
          "Select sourcing and acquisition opportunities involving African contemporary artists, galleries, collectors and trusted art-world partners.",
        ],
        link: { label: "Explore Private Art Acquisitions", href: routes.privateArt },
      },
      {
        numeral: "04",
        title: "Strategic Engagements",
        body: [
          "Business development, strategic introductions, international opportunities and special projects where UGO N & Co. has a clearly defined role and can meaningfully contribute.",
        ],
        link: { label: "Explore Strategic Engagements", href: routes.strategic },
      },
    ],
  },
  cta: {
    title: "Start a Conversation",
    lede: "UGO N & Co. welcomes thoughtful inquiries across its four areas of engagement.",
    button: { label: "Start a Conversation", href: routes.contact },
  },
};

const globalPartnerships = strategic.panels.find((panel) => panel.title === "Global Partnerships")!;

/*
 * Homepage sections 4 to 7. The revision names these sections without new copy, so each
 * one reuses the existing wording from its page (imported, so the text stays identical).
 */
export const homeFeatures = {
  exhibitions: {
    eyebrow: exhibitions.hero.eyebrow,
    title: exhibitions.hero.title,
    body: exhibitions.hero.lede,
    image: exhibitions.hero.image,
    link: { label: "Discover Private Exhibitions", href: routes.exhibitions },
  },
  corporate: {
    eyebrow: corporate.hero.eyebrow,
    title: corporate.hero.title,
    body: corporate.hero.lede,
    practices: [
      ...corporate.services.map(({ numeral, title }) => ({ numeral, title })),
      { numeral: corporate.international.numeral, title: corporate.international.title },
    ],
    link: { label: "Explore Corporate Finance & Strategy", href: routes.corporate },
  },
  global: {
    eyebrow: corporate.international.eyebrow,
    title: globalPartnerships.title,
    body: [globalPartnerships.body[0], corporate.international.body[0]],
    markets: corporate.international.markets,
    link: { label: "Explore Strategic Engagements", href: routes.strategic },
  },
  founder: {
    eyebrow: "About",
    name: about.founder.name,
    role: about.founder.role,
    body: about.founder.lede,
    portrait: about.founder.portrait,
    link: { label: about.founder.eyebrow, href: routes.about },
  },
};
