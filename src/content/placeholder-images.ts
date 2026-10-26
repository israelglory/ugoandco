import galleryCorner from "@/assets/images/placeholders/gallery-corner.jpg";
import galleryInstallation from "@/assets/images/placeholders/gallery-installation.jpg";
import galleryReception from "@/assets/images/placeholders/gallery-reception.jpg";
import type { ImageSlot } from "./types";

type SlotImage = NonNullable<ImageSlot["image"]>;

/*
 * TEMPORARY: event and gallery photos standing in until the client supplies final
 * photography. Replace an entry (or remove it to show the hatched placeholder again).
 * Each slot's crop is set with `position` (CSS object-position).
 */
export const placeholderImages = {
  exhibitionsHero: {
    src: galleryInstallation,
    alt: "A gallery installation with paintings on dark and white walls and carved masks on a draped table",
  },
  exhibitionsDetail: {
    src: galleryReception,
    alt: "Guests in conversation beside an orange abstract painting at a gallery reception",
    position: "38% 50%",
  },
  privateArtHero: {
    src: galleryCorner,
    alt: "A gallery corner with a large patterned painting of a face, a green figurative painting and carved and beaded sculptures",
    position: "50% 30%",
  },
  ovicoGallery: {
    src: galleryInstallation,
    alt: "A gallery room hung with paintings, with an easel and carved masks on a draped table",
  },
} satisfies Record<string, SlotImage>;
