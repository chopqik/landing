"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Which cities do you support?",
    answer:
      "We are currently operating exclusively in Benin City, helping thousands of residents get their favorite food delivered fast. We have plans to expand to other cities soon!",
  },
  {
    question: "When are you launching?",
    answer:
      "We are targeting a Q3 2026 launch for our full public beta. Join our waitlist to get early access and exclusive launch perky.",
  },
  {
    question: "How do delivery fees work?",
    answer:
      "Delivery fees are calculated based on the distance between the vendor and your location. We believe in fair pricing for both you and our riders.",
  },
  {
    question: "How do vendors join?",
    answer:
      "Vendors can apply directly through our website or the 'ChopQik Vendor' app. We verify every kitchen to ensure high hygiene and quality standards.",
  },
  {
    question: "How do riders join?",
    answer:
      "Riders go through a rigorous onboarding process including background checks and safety training. Apply via the 'ChopQik Rider' app to start earning.",
  },
  {
    question: "What if there’s an issue with my order?",
    answer:
      "Our customer support team is available 24/7. You can chat with us directly in the app for instant resolution on any order issues.",
  },
];

export function FAQ_Offset() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Sticky Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <h2 className="text-5xl font-black text-zinc-900 mb-6 leading-tight">
                You have <span className="text-[#F2891C]">questions?</span>
                <br />
                We have answers.
              </h2>
              <p className="text-xl text-zinc-500 mb-8 max-w-sm">
                Can&apos;t find what you&apos;re looking for? Chat with our
                support team.
              </p>
              <button className="bg-zinc-900 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-colors">
                Contact Support
              </button>
            </div>
          </div>

          {/* Right: List */}
          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-zinc-100 pb-4">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex items-center justify-between w-full py-6 text-left group"
                >
                  <span className="text-xl font-bold text-zinc-900 group-hover:text-[#F2891C] transition-colors pr-8">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      "text-zinc-300 transition-transform duration-300",
                      openIndex === index
                        ? "text-[#F2891C] rotate-180"
                        : "group-hover:text-[#F2891C]",
                    )}
                  >
                    {openIndex === index ? (
                      <Minus size={24} />
                    ) : (
                      <Plus size={24} />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-lg text-zinc-500 pb-6 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
