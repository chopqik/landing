"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  MessageCircle,
  Star,
  Quote,
  MapPin,
  ShieldCheck,
  Rocket,
  CreditCard,
  BadgePercent,
  Images,
  LayoutDashboard,
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- DATA ---

const frustrations = [
  {
    text: "Delivery fees are crazy. 😫",
    author: "Tired User",
    rotation: -3,
    color: "bg-red-500/10 border-red-500/20",
  },
  {
    text: "I waited over an hour, and the food is cold.",
    author: "Hungry Customer",
    rotation: 2,
    color: "bg-orange-500/10 border-orange-500/20",
  },
  {
    text: "That small joint near me isn’t on any app.",
    author: "Foodie in Benin",
    rotation: -2,
    color: "bg-blue-500/10 border-blue-500/20",
  },
];

const customerBenefits = [
  {
    icon: MapPin,
    title: "Distance-Based Fees",
    description: "No random surges. Pay strictly based on distance.",
    color: "bg-blue-500",
  },
  {
    icon: ShieldCheck,
    title: "Local Support",
    description: "Real humans in Benin City. No bots.",
    color: "bg-green-500",
  },
  {
    icon: Rocket,
    title: "Neighborhood Gems",
    description: "Find local spots not on the big apps.",
    color: "bg-orange-500",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Card, Transfer, or USSD.",
    color: "bg-purple-500",
  },
];

const vendorBenefits = [
  {
    icon: BadgePercent,
    title: "Fair Commission",
    description: "We take a smaller cut so you make more.",
    color: "bg-emerald-500",
  },
  {
    icon: Images,
    title: "Assisted Onboarding",
    description: "Free professional photos for your menu.",
    color: "bg-rose-500",
  },
  {
    icon: LayoutDashboard,
    title: "Vendor Dashboard",
    description: "Track orders and earnings in real-time.",
    color: "bg-indigo-500",
  },
];

// --- COMPONENT ---

// --- COMPONENT ---

