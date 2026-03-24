"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Twitter,
  Instagram,
  Music2,
  Facebook,
  MapPin,
  Mail,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { APP_LINKS } from "@/constants/links";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const [showModal, setShowModal] = React.useState(false);

  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 border-t border-white/10 relative">
      <div className="container mx-auto px-4">
        {/* ... existing footer grid ... */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
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
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              Delivering happiness, one meal at a time. We connect you with the
              best flavors your city has to offer, instantly.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <SocialIcon icon={Twitter} href="https://x.com/chopqik" />
              <SocialIcon
                icon={Instagram}
                href="https://www.instagram.com/chopqik?igsh=cWh5MW1yMDN4NmU1&utm_source=qr"
              />
              <SocialIcon
                icon={Facebook}
                href="https://www.facebook.com/share/1FGEjVQRCD/?mibextid=wwXIfr"
              />
              <SocialIcon
                icon={Music2}
                href="https://www.tiktok.com/@chopkwik_"
              />
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#F2891C] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#F2891C] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#F2891C] transition-colors"
                >
                  Press & Media
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#F2891C] transition-colors"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <Link
                  href="/legal#terms-of-service"
                  className="hover:text-[#F2891C] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/legal#privacy-policy"
                  className="hover:text-[#F2891C] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal#cookie-policy"
                  className="hover:text-[#F2891C] transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal#partner-agreement"
                  className="hover:text-[#F2891C] transition-colors"
                >
                  Partner Agreement
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Download */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-zinc-400 mb-8">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#F2891C]" />
                <span>support@chopqik.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-[#F2891C]" />
                <span>Benin City, Edo State</span>
              </li>
            </ul>

            <h4 className="font-bold text-sm text-zinc-500 uppercase tracking-wider mb-4">
              Get the App
            </h4>
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Apple App Store Button */}
              <button
                onClick={() => setShowModal(true)}
                className="group flex items-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 rounded-xl px-4 py-2.5 transition-all w-full sm:w-auto text-left"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 30 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.2264 20.0113C26.1825 15.2574 30.2187 12.9446 30.4033 12.8369C28.1174 9.5875 24.5744 9.14352 23.3293 9.10812C20.3536 8.8028 17.4672 10.8442 15.9513 10.8442C14.4052 10.8442 12.0709 9.13762 9.55512 9.18777C6.31768 9.23645 3.28902 11.064 1.62794 13.9019C-1.80011 19.6883 0.756555 28.1917 4.04089 32.8689C5.68381 35.1596 7.60358 37.7172 10.1164 37.6272C12.5747 37.5284 13.493 36.0991 16.4596 36.0991C19.399 36.0991 20.2613 37.6272 22.8241 37.5697C25.4624 37.5284 27.1235 35.2687 28.7089 32.9574C30.6075 30.3319 31.37 27.7462 31.4002 27.6135C31.3382 27.5928 26.2763 25.7092 26.2264 20.0113Z"
                    fill="white"
                  />
                  <path
                    d="M21.3854 6.03127C22.7076 4.4191 23.6122 2.22577 23.3611 0C21.4474 0.0826 19.0541 1.29063 17.6759 2.8674C16.4566 4.25685 15.3674 6.53425 15.6488 8.67595C17.7985 8.8323 20.0057 7.61837 21.3854 6.03127Z"
                    fill="white"
                  />
                </svg>

                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-semibold text-zinc-400 leading-none mb-1">
                    Download on the
                  </span>
                  <span className="text-sm font-bold leading-none text-white block">
                    App Store
                  </span>
                </div>
              </button>

              {/* Google Play Button */}
              <button
                onClick={() => setShowModal(true)}
                className="group flex items-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 rounded-xl px-4 py-2.5 transition-all w-full sm:w-auto text-left"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 30 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.700605 0.585647C0.256825 1.03921 0 1.74537 0 2.65987V35.2795C0 36.194 0.256825 36.9002 0.700605 37.3537L0.810134 37.4533L19.532 19.1817V18.7503L0.810134 0.478713L0.700605 0.585647Z"
                    fill="url(#paint0_linear_0_1)"
                  />
                  <path
                    d="M25.7656 25.2753L19.5319 19.1817V18.7503L25.7732 12.6567L25.9129 12.736L33.3042 16.842C35.4136 18.0072 35.4136 19.9247 33.3042 21.0974L25.9129 25.196L25.7656 25.2753Z"
                    fill="url(#paint1_linear_0_1)"
                  />
                  <path
                    d="M25.9129 25.196L19.5319 18.966L0.700562 37.3537C1.40117 38.0728 2.54366 38.1595 3.8429 37.4404L25.9129 25.196Z"
                    fill="url(#paint2_linear_0_1)"
                  />
                  <path
                    d="M25.9129 12.736L3.8429 0.49165C2.54366 -0.220038 1.40117 -0.133383 0.700562 0.585679L19.5319 18.966L25.9129 12.736Z"
                    fill="url(#paint3_linear_0_1)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_0_1"
                      x1="17.8697"
                      y1="35.6192"
                      x2="-6.87723"
                      y2="10.2726"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#00A0FF" />
                      <stop offset="0.0066" stop-color="#00A1FF" />
                      <stop offset="0.2601" stop-color="#00BEFF" />
                      <stop offset="0.5122" stop-color="#00D2FF" />
                      <stop offset="0.7604" stop-color="#00DFFF" />
                      <stop offset="1" stop-color="#00E3FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_0_1"
                      x1="36.051"
                      y1="18.9639"
                      x2="-0.504277"
                      y2="18.9639"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFE000" />
                      <stop offset="0.4087" stop-color="#FFBD00" />
                      <stop offset="0.7754" stop-color="#FFA500" />
                      <stop offset="1" stop-color="#FF9C00" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_0_1"
                      x1="22.4431"
                      y1="15.5793"
                      x2="-11.1157"
                      y2="-18.7928"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF3A44" />
                      <stop offset="1" stop-color="#C31162" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_0_1"
                      x1="-4.03969"
                      y1="48.2061"
                      x2="10.9459"
                      y2="32.8576"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#32A071" />
                      <stop offset="0.0685" stop-color="#2DA771" />
                      <stop offset="0.4762" stop-color="#15CF74" />
                      <stop offset="0.8009" stop-color="#06E775" />
                      <stop offset="1" stop-color="#00F076" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-semibold text-zinc-400 leading-none mb-1">
                    GET IT ON
                  </span>
                  <span className="text-sm font-bold leading-none text-white block">
                    Google Play
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
          <p>&copy; {currentYear} ChopQik Technologies. All rights reserved.</p>
          <div className="flex gap-8">
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
            <Link
              href="/sitemap.xml"
              className="hover:text-white transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-12 max-w-md w-full relative shadow-2xl text-center overflow-hidden isolate"
              >
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-[#F2891C]/20 blur-[60px] pointer-events-none -z-10" />

                {/* Close Button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                >
                  ✕
                </button>

                {/* Icon */}
                <div className="w-20 h-20 bg-zinc-800 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-inner border border-white/5">
                  <span className="text-4xl">🚀</span>
                </div>

                <h3 className="text-3xl font-black text-white mb-4 tracking-tight">
                  App Coming Soon!
                </h3>
                <p className="text-zinc-400 font-medium mb-8 leading-relaxed">
                  We are putting the final touches on our mobile experience.
                  Subscribe to our newsletter to get early access when it drops.
                </p>

                {/* Waitlist Link */}
                <div className="flex justify-center mt-2">
                  <a
                    href={APP_LINKS.waitList}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowModal(false)}
                    className="inline-flex items-center justify-center bg-[#F2891C] hover:bg-orange-500 text-white rounded-xl px-8 py-3.5 font-bold transition-all shadow-lg shadow-[#F2891C]/20 hover:-translate-y-0.5 w-full sm:w-auto text-lg"
                  >
                    Join the waitlist
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </footer>
  );
}

function SocialIcon({ icon: Icon, href }: { icon: LucideIcon; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#F2891C] hover:text-white transition-all transform hover:-translate-y-1"
    >
      <Icon size={18} />
    </a>
  );
}
