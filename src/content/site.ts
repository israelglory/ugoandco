import type { LinkItem } from "./types";

export const routes = {
  home: "/",
  corporate: "/corporate-finance-strategy",
  exhibitions: "/private-exhibitions",
  privateArt: "/private-art",
  strategic: "/strategic-engagements",
  about: "/about",
  contact: "/contact",
} as const;

export const navigation: LinkItem[] = [
  { label: "Home", href: routes.home },
  { label: "Corporate Finance & Strategy", href: routes.corporate },
  { label: "Private Exhibitions", href: routes.exhibitions },
  { label: "Private Art", href: routes.privateArt },
  { label: "Strategic Engagements", href: routes.strategic },
  { label: "About", href: routes.about },
  { label: "Contact", href: routes.contact },
];

export const site = {
  name: "UGO N & Co.",
  tagline: "Experience. Relationships. Execution.",
  description:
    "UGO N & Co. is a relationship-driven firm operating across business, African contemporary art and international opportunities.",
  founder: "Ugochi D. Nwoga",
  skipLink: "Skip to content",
  homeLinkLabel: "UGO N & Co. home",
  menu: {
    open: "Open menu",
    close: "Close menu",
    label: "Mobile",
  },
  mainNavLabel: "Main",
  footer: {
    areasLine: "Corporate Finance & Strategy · Private Exhibitions · Private Art · Strategic Engagements",
    navigationLabel: "Navigation",
    navAriaLabel: "Footer",
    ovico: {
      title: "Ovico Gallery",
      text: "A separate contemporary African art gallery co-owned by Ugochi D. Nwoga.",
      linkLabel: "Visit Ovico Gallery",
    },
    disclaimerLabel: "Disclaimer",
    disclaimer: [
      "UGO N & Co. provides corporate finance and strategy consulting, relationship facilitation, African contemporary art-related services, business-development support and select strategic services.",
      "UGO N & Co. does not provide legal, tax, securities brokerage, investment-management or regulated financial-advisory services. Specialized professional advice should be obtained where appropriate.",
    ],
    copyright: "© UGO N & Co. All Rights Reserved.",
  },
  externalLinkHint: "(opens in a new tab)",
};
