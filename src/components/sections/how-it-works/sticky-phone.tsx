"use client";

// NOTE: the filename is a leftover. This is no longer a phone — it is a
// tablet running the vendor dashboard. The export name is unchanged so
// how-it-works/index.tsx needs no edit.
//
// What this section used to be: a consumer delivery demo. Three screens
// showing browse -> cart with a ₦500 delivery fee -> a map with a dashed
// route and "Musa is arriving, 5 mins away". ChopQik has no riders and no
// consumer app. It was a mockup of a product that does not exist, sitting
// one scroll below a section that says delivery comes last.

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { ClipboardList, LayoutGrid, Receipt } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  PRODUCT PALETTE — these are the dashboard's real tokens            */
/* ------------------------------------------------------------------ */

const PARCHMENT = "#FDF6EC";
const PARCHMENT_DEEP = "#E8D5B8";
const CHARCOAL = "#1C1C1C";
const ORANGE = "#F2891C";

/* ------------------------------------------------------------------ */
/*  TYPE SCALE — sized for a ~700px viewport, scales up on tall screens */
/* ------------------------------------------------------------------ */

const STEP_TITLE =
  "text-[clamp(2rem,4vw,3.5rem)] [@media(min-height:900px)]:text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-tight";

const STEP_BODY =
  "text-[clamp(0.95rem,1.1vw,1.1rem)] [@media(min-height:900px)]:text-[1.2rem] leading-relaxed";

/* ------------------------------------------------------------------ */
/*  SCREEN 1 — the menu we build for you                               */
/* ------------------------------------------------------------------ */

