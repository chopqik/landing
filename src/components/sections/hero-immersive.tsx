"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import * as React from "react";
import { InteractiveHeroText } from "@/components/ui/interactive-hero-text";
import { APP_LINKS } from "@/constants/links";

// TODO: replace with real product imagery — dashboard screenshots from the
// demo account and a photograph of a printed table tent on a real table.
// Stock food photography is what makes this read as a template rather than
// a product. The dashboard is the differentiator; show it.
const BACKGROUND_IMAGES = [
  "/images/keesha-s-kitchen-eaSIzdS8pv0-unsplash.jpg",
  "/images/keesha-s-kitchen-jvFeJhQ6Xsk-unsplash.jpg",
  "/images/abraham-owunna-K5HSd7U8tRo-unsplash.jpg",
  "/images/keesha-s-kitchen-PqG32DYCTM8-unsplash.jpg",
];

export function HeroImmersive({
  onPartnerClick,
  onVendorClick,
  onRiderClick, // eslint-disable-line @typescript-eslint/no-unused-vars
}: {
  onPartnerClick?: () => void;
  onVendorClick?: () => void;
  onRiderClick?: () => void;
}) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // The primary action is for vendors — they are the customer who pays.
  // The delivery waitlist is secondary and deliberately labelled as a future
  // service, not a live one.
  const handlePrimary = onVendorClick ?? onPartnerClick;

  return (
    <section
      id="hero"
      ref={ref}
      className="relative w-full h-screen overflow-hidden bg-[#0a0a0a] flex items-center justify-center"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0 bg-black"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={BACKGROUND_IMAGES[currentIndex]}
              alt="A Nigerian restaurant kitchen at work"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/70 md:bg-black/60 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10 pointer-events-none" />
      </motion.div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-sm font-medium text-white mb-8">
            <span className="w-2 h-2 bg-[#F2891C] rounded-full animate-pulse" />
            Live in Benin City · More cities loading
          </div>

          <div className="mb-8 drop-shadow-2xl">
            <InteractiveHeroText
              text="One system."
              className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none block mb-2"
            />
            <InteractiveHeroText
              text="Total control."
              className="py-2 text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none block text-transparent bg-clip-text bg-gradient-to-r from-[#F2891C] to-orange-300"
            />
          </div>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-4 leading-relaxed font-light">
            The operating system for restaurants, bars and hotels. Orders,
            stock, staff, reservations and your daily takings — on one screen,
            in real time.
          </p>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70 mb-10 leading-relaxed font-light">
            One flat monthly fee.{" "}
            <span className="text-white font-medium">
              No commission on a single sale, ever.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button
              onClick={handlePrimary}
              className="inline-flex h-14 px-10 text-lg rounded-full bg-[#F2891C] hover:bg-[#F2891C]/90 text-white shadow-2xl hover:scale-105 items-center justify-center transition-all duration-300 min-w-[180px] font-bold"
            >
              Get ChopQik for your business
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <Button
              asChild
              variant="outline"
              className="group h-14 px-8 rounded-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white hover:border-white/40 transition-all font-semibold"
            >
              <a
                href={APP_LINKS.waitList}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Truck className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Delivery is coming — join the list
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
