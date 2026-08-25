"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

// "Who it's for" added August 2026, and "Blog" removed from the pill to make
// room. The pill is tight at six links plus a CTA — see the note below — and
// four pages written to convert a hotel, bar or online-kitchen owner earn the
// slot more than a link to three posts. Blog is still in the footer and still
// reachable from the homepage's own #blog section.
//
// The vertical pages exist because the homepage can rank for roughly one
// thing, and its copy is restaurant-shaped. Without these links they are
// reachable only by Google: a hotel owner landing on the homepage sees
// restaurant copy and leaves, one click away from a page written for him.
const VERTICALS = [
  {
    name: "Hotels",
    href: "/for-hotels",
    blurb: "Room service, bar, unpaid bills",
  },
  {
    name: "Restaurants",
    href: "/for-restaurants",
    blurb: "Bukas, counters, dining rooms",
  },
  {
    name: "Bars & Lounges",
    href: "/for-bars-and-lounges",
    blurb: "Bottle-level stock, open tabs",
  },
  {
    name: "Online Kitchens",
    href: "/for-online-kitchens",
    blurb: "Your own page, your own margin",
  },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isVerticalsOpen, setIsVerticalsOpen] = React.useState(false);
  const [isMobileVerticalsOpen, setIsMobileVerticalsOpen] =
    React.useState(false);
  const verticalsRef = React.useRef<HTMLDivElement | null>(null);

  // Click-to-toggle rather than hover. Hover does not exist on a phone, and
  // a hover-only menu on a tablet opens on the tap that was meant to follow
  // the link. Outside-click and Escape both close it.
  React.useEffect(() => {
    if (!isVerticalsOpen) return;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (
        verticalsRef.current &&
        !verticalsRef.current.contains(e.target as Node)
      ) {
        setIsVerticalsOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsVerticalsOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isVerticalsOpen]);

  // "Home" was dropped: the logo already links to "/", so it was a redundant
  // item taking space in a pill that is tight at six links plus a CTA.
  // "Pricing" replaces it. Cost is the first question every restaurant owner
  // asks, and until now the only place ₦30,000 appeared was inside a
  // horizontal-scroll panel that cannot be linked to — the panels sit in a
  // transformed container, so an anchor would land on panel 01 regardless.
  // #pricing points at the closing section, which states the trial, the
  // monthly fee and the no-commission terms in plain language.
  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "How it Works", href: "/#how-it-works" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Reviews", href: "/#reviews" },
    { name: "FAQ", href: "/#faq" },
  ];

  // The CTA points at the enquiry form. Vendors are the customer who pays,
  // so the most prominent button on the site must lead to a vendor action.
  // The previous "Order Now" button had no handler and no href at all — it
  // was the loudest element on the page and did nothing when tapped.
  const CTA_HREF = "/#contact";
  const CTA_LABEL = "Get ChopQik";

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className="pointer-events-auto flex items-center justify-between gap-4 lg:gap-8 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl max-w-5xl w-full">
          {/* Logo */}
          <Link href="/" className="relative flex items-center shrink-0">
            <Image
              src="/images/CHOP_Q_white_and_orange.png"
              alt="ChopQik"
              width={168}
              height={48}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-0.5">
            {/* Who it's for — dropdown */}
            <div className="relative" ref={verticalsRef}>
              <button
                type="button"
                onClick={() => setIsVerticalsOpen((v) => !v)}
                aria-expanded={isVerticalsOpen}
                aria-haspopup="true"
                className="whitespace-nowrap flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 px-3 lg:px-4 py-2 rounded-full transition-all duration-300"
              >
                Who it&apos;s for
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    isVerticalsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isVerticalsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full mt-3 w-72 bg-zinc-900 border border-white/10 rounded-2xl p-2 shadow-2xl"
                  >
                    {VERTICALS.map((v) => (
                      <Link
                        key={v.href}
                        href={v.href}
                        onClick={() => setIsVerticalsOpen(false)}
                        className="block px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <span className="block text-sm font-semibold text-white group-hover:text-[#F2891C] transition-colors">
                          {v.name}
                        </span>
                        <span className="block text-[12px] text-zinc-500 mt-0.5">
                          {v.blurb}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                // whitespace-nowrap: without it "How it Works" breaks onto two
                // lines while every other item sits on one, which makes the
                // whole pill look unfinished.
                className="whitespace-nowrap text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 px-3 lg:px-4 py-2 rounded-full transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Button
              asChild
              size="sm"
              className="rounded-full bg-[#F2891C] hover:bg-[#F2891C]/90 text-white px-5 lg:px-6 shadow-lg shadow-[#F2891C]/20 font-bold whitespace-nowrap"
            >
              <Link href={CTA_HREF}>{CTA_LABEL}</Link>
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed inset-x-4 top-24 z-50 bg-zinc-900 border border-white/10 rounded-2xl p-6 md:hidden shadow-2xl origin-top max-h-[75vh] overflow-y-auto"
            >
              <div className="flex flex-col gap-2">
                {/* Who it's for — expandable, not a hover menu. A phone has
                    no hover state, so this opens in place. */}
                <button
                  type="button"
                  onClick={() => setIsMobileVerticalsOpen((v) => !v)}
                  aria-expanded={isMobileVerticalsOpen}
                  className="text-lg font-medium text-white p-3 hover:bg-white/5 rounded-xl transition-colors flex items-center justify-between w-full"
                >
                  <span>Who it&apos;s for</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#F2891C] transition-transform duration-200 ${
                      isMobileVerticalsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isMobileVerticalsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-1 pl-3 border-l border-white/10 ml-3">
                        {VERTICALS.map((v) => (
                          <Link
                            key={v.href}
                            href={v.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-base text-zinc-300 hover:text-[#F2891C] p-3 rounded-xl hover:bg-white/5 transition-colors"
                          >
                            {v.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-white p-3 hover:bg-white/5 rounded-xl transition-colors flex items-center justify-between group"
                  >
                    <span>{link.name}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#F2891C]">
                      →
                    </span>
                  </Link>
                ))}

                {/* Blog is no longer in the desktop pill; it stays here so the
                    mobile menu remains a complete map of the site. */}
                <Link
                  href="/#blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white p-3 hover:bg-white/5 rounded-xl transition-colors flex items-center justify-between group"
                >
                  <span>Blog</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#F2891C]">
                    →
                  </span>
                </Link>

                <div className="h-px bg-white/10 my-2" />
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-xl bg-[#F2891C] hover:bg-[#F2891C]/90 text-white font-bold"
                >
                  <Link
                    href={CTA_HREF}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {CTA_LABEL}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
