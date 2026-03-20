"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Efe", content: "ChopQik is a lifesaver!", role: "Foodie" },
  { name: "Nosa", content: "Riders are actually fast.", role: "Student" },
  { name: "Idemudia", content: "Increased sales by 30%.", role: "Partner" },
  { name: "David", content: "Slick UI/UX.", role: "Dev" },
  { name: "Amaka", content: "Best tracking feature.", role: "Mum" },
  { name: "Okon", content: "Reliable service.", role: "Biz" },
];

const marqueeItems = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

// ... (imports remain the same)

export function Testimonials_Marquee() {
  return (
    <section
      id="reviews"
      className="py-16 md:py-24 bg-zinc-50 overflow-hidden relative border-y border-zinc-100"
    >
      <div className="container mx-auto px-4 mb-12 md:mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mb-4 md:mb-6">
          Loved by thousands.
        </h2>
        <p className="text-zinc-500">Join the revolution.</p>
      </div>

      <div className="flex flex-col gap-8 md:gap-12">
        {/* Row 1: Left to Right */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-zinc-50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-zinc-50 to-transparent z-10" />

          <motion.div
            className="flex gap-4 md:gap-6 w-max pb-3"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {marqueeItems.map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-zinc-50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-zinc-50 to-transparent z-10" />

          <motion.div
            className="flex gap-4 md:gap-6 w-max pb-3"
            animate={{ x: [-1000, 0] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            {marqueeItems.map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Card({ item }: { item: (typeof testimonials)[0] }) {
  return (
    <div className="w-[280px] md:w-[350px] bg-white border border-zinc-100 p-5 md:p-6 rounded-2xl shrink-0 shadow-sm hover:shadow-md hover:border-[#F2891C]/30 transition-all group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={14} className="fill-[#F2891C] text-[#F2891C]" />
          ))}
        </div>
        <div className="text-[#F2891C]/20 group-hover:text-[#F2891C]/40 transition-colors">
          <Quote size={20} className="fill-current -scale-x-100" />
        </div>
      </div>

      <p className="font-bold text-base md:text-lg text-zinc-900 mb-4 md:mb-6 leading-tight line-clamp-3">
        &quot;{item.content}&quot;
      </p>

      <div className="flex items-center gap-3 border-t border-zinc-50 pt-4">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-[#F2891C]/10 rounded-full flex items-center justify-center text-xs md:text-sm font-black text-[#F2891C]">
          {item.name[0]}
        </div>
        <div>
          <div className="text-xs md:text-sm font-bold text-zinc-900">
            {item.name}
          </div>
          <div className="text-[10px] md:text-xs text-[#F2891C] font-medium uppercase tracking-wider">
            {item.role}
          </div>
        </div>
      </div>
    </div>
  );
}
