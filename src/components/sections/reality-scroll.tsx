"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ClipboardList,
  Boxes,
  Receipt,
  CalendarCheck,
  Percent,
  WifiOff,
  ShieldCheck,
  Smartphone,
  TrendingDown,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  TYPE SCALE                                                         */
/*  Sized for a ~700px viewport by default. Scales UP on tall screens. */
/*  Never scale down as a fallback — short laptops are the common case.*/
/* ------------------------------------------------------------------ */

const H2 =
  "text-[clamp(1.75rem,2.6vw,2.5rem)] [@media(min-height:900px)]:text-[clamp(2rem,3.2vw,3.25rem)] leading-[0.98] tracking-tight";

const LEAD =
  "text-[clamp(0.9rem,1vw,0.98rem)] [@media(min-height:900px)]:text-[1.08rem] leading-relaxed";

const BODY =
  "text-[clamp(0.8rem,0.88vw,0.88rem)] [@media(min-height:900px)]:text-[0.95rem] leading-relaxed";

const ROW_TITLE =
  "text-[clamp(0.95rem,1.05vw,1.05rem)] [@media(min-height:900px)]:text-[1.15rem] leading-snug";

const CARD_TITLE =
  "text-[clamp(1rem,1.15vw,1.15rem)] [@media(min-height:900px)]:text-[1.3rem] leading-snug";

/* ------------------------------------------------------------------ */
/*  DATA — every body kept to one or two lines                         */
/* ------------------------------------------------------------------ */

const realities = [
  {
    icon: ClipboardList,
    title: "The record is a notebook",
    body: "If it gets written at all. Closing time becomes an argument with your own memory.",
  },
  {
    icon: TrendingDown,
    title: "Stock walks",
    body: "Nothing connects what entered the kitchen to what left it as a plate.",
  },
  {
    icon: Percent,
    title: "Marketplaces take a cut",
    body: "Delivery commission here runs as high as 24 percent. On food margins, that is the profit.",
  },
];

const system = [
  {
    icon: ClipboardList,
    title: "Orders and kitchen tickets",
    body: "The waiter takes it, the kitchen sees it.",
  },
  {
    icon: Boxes,
    title: "Stock that counts itself down",
    body: "Sell a bottle, the count drops. Low stock warns you first.",
  },
  {
    icon: Receipt,
    title: "Books that close themselves",
    body: "Know what you sold before you lock the door.",
  },
  {
    icon: CalendarCheck,
    title: "Tables, reservations, QR ordering",
    body: "Guests scan the table tent and order without waiting.",
  },
];

const deal = [
  {
    icon: Percent,
    title: "Zero commission. Ever.",
    body: "Same price on ₦200,000 as on ₦2,000,000.",
  },
  {
    icon: ShieldCheck,
    title: "Sixty days free",
    body: "Run it on real orders before you pay anything.",
  },
  {
    icon: WifiOff,
    title: "Works when the network doesn't",
    body: "Orders keep going offline and sync when the line returns.",
  },
  {
    icon: Smartphone,
    title: "Runs on the tablet you have",
    body: "No hardware to buy. No app store.",
  },
];

const PANELS = ["The reality", "The system", "The deal"];

/* ------------------------------------------------------------------ */
/*  ATOMS                                                              */
/* ------------------------------------------------------------------ */

const GRAIN =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3"/><feColorMatrix type="saturate" values="0"/></filter><rect width="140" height="140" filter="url(#n)" opacity="0.32"/></svg>`,
  );

function Eyebrow({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="font-mono text-[10px] tracking-[0.3em] text-[#F2891C]">
        {index}
      </span>
      <span className="h-px w-6 bg-[#F2891C]/40" />
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
        {label}
      </span>
    </div>
  );
}

