"use client";

// This used to be a full-width "Join the Waitlist" bar pointing at the
// delivery Google Form — the most prominent element on mobile, fixed to the
// bottom of every page, permanently visible. A restaurant owner reading
// about a ₦30,000/month operating system had a large orange bar following
// them down the page offering to sign them up for food delivery.
//
// It is now WhatsApp. On a phone that is one tap into a conversation, on
// the channel this market actually uses, and it reaches a line that is
// answered.
//
// It also no longer appears immediately. The old version faded in after one
// second and then sat over the bottom of every section for the rest of the
// visit, including on top of the hero's own call to action. It now waits
// until the reader has scrolled past the first screen.
//
// The filename and export name are unchanged so layout.tsx needs no edit.

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

const SUPPORT_WA = "2348063588816";

export function MobileWaitlistButton() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden pointer-events-none"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <a
            href={`https://wa.me/${SUPPORT_WA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-[#F2891C] py-4 text-base font-bold text-black shadow-2xl shadow-black/40 active:scale-[0.98] transition-transform"
          >
            <MessageCircle className="h-5 w-5" />
            Message us on WhatsApp
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
