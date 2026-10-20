import { placeholderImages } from "./placeholder-images";
import type { ImageSlot, PageMeta, RichHeading } from "./types";

export const privateArtMeta: PageMeta = {
  title: "Private Art",
  description:
    "UGO N & Co. facilitates select opportunities involving African contemporary art for collectors, corporations and private clients.",
};

export const privateArt = {
  hero: {
    eyebrow: "Private Art",
    eyebrowSecondary: "African Contemporary Art",
    title: {
      text: "Select opportunities. Trusted relationships. Discreet execution.",
      accent: "Discreet execution.",
    } satisfies RichHeading,
    lede: "UGO N & Co. facilitates select opportunities involving African contemporary art for collectors, corporations and private clients.",
    body: "Our role varies according to the engagement.",
    image: { label: "Image · Artwork", image: placeholderImages.privateArtHero } satisfies ImageSlot,
  },
  scenarios: {
    items: [
      {
        label: "The Collector",
        text: "A client may be searching for a particular African artist, body of work or type of collection.",
      },
      {
        label: "The Gallery or Artist",
        text: "A gallery or artist may have work appropriate for a collector or corporate audience.",
      },
      {
        label: "The Corporation",
        text: "A corporation may be interested in acquiring African contemporary art for a particular environment or developing a broader cultural initiative.",
      },
    ],
    closing:
      "UGO N & Co. helps determine whether there is an appropriate fit and, where useful, facilitates the relationship.",
  },
  areas: {
    eyebrow: "How We Engage",
    title: "Areas of Engagement",
    items: [
      {
        numeral: "01",
        title: "Private Art Opportunities",
        body: "Select opportunities involving African contemporary artwork, galleries, artists and collectors.",
      },
      {
        numeral: "02",
        title: "Artwork Sourcing",
        body: "Assistance identifying appropriate works through direct relationships, artists, galleries and trusted cultural partners.",
      },
      {
        numeral: "03",
        title: "Private Sales",
        body: "Select facilitation of private African contemporary art opportunities where UGO N & Co. has an appropriate role.",
      },
      {
        numeral: "04",
        title: "Corporate Art",
        body: "African contemporary artwork and artist relationships for corporate, hospitality and executive environments.",
      },
      {
        numeral: "05",
        title: "Collector Introductions",
        body: "Thoughtful introductions between collectors and appropriate artists, galleries or other art-market participants.",
      },
      {
        numeral: "06",
        title: "Exhibition Sourcing",
        body: "Identifying African contemporary artists and works for corporate and private exhibitions created by UGO N & Co.",
      },
    ],
  },
  collaborative: {
    eyebrow: "A Collaborative Model",
    title: "UGO N & Co. respects existing artist and gallery relationships.",
    lead: "Where an artist is represented by a gallery, we work with the appropriate representative.",
    body: [
      "Our role may be to identify an opportunity, facilitate an introduction, create a private presentation or help move a conversation forward.",
      "We do not position UGO N & Co. as the expert on every artist we present.",
    ],
    closing:
      "Representing galleries, artists, estates, scholars and appropriate specialists remain important sources of expertise relating to individual artists, provenance, historical context, valuation and authentication.",
  },
  ovico: {
    eyebrow: "Ovico Gallery",
    /* Source wording: "Owner and Curator". About and footer say "Co-owner". Open item for the client. */
    title: "Founder Ugochi Nwoga is also Owner and Curator of Ovico Gallery, a contemporary African art gallery.",
    body: [
      "Ovico Gallery remains a separate business.",
      "Where appropriate, Ovico Gallery may participate in a UGO N & Co. exhibition or art engagement alongside other galleries, artists and cultural partners.",
    ],
    linkLabel: "Visit Ovico Gallery",
    image: { label: "Image · Ovico Gallery", image: placeholderImages.ovicoGallery } satisfies ImageSlot,
  },
};
