"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { name: "Home", href: "/#hero" },
    { name: "About", href: "/#about" },
    { name: "How it Works", href: "/#how-it-works" },
    { name: "Reviews", href: "/#reviews" },
    { name: "Blog", href: "/#blog" },
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
        <div className="pointer-events-auto flex items-center justify-between gap-6 md:gap-12 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl max-w-5xl w-full">
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
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300"
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
              className="rounded-full bg-[#F2891C] hover:bg-[#F2891C]/90 text-white px-6 shadow-lg shadow-[#F2891C]/20 font-bold"
            >
              <Link href={CTA_HREF}>{CTA_LABEL}</Link>
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
              className="fixed inset-x-4 top-24 z-50 bg-zinc-900 border border-white/10 rounded-2xl p-6 md:hidden shadow-2xl origin-top"
            >
              <div className="flex flex-col gap-2">
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
