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
// The Contact Support button had no onClick and no href.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

// ChopQik support line. Same number printed in the vendor dashboard footer,
// so the site and the product agree. Digits only for wa.me.
const SUPPORT_WA = "2348063588816";
const SUPPORT_DISPLAY = "+234 806 358 8816";
const SUPPORT_EMAIL = "support@chopqik.com";

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
                If yours is not here, message us. It gets answered by the person
                who built the thing.
              </p>

              <a
                href={`https://wa.me/${SUPPORT_WA}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-7 py-3.5 rounded-full text-sm font-bold hover:bg-zinc-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2891C]"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="17"
                  height="17"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.02h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.65-1.23-1.46-1.38-1.71-.14-.24-.01-.37.11-.49.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.22.24-.87.85-.87 2.07 0 1.22.89 2.4 1.02 2.56.12.17 1.75 2.67 4.25 3.75.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.19.2-.58.2-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z" />
                </svg>
                Message us on WhatsApp
              </a>

              <div className="mt-4 space-y-1 text-sm text-zinc-400">
                <p>
                  <a
                    href={`tel:+${SUPPORT_WA}`}
                    className="hover:text-zinc-600 transition-colors"
                  >
                    {SUPPORT_DISPLAY}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="hover:text-zinc-600 transition-colors"
                  >
                    {SUPPORT_EMAIL}
                  </a>
                </p>
                <p>
                  or use the{" "}
                  <a
                    href="#contact"
                    className="underline underline-offset-2 hover:text-zinc-600 transition-colors"
                  >
                    form below
                  </a>
                </p>
              </div>
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