export function RealityScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  // Mobile detection for conditional rendering logic
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  return (
    <section
      id="about"
      ref={targetRef}
      className="relative h-auto md:h-[300vh] bg-white"
    >
      <div className="relative md:sticky md:top-0 flex flex-col md:flex-row h-auto md:h-screen items-center overflow-hidden md:overflow-hidden">
        {/* Persistent Background Elements */}
        <div className="absolute inset-0 bg-dot-black opacity-5 pointer-events-none" />
        <div className="absolute inset-0 bg-white/40 mask-[radial-gradient(ellipse_at_center,transparent_20%,black_70%)] pointer-events-none" />

        {/* Dynamic Glow Orbs - Deeper, more subtle */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-[#F2891C]/20 rounded-full blur-[80px] md:blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-multiply"
        />

        <motion.div
          style={isDesktop ? { x } : {}}
          className="flex flex-col md:flex-row w-full md:w-auto"
        >
          {/* SECTION 1: REALITY (The Wall of Frustration) */}
          <div className="relative min-h-screen md:h-screen w-full md:w-screen flex items-center justify-center shrink-0 py-20 md:py-0">
            <div className="absolute inset-0 grid place-items-center opacity-10 pointer-events-none select-none overflow-hidden">
              <span className="text-6xl md:text-[20vw] font-black leading-none text-transparent [-webkit-text-stroke:1px_#e4e4e7] md:[-webkit-text-stroke:2px_#e4e4e7]">
                {/* REALITY */}
              </span>
            </div>

            <div className="container mx-auto px-4 relative z-10 grid place-items-center Content">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#F2891C] mb-4">
                  The Current State
                </h2>
                <h3 className="text-4xl md:text-7xl font-black text-zinc-900 mb-6 tracking-tight">
                  Ordering is Broken.
                </h3>
                <p className="text-lg md:text-xl text-zinc-500 max-w-xl md:max-w-2xl mx-auto">
                  We heard the complaints loud and clear. It’s time for
                  something better.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                {frustrations.map((item, i) => (
                  <div
                    key={i}
                    className={cn(
                      "relative bg-white/60 backdrop-blur-xl border border-zinc-200 p-6 md:p-10 rounded-3xl md:rounded-[2rem] shadow-xl w-full max-w-[320px] md:max-w-sm transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 group",
                      item.color.replace("/10", "/5").replace("/20", "/20"),
                    )}
                    style={{
                      rotate: isDesktop ? `${item.rotation}deg` : "0deg",
                    }}
                  >
                    <Quote className="text-zinc-400 mb-4 md:mb-6 w-8 h-8 md:w-10 md:h-10 group-hover:text-[#F2891C] transition-colors duration-300" />
                    <p className="text-xl md:text-2xl font-semibold text-zinc-700 mb-4 md:mb-6 leading-tight group-hover:text-zinc-900 transition-colors">
                      "{item.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-100 flex items-center justify-center text-xs md:text-sm text-zinc-500 font-bold border border-zinc-200">
                        {item.author[0]}
                      </div>
                      <span className="text-xs md:text-sm font-medium text-zinc-500 uppercase tracking-wider">
                        {item.author}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION 2: CUSTOMER BENEFITS (The Solution) */}
          <div className="relative min-h-screen md:h-screen w-full md:w-screen flex items-center justify-center shrink-0 py-20 md:py-0">
            {/* MASSIVE CINEMATIC BACKDROP TEXT */}
            <div className="absolute md:grid place-items-center pointer-events-none select-none overflow-hidden bottom-0 hidden">
              <span className="text-6xl md:text-[20vw] font-black leading-none text-transparent [-webkit-text-stroke:1px_#e4e4e7] md:[-webkit-text-stroke:2px_#e4e4e7] whitespace-nowrap">
                CUSTOMER
              </span>
            </div>

            <div className="container mx-auto px-4 relative z-10 w-full">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* Image Composition Left */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="lg:w-1/2 w-full relative h-[400px] md:h-[600px] rounded-4xl overflow-hidden shadow-2xl group"
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <img
                    src="/images/keesha-s-kitchen-eaSIzdS8pv0-unsplash.jpg"
                    alt="Delicious fresh food delivery"
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000"
                  />
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4"
                  >
                    <div className="bg-green-100 text-green-600 p-2 rounded-full">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <p className="text-zinc-900 font-bold leading-tight">
                        100% Secure
                      </p>
                      <p className="text-zinc-500 text-sm">Local Support</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Text Content Right */}
                <div className="lg:w-1/2 w-full space-y-8 md:space-y-10">
                  <div className="text-center lg:text-left">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-[#F2891C]/20 bg-[#F2891C]/5 text-[#F2891C] text-xs font-bold uppercase tracking-wider mb-4">
                      Customer Experience
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-zinc-900 leading-tight mb-4">
                      More Than <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2891C] to-orange-400">
                        Just Food.
                      </span>
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-light">
                      A delivery experience built around your actual needs. No
                      hidden fees. No cold food. Just vibes and great meals.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {customerBenefits.map((item, i) => (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        key={i}
                        className="flex items-start gap-5 group"
                      >
                        <div
                          className={cn(
                            "mt-1 w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center text-white bg-zinc-100 border border-zinc-200 group-hover:bg-[#F2891C] group-hover:text-white group-hover:border-[#F2891C] transition-all duration-300 shadow-sm",
                            item.color.replace("bg-", "text-"),
                          )}
                        >
                          <item.icon size={22} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-zinc-900 mb-1 group-hover:text-[#F2891C] transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-base text-zinc-500 leading-relaxed group-hover:text-zinc-700 transition-colors">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: VENDOR BENEFITS (The Partnership) */}
          <div className="relative min-h-screen md:h-screen w-full md:w-screen flex items-center justify-center shrink-0 py-20 md:py-0">
            {/* MASSIVE CINEMATIC BACKDROP TEXT */}
            <div className="absolute md:grid place-items-center pointer-events-none select-none overflow-hidden top-0 hidden">
              <span className="text-6xl md:text-[20vw] font-black leading-none text-transparent [-webkit-text-stroke:1px_#e4e4e7] md:[-webkit-text-stroke:2px_#e4e4e7] whitespace-nowrap">
                VENDOR
              </span>
            </div>

            <div className="container mx-auto px-4 relative z-10 w-full">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                {/* Image Composition Right */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="lg:w-1/2 w-full relative h-[400px] md:h-[600px] rounded-4xl overflow-hidden shadow-2xl group"
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <img
                    src="/images/keesha-s-kitchen-jvFeJhQ6Xsk-unsplash.jpg"
                    alt="Busy restaurant kitchen preparing orders"
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000"
                  />
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4"
                  >
                    <div className="bg-orange-100 text-orange-600 p-2 rounded-full">
                      <LayoutDashboard size={24} />
                    </div>
                    <div>
                      <p className="text-zinc-900 font-bold leading-tight">
                        Smart Tools
                      </p>
                      <p className="text-zinc-500 text-sm">Grow Revenue</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Text Content Left */}
                <div className="lg:w-1/2 w-full space-y-8 md:space-y-10">
                  <div className="text-center lg:text-left">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-zinc-200 bg-zinc-100 text-zinc-500 text-xs font-bold uppercase tracking-wider mb-4">
                      Vendor Partnership
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-zinc-900 leading-tight mb-4">
                      Build Your <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2891C] to-orange-400">
                        Empire.
                      </span>
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-light">
                      We don't just deliver your food. We provide the tools,
                      data, and dedicated support to help your restaurant scale
                      sustainably.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {vendorBenefits.map((item, i) => (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        key={i}
                        className="flex items-start gap-5 group"
                      >
                        <div
                          className={cn(
                            "mt-1 w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center text-white bg-zinc-100 border border-zinc-200 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all duration-300 shadow-sm",
                            item.color.replace("bg-", "text-"),
                          )}
                        >
                          <item.icon size={22} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-zinc-900 mb-1 group-hover:text-zinc-700 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-base text-zinc-500 leading-relaxed group-hover:text-zinc-900 transition-colors">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
