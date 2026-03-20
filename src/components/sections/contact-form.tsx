"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after a few seconds
    setTimeout(() => {
      setIsSuccess(false);
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="max-w-xl">
            <h2 className="text-[#F2891C] font-bold tracking-wider uppercase text-sm mb-4">
              Get in Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-zinc-900 leading-tight mb-6">
              Have a question or want to partner with us?
            </h3>
            <p className="text-lg text-zinc-500 mb-8 leading-relaxed">
              Whether you are a restaurant owner looking to expand your reach, a
              rider wanting to earn on your schedule, or a customer with a
              question—we&apos;d love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-[#F2891C]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium">Call Us</p>
                  <p className="text-lg font-bold text-zinc-900">
                    +234 (0) 800 CHOP
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-[#F2891C]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium">Email Us</p>
                  <p className="text-lg font-bold text-zinc-900">
                    hello@chopqik.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form Form */}
          <div className="bg-zinc-50 rounded-3xl p-8 md:p-10 border border-zinc-100 shadow-xl shadow-zinc-200/50">
            {isSuccess ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-[#F2891C]/10 text-[#F2891C] rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-black text-zinc-900">
                  Message Sent!
                </h4>
                <p className="text-zinc-500 max-w-sm">
                  Thanks for reaching out. A member of the ChopQik team will
                  get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 animate-in fade-in duration-500"
              >
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold text-zinc-900"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Osas Ighodaro"
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#F2891C]/50 focus:border-[#F2891C] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-zinc-900"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="e.g. yourname@example.com"
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#F2891C]/50 focus:border-[#F2891C] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-bold text-zinc-900"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#F2891C]/50 focus:border-[#F2891C] transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-[#F2891C] hover:bg-orange-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-[#F2891C]/20 transition-all group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
