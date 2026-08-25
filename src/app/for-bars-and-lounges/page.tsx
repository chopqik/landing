import type { Metadata } from "next";
import { VerticalPage, type VerticalContent } from "@/components/sections/vertical-page";

export const metadata: Metadata = {
  title: "Bar & Lounge Stock Control Software Nigeria | ChopQik",
  description:
    "Bottle-level stock control, tab management and a nightly cash position for bars and lounges in Nigeria. See what came in, what sold and what is missing. Flat monthly fee, no commission.",
  keywords: [
    "Bar stock control Nigeria",
    "Lounge management software Nigeria",
    "Bar inventory software Nigeria",
    "Nightclub stock control Nigeria",
    "Bar POS Benin City",
  ],
  alternates: { canonical: "https://www.chopqik.com/for-bars-and-lounges" },
  openGraph: {
    title: "Bar & Lounge Stock Control Software | ChopQik",
    description:
      "Bottle-level stock, open tabs and a nightly cash position. Flat monthly fee, no commission on a single sale.",
    url: "https://www.chopqik.com/for-bars-and-lounges",
  },
};

const content: VerticalContent = {
  eyebrow: "For bars and lounges",
  headline: "Count the crate in.",
  headlineAccent: "Count the money out.",
  lead:
    "A bar is the easiest business in Nigeria to lose money in quietly. Stock is small, portable and popular, the trade is fast, and it happens at night. ChopQik makes the two numbers meet.",

  painHeading: "The gap nobody can point at.",
  pains: [
    {
      title: "Crates in, bottles out, no line between them",
      body: "The delivery is signed for on Monday. The takings look normal all week. Whether those two agree is a question nobody can answer without counting by hand.",
    },
    {
      title: "Shifts hand over in the dark",
      body: "Different people behind the bar on different nights. When a figure looks wrong there is no way to say which night it went wrong on, so nothing gets said at all.",
    },
    {
      title: "Tabs live on paper and in memory",
      body: "A table runs a tab, someone leaves, and the round that was never rung up stops existing. It shows up as slow trade rather than as a loss.",
    },
  ],

  featureHeading: "Stock control that fits behind a bar.",
  featureLead:
    "Fast enough for a busy night, and specific enough that a discrepancy has a name and a time attached to it.",
  features: [
    {
      title: "Sell a bottle, the count drops",
      body: "Stock moves the moment the order is placed, not at a stocktake weeks later. At zero the item takes itself off the menu.",
    },
    {
      title: "Low stock warns you first",
      body: "A red count on the item before the weekend, not an empty shelf during it. Reorder while the supplier is still answering.",
    },
    {
      title: "Open tabs stay visible",
      body: "A table that has been served but not settled sits in a queue in front of whoever is working, oldest first — instead of relying on someone remembering.",
    },
    {
      title: "Stock is manager-only",
      body: "Staff sell. Only a manager adjusts a count, and the password is asked for every single time and re-locks the moment they tap away.",
    },
    {
      title: "Every movement has a name on it",
      body: "Who took the order, who edited it, who cancelled it. Not surveillance — just the difference between suspecting and knowing.",
    },
    {
      title: "The night closes with a number",
      body: "Taken tonight, split by cash, POS and transfer, against what stock moved. If they disagree, you find out tonight.",
    },
  ],

  closingHeading: "Run it for two months. Pay nothing.",
  closingBody:
    "We load your drinks list, set up the tablet you already own, and train your staff in about an hour. Sixty days free, then ₦30,000 a month, flat. No commission on a single sale, and your customer pays you directly — ChopQik never holds your money.",
};

export default function ForBarsAndLoungesPage() {
  return <VerticalPage content={content} />;
}
