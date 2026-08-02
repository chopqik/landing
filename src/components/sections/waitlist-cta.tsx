// This section used to read: "Be the first to experience the fastest food
// delivery in Benin City. Join our exclusive waitlist today and get early
// access plus a special discount on your first order." — sitting directly
// above the contact form, in the largest type on the page after the hero,
// promising a discount on a first order to a customer who does not exist.
//
// It also loaded a full-bleed Unsplash photo at 20% opacity as decoration.
// That is a real download on Nigerian mobile data for no information. The
// background is now CSS, and weighs nothing.
//
// The delivery waitlist link is not lost — it is on the hero's secondary
// button, which is where a "coming later" product belongs.

import { ArrowRight } from "lucide-react";

const SUPPORT_WA = "2348063588816";

const GRAIN =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3"/><feColorMatrix type="saturate" values="0"/></filter><rect width="140" height="140" filter="url(#n)" opacity="0.32"/></svg>`,
  );

export function WaitlistCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden isolate bg-[#0E0E10]">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(242,137,28,0.13), transparent 65%), radial-gradient(40% 40% at 85% 100%, rgba(242,137,28,0.07), transparent 65%)",
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.22] mix-blend-overlay"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container relative z-10 mx-auto px-5 md:px-8 max-w-3xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#F2891C] mb-6">
          Sixty days free
        </p>

        <h2 className="text-[clamp(2rem,4.2vw,3.75rem)] font-black text-zinc-50 leading-[0.98] tracking-tight mb-6">
          Run it for two months.
          <br />
          <span className="text-[#F2891C]">Pay nothing.</span>
        </h2>

        <p className="text-base md:text-xl text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
          We build your menu, set up your tablet and train your staff. No setup
          fee, no card details, and no commission on a single sale. If it has
          not earned its place in your kitchen by then, walk away.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="inline-flex h-14 items-center justify-center px-8 rounded-full bg-[#F2891C] text-black font-bold hover:scale-[1.03] transition-transform duration-200 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2891C]"
          >
            Get ChopQik for your business
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={`https://wa.me/${SUPPORT_WA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center px-8 rounded-full border border-white/15 bg-white/[0.04] text-zinc-200 font-bold hover:bg-white/[0.08] hover:border-white/25 transition-colors"
          >
            Message us on WhatsApp
          </a>
        </div>

        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
          ₦30,000 a month after the trial · Live in Benin City
        </p>
      </div>
    </section>
  );
}