function FeatureRow({
  icon: Icon,
  title,
  body,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  body: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className="flex items-start gap-3 group"
    >
      <div className="mt-0.5 w-8 h-8 shrink-0 rounded-lg flex items-center justify-center border border-white/10 bg-white/[0.03] text-[#F2891C] transition-colors duration-300 group-hover:border-[#F2891C]/40 group-hover:bg-[#F2891C]/10">
        <Icon size={15} strokeWidth={2} />
      </div>
      <div>
        <h3 className={cn("font-bold text-zinc-100 tracking-tight", ROW_TITLE)}>
          {title}
        </h3>
        <p className={cn("text-zinc-400", BODY)}>{body}</p>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  SIGNATURE — live order queue, built in DOM                         */
/* ------------------------------------------------------------------ */

const TICKET_STAGES = ["New", "Preparing", "Ready"] as const;

function OrderQueueMock() {
  const [stage, setStage] = React.useState(0);

  React.useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStage(1);
      return;
    }
    const t = setInterval(() => setStage((s) => (s + 1) % 3), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full max-w-[330px] mx-auto">
      <div
        className="absolute -inset-8 rounded-[3rem] pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 40%, rgba(242,137,28,0.22), transparent 70%)",
        }}
      />

      <div className="relative rounded-[1.25rem] border border-white/10 bg-[#141416] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.9)] overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.07]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F2891C]" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">
              Orders
            </span>
          </div>
          <span className="font-mono text-[9px] text-zinc-500">3 open</span>
        </div>

        <div className="p-3 space-y-2">
          <div className="rounded-xl border border-[#F2891C]/25 bg-[#F2891C]/[0.04] p-3">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-zinc-100 font-bold text-xs">
                  Table 7 · Dine-in
                </p>
                <p className="font-mono text-[9px] text-zinc-500 mt-0.5">
                  #0142 · 7:42 PM
                </p>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider bg-[#F2891C] text-black">
                {TICKET_STAGES[stage]}
              </span>
            </div>

            <div className="space-y-0.5 mb-2">
              {[
                ["2×", "Jollof Rice", "3,000"],
                ["1×", "Pepper Soup (Goat)", "3,500"],
                ["2×", "Chapman", "1,900"],
              ].map(([q, name, price]) => (
                <div
                  key={name}
                  className="flex items-baseline justify-between text-xs"
                >
                  <span className="text-zinc-300">
                    <span className="font-mono text-zinc-500 mr-1.5">{q}</span>
                    {name}
                  </span>
                  <span className="font-mono text-zinc-400 text-[10px]">
                    ₦{price}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/[0.07]">
              <span className="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider bg-white/[0.06] text-zinc-300 border border-white/10">
                Transfer
              </span>
              <span className="font-mono text-[13px] font-bold text-zinc-100">
                ₦8,400
              </span>
            </div>

            <div className="mt-2 flex gap-1">
              {TICKET_STAGES.map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-0.5 flex-1 rounded-full transition-colors duration-500",
                    i <= stage ? "bg-[#F2891C]" : "bg-white/10",
                  )}
                />
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Boxes size={13} className="text-zinc-500" />
              <span className="text-xs text-zinc-300">Chapman</span>
            </div>
            <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
              4 left
            </span>
          </div>

          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Receipt size={13} className="text-zinc-500" />
              <span className="text-xs text-zinc-300">Today's takings</span>
            </div>
            <span className="font-mono text-xs text-zinc-200">₦184,600</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SIGNATURE 2 — the money                                            */
/* ------------------------------------------------------------------ */

function PriceMock() {
  return (
    <div className="relative w-full max-w-[330px] mx-auto">
      <div
        className="absolute -inset-8 rounded-[3rem] pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 45%, rgba(242,137,28,0.18), transparent 70%)",
        }}
      />

      <div className="relative rounded-[1.25rem] border border-white/10 bg-[#141416] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.9)] overflow-hidden">
        <div className="px-4 py-2.5 border-b border-white/[0.07]">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">
            On ₦1,000,000 of sales
          </span>
        </div>

        <div className="p-3 space-y-2">
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 mb-1">
              A marketplace at 24%
            </p>
            <p className="font-mono text-lg font-bold text-zinc-500 line-through decoration-red-500/60 decoration-2">
              ₦240,000
            </p>
            <p className="text-[10px] text-zinc-500 mt-0.5">
              Charged again next month, and it grows as you do.
            </p>
          </div>

          <div className="rounded-xl border border-[#F2891C]/30 bg-[#F2891C]/[0.06] p-3">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#F2891C] mb-1">
              ChopQik
            </p>
            <div className="flex items-baseline gap-2">
              <p className="font-mono text-2xl font-black text-zinc-50">
                ₦30,000
              </p>
              <span className="text-xs text-zinc-400">/ month</span>
            </div>
            <p className="text-[10px] text-zinc-400 mt-0.5">
              The same ₦30,000 on ₦10,000,000. First sixty days free.
            </p>
          </div>

          <p className="font-mono text-[9px] text-zinc-600 leading-relaxed px-0.5">
            Illustration only. Your customer pays you directly — ChopQik never
            holds your money.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PANEL SHELL                                                        */
/*  pt-28 clears the fixed navbar. pb-24 clears the progress rail.     */
/* ------------------------------------------------------------------ */

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen md:h-screen w-full md:w-screen flex items-center justify-center shrink-0 pt-28 pb-20 md:pb-24">
      <div className="container mx-auto px-5 md:px-8 relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN                                                               */
/* ------------------------------------------------------------------ */

export function RealityScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  const [isDesktop, setIsDesktop] = React.useState(false);
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  React.useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      setActive(v < 0.34 ? 0 : v < 0.67 ? 1 : 2);
    });
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <section
      id="about"
      ref={targetRef}
      className="relative h-auto md:h-[300vh] bg-[#0E0E10]"
    >
      <div className="relative md:sticky md:top-0 flex flex-col md:flex-row h-auto md:h-screen items-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(70% 50% at 20% 0%, rgba(242,137,28,0.10), transparent 60%), radial-gradient(50% 40% at 90% 100%, rgba(242,137,28,0.06), transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.25] mix-blend-overlay"
          style={{ backgroundImage: `url("${GRAIN}")` }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <motion.div
          style={isDesktop ? { x } : undefined}
          className="flex flex-col md:flex-row w-full md:w-auto"
        >
          {/* ---------------- 01 — THE REALITY ---------------- */}
          <Panel>
            <div className="max-w-2xl mx-auto text-center mb-6 md:mb-8">
              <div className="flex justify-center">
                <Eyebrow index="01" label="The reality" />
              </div>
              <h2 className={cn("font-black text-zinc-50 mb-3", H2)}>
                Most kitchens are
                <br />
                <span className="text-[#F2891C]">flying blind.</span>
              </h2>
              <p className={cn("text-zinc-400 max-w-lg mx-auto", LEAD)}>
                Not because the owner doesn&apos;t care, but because nothing in
                the building is taking notes.
              </p>
            </div>

            <div className="grid gap-3.5 md:grid-cols-3 max-w-4xl mx-auto">
              {realities.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08, duration: 0.42 }}
                  className="relative rounded-[1.15rem] border border-white/[0.08] bg-white/[0.02] p-4 lg:p-5 transition-colors duration-300 hover:border-[#F2891C]/30 hover:bg-white/[0.04]"
                >
                  <span className="font-mono text-[9px] text-zinc-600 absolute top-4 right-4">
                    0{i + 1}
                  </span>
                  <div className="w-9 h-9 rounded-lg border border-white/10 bg-[#F2891C]/10 text-[#F2891C] flex items-center justify-center mb-3">
                    <item.icon size={16} strokeWidth={2} />
                  </div>
                  <h3
                    className={cn(
                      "font-bold text-zinc-100 mb-1.5 tracking-tight",
                      CARD_TITLE,
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className={cn("text-zinc-400", BODY)}>{item.body}</p>
                </motion.div>
              ))}
            </div>
          </Panel>

          {/* ---------------- 02 — THE SYSTEM ---------------- */}
          <Panel>
            <div className="flex flex-col lg:flex-row items-center gap-7 lg:gap-14 max-w-5xl mx-auto">
              <div className="lg:w-1/2 w-full order-2 lg:order-1">
                <Eyebrow index="02" label="The system" />
                <h2 className={cn("font-black text-zinc-50 mb-3", H2)}>
                  One system.
                  <br />
                  <span className="text-[#F2891C]">The whole floor.</span>
                </h2>
                <p className={cn("text-zinc-400 mb-5 max-w-md", LEAD)}>
                  Orders, kitchen, stock, tables and books on one screen. Live
                  in four kitchens in Benin City today.
                </p>
                <div className="space-y-3">
                  {system.map((item, i) => (
                    <FeatureRow key={item.title} {...item} delay={i * 0.06} />
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2 w-full order-1 lg:order-2">
                <OrderQueueMock />
              </div>
            </div>
          </Panel>

          {/* ---------------- 03 — THE DEAL ---------------- */}
          <Panel>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-7 lg:gap-14 max-w-5xl mx-auto">
              <div className="lg:w-1/2 w-full">
                <Eyebrow index="03" label="The deal" />
                <h2 className={cn("font-black text-zinc-50 mb-3", H2)}>
                  We never touch
                  <br />
                  <span className="text-[#F2891C]">your sales.</span>
                </h2>
                <p className={cn("text-zinc-400 mb-5 max-w-md", LEAD)}>
                  Thirty thousand naira a month, flat. Not a percentage, not per
                  order. Your customer pays you directly.
                </p>
                <div className="space-y-3 mb-6">
                  {deal.map((item, i) => (
                    <FeatureRow key={item.title} {...item} delay={i * 0.06} />
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#F2891C] px-6 py-2.5 text-[13px] font-bold text-black transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2891C]"
                >
                  Get ChopQik for your business
                  <ArrowRight size={15} strokeWidth={2.5} />
                </a>
              </div>

              <div className="lg:w-1/2 w-full">
                <PriceMock />
              </div>
            </div>
          </Panel>
        </motion.div>

        {/* progress rail — desktop only */}
        <div className="hidden md:flex absolute bottom-7 left-1/2 -translate-x-1/2 z-20 items-center gap-5">
          {PANELS.map((label, i) => (
            <div key={label} className="flex items-center gap-2.5">
              <span
                className={cn(
                  "h-px transition-all duration-500",
                  i === active ? "w-10 bg-[#F2891C]" : "w-5 bg-white/20",
                )}
              />
              <span
                className={cn(
                  "font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-500",
                  i === active ? "text-zinc-200" : "text-zinc-600",
                )}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
