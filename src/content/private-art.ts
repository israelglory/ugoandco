import { placeholderImages } from "./placeholder-images";
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
    image: { label: "Image · Artwork", image: placeholderImages.privateArtHero } satisfies ImageSlot,
  },
  areas: {
    eyebrow: "How We Engage",
    title: "Areas of Engagement",
    items: [
      {
        numeral: "01",
        title: "Artwork Sourcing & Acquisitions",
        body: "Identifying appropriate works through artists, galleries, studios and trusted art-world relationships.",
      },
      {
        numeral: "02",
        title: "Private Acquisition Opportunities",
        body: "Facilitating access to select works that may be appropriate for individual collectors or corporate clients.",
      },
      {
        numeral: "03",
        title: "Private Sale Opportunities",
        body: "Supporting selected private transactions where UGO N & Co. has a clearly defined role and the appropriate parties are involved.",
      },
      {
        numeral: "04",
        title: "Corporate Collections",
        body: "Helping corporations identify African contemporary art for executive, hospitality and corporate environments.",
      },
      {
        numeral: "05",
        title: "Collector & Gallery Introductions",
        body: "Creating thoughtful introductions between collectors and appropriate galleries, artists and other art-market participants.",
      },
      {
        numeral: "06",
        title: "Exhibition Sourcing",
        body: "Identifying artists and works for private and corporate exhibitions developed by UGO N & Co.",
      },
    ],
  },
  collaborative: {
    eyebrow: "A Collaborative Model",
    title: "UGO N & Co. respects existing artist and gallery relationships.",
    lead: "Where an artist is represented by a gallery, we work with the appropriate representative.",
    body: [
      "Our role may be to identify an opportunity, facilitate an introduction, create a private presentation or help move a conversation forward.",
      "We work collaboratively with representing galleries, artists, estates and appropriate specialists, drawing upon their expertise in relation to individual artists, provenance, historical context, valuation and authentication where required.",
    ],
    closing:
      "Representing galleries, artists, estates, scholars and appropriate specialists remain important sources of expertise relating to individual artists, provenance, historical context, valuation and authentication.",
  },
  ovico: {
    eyebrow: "Ovico Gallery",
    title: "Ugochi D. Nwoga is also Co-owner and Curator of Ovico Gallery, a contemporary African art gallery.",
    body: [
      "Ovico Gallery remains a separate business.",
      "Where appropriate, Ovico Gallery may participate in a UGO N & Co. exhibition or art engagement alongside other galleries, artists and cultural partners.",
    ],
    linkLabel: "Visit Ovico Gallery",
    image: { label: "Image · Ovico Gallery", image: placeholderImages.ovicoGallery } satisfies ImageSlot,
  },
};
