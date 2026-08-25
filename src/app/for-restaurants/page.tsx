import type { Metadata } from "next";
import { VerticalPage, type VerticalContent } from "@/components/sections/vertical-page";

export const metadata: Metadata = {
  title: "Restaurant Management Software Nigeria | ChopQik",
  description:
    "Orders, kitchen tickets, stock and daily takings on one screen. Built for restaurants, bukas, pizza and burger shops in Nigeria. Flat monthly fee, no commission on any sale.",
  keywords: [
    "Restaurant management software Nigeria",
    "Restaurant POS Nigeria",
    "Buka management software",
    "Kitchen display system Nigeria",
    "Restaurant software Benin City",
  ],
  alternates: { canonical: "https://www.chopqik.com/for-restaurants" },
  openGraph: {
    title: "Restaurant Management Software Nigeria | ChopQik",
    description:
      "Orders, kitchen, stock and your daily books on one screen. Flat monthly fee, no commission on a single sale.",
    url: "https://www.chopqik.com/for-restaurants",
  },
};

const content: VerticalContent = {
  eyebrow: "For restaurants",
  headline: "Know what you sold",
  headlineAccent: "before you lock up.",
  lead:
    "Whether it is a buka doing a hundred plates before noon, a pizza counter at peak, or a dining room with waiters — the order gets taken, the kitchen sees it, the stock comes down, and the day closes itself.",

  painHeading: "Most kitchens are flying blind.",
  pains: [
    {
      title: "The record is a notebook",
      body: "If it gets written at all. Closing time becomes an argument with your own memory, and the number you land on is the number you believe.",
    },
    {
      title: "The kitchen finds out by shouting",
      body: "A waiter calls it through a doorway. It gets misheard, or it gets forgotten in a rush, and the customer waits for something nobody started.",
    },
    {
      title: "Stock walks",
      body: "Nothing connects what entered the kitchen with what left it as a plate. By the time the gap is visible in the bank balance, the trail is months cold.",
    },
  ],

  featureHeading: "One screen, the whole floor.",
  featureLead:
    "Runs on the tablet or phone you already own. No hardware to buy, no app store, and it keeps working when the network does not.",
  features: [
    {
      title: "Orders and kitchen tickets",
      body: "The waiter takes it, the kitchen sees it. Tickets move New, Preparing, Ready, Done — so anyone can see what is outstanding without asking.",
    },
    {
      title: "Counter service without a waiter",
      body: "A standalone kitchen screen and a customer-facing board on a TV. The customer sees their number come up. Nobody shouts.",
    },
    {
      title: "Availability in one tap",
      body: "Jollof finished? Switch it off and it leaves the menu instantly. The argument at the table never happens.",
    },
    {
      title: "Stock that counts itself down",
      body: "Sell a plate, the ingredients drop. At zero the item takes itself off the menu. Low stock warns you before Friday.",
    },
    {
      title: "Books that close themselves",
      body: "Taken today, split by cash, POS and transfer, with what is still unpaid. Every figure traces back to a ticket.",
    },
    {
      title: "Works when the network drops",
      body: "Orders keep going during an outage and sync when the line returns. Nothing is lost and nobody has to remember.",
    },
  ],

  proofQuote:
    "It is helping me keep my records better. I know what I sold before I close.",
  proofAttribution: "Madam Ofejiro · Ofejiro Stop Over",

  closingHeading: "Live by the weekend.",
  closingBody:
    "Send a photograph of your menu on WhatsApp and we enter every item, price and category for you. About an hour of training for your staff. Sixty days free, then ₦30,000 a month, flat — the same on ₦200,000 of sales as on ₦2,000,000.",
};

export default function ForRestaurantsPage() {
  return <VerticalPage content={content} />;
}
