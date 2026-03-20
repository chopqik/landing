"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  MapPin,
  ShoppingBag,
  Truck,
  ChefHat,
  Utensils,
  Star,
  Clock,
  Heart,
} from "lucide-react";

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="bg-white relative py-20 md:py-0"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-0">
          {/* Sticky Phone Mockup - Hidden on Mobile */}
          <div className="hidden md:flex sticky top-0 h-screen items-center justify-center order-2 md:order-1 pt-20 md:pt-0">
            <div className="relative w-[320px] h-[650px] bg-white rounded-[3rem] border-4 border-zinc-200 p-2 shadow-2xl overflow-hidden ring-1 ring-black/5">
              {/* Dynamic Island Area */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-black rounded-b-2xl z-50 flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
              </div>

              {/* Bezel & Screen Container */}
              <div className="relative w-full h-full bg-zinc-50 rounded-[2.5rem] overflow-hidden border border-zinc-100 flex flex-col">
                {/* Persistent App Header */}
                <div className="h-14 bg-white border-b border-zinc-100 flex items-center justify-between px-6 pt-2 z-40 shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#F2891C]/10 flex items-center justify-center text-[#F2891C]">
                    <ChefHat size={16} />
                  </div>
                  <span className="font-bold text-zinc-900 text-sm">
                    ChopQik
                  </span>
                  <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                    <ShoppingBag size={14} className="text-zinc-600" />
                  </div>
                </div>

                {/* Screen 1: Browse (Active 0 - 0.3) */}
                <motion.div
                  className="absolute inset-0 top-14 bg-zinc-50 flex flex-col p-4 gap-3 overflow-hidden"
                  style={{
                    opacity: useTransform(scrollYProgress, [0, 0.25], [1, 0]),
                  }}
                >
                  <div className="flex gap-2 mb-2 overflow-hidden">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-24 w-32 shrink-0 rounded-xl bg-zinc-200 animate-pulse"
                      />
                    ))}
                  </div>
                  <div className="h-8 w-3/4 bg-zinc-200 rounded-md animate-pulse mb-4" />

                  {/* Vendor Card */}
                  <div className="bg-white p-3 rounded-2xl border border-zinc-100 shadow-sm flex gap-3">
                    <div className="w-20 h-20 bg-[#F2891C]/20 rounded-xl flex items-center justify-center text-[#F2891C]">
                      <Utensils size={24} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-32 bg-zinc-100 rounded" />
                      <div className="flex gap-1">
                        <Star
                          size={12}
                          className="text-orange-400 fill-orange-400"
                        />
                        <Star
                          size={12}
                          className="text-orange-400 fill-orange-400"
                        />
                        <Star
                          size={12}
                          className="text-orange-400 fill-orange-400"
                        />
                        <Star
                          size={12}
                          className="text-orange-400 fill-orange-400"
                        />
                        <Star size={12} className="text-zinc-200" />
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="h-3 w-16 bg-zinc-100 rounded" />
                        <div className="bg-[#F2891C] text-white text-[10px] font-bold px-2 py-1 rounded-full">
                          ADD
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-zinc-100 shadow-sm flex gap-3 opacity-60">
                    <div className="w-20 h-20 bg-zinc-100 rounded-xl" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-28 bg-zinc-100 rounded" />
                      <div className="h-3 w-12 bg-zinc-100 rounded" />
                    </div>
                  </div>
                </motion.div>

                {/* Screen 2: Order/Cart (Active 0.3 - 0.6) */}
                <motion.div
                  className="absolute inset-0 top-14 bg-white flex flex-col"
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      [0.25, 0.35, 0.6, 0.7],
                      [0, 1, 1, 0],
                    ),
                    y: useTransform(scrollYProgress, [0.25, 0.35], [20, 0]),
                  }}
                >
                  <div className="p-6 flex-1">
                    <h4 className="font-bold text-xl text-zinc-900 mb-6">
                      Your Order
                    </h4>
                    <div className="space-y-4">
                      {[1, 2].map((i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center pb-4 border-b border-zinc-50"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-[#F2891C] font-bold">
                              x1
                            </div>
                            <div>
                              <div className="font-medium text-zinc-800">
                                Jollof Combo
                              </div>
                              <div className="text-xs text-zinc-400">
                                + Spicy Chicken
                              </div>
                            </div>
                          </div>
                          <div className="font-bold text-zinc-900">₦4,500</div>
                        </div>
                      ))}
                      <div className="flex justify-between pt-2">
                        <span className="text-zinc-500">Delivery Fee</span>
                        <span className="font-medium">₦500</span>
                      </div>
                      <div className="flex justify-between pt-2 text-lg font-black text-zinc-900 border-t border-zinc-100 mt-4">
                        <span>Total</span>
                        <span>₦9,500</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-zinc-50 border-t border-zinc-100">
                    <button className="w-full bg-[#F2891C] text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-200 flex items-center justify-center gap-2">
                      <span>Checkout</span>
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </motion.div>

                {/* Screen 3: Delivery (Active 0.6 - 1.0) */}
                <motion.div
                  className="absolute inset-0 top-14 bg-zinc-50 z-20"
                  style={{
                    opacity: useTransform(scrollYProgress, [0.6, 0.7], [0, 1]),
                  }}
                >
                  {/* Map Background */}
                  <div className="absolute inset-0 bg-zinc-200">
                    <div className="absolute top-1/2 left-1/2 w-full h-1 bg-white -rotate-45" />
                    <div className="absolute top-1/3 left-1/3 w-1 h-full bg-white rotate-12" />
                    {/* Route Line */}
                    <svg className="absolute inset-0 w-full h-full">
                      <path
                        d="M 100 100 Q 150 250 220 400"
                        stroke="#f2891c"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="8 4"
                      />
                    </svg>
                    <div className="absolute bottom-1/4 right-1/4 w-4 h-4 rounded-full bg-[#F2891C] animate-ping" />
                    <div className="absolute bottom-1/4 right-1/4 w-4 h-4 rounded-full bg-[#F2891C] border-2 border-white shadow-lg" />
                  </div>

                  {/* Rider Info Card */}
                  <div className="absolute bottom-6 left-4 right-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
                    <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white">
                      <Truck size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-zinc-900">
                        Musa is arriving
                      </div>
                      <div className="text-xs text-zinc-500 flex items-center gap-1">
                        <Clock size={10} /> 5 mins away
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Heart size={18} className="fill-green-600" />
                    </div>
                  </div>
                </motion.div>

                {/* Persistent Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-zinc-300 rounded-full z-50" />
              </div>
            </div>
          </div>

          {/* scrollable Text Content */}
          <div className="order-1 md:order-2">
            {/* Mobile Header */}
            <div className="mb-12 md:hidden text-center">
              <div className="inline-block px-4 py-1.5 rounded-full border border-[#F2891C]/20 bg-[#F2891C]/5 text-[#F2891C] text-xs font-bold uppercase tracking-wider mb-4">
                How it works
              </div>
              <h2 className="text-4xl font-black text-zinc-900 leading-tight">
                Simple as <br />
                1, 2, 3.
              </h2>
            </div>

            {[
              {
                id: "01",
                title: "Choose Vendor",
                desc: "Browse heavily vetted local restaurants and top-tier street food vendors.",
                icon: Utensils,
              },
              {
                id: "02",
                title: "Place Order",
                desc: "Customize your meal. Add extra spicy sauce. Pay securely in seconds.",
                icon: ShoppingBag,
              },
              {
                id: "03",
                title: "We Deliver",
                desc: "Track your food in real-time. From the kitchen flame to your front door.",
                icon: Truck,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col justify-center h-auto md:h-screen pl-0 md:pl-20 mb-16 md:mb-0"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full border border-zinc-200 bg-white text-zinc-500 font-bold text-sm shadow-sm">
                    {step.id}
                  </span>
                  <span className="h-px w-20 bg-zinc-200" />
                </div>
                <h3 className="text-4xl md:text-7xl font-black text-zinc-900 mb-6">
                  {step.title}
                </h3>
                <p className="text-lg md:text-xl text-zinc-500 max-w-md leading-relaxed">
                  {step.desc}
                </p>
                {/* Mobile Icon Visual */}
                <div className="mt-8 md:hidden w-full h-48 bg-zinc-50 rounded-3xl border border-zinc-100 flex items-center justify-center text-[#F2891C]">
                  <step.icon size={48} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