function MenuScreen() {
  const items: [string, string, boolean][] = [
    ["Jollof Rice", "1,500", true],
    ["Pepper Soup (Goat)", "3,500", true],
    ["Ofada & Ayamase", "2,800", true],
    ["Grilled Croaker", "6,000", false],
    ["Chapman", "950", true],
    ["Small Chops", "2,000", true],
  ];

  return (
    <div className="h-full flex flex-col" style={{ background: PARCHMENT }}>
      <div
        className="px-4 py-3 flex items-center justify-between border-b"
        style={{ borderColor: PARCHMENT_DEEP }}
      >
        <span
          className="text-[11px] font-bold uppercase tracking-wider"
          style={{ color: CHARCOAL }}
        >
          Menu
        </span>
        <span className="font-mono text-[10px] text-zinc-500">171 items</span>
      </div>

      <div className="flex-1 p-3 space-y-1.5 overflow-hidden">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400 px-1 pb-1">
          Main courses
        </p>
        {items.map(([name, price, available]) => (
          <div
            key={name}
            className="bg-white rounded-lg px-3 py-2 flex items-center justify-between border"
            style={{ borderColor: PARCHMENT_DEEP }}
          >
            <div className="flex items-center gap-2 min-w-0">
              <span
                className={cn(
                  "w-1.5 h-1.5 rounded-full shrink-0",
                  available ? "bg-emerald-500" : "bg-zinc-300",
                )}
              />
              <span
                className={cn(
                  "text-[12px] truncate",
                  available ? "" : "text-zinc-400 line-through",
                )}
                style={available ? { color: CHARCOAL } : undefined}
              >
                {name}
              </span>
            </div>
            <span className="font-mono text-[11px] text-zinc-500 shrink-0 ml-2">
              ₦{price}
            </span>
          </div>
        ))}
      </div>

      <div
        className="px-4 py-3 border-t text-[10px] text-zinc-500"
        style={{ borderColor: PARCHMENT_DEEP }}
      >
        Tap any item to take it off the menu when it finishes.
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SCREEN 2 — the floor                                               */
/* ------------------------------------------------------------------ */

function FloorScreen() {
  const tables: [string, string | null, boolean][] = [
    ["1", "12,400", false],
    ["2", null, false],
    ["3", "6,000", false],
    ["4", "8,400", true],
    ["5", null, false],
    ["6", "3,200", false],
    ["VIP", "45,000", false],
    ["8", null, false],
    ["9", "1,900", false],
  ];

  return (
    <div className="h-full flex flex-col" style={{ background: PARCHMENT }}>
      <div
        className="px-4 py-3 flex items-center justify-between border-b"
        style={{ borderColor: PARCHMENT_DEEP }}
      >
        <span
          className="text-[11px] font-bold uppercase tracking-wider"
          style={{ color: CHARCOAL }}
        >
          Tables
        </span>
        <span className="font-mono text-[10px] text-zinc-500">6 seated</span>
      </div>

      <div className="flex-1 p-3">
        <div className="grid grid-cols-3 gap-2">
          {tables.map(([label, amount, calling]) => (
            <div
              key={label}
              className={cn(
                "rounded-lg border p-2 h-[62px] flex flex-col justify-between",
                calling && "animate-pulse",
              )}
              style={{
                background: amount ? "#FFFFFF" : "transparent",
                borderColor: calling ? ORANGE : PARCHMENT_DEEP,
                borderWidth: calling ? 2 : 1,
              }}
            >
              <span
                className="text-[11px] font-bold"
                style={{ color: amount ? CHARCOAL : "#A1A1AA" }}
              >
                {label}
              </span>
              {amount ? (
                <span
                  className="font-mono text-[10px]"
                  style={{ color: calling ? ORANGE : "#71717A" }}
                >
                  ₦{amount}
                </span>
              ) : (
                <span className="font-mono text-[9px] text-zinc-400">free</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className="mx-3 mb-3 rounded-lg px-3 py-2.5 flex items-center gap-2"
        style={{ background: `${ORANGE}1A`, border: `1px solid ${ORANGE}55` }}
      >
        <span
          className="w-2 h-2 rounded-full shrink-0"
          style={{ background: ORANGE }}
        />
        <span className="text-[11px]" style={{ color: CHARCOAL }}>
          Table 4 is asking for a waiter
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SCREEN 3 — the books                                               */
/* ------------------------------------------------------------------ */

function BooksScreen() {
  const rows: [string, string][] = [
    ["Transfer", "142,300"],
    ["Cash", "38,500"],
    ["POS", "22,000"],
  ];

  return (
    <div className="h-full flex flex-col" style={{ background: PARCHMENT }}>
      <div
        className="px-4 py-3 flex items-center justify-between border-b"
        style={{ borderColor: PARCHMENT_DEEP }}
      >
        <span
          className="text-[11px] font-bold uppercase tracking-wider"
          style={{ color: CHARCOAL }}
        >
          Books
        </span>
        <span className="font-mono text-[10px] text-zinc-500">Today</span>
      </div>

      <div className="p-3 space-y-2.5 flex-1">
        <div
          className="rounded-xl p-4 border"
          style={{ background: "#FFFFFF", borderColor: PARCHMENT_DEEP }}
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400 mb-1">
            Taken today
          </p>
          <p
            className="font-mono text-2xl font-black"
            style={{ color: CHARCOAL }}
          >
            ₦202,800
          </p>
          <p className="text-[10px] text-zinc-500 mt-0.5">
            41 orders · 3 still unpaid
          </p>
        </div>

        <div
          className="rounded-xl border divide-y"
          style={{ background: "#FFFFFF", borderColor: PARCHMENT_DEEP }}
        >
          {rows.map(([label, amount]) => (
            <div
              key={label}
              className="px-3 py-2 flex items-center justify-between"
              style={{ borderColor: PARCHMENT_DEEP }}
            >
              <span className="text-[11px] text-zinc-600">{label}</span>
              <span
                className="font-mono text-[11px]"
                style={{ color: CHARCOAL }}
              >
                ₦{amount}
              </span>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2.5">
          <p className="text-[11px] text-red-700">
            Chapman is down to 4. Reorder before Friday.
          </p>
        </div>
      </div>

      <div
        className="px-4 py-3 border-t text-[10px] text-zinc-500"
        style={{ borderColor: PARCHMENT_DEEP }}
      >
        Every figure here traces back to a ticket.
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  DEVICE FRAME — a tablet. No island, no home bar, even bezel.       */
/* ------------------------------------------------------------------ */

function TabletFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-[1.5rem] bg-zinc-900 p-2.5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)] ring-1 ring-black/10",
        className,
      )}
    >
      <span className="absolute top-[9px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-zinc-700" />
      <div className="relative w-full h-full rounded-[0.9rem] overflow-hidden">
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  STEPS                                                              */
/* ------------------------------------------------------------------ */

const steps = [
  {
    id: "01",
    title: "We build your menu",
    desc: "Send a photograph of your menu or a list on WhatsApp. We enter every item, price and category for you. There is no setup fee and no typing on your side.",
    icon: ClipboardList,
    Screen: MenuScreen,
  },
  {
    id: "02",
    title: "Your staff run the floor",
    desc: "About an hour of training on the tablet you already own. A waiter taps the table, the kitchen sees the ticket, and a guest can call for attention without standing up.",
    icon: LayoutGrid,
    Screen: FloorScreen,
  },
  {
    id: "03",
    title: "The day closes itself",
    desc: "Before you lock up you can see what was sold, how it was paid for, what is running low, and what was cancelled. No adding up a notebook at midnight.",
    icon: Receipt,
    Screen: BooksScreen,
  },
];

/* ------------------------------------------------------------------ */
/*  MAIN                                                               */
/* ------------------------------------------------------------------ */

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Hooks must be called unconditionally at the top level — never inside the
  // map below.
  const op1 = useTransform(scrollYProgress, [0, 0.28], [1, 0]);
  const op2 = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.62, 0.72],
    [0, 1, 1, 0],
  );
  const op3 = useTransform(scrollYProgress, [0.68, 0.78], [0, 1]);

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="relative py-20 md:py-0"
      style={{ background: "#FBF8F4" }}
    >
      <div className="container mx-auto px-5 md:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-0">
          {/* ── Sticky tablet — desktop only ────────────────────────── */}
          <div className="hidden md:flex sticky top-0 h-screen items-center justify-center order-2 md:order-1 pt-24 pb-12">
            <TabletFrame className="w-[300px] h-[500px]">
              <motion.div style={{ opacity: op1 }} className="absolute inset-0">
                <MenuScreen />
              </motion.div>
              <motion.div style={{ opacity: op2 }} className="absolute inset-0">
                <FloorScreen />
              </motion.div>
              <motion.div style={{ opacity: op3 }} className="absolute inset-0">
                <BooksScreen />
              </motion.div>
            </TabletFrame>
          </div>

          {/* ── Steps ───────────────────────────────────────────────── */}
          <div className="order-1 md:order-2">
            {/* Mobile heading */}
            <div className="mb-10 md:hidden text-center">
              <div className="inline-block px-4 py-1.5 rounded-full border border-[#F2891C]/25 bg-[#F2891C]/5 text-[#F2891C] text-[11px] font-bold uppercase tracking-wider mb-4">
                Getting started
              </div>
              <h2 className="text-4xl font-black text-zinc-900 leading-[0.95] tracking-tight">
                Live by the
                <br />
                weekend.
              </h2>
            </div>

            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="flex flex-col justify-center h-auto md:h-screen pl-0 md:pl-16 mb-16 md:mb-0 md:pt-24 md:pb-12"
              >
                <div className="flex items-center gap-4 mb-5">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-300 bg-white font-mono text-[11px] font-bold text-zinc-500">
                    {step.id}
                  </span>
                  <span className="h-px w-16 bg-zinc-300" />
                </div>

                <h3
                  className={cn(
                    "font-black text-zinc-900 mb-4 max-w-xl",
                    STEP_TITLE,
                  )}
                >
                  {step.title}
                </h3>

                <p
                  className={cn("text-zinc-600 max-w-md", STEP_BODY)}
                >
                  {step.desc}
                </p>

                {/* Mobile: the real screen, not a grey box with an icon */}
                <div className="mt-7 md:hidden flex justify-center">
                  <TabletFrame className="w-[230px] h-[380px]">
                    <step.Screen />
                  </TabletFrame>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Closing line ──────────────────────────────────────────── */}
        <div className="md:col-span-2 pb-4 md:pb-24 text-center md:text-left md:pl-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
            Sixty days free · No card · Cancel any time
          </p>
        </div>
      </div>
    </section>
  );
}
