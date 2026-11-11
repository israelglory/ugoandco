import ovicoPhoto from "@/assets/images/ovico-ugochi.jpg";
import privateArtHeroPhoto from "@/assets/images/private-art-hero.jpg";
import type { ImageSlot, PageMeta, RichHeading } from "./types";

export const privateArtMeta: PageMeta = {
  title: "Private Art Acquisitions",
  description:
    "UGO N & Co. facilitates select acquisitions of African contemporary art for private collectors, corporations and other qualified clients.",
};

export const privateArt = {
  hero: {
    eyebrow: "Private Art Acquisitions",
    title: {
      text: "Thoughtfully sourced. Discreetly facilitated.",
      accent: "Discreetly facilitated.",
    } satisfies RichHeading,
    lede: "UGO N & Co. facilitates select acquisitions of African contemporary art for private collectors, corporations and other qualified clients.",
    body: [
      "Depending on the engagement, we may identify appropriate works, source opportunities through galleries and artists, facilitate introductions, or coordinate private acquisition opportunities.",
      "Our approach is relationship-led and collaborative, drawing upon direct relationships and trusted partners across the African contemporary art ecosystem.",
    ],
    image: {
      label: "Image · Artwork",
      image: {
        src: privateArtHeroPhoto,
        alt: "A gallery corner with an orange painting of a figure seen from behind, a yellow painting and a large unframed canvas of patterned figures above a dark sofa",
      },
    } satisfies ImageSlot,
  },
  areas: {
    eyebrow: "How We Engage",
    title: "Areas of Engagement",
    items: [
      {
        numeral: "01",
        title: "Artwork Sourcing & Acquisitions",
        // Exhibition sourcing folded in (formerly its own area).
        body: "Identifying appropriate works through artists, galleries, studios and trusted art-world relationships, including artists and works for private and corporate exhibitions developed by UGO N & Co.",
      },
      {
        numeral: "02",
        title: "Private Acquisition Opportunities",
        // Private sales folded in (formerly its own area).
        body: "Facilitating access to select works that may be appropriate for individual collectors or corporate clients, including selected private sales where UGO N & Co. has a clearly defined role and the appropriate parties are involved.",
      },
      {
        numeral: "03",
        title: "Corporate Collections",
        body: "Helping corporations identify African contemporary art for executive, hospitality and corporate environments.",
      },
      {
        numeral: "04",
        title: "Collector & Gallery Introductions",
        body: "Creating thoughtful introductions between collectors and appropriate galleries, artists and other art-market participants.",
      },
    ],
  },
  collaborative: {
    title: "A Collaborative Approach",
    body: "UGO N & Co. works with artists, representing galleries, estates and trusted specialists as appropriate. Our role is to identify opportunities, facilitate relationships and help clients navigate acquisitions while respecting existing artist and gallery representation.",
  },
  ovico: {
    eyebrow: "Ovico Gallery",
    title: "Ugochi D. Nwoga is Co-owner and Curator of Ovico Gallery, a contemporary African art gallery.",
    body: [
      "Ovico Gallery remains a separate business.",
      "Where appropriate, Ovico Gallery may participate in a UGO N & Co. exhibition or art engagement alongside other galleries, artists and cultural partners.",
    ],
    linkLabel: "Visit Ovico Gallery",
    image: {
      label: "Image · Ovico Gallery",
      image: {
        src: ovicoPhoto,
        alt: "Ugochi D. Nwoga standing in front of a bright abstract painting of colored squares",
        position: "50% 0%",
      },
    } satisfies ImageSlot,
  },
};
