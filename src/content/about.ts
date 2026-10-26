import ugochiPortrait from "@/assets/images/ugochi-nwoga.jpg";
import { routes } from "./site";
import type { ImageSlot, PageMeta, RichHeading } from "./types";

export const aboutMeta: PageMeta = {
  title: "About",
  description:
    "UGO N & Co. brings together Ugochi Nwoga's experience across corporate leadership, international business, entrepreneurship, relationships and African contemporary art.",
};

export const about = {
  hero: {
    eyebrow: "About UGO N & Co.",
    title: {
      text: "Different disciplines. One underlying strength.",
      accent: "One underlying strength.",
    } satisfies RichHeading,
    body: "UGO N & Co. brings together Ugochi Nwoga's experience across corporate leadership, international business, entrepreneurship, relationships and African contemporary art.",
    areasLabel: "The firm operates across four areas",
    areas: [
      { label: "Corporate Finance & Strategy", href: routes.corporate },
      { label: "Private Exhibitions", href: routes.exhibitions },
      { label: "Private Art", href: routes.privateArt },
      { label: "Strategic Engagements", href: routes.strategic },
    ],
  },
  approach: {
    title: "While these engagements may appear different, the approach is consistent:",
    steps: [
      "Understand the objective.",
      "Determine where our experience can genuinely contribute.",
      "Identify the appropriate people and resources.",
      "Execute thoughtfully.",
    ],
  },
  founder: {
    eyebrow: "About Ugochi Nwoga",
    name: "Ugochi D. Nwoga",
    role: "Founder & Director",
    lede: "Ugochi D. Nwoga is a corporate executive, entrepreneur and gallery owner whose career has spanned the United States, Europe and Africa.",
    body: [
      "Her corporate career includes senior leadership experience across finance, strategy, aerospace, manufacturing, supply chain, international operations and business transformation.",
      "She has worked within major global organizations as well as entrepreneurial and founder-led businesses, providing perspective across both complex corporate environments and businesses requiring hands-on leadership.",
      "Her experience includes financial leadership, P&L responsibility, strategic planning, performance management, organizational transformation and international business.",
      /* Source wording: "Owner and Curator". Ovico band below says "Co-owner". Open item for the client. */
      "Ugochi is also Owner and Curator of Ovico Gallery, a contemporary African art gallery.",
      "Her work through Ovico has expanded her relationships across the African contemporary art ecosystem, including artists, collectors, galleries, cultural institutions and other art-world participants.",
    ],
    closing:
      "UGO N & Co. brings together these corporate, entrepreneurial and cultural experiences within one platform.",
    portrait: {
      label: "Portrait · Ugochi D. Nwoga",
      image: { src: ugochiPortrait, alt: "Portrait of Ugochi D. Nwoga", position: "47% 50%" },
    } satisfies ImageSlot,
  },
  international: {
    title: "International Perspective",
    body: [
      "Ugochi's professional and entrepreneurial work has created particularly strong experience and relationships across the United States and Africa, with significant familiarity with Nigeria.",
      "Her relationships also extend into Europe, South America and select markets in Asia.",
      "UGO N & Co. does not position this reach as universal access.",
      "Instead, the firm draws upon direct relationships, trusted collaborators and relevant professional networks according to the specific needs of each engagement.",
    ],
  },
  education: {
    title: "Education",
    /* Design restatement of: "Ugochi holds a Bachelor of Business Administration from Florida A&M University, a Master of Professional Studies in Supply Chain Management from Penn State University and an MBA from Northwestern University's Kellogg School of Management." */
    degrees: [
      { degree: "MBA", school: "Northwestern University's Kellogg School of Management" },
      {
        degree: "Master of Professional Studies in Supply Chain Management",
        school: "Penn State University",
      },
      { degree: "Bachelor of Business Administration", school: "Florida A&M University" },
    ],
  },
  ovico: {
    eyebrow: "Ovico Gallery",
    title: "Ugochi is Co-owner and Curator of Ovico Gallery, a contemporary African art gallery.",
    body: "Ovico Gallery and UGO N & Co. operate as distinct businesses while collaborating where an opportunity appropriately brings their respective capabilities together.",
    linkLabel: "Visit Ovico Gallery",
  },
};
