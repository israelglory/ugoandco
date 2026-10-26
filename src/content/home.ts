import homeHeroPhoto from "@/assets/images/home-hero.jpg";
import { routes } from "./site";
import type { ImageSlot, PageMeta, RichHeading } from "./types";

export const homeMeta: PageMeta = {
  title: "UGO N & Co.",
  description:
    "UGO N & Co. is a relationship-driven firm operating across business, African contemporary art and international opportunities.",
};

export const home = {
  hero: {
    eyebrow: "UGO N & Co.",
    title: {
      text: "Where experience, relationships and opportunity come together.",
      accent: "opportunity",
    } satisfies RichHeading,
    lede: "UGO N & Co. is a relationship-driven firm operating across business, African contemporary art and international opportunities.",
    body: "We provide senior-level corporate finance and strategy support, create private African contemporary art exhibitions and art opportunities, and undertake select strategic engagements where our experience, relationships and ability to execute can create meaningful value.",
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
      "UGO N & Co. brings together corporate leadership experience, entrepreneurial perspective, international relationships and a growing network within African contemporary art.",
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
        title: "Private Art",
        body: [
          "Select sourcing, private sales and introductions involving African contemporary artists, galleries, collectors and trusted art-world partners.",
        ],
        link: { label: "Explore Private Art", href: routes.privateArt },
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
