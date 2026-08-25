import type { Metadata } from "next";
import { VerticalPage, type VerticalContent } from "@/components/sections/vertical-page";

export const metadata: Metadata = {
  title: "Hotel Restaurant & Room Service Software Nigeria | ChopQik",
  description:
    "Run your hotel restaurant, bar and room service on one screen. Orders reach the kitchen, unpaid bills stay in front of reception until they are settled. Flat monthly fee, no commission.",
  keywords: [
    "Hotel restaurant software Nigeria",
    "Room service order system Nigeria",
    "Hotel bar stock control Nigeria",
    "Hotel POS Benin City",
    "Hotel kitchen management software",
  ],
  alternates: { canonical: "https://www.chopqik.com/for-hotels" },
  openGraph: {
    title: "Hotel Restaurant & Room Service Software | ChopQik",
    description:
      "Orders, kitchen, room service and unpaid bills on one screen. Flat monthly fee, no commission on a single sale.",
    url: "https://www.chopqik.com/for-hotels",
  },
};

const content: VerticalContent = {
  eyebrow: "For hotels",
  headline: "The restaurant is not",
  headlineAccent: "the hard part.",
  lead:
    "A hotel kitchen serves a dining room, a bar and the rooms upstairs, across shifts, with staff who change. ChopQik puts all three on one screen and keeps every unsettled bill in front of reception until the money is collected.",

  painHeading: "Where hotel kitchens lose money.",
  pains: [
    {
      title: "The guest eats before they pay",
      body: "Room service is served, the tray goes up, and the bill lives in someone's head until checkout. Some of it gets to the desk. Some of it does not.",
    },
    {
      title: "Nobody owns the bar stock",
      body: "The bar runs across shifts with different people behind it. Nothing connects what was delivered on Monday to what was sold by Friday, so shrinkage looks like ordinary trade.",
    },
    {
      title: "Staff turn over faster than training",
      body: "A new person starts, nobody has an hour to teach a system, and the system quietly stops being used. That is not a software problem until it is.",
    },
  ],

  featureHeading: "Built around how a hotel actually runs.",
  featureLead:
    "Not a restaurant product with a room-number field bolted on. These are the things a hotel asked for and got.",
  features: [
    {
      title: "Room service that knows the room",
      body: "Orders carry the room number from the moment they are taken. The kitchen sees it, the ticket shows it, and reception sees it on the bill.",
    },
    {
      title: "A To collect queue",
      body: "Serve first, settle later. An order that has been delivered but not paid stays in front of reception, oldest first, with the room on it — instead of disappearing into a history nobody opens mid-shift.",
    },
    {
      title: "Stock that counts itself down",
      body: "Sell a bottle, the count drops. Low stock warns you before the weekend rather than after it. Stock is manager-only, so the person who sells is not the person who adjusts.",
    },
    {
      title: "Staff see only their part",
      body: "Waiting staff work orders and availability. Stock, analytics and customer records are behind a manager password that re-locks the moment they tap away.",
    },
    {
      title: "Every change leaves a trace",
      body: "Who edited an order, who cancelled one, who marked it paid. Not to catch people out, but so the question has an answer.",
    },
    {
      title: "A one-page guide for the wall",
      body: "New staff learn the screen from a printed sheet showing the same icons the tablet shows. Onboarding survives without you standing there.",
    },
  ],

  proofQuote: "It is reducing theft in the hotel kitchen. Thank you.",
  proofAttribution: "A hotel in Benin City",

  closingHeading: "Run it for two months. Pay nothing.",
  closingBody:
    "We build your menu from a photograph, set up the tablet you already own, and train your staff. No setup fee, no card, no commission on a single sale. If it has not earned its place by then, walk away.",
};

export default function ForHotelsPage() {
  return <VerticalPage content={content} />;
}
