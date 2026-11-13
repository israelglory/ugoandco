/** Ovico Gallery website. "Visit Ovico Gallery" links open it in a new tab. */
export const OVICO_URL = "https://ovicogallery.com/";

/** Canonical origin used for metadata, sitemap and robots. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
