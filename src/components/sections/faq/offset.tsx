"use client";

// What this section used to say, all of it live on the site:
//   - "targeting a Q3 2026 launch for our full public beta" — while the hero
//     says ChopQik is live in Benin City and the section above shows the
//     dashboard running. A vendor reading top to bottom stops here.
//   - "helping thousands of residents" — invented scale.
//   - the "ChopQik Vendor" app and the "ChopQik Rider" app — neither exists.
//   - "We verify every kitchen to ensure high hygiene standards" — ChopQik
//     does not inspect kitchens.
//   - "support team is available 24/7", "chat with us in the app".
//   - distance-based delivery fees, rider background checks.
//   - "launch perky".
// The Contact Support button had no onClick and no href. It now points at
// the contact form, which is the only channel on this page that works.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What does it cost?",
    answer:
      "Thirty thousand naira a month, flat. It does not change with how much you sell, and there is no commission on any order. The first sixty days are free, and we do not ask for card details to start.",
  },
  {
    question: "Is ChopQik a delivery app?",
    answer:
      "No. ChopQik is the system your restaurant runs on — orders, kitchen tickets, stock, tables, reservations and your daily books. Delivery is on the roadmap, but it comes after the software, not instead of it.",
  },
  {
    question: "Do I need to buy any hardware?",
    answer:
      "No. ChopQik runs in the browser on an Android tablet or phone you already own. There is nothing to install from an app store and no terminal to buy. If your device can open a website, it can run ChopQik.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Send your menu as a photograph or a list and we enter every item, price and category for you. Most vendors are taking real orders within a few days. Training the floor takes about an hour.",
  },
  {
    question: "What happens when the network goes down?",
    answer:
      "Your staff keep taking orders. Everything queues on the device and syncs by itself when the line comes back. Nothing is lost, and nobody has to remember what happened during the gap.",
  },
  {
    question: "How do I know what my staff are doing?",
    answer:
      "Every person gets their own four-digit PIN. Cancelled orders, price changes and manual orders are all recorded against whoever made them, and a manager can see the list. Stock counts itself down as items sell, so the gap between what came into the kitchen and what left it as a plate stops being invisible.",
  },
  {
    question: "Does ChopQik hold my money?",
    answer:
      "No. Cash stays in your drawer and bank transfers go straight to your own account — ChopQik is not in the middle of them. Card payments settle through Paystack into your account, less the standard payment processing fee.",
  },
  {
    question: "Can I stop?",
    answer:
      "Yes. It is month to month. There is no lock-in, no notice period and no penalty for leaving.",
  },
];

export function FAQ_Offset() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-5 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: sticky header */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-28">
              <h2 className="text-[clamp(2rem,3.4vw,3rem)] font-black text-zinc-900 mb-5 leading-[1.02] tracking-tight">
                The questions
                <br />
                owners actually{" "}
                <span className="text-[#F2891C]">ask.</span>
              </h2>
              <p className="text-base md:text-lg text-zinc-500 mb-7 max-w-sm leading-relaxed">
                If yours is not here, send it over. It gets answered by the
                person who built the thing.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-zinc-900 text-white px-7 py-3.5 rounded-full text-sm font-bold hover:bg-zinc-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2891C]"
              >
                Ask a question
              </a>
            </div>
          </div>

          {/* Right: list */}
          <div className="lg:w-2/3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="border-b border-zinc-100">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex items-center justify-between w-full py-5 text-left group"
                  >
                    <span
                      className={cn(
                        "text-base md:text-lg font-bold pr-8 transition-colors",
                        isOpen
                          ? "text-[#F2891C]"
                          : "text-zinc-900 group-hover:text-[#F2891C]",
                      )}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "shrink-0 transition-colors",
                        isOpen
                          ? "text-[#F2891C]"
                          : "text-zinc-300 group-hover:text-[#F2891C]",
                      )}
                    >
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-[15px] md:text-base text-zinc-500 pb-5 pr-8 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
