import galleryCorner from "@/assets/images/placeholders/gallery-corner.jpg";
import type { ImageSlot } from "./types";

type SlotImage = NonNullable<ImageSlot["image"]>;

/*
 * TEMPORARY: event and gallery photos standing in until the client supplies final
 * photography. Replace an entry (or remove it to show the hatched placeholder again).
 * Each slot's crop is set with `position` (CSS object-position).
 */
export const placeholderImages = {
  privateArtHero: {
    src: galleryCorner,
    alt: "A gallery corner with a large patterned painting of a face, a green figurative painting and carved and beaded sculptures",
    position: "50% 30%",
  },
} satisfies Record<string, SlotImage>;
