import type { StaticImageData } from "next/image";

/** A heading whose `accent` phrase (a substring of `text`) renders in italic gold. */
export type RichHeading = {
  text: string;
  accent?: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type PageMeta = {
  title: string;
  description: string;
};

/** An image slot. Leave `image` undefined to show the hatched placeholder with `label`. */
export type ImageSlot = {
  label: string;
  image?: {
    src: string | StaticImageData;
    alt: string;
  };
};
