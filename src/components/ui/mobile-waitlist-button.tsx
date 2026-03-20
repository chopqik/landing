"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function MobileWaitlistButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-6 left-4 right-4 z-100 md:hidden pointer-events-none"
    >
      <a
        href="https://forms.gle/5n687Hn2fA8P"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#F2891C] px-8 text-lg font-bold text-white shadow-2xl shadow-[#F2891C]/30 transition-all hover:bg-orange-600 active:scale-95"
      >
        <span className="relative z-10 flex items-center gap-2">
          Join the Waitlist
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </span>
        {/* Subtle persistent pulse effect on the button background */}
        <span className="absolute inset-0 rounded-full border-2 border-white/20 scale-100 opacity-0 group-active:opacity-100 group-active:scale-105 transition-all duration-300" />
      </a>
    </motion.div>
  );
}
