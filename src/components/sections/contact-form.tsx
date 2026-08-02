"use client";

// This form used to be a lie. The submit handler was:
//
//   // Mock API call
//   await new Promise((resolve) => setTimeout(resolve, 1500));
//   setIsSuccess(true);
//
// It waited a second and a half and then displayed "Message Sent! A member
// of the ChopQik team will get back to you shortly." There was no endpoint,
// no email, no storage. Every message ever submitted was discarded and the
// sender was told it had arrived.
//
// It now composes the message and hands it to WhatsApp, with a mailto
// fallback. No backend, and it cannot claim to have sent something it did
// not — the user watches the message open in an app they control.
//
// If a real endpoint is added later, the honest version still needs: a
// visible failure state, and no success message until the server confirms.

import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

const SUPPORT_WA = "2348063588816";
const SUPPORT_DISPLAY = "+234 806 358 8816";
const SUPPORT_EMAIL = "support@chopqik.com";

export function ContactForm() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");

  const ready = name.trim().length > 0 && message.trim().length > 0;

  const composed = () => {
    const lines = [
      `Hello ChopQik — ${name.trim()}`,
      business.trim() ? `Business: ${business.trim()}` : null,
      "",
      message.trim(),
    ].filter((l) => l !== null);
    return lines.join("\n");
  };

  const sendWhatsApp = () => {
    if (!ready) return;
    window.open(
      `https://wa.me/${SUPPORT_WA}?text=${encodeURIComponent(composed())}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const sendEmail = () => {
    if (!ready) return;
    const subject = business.trim()
      ? `ChopQik enquiry — ${business.trim()}`
      : `ChopQik enquiry — ${name.trim()}`;
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(composed())}`;
  };

  const field =
    "w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#F2891C]/40 focus:border-[#F2891C] transition-all";

  return (
    <section id="contact" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-5 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="max-w-xl">
            <p className="text-[#F2891C] font-bold tracking-[0.18em] uppercase text-[11px] mb-4">
              Get in touch
            </p>
            <h3 className="text-[clamp(1.9rem,3.4vw,3rem)] font-black text-zinc-900 leading-[1.02] tracking-tight mb-5">
              Talk to the person who built it.
            </h3>
            <p className="text-base md:text-lg text-zinc-500 mb-8 leading-relaxed">
              Whether you run a restaurant, a bar or a hotel kitchen, and
              whether you want a demo or just want to know what it costs —
              write below and it comes straight to us.
            </p>

            <div className="space-y-4">
              <a
                href={`tel:+${SUPPORT_WA}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-full bg-orange-50 flex items-center justify-center text-[#F2891C] shrink-0">
                  <Phone size={19} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-bold">
                    Call or WhatsApp
                  </p>
                  <p className="text-base font-bold text-zinc-900 group-hover:text-[#F2891C] transition-colors">
                    {SUPPORT_DISPLAY}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-full bg-orange-50 flex items-center justify-center text-[#F2891C] shrink-0">
                  <Mail size={19} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-bold">
                    Email
                  </p>
                  <p className="text-base font-bold text-zinc-900 group-hover:text-[#F2891C] transition-colors">
                    {SUPPORT_EMAIL}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="bg-zinc-50 rounded-3xl p-7 md:p-9 border border-zinc-100 shadow-xl shadow-zinc-200/40">
            <div className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="cq-name"
                  className="text-sm font-bold text-zinc-900"
                >
                  Your name
                </label>
                <input
                  id="cq-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Who are we speaking to?"
                  className={field}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="cq-business"
                  className="text-sm font-bold text-zinc-900"
                >
                  Business name{" "}
                  <span className="font-normal text-zinc-400">(optional)</span>
                </label>
                <input
                  id="cq-business"
                  type="text"
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  placeholder="Restaurant, bar or hotel"
                  className={field}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="cq-message"
                  className="text-sm font-bold text-zinc-900"
                >
                  Message
                </label>
                <textarea
                  id="cq-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What would you like to know?"
                  className={`${field} resize-none`}
                />
              </div>

              <button
                type="button"
                onClick={sendWhatsApp}
                disabled={!ready}
                className="w-full h-13 py-4 bg-[#F2891C] hover:bg-orange-500 disabled:opacity-40 disabled:hover:bg-[#F2891C] text-white font-bold rounded-xl shadow-lg shadow-[#F2891C]/20 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Send on WhatsApp
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={sendEmail}
                  disabled={!ready}
                  className="text-sm text-zinc-500 underline underline-offset-2 hover:text-zinc-800 disabled:opacity-40 disabled:no-underline transition-colors"
                >
                  or send it by email instead
                </button>
              </div>

              <p className="text-[11px] text-zinc-400 text-center leading-relaxed">
                Your message opens in WhatsApp so you can see exactly what is
                sent. Nothing leaves this page on its own.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
