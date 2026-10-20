import { routes } from "./site";
import type { PageMeta, RichHeading } from "./types";

export const corporateMeta: PageMeta = {
  title: "Corporate Finance & Strategy",
  description:
    "UGO N & Co. provides senior-level corporate finance and strategy support through fractional, interim and project-based engagements.",
};

export const corporate = {
  hero: {
    eyebrow: "Corporate Finance & Strategy",
    title: {
      text: "Experienced financial leadership for periods of growth, change and complexity.",
      accent: "complexity.",
    } satisfies RichHeading,
    lede: "UGO N & Co. provides senior-level corporate finance and strategy support through fractional, interim and project-based engagements.",
    body: "Led by Ugochi Nwoga, whose career has included senior leadership roles across finance, strategy, manufacturing, aerospace, international operations and business transformation, engagements combine financial discipline with an operator's understanding of how businesses actually work.",
    /* Design restatement of "fractional, interim and project-based engagements". */
    models: [
      { numeral: "i.", label: "Fractional" },
      { numeral: "ii.", label: "Interim" },
      { numeral: "iii.", label: "Project-based" },
    ],
  },
  services: [
    {
      numeral: "01",
      title: "Fractional & Interim CFO Leadership",
      items: [
        "Fractional CFO support",
        "Interim finance leadership",
        "Executive decision support",
        "Finance-function assessment",
        "Financial reporting and performance management",
        "Leadership during transition or growth",
      ],
    },
    {
      numeral: "02",
      title: "Strategy & Transformation",
      items: [
        "Strategic planning",
        "Business transformation",
        "Performance improvement",
        "Operating-model assessment",
        "Business-case development",
        "Growth planning",
        "Executive and board-level decision support",
      ],
    },
    {
      numeral: "03",
      title: "Transactions & Business Change",
      intro:
        "UGO N & Co. may support management teams through acquisitions, divestitures and other significant business events.",
      listLabel: "Support may include",
      items: [
        "Financial due diligence",
        "Business-case analysis",
        "Transaction preparation",
        "Financial modeling",
        "Integration planning",
        "Post-transaction integration",
        "Performance tracking",
      ],
      note: "Specialized legal, tax, valuation and regulated transaction services are provided by appropriate independent professionals.",
    },
  ],
  international: {
    eyebrow: "Across Markets",
    title: "International Business",
    body: [
      "UGO N & Co. brings particular experience and relationships across the United States and Africa, including Nigeria, together with relationships extending into Europe, South America and select markets in Asia.",
      "This perspective may support organizations considering cross-border growth, international operations, strategic partnerships, U.S.–Africa opportunities and selected market-entry initiatives.",
    ],
    /* Design restatement of the paragraph above. `primary` markets render in ink, others muted. */
    markets: [
      { label: "United States", primary: true },
      { label: "Africa", note: "incl. Nigeria", primary: true },
      { label: "Europe" },
      { label: "South America" },
      { label: "Select markets in Asia" },
    ] as { label: string; note?: string; primary?: boolean }[],
  },
  approach: {
    eyebrow: "Our Approach",
    title: "Analysis should lead to action.",
    lede: "UGO N & Co. approaches finance from an operator's perspective.",
    body: "The objective is not simply to identify what the numbers say, but to understand what is driving them, determine what management can influence and help translate financial insight into practical business decisions.",
    cta: { label: "Discuss a Corporate Finance Engagement", href: routes.contact },
  },
};
