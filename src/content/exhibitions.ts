import { routes } from "./site";
import type { ImageSlot, PageMeta, RichHeading } from "./types";

export const exhibitionsMeta: PageMeta = {
  title: "Private Exhibitions",
  description:
    "UGO N & Co. creates invitation-only African contemporary art exhibitions for corporations, private banks, professional firms, executive groups and other organizations seeking distinctive cultural experiences for their clients and communities.",
};

export const exhibitions = {
  hero: {
    eyebrow: "Private Exhibitions",
    title: {
      text: "African contemporary art. Private audiences. Meaningful conversation.",
      accent: "Meaningful conversation.",
    } satisfies RichHeading,
    lede: "UGO N & Co. creates invitation-only African contemporary art exhibitions for corporations, private banks, professional firms, executive groups and other organizations seeking distinctive cultural experiences for their clients and communities.",
    cta: { label: "Discuss a Private Exhibition", href: routes.contact },
    image: { label: "Image · Private exhibition installation" } satisfies ImageSlot,
  },
  audience: {
    emphasis:
      "The emphasis is on creating thoughtfully conceived experiences around artists and artistic practices connected to the African continent.",
    title: { text: "Each exhibition begins with the audience.", accent: "audience." } satisfies RichHeading,
    body: [
      "We consider who will attend, the environment, the purpose of the gathering and the conversation the organization hopes to create.",
      "From there, UGO N & Co. develops an exhibition concept and works with appropriate artists, galleries, studios and cultural partners to identify works that support that vision.",
    ],
  },
  why: {
    eyebrow: "Why African Contemporary Art?",
    statement:
      "African contemporary art represents an extraordinary range of artistic practices, perspectives, geographies and cultural histories.",
    body: [
      "UGO N & Co. creates opportunities for corporate and private audiences to encounter these artists in more intimate settings, outside of the traditional gallery, museum or art-fair environment.",
      "Our role is not to present African contemporary art as a single aesthetic or narrative.",
    ],
    closing: "Instead, each exhibition is developed around individual artistic practices and a clear curatorial idea.",
    image: { label: "Image · Artwork detail" } satisfies ImageSlot,
  },
  experiences: {
    eyebrow: "Private Client Experiences",
    title: "A private exhibition can create a different kind of environment for corporate relationships.",
    body: "Guests may encounter artists and work they have not previously experienced, participate in meaningful conversation and, where appropriate, explore opportunities to collect.",
    listLabel: "Experiences may include",
    items: [
      "Private corporate exhibitions",
      "Private-bank client events",
      "Collector salons",
      "Executive receptions",
      "Artist conversations",
      "Curated dinners",
      "Cultural programming",
      "Invitation-only acquisition opportunities",
    ],
  },
  concepts: {
    eyebrow: "Exhibitions",
    title: "Possible Exhibition Concepts",
    items: [
      {
        numeral: "I",
        title: "Contemporary Africa: Perspectives & Possibilities",
        body: "A presentation of distinct artistic practices emerging from and engaging with contemporary Africa.",
      },
      {
        numeral: "II",
        title: "Africa in Conversation",
        body: "Exploring how contemporary African artists address identity, place, history, memory and global experience.",
      },
      {
        numeral: "III",
        title: "Art, Capital & Legacy",
        body: "A private exhibition exploring art, collecting and cultural legacy through contemporary African artistic practices.",
      },
      {
        numeral: "IV",
        title: "The African Collector's Salon",
        body: "An intimate presentation introducing selected artists and works to a private audience.",
      },
    ],
    featured: {
      numeral: "V",
      title: "Africa & the Diaspora",
      body: [
        "For selected exhibitions, African contemporary artists may be presented in dialogue with artists of African descent working elsewhere in the world.",
        "The focus, however, remains anchored in contemporary African art and its broader global conversations.",
      ],
    },
  },
  howWeWork: {
    eyebrow: "How We Work",
    title: "UGO N & Co. does not maintain a large fixed roster of artists.",
    body: [
      "Instead, we develop the concept first and then identify appropriate artists and works through direct relationships, representing galleries, artist studios and trusted collaborators.",
      "This approach allows each exhibition to be developed specifically for the host and its audience rather than selected from predetermined inventory.",
    ],
  },
  experience: {
    title: "The Experience",
    intro: "Depending upon the engagement, UGO N & Co. may coordinate:",
    columns: [
      [
        "Exhibition concept development",
        "Artist and artwork identification",
        "Gallery and studio relationships",
        "Artwork availability",
        "Exhibition planning",
        "Installation coordination",
        "Artist participation",
      ],
      [
        "Exhibition materials",
        "Private previews",
        "Collector conversations",
        "Artwork inquiries",
        "Acquisition introductions",
        "Post-event follow-up",
      ],
    ],
    note: "Specialized art handlers, insurers, logistics providers and installation professionals are engaged where appropriate.",
  },
  whoWeWorkWith: {
    eyebrow: "Who We Work With",
    title: "Private exhibitions may be particularly appropriate for:",
    items: [
      "Private banks and wealth-management firms",
      "Family-office communities",
      "Law and professional-services firms",
      "Corporate leadership groups",
      "Luxury brands",
      "Real-estate and hospitality organizations",
      "Private clubs",
      "Corporate foundations",
      "Cultural and nonprofit organizations",
    ],
    cta: { label: "Discuss a Private Exhibition", href: routes.contact },
  },
};
