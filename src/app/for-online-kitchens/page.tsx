import type { Metadata } from "next";
import { VerticalPage, type VerticalContent } from "@/components/sections/vertical-page";

export const metadata: Metadata = {
  title: "Online Food Vendor & Cloud Kitchen Software Nigeria | ChopQik",
  description:
    "Your own ordering page, online payments straight to your account, and no commission on any sale. Built for delivery-only kitchens and online food vendors in Nigeria.",
  keywords: [
    "Online food vendor software Nigeria",
    "Cloud kitchen software Nigeria",
    "Food business ordering page Nigeria",
    "QR code ordering Nigeria",
    "Online food ordering system Nigeria",
  ],
  alternates: { canonical: "https://www.chopqik.com/for-online-kitchens" },
  openGraph: {
    title: "Online Food Vendor & Cloud Kitchen Software | ChopQik",
    description:
      "Your own ordering page and online payments straight to your account. No commission on a single sale.",
    url: "https://www.chopqik.com/for-online-kitchens",
  },
};

const content: VerticalContent = {
  eyebrow: "For online kitchens",
  headline: "Your own storefront.",
  headlineAccent: "Nobody's cut.",
  lead:
    "If you cook from a kitchen and sell through WhatsApp and Instagram, you already have the customers. What you do not have is a place to send them that takes the order properly, prices it, and puts the money in your account.",

  painHeading: "The cost of selling through other people.",
  pains: [
    {
      title: "Marketplaces take a cut",
      body: "Delivery commission in Nigeria runs as high as 24 percent. On food margins that is not a fee, that is the profit — and it is charged again next month, growing as you do.",
    },
    {
      title: "Orders arrive as messages",
      body: "A screenshot here, a voice note there, a change of mind in a third chat. Someone has to turn that into a total, and the mistakes are always in the customer's favour.",
    },
    {
      title: "The customer is not yours",
      body: "Sell through a marketplace and the relationship belongs to the marketplace. When they change their terms, you find out by earning less.",
    },
  ],

  featureHeading: "Everything a kitchen without a dining room needs.",
  featureLead:
    "You keep the customer, the margin and the phone number. ChopQik is the software underneath, on a flat fee.",
  features: [
    {
      title: "A page that is yours",
      body: "Your menu, your prices, your name, at your own link. Share it in a bio, a status or a broadcast — the same link every time.",
    },
    {
      title: "Online payment, settled to you",
      body: "Card payments through Paystack settle directly into your own bank account. ChopQik never holds, delays or takes a cut of your order money.",
    },
    {
      title: "Delivery zones you set",
      body: "Name your areas and set your own charge for each. The customer sees it before they confirm, and the fee is yours.",
    },
    {
      title: "Staff can key orders too",
      body: "The order that came in as a voice note gets typed in on the same screen and lands in the same books. Nothing lives in a separate place.",
    },
    {
      title: "Scheduled and catering orders",
      body: "Take an order for Saturday on Tuesday. Catering enquiries come in as enquiries, and you quote from them.",
    },
    {
      title: "Books that close themselves",
      body: "What you sold, how it was paid, what is still outstanding. The end of the month stops being an archaeology exercise.",
    },
  ],

  proofQuote: "This is wonderful. I love it.",
  proofAttribution: "Dina · Dina's Gourmet",

  closingHeading: "Sixty days free. Then a flat fee, forever.",
  closingBody:
    "₦30,000 a month whether you sell ₦200,000 or ₦2,000,000. Not a percentage, not per order. We build your menu from a photograph and you can be taking orders this week.",
};

export default function ForOnlineKitchensPage() {
  return <VerticalPage content={content} />;
}
