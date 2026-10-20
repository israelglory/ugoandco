import { routes } from "./site";
import type { PageMeta, RichHeading } from "./types";

export const strategicMeta: PageMeta = {
  title: "Strategic Engagements",
  description:
    "Not every business opportunity fits neatly within a traditional consulting engagement. UGO N & Co. accepts select projects where our corporate experience, international perspective, relationships or ability to bring parties together can help advance a clearly defined objective.",
};

export const strategic = {
  hero: {
    eyebrow: "Strategic Engagements",
    title: {
      text: "Select opportunities where experience, relationships and execution matter.",
      accent: "matter.",
    } satisfies RichHeading,
    lede: "Not every business opportunity fits neatly within a traditional consulting engagement.",
    body: "UGO N & Co. accepts select projects where our corporate experience, international perspective, relationships or ability to bring parties together can help advance a clearly defined objective.",
  },
  selective: {
    title: "These engagements are intentionally selective.",
    lead: "We do not position the firm as having access to every executive, organization or opportunity.",
    body: "Instead, we determine where our experience and relationships are relevant and establish a clear role before proceeding.",
  },
  panels: [
    {
      numeral: "01",
      title: "Strategic Introductions",
      body: [
        "Thoughtfully connecting individuals or organizations where there is a clear business rationale and potential mutual value.",
      ],
    },
    {
      numeral: "02",
      title: "Business Development",
      body: [
        "Supporting organizations seeking to develop relevant commercial relationships, identify strategic partners or explore selected markets.",
      ],
    },
    {
      numeral: "03",
      title: "U.S.–Africa Opportunities",
      tone: "paper",
      lead: "UGO N & Co. has particular strength at the intersection of the United States and Africa.",
      body: [
        "Our experience and relationships may support selected commercial, cultural and institutional opportunities connecting organizations across these markets.",
        "Nigeria represents an area of particular familiarity, while our relationships extend more broadly across Africa and into other international markets.",
      ],
    },
    {
      numeral: "04",
      title: "Special Projects",
      tone: "paper",
      body: ["Bespoke assignments requiring a combination of:"],
      chips: [
        "Strategic thinking",
        "Business analysis",
        "Relationship management",
        "Research",
        "Coordination",
        "Project leadership",
        "Execution",
      ],
    },
  ] as {
    numeral: string;
    title: string;
    tone?: "paper";
    lead?: string;
    body: string[];
    chips?: string[];
  }[],
  transactions: {
    label: "Please Note",
    title: "Transaction-Related Engagements",
    body: [
      "UGO N & Co. may support selected commercial opportunities through introductions, business development or transaction-related consulting where appropriate.",
      "The firm's role, scope and compensation are established according to the particular engagement and applicable legal and regulatory requirements.",
    ],
    emphasis:
      "UGO N & Co. does not provide securities brokerage, investment management, legal services or regulated financial-advisory services.",
    cta: { label: "Discuss a Strategic Engagement", href: routes.contact },
  },
};
