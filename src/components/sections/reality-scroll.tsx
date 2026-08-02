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
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const realities = [
  {
    icon: ClipboardList,
    title: "The record is a notebook",
    body: "If it gets written at all. Closing time becomes an argument with your own memory about what actually went out today.",
  },
  {
    icon: TrendingDown,
    title: "Stock walks",
    body: "Nothing connects what came into the kitchen to what left it as a plate. The gap stays invisible until it is already large.",
  },
  {
    icon: Percent,
    title: "Marketplaces take a cut of every plate",
    body: "Commission on food delivery in this city runs as high as 24 percent. On restaurant margins, that is most of the profit.",
  },
];

const system = [
  {
    icon: ClipboardList,
    title: "Orders and kitchen tickets",
    body: "The waiter takes it, the kitchen sees it. Nobody shouts across the room.",
  },
  {
    icon: Boxes,
    title: "Stock that counts itself down",
    body: "Sell a bottle, the count drops. Low stock warns you before a customer does.",
  },
  {
    icon: Receipt,
    title: "Books that close themselves",
    body: "Know what you sold before you lock the door, not three days later.",
  },
  {
    icon: CalendarCheck,
    title: "Tables, reservations, QR ordering",
    body: "Guests scan the tent on the table and order without waiting to be seen.",
  },
];

const deal = [
  {
    icon: Percent,
    title: "Zero commission. Ever.",
    body: "The price is the price whether you do two hundred thousand this month or two million.",
  },
  {
    icon: ShieldCheck,
    title: "Sixty days free",
    body: "Run the whole system on real orders before you pay us anything.",
  },
  {
    icon: WifiOff,
    title: "Works when the network doesn't",
    body: "Orders keep going while you are offline and sync themselves when the line returns.",
  },
  {
    icon: Smartphone,
    title: "Runs on the tablet you already have",
    body: "No hardware to buy, no app store, no installation visit.",
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
    <div className="flex items-center gap-3 mb-6">
      <span className="font-mono text-[11px] tracking-[0.3em] text-[#F2891C]">
        {index}
      </span>
      <span className="h-px w-8 bg-[#F2891C]/40" />
      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">
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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="flex items-start gap-4 group"
    >
      <div className="mt-0.5 w-10 h-10 shrink-0 rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.03] text-[#F2891C] transition-colors duration-300 group-hover:border-[#F2891C]/40 group-hover:bg-[#F2891C]/10">
        <Icon size={18} strokeWidth={2} />
      </div>
      <div>
        <h3 className="text-base md:text-lg font-bold text-zinc-100 mb-1 tracking-tight">
          {title}
        </h3>
        <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
          {body}
        </p>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  SIGNATURE — live order queue, built in DOM, no images              */
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
    <div className="relative w-full max-w-[420px] mx-auto">
      {/* glow behind the device */}
      <div
        className="absolute -inset-8 rounded-[3rem] pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 40%, rgba(242,137,28,0.22), transparent 70%)",
        }}
      />

      <div className="relative rounded-[1.75rem] border border-white/10 bg-[#141416] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* app bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.07]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#F2891C]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">
              Orders
            </span>
          </div>
          <span className="font-mono text-[11px] text-zinc-500">3 open</span>
        </div>

        {/* active ticket */}
        <div className="p-5 space-y-3">
          <div className="rounded-2xl border border-[#F2891C]/25 bg-[#F2891C]/[0.04] p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-zinc-100 font-bold text-sm">
                  Table 7 · Dine-in
                </p>
                <p className="font-mono text-[11px] text-zinc-500 mt-0.5">
                  #0142 · 7:42 PM
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F2891C] text-black">
                {TICKET_STAGES[stage]}
              </span>
            </div>

            <div className="space-y-1.5 mb-3">
              {[
                ["2×", "Jollof Rice", "3,000"],
                ["1×", "Pepper Soup (Goat)", "3,500"],
                ["2×", "Chapman", "1,900"],
              ].map(([q, name, price]) => (
                <div
                  key={name}
                  className="flex items-baseline justify-between text-sm"
                >
                  <span className="text-zinc-300">
                    <span className="font-mono text-zinc-500 mr-2">{q}</span>
                    {name}
                  </span>
                  <span className="font-mono text-zinc-400 text-xs">
                    ₦{price}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/[0.07]">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/[0.06] text-zinc-300 border border-white/10">
                Transfer
              </span>
              <span className="font-mono text-base font-bold text-zinc-100">
                ₦8,400
              </span>
            </div>

            {/* progress */}
            <div className="mt-3 flex gap-1">
              {TICKET_STAGES.map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-1 flex-1 rounded-full transition-colors duration-500",
                    i <= stage ? "bg-[#F2891C]" : "bg-white/10",
                  )}
                />
              ))}
            </div>
          </div>

          {/* low stock strip */}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Boxes size={15} className="text-zinc-500" />
              <span className="text-sm text-zinc-300">Chapman</span>
            </div>
            <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
              4 left
            </span>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Receipt size={15} className="text-zinc-500" />
              <span className="text-sm text-zinc-300">Today's takings</span>
            </div>
            <span className="font-mono text-sm text-zinc-200">₦184,600</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SIGNATURE 2 — the money, side by side                              */
