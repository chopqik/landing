"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Real quotes from live ChopQik vendors in Benin City, used with permission.
// Do not add a testimonial here that has not been said and approved by the
// business named. Three real ones outperform any number of invented ones.
const testimonials = [
  {
    name: "Fransil Hills Hotel",
    role: "Hotel restaurant & bar",
    content: "It is reducing theft in the hotel kitchen. Thank you.",
  },
  {
    name: "Madam Ofejiro",
    role: "Ofejiro Stop Over",
    content:
      "It is helping me keep my records better. I know what I sold before I close.",
  },
  {
    name: "Dina",
    role: "Dina's Gourmet",
    content: "This is wonderful. I love it.",
  },
];

export function Testimonials_Marquee() {
  return (
    <section
      id="reviews"
      className="py-16 md:py-24 bg-zinc-50 overflow-hidden relative border-y border-zinc-100"
    >
      <div className="container mx-auto px-4 mb-12 md:mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mb-4 md:mb-6">
          From the people running on it.
        </h2>
        <p className="text-zinc-500">
          Restaurants, bars and hotels in Benin City.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <Card item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ item }: { item: (typeof testimonials)[0] }) {
  return (
    <div className="h-full flex flex-col bg-white border border-zinc-100 p-6 md:p-7 rounded-2xl shadow-sm hover:shadow-md hover:border-[#F2891C]/30 transition-all group">
      <div className="flex justify-end mb-4">
        <div className="text-[#F2891C]/20 group-hover:text-[#F2891C]/40 transition-colors">
          <Quote size={22} className="fill-current -scale-x-100" />
        </div>
      </div>

      <p className="flex-1 font-bold text-base md:text-lg text-zinc-900 mb-6 leading-snug">
        &quot;{item.content}&quot;
      </p>

      <div className="flex items-center gap-3 border-t border-zinc-100 pt-4">
        <div className="w-10 h-10 bg-[#F2891C]/10 rounded-full flex items-center justify-center text-sm font-black text-[#F2891C] shrink-0">
          {item.name[0]}
        </div>
        <div>
          <div className="text-sm font-bold text-zinc-900">{item.name}</div>
          <div className="text-[11px] text-[#F2891C] font-medium uppercase tracking-wider">
            {item.role}
          </div>
        </div>
      </div>
    </div>
  );
}
