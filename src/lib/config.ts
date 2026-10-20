/**
 * TODO(client): Ovico Gallery website URL has not been provided yet.
 * While this is null, every "Visit Ovico Gallery" control renders as a
 * non-interactive label instead of a broken link.
 */
export const OVICO_URL: string | null = null;

/** Canonical origin used for metadata, sitemap and robots. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