/* ------------------------------------------------------------------ */

function PriceMock() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      <div
        className="absolute -inset-8 rounded-[3rem] pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 45%, rgba(242,137,28,0.18), transparent 70%)",
        }}
      />

      <div className="relative rounded-[1.75rem] border border-white/10 bg-[#141416] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.9)] overflow-hidden">
        <div className="px-5 py-3.5 border-b border-white/[0.07]">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">
            On ₦1,000,000 of sales
          </span>
        </div>

        <div className="p-5 space-y-3">
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-2">
              A marketplace at 24%
            </p>
            <p className="font-mono text-2xl font-bold text-zinc-500 line-through decoration-red-500/60 decoration-2">
              ₦240,000
            </p>
            <p className="text-xs text-zinc-500 mt-1.5">
              Charged again next month, and it grows as you do.
            </p>
          </div>

          <div className="rounded-2xl border border-[#F2891C]/30 bg-[#F2891C]/[0.06] p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F2891C] mb-2">
              ChopQik
            </p>
            <div className="flex items-baseline gap-2">
              <p className="font-mono text-3xl font-black text-zinc-50">
                ₦30,000
              </p>
              <span className="text-sm text-zinc-400">/ month</span>
            </div>
            <p className="text-xs text-zinc-400 mt-1.5">
              The same ₦30,000 on ₦10,000,000. First sixty days free.
            </p>
          </div>

          <p className="font-mono text-[11px] text-zinc-600 leading-relaxed px-1">
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
/* ------------------------------------------------------------------ */

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen md:h-screen w-full md:w-screen flex items-center justify-center shrink-0 py-24 md:py-0">
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
        {/* atmosphere — static, no infinite animation */}
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
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <div className="flex justify-center">
                <Eyebrow index="01" label="The reality" />
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-zinc-50 tracking-tight leading-[0.95] mb-6">
                Most kitchens are
                <br />
                <span className="text-[#F2891C]">flying blind.</span>
              </h2>
              <p className="text-base md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Not because the owner doesn't care. Because nothing in the
                building is writing anything down.
              </p>
            </div>

            <div className="grid gap-4 md:gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              {realities.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] p-6 md:p-7 transition-colors duration-300 hover:border-[#F2891C]/30 hover:bg-white/[0.04]"
                >
                  <span className="font-mono text-[11px] text-zinc-600 absolute top-6 right-6">
                    0{i + 1}
                  </span>
                  <div className="w-11 h-11 rounded-xl border border-white/10 bg-[#F2891C]/10 text-[#F2891C] flex items-center justify-center mb-5">
                    <item.icon size={19} strokeWidth={2} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-zinc-100 mb-2.5 tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </Panel>

          {/* ---------------- 02 — THE SYSTEM ---------------- */}
          <Panel>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto">
              <div className="lg:w-1/2 w-full order-2 lg:order-1">
                <Eyebrow index="02" label="The system" />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-50 tracking-tight leading-[0.95] mb-5">
                  One system.
                  <br />
                  <span className="text-[#F2891C]">The whole floor.</span>
                </h2>
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-9 max-w-lg">
                  Orders, kitchen, stock, tables and books, running on the
                  tablet on your counter. Live in four kitchens in Benin City
                  today, from a hotel restaurant to a delivery-only kitchen.
                </p>
                <div className="space-y-6">
                  {system.map((item, i) => (
                    <FeatureRow key={item.title} {...item} delay={i * 0.08} />
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
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 max-w-6xl mx-auto">
              <div className="lg:w-1/2 w-full">
                <Eyebrow index="03" label="The deal" />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-50 tracking-tight leading-[0.95] mb-5">
                  We never touch
                  <br />
                  <span className="text-[#F2891C]">your sales.</span>
                </h2>
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-9 max-w-lg">
                  Thirty thousand naira a month, flat. Not a percentage, not per
                  order. Your customer pays you, and ChopQik is not standing in
                  the middle of it.
                </p>
                <div className="space-y-6 mb-10">
                  {deal.map((item, i) => (
                    <FeatureRow key={item.title} {...item} delay={i * 0.08} />
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F2891C] px-7 py-3.5 text-sm font-bold text-black transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2891C]"
                  >
                    Get ChopQik for your business
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </a>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    Delivery comes last, not first
                  </p>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <PriceMock />
              </div>
            </div>
          </Panel>
        </motion.div>

        {/* progress rail — desktop only */}
        <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-20 items-center gap-5">
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
