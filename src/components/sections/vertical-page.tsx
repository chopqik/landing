// =============================================================
// Vertical landing page — shared shell
// File: src/components/sections/vertical-page.tsx
// =============================================================
// One component, four routes: /for-hotels, /for-restaurants,
// /for-bars-and-lounges, /for-online-kitchens.
//
// These exist because the homepage can only rank for roughly one
// thing, and the copy on it is restaurant-shaped. A hotel owner
// searching "hotel restaurant software Nigeria" had nothing on
// this site to land on — the keyword was in the metadata with no
// page behind it. (August 2026.)
//
// Rules for anything added here:
//   - Every claim must be true of the product TODAY. No delivery
//     network, no rider fleet, no feature that is Phase 4.
//   - Each page must say something the others do not. Four pages
//     that differ only by swapping a noun read as doorway pages
//     and rank worse than one page would.
//   - Type scale is imported from the same constants the homepage
//     uses. Do not redefine sizes here.
// =============================================================

import Link from "next/link";
import { cn } from "@/lib/utils";

const H1 =
  "text-[clamp(2rem,3.2vw,3rem)] [@media(min-height:900px)]:text-[clamp(2.25rem,3.8vw,3.75rem)] leading-[0.98] tracking-tight";

const H2 =
  "text-[clamp(1.5rem,2.2vw,2rem)] [@media(min-height:900px)]:text-[clamp(1.75rem,2.6vw,2.5rem)] leading-[1.02] tracking-tight";

const LEAD =
  "text-[clamp(0.95rem,1.1vw,1.05rem)] [@media(min-height:900px)]:text-[1.15rem] leading-relaxed";

const BODY =
  "text-[clamp(0.85rem,0.95vw,0.95rem)] [@media(min-height:900px)]:text-[1rem] leading-relaxed";

export type VerticalPain = {
  title: string;
  body: string;
};

export type VerticalFeature = {
  title: string;
  body: string;
};

export type VerticalContent = {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  lead: string;
  painHeading: string;
  pains: VerticalPain[];
  featureHeading: string;
  featureLead: string;
  features: VerticalFeature[];
  proofQuote?: string;
  proofAttribution?: string;
  closingHeading: string;
  closingBody: string;
};

export function VerticalPage({ content }: { content: VerticalContent }) {
  return (
    <div className="bg-zinc-950 text-zinc-50">
      {/* Hero */}
      <section className="container mx-auto px-5 md:px-8 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-6 bg-[#F2891C]/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              {content.eyebrow}
            </span>
          </div>
          <h1 className={cn("font-black mb-5", H1)}>
            {content.headline}
            <br />
            <span className="text-[#F2891C]">{content.headlineAccent}</span>
          </h1>
          <p className={cn("text-zinc-400 max-w-2xl mb-8", LEAD)}>
            {content.lead}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-full bg-[#F2891C] px-6 py-3 text-sm font-bold text-zinc-950 hover:bg-[#ff9d38] transition-colors"
            >
              Get ChopQik for your business
            </Link>
            <a
              href="https://wa.me/2348063588816"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-zinc-200 hover:border-[#F2891C]/50 hover:text-[#F2891C] transition-colors"
            >
              Message us on WhatsApp
            </a>
          </div>
          <p className="mt-5 text-[12px] text-zinc-500">
            Sixty days free · ₦30,000 a month after that · No commission on a
            single sale
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="border-t border-white/5">
        <div className="container mx-auto px-5 md:px-8 py-16 md:py-20">
          <h2 className={cn("font-black mb-10 max-w-2xl", H2)}>
            {content.painHeading}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {content.pains.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#F2891C]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-bold text-zinc-100 mt-3 mb-2 text-[1.05rem] leading-snug">
                  {p.title}
                </h3>
                <p className={cn("text-zinc-400", BODY)}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it does */}
      <section className="border-t border-white/5">
        <div className="container mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="max-w-2xl mb-10">
            <h2 className={cn("font-black mb-3", H2)}>
              {content.featureHeading}
            </h2>
            <p className={cn("text-zinc-400", LEAD)}>{content.featureLead}</p>
          </div>
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 max-w-4xl">
            {content.features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F2891C]" />
                <div>
                  <h3 className="font-bold text-zinc-100 mb-1.5 text-[1.05rem] leading-snug">
                    {f.title}
                  </h3>
                  <p className={cn("text-zinc-400", BODY)}>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      {content.proofQuote && (
        <section className="border-t border-white/5">
          <div className="container mx-auto px-5 md:px-8 py-16 md:py-20">
            <blockquote className="max-w-2xl">
              <p
                className={cn(
                  "font-black text-zinc-100 leading-snug text-[clamp(1.25rem,1.8vw,1.6rem)]",
                )}
              >
                &ldquo;{content.proofQuote}&rdquo;
              </p>
              <footer className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                {content.proofAttribution}
              </footer>
            </blockquote>
          </div>
        </section>
      )}

      {/* Close */}
      <section className="border-t border-white/5">
        <div className="container mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 className={cn("font-black mb-4", H2)}>
              {content.closingHeading}
            </h2>
            <p className={cn("text-zinc-400 mb-8", LEAD)}>
              {content.closingBody}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center rounded-full bg-[#F2891C] px-6 py-3 text-sm font-bold text-zinc-950 hover:bg-[#ff9d38] transition-colors"
              >
                Get ChopQik for your business
              </Link>
              <Link
                href="/#pricing"
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-zinc-200 hover:border-[#F2891C]/50 hover:text-[#F2891C] transition-colors"
              >
                See what it costs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
