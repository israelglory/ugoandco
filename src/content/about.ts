import ugochiPortrait from "@/assets/images/ugochi-nwoga.jpg";
import { routes } from "./site";
import type { ImageSlot, PageMeta, RichHeading } from "./types";

export const aboutMeta: PageMeta = {
  title: "About",
  description:
    "UGO N & Co. brings together Ugochi D. Nwoga's experience across corporate leadership, international business, entrepreneurship, relationships and African contemporary art.",
};

export const about = {
  hero: {
    eyebrow: "About UGO N & Co.",
    title: {
      text: "Different disciplines. One underlying strength.",
      accent: "One underlying strength.",
    } satisfies RichHeading,
    body: "UGO N & Co. brings together Ugochi D. Nwoga's experience across corporate leadership, international business, entrepreneurship, relationships and African contemporary art.",
    areasLabel: "The firm operates across four areas",
    areas: [
      { label: "Corporate Finance & Strategy", href: routes.corporate },
      { label: "Private Exhibitions", href: routes.exhibitions },
      { label: "Private Art Acquisitions", href: routes.privateArt },
      { label: "Strategic Engagements", href: routes.strategic },
    ],
  },
  approach: {
    title: "While these engagements may appear different, the approach is consistent:",
    steps: [
      "Understand the objective.",
      "Determine where our experience can genuinely contribute.",
      "Identify the appropriate people and resources.",
      "Execute thoughtfully.",
    ],
  },
  founder: {
    eyebrow: "About Ugochi D. Nwoga",
    name: "Ugochi D. Nwoga",
    role: "Founder & Director, UGO N & Co.",
    lede: "Ugochi D. Nwoga is a corporate finance and strategy executive, entrepreneur, investor and gallery owner with more than two decades of experience across aerospace, manufacturing, healthcare, agriculture, financial services and African contemporary art.",
    body: [
      "Her career combines senior-level financial leadership within multinational corporations with direct experience building, scaling, financing and selling entrepreneurial businesses.",
      "At United Technologies Corporation (now Raytheon Technologies Corporation), including Sikorsky Aircraft and Pratt & Whitney, Ugochi held progressively senior finance roles across the United States and Europe. At Pratt & Whitney, she managed financial responsibility for a $700 million engine-center. At Sikorsky, she oversaw financial planning and analysis for a $5 billion P&L.",
      "Her international corporate experience also includes assignments in Norway and Switzerland, where she worked across finance, internal controls, commercial pricing, supply chain and multinational operating relationships. She was a team-lead on the commissioning of the largest acquisition of PW history –$1 billion dollars and led the transition of approximately $800 million in aircraft parts between Pratt & Whitney and Rolls-Royce. She received multiple Pratt & Whitney Outstanding Achievement Awards for finance excellence.",
      "In Nigeria, Ugochi served as Group CFO and General Manager of Finance & Supply Chain for The Candel Company Limited, an agro-input manufacturer operating across West Africa. She led a strategic turnaround from trading to manufacturing that delivered successful results in revenue growth and cost reduction. She also led capital-raising and restructuring initiatives with banks and private equity companies.",
      "Her entrepreneurial experience includes co-founding Aerial Industries, one of Nigeria's first agro-drone company. She secured relationships with organizations including GE, Airbus and the Tony Elumelu Foundation. The company was recognized as a Global Innovator and featured on CNN African Voices and in Airbus's first Aerospace in Africa publication.",
      "Ugochi later served as Chief Finance & Strategy Officer of TLay Healthcare Services, where she helped drive growth, improve profitability and expand the business into a new market. She ultimately led the company through a successful sale to a strategic buyer, managing the transaction from financial due diligence and valuation modeling through deal structuring, negotiations and closing.",
      "She currently serves as CFO of AiDE Money, a financial-services platform focused on facilitating projects and transactions between Africa and the African diaspora, including partnerships with institutions such as Afreximbank in Cairo, Egypt.",
      "Ugochi is also Co-owner and Curator of Ovico Gallery, a contemporary African art gallery. Through Ovico, she has built relationships across the African contemporary art ecosystem and led exhibitions, collector engagement, artist representation, institutional outreach and art sales.",
    ],
    closing:
      "Her experience across corporate finance, M&A, capital raising, entrepreneurship, cross-border business and contemporary African art forms the foundation of UGO N & Co., whose work spans Finance & Strategy, African Contemporary Art and Global Partnerships.",
    portrait: {
      label: "Portrait · Ugochi D. Nwoga",
      image: { src: ugochiPortrait, alt: "Portrait of Ugochi D. Nwoga", position: "47% 50%" },
    } satisfies ImageSlot,
  },
  international: {
    title: "International Perspective",
    body: [
      "Ugochi's professional and entrepreneurial work has created particularly strong experience and relationships across the United States and Africa, with significant familiarity with Nigeria. Her relationships also extend into Europe, South America and select markets in Asia.",
      "The firm draws selectively upon direct relationships, trusted collaborators and relevant professional networks according to the specific needs of each engagement.",
    ],
  },
  education: {
    title: "Education",
    /* Restatement of: "Ugochi holds an MBA from Northwestern University's Kellogg School of Management, with international study experience in the United States, China and Israel; a Master of Professional Studies in Supply Chain Management from Penn State University's Smeal College of Business; and a Bachelor of Science in Business Administration from Florida A&M University's School of Business & Industry." */
    degrees: [
      {
        degree: "MBA",
        school: "Northwestern University's Kellogg School of Management",
        note: "with international study experience in the United States, China and Israel",
      },
      {
        degree: "Master of Professional Studies in Supply Chain Management",
        school: "Penn State University's Smeal College of Business",
      },
      {
        degree: "Bachelor of Science in Business Administration",
        school: "Florida A&M University's School of Business & Industry",
      },
    ] as { degree: string; school: string; note?: string }[],
  },
  ovico: {
    eyebrow: "Ovico Gallery",
    title: "Ugochi is Co-owner and Curator of Ovico Gallery, a contemporary African art gallery.",
    body: "Ovico Gallery and UGO N & Co. operate as distinct businesses while collaborating where an opportunity appropriately brings their respective capabilities together.",
    linkLabel: "Visit Ovico Gallery",
  },
};
