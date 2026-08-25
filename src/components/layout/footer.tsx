// Removed from this footer:
//
//   - Apple App Store and Google Play buttons, both opening a modal reading
//     "App Coming Soon! We are putting the final touches on our mobile
//     experience." There is no mobile app and none is being built — ChopQik
//     is a PWA that runs in the browser. The same claim was already deleted
//     from the hero; this was the surviving copy.
//   - Four dead links: About Us, Careers, Press & Media, Contact Support.
//     Every one was href="#".
//   - "Delivering happiness, one meal at a time."
//
// Corrected: the copyright named "ChopQik Technologies". The registered
// entity is ChopQik LTD. On a site that also serves a Terms of Service and
// a Partner Agreement, that line has to match the company that signs them.
//
// Removing the modal removed the last hook in this file, so it is now a
// server component — no "use client", no framer-motion, less JavaScript on
// every page of the site.

import Link from "next/link";
import Image from "next/image";
import {
  Twitter,
  Instagram,
  Music2,
  Facebook,
  MapPin,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const SUPPORT_WA = "2348063588816";
const SUPPORT_DISPLAY = "+234 806 358 8816";
const SUPPORT_EMAIL = "support@chopqik.com";

const productLinks = [
  { name: "What it is", href: "/#about" },
  { name: "How it works", href: "/#how-it-works" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Reviews", href: "/#reviews" },
  { name: "FAQ", href: "/#faq" },
  { name: "Blog", href: "/#blog" },
];

const legalLinks = [
  { name: "Terms of Service", href: "/legal#terms-of-service" },
  { name: "Privacy Policy", href: "/legal#privacy-policy" },
  { name: "Cookie Policy", href: "/legal#cookie-policy" },
  // Partner Agreement removed 2026-08-22. That anchor now lands inside the
  // Phase 4 block on /legal — a draft delivery agreement that is not in
  // effect and binds nobody. Vendors are governed by their signed Vendor
  // Service Agreement and the policies at vendors.chopqik.com/policies, so a
  // footer link inviting anyone to read the draft as current terms is wrong.
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10 border-t border-white/10 relative">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-14">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="relative flex items-center shrink-0">
              <Image
                src="/images/CHOP_Q_white_and_orange.png"
                alt="ChopQik"
                width={168}
                height={48}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-zinc-400 leading-relaxed text-sm">
              The operating system for restaurants, bars and hotels in Nigeria.
              Orders, stock, staff, reservations and your daily books on one
              screen. One flat monthly fee, no commission on any sale.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <SocialIcon
                icon={Twitter}
                href="https://x.com/chopqik"
                label="ChopQik on X"
              />
              <SocialIcon
                icon={Instagram}
                href="https://www.instagram.com/chopqik"
                label="ChopQik on Instagram"
              />
              <SocialIcon
                icon={Facebook}
                href="https://www.facebook.com/chopqik"
                label="ChopQik on Facebook"
              />
              <SocialIcon
                icon={Music2}
                href="https://www.tiktok.com/@chopqik"
                label="ChopQik on TikTok"
              />
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-base mb-5">Product</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              {productLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="hover:text-[#F2891C] transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-base mb-5">Legal</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              {legalLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="hover:text-[#F2891C] transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base mb-5">Talk to us</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <a
                  href={`https://wa.me/${SUPPORT_WA}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#F2891C] transition-colors"
                >
                  <MessageCircle size={15} className="text-[#F2891C] shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${SUPPORT_WA}`}
                  className="flex items-center gap-2.5 hover:text-[#F2891C] transition-colors"
                >
                  <Phone size={15} className="text-[#F2891C] shrink-0" />
                  <span>{SUPPORT_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="flex items-center gap-2.5 hover:text-[#F2891C] transition-colors"
                >
                  <Mail size={15} className="text-[#F2891C] shrink-0" />
                  <span>{SUPPORT_EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#F2891C] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  No. 136 Second East Circular Road,
                  <br />
                  Benin City, Edo State
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-7 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
          <p>&copy; {currentYear} ChopQik LTD. All rights reserved.</p>
          <div className="flex gap-7">
            <Link
              href="/legal#privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/legal#terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms
            </Link>
            {/* Plain anchor: next/link attempts a client-side route match for
                /sitemap.xml and lands on a 404. */}
            <a
              href="/sitemap.xml"
              className="hover:text-white transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  icon: Icon,
  href,
  label,
}: {
  icon: LucideIcon;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#F2891C] hover:text-white transition-all"
    >
      <Icon size={17} />
    </a>
  );
}
