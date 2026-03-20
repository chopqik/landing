"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import * as React from "react";
import { InteractiveHeroText } from "@/components/ui/interactive-hero-text";

const BACKGROUND_IMAGES = [
  "/images/keesha-s-kitchen-eaSIzdS8pv0-unsplash.jpg",
  "/images/keesha-s-kitchen-jvFeJhQ6Xsk-unsplash.jpg",
  "/images/abraham-owunna-K5HSd7U8tRo-unsplash.jpg",
  "/images/keesha-s-kitchen-PqG32DYCTM8-unsplash.jpg",
];

export function HeroImmersive({
  onPartnerClick,
  onVendorClick, // eslint-disable-line @typescript-eslint/no-unused-vars
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
              alt="ChopQik background food imagery"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60 md:bg-black/50 z-10 pointer-events-none" />
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
            The #1 Food Delivery App in Benin City
          </div>

          <div className="mb-8 drop-shadow-2xl">
            <InteractiveHeroText
              text="From the streets"
              className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none block mb-2"
            />
            <InteractiveHeroText
              text="to your doorstep."
              className="py-2 text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none block text-transparent bg-clip-text bg-gradient-to-r from-[#F2891C] to-orange-300"
            />
          </div>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
            Order from local restaurants and street food vendors in Benin
            City—fast, affordable, and reliable. Expanding to Warri, Asaba, and
            Port Harcourt.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href="https://forms.gle/5n687Hn2fA8P"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 px-10 text-lg rounded-full bg-[#F2891C] hover:bg-[#F2891C]/90 text-white shadow-2xl hover:scale-105 items-center justify-center transition-all duration-300 min-w-[180px] font-bold"
            >
              Join Waitlist <ArrowRight className="ml-2 h-5 w-5" />
            </a>

            <Button
              variant="outline"
              onClick={onPartnerClick}
              className="group h-14 px-8 rounded-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white hover:border-white/40 transition-all font-semibold"
            >
              <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Become a Partner
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
      >
        <div className="w-px h-16 bg-linear-to-b from-transparent via-white/50 to-transparent mx-auto" />
        <p className="text-[10px] uppercase tracking-widest mt-2 text-center">
          Scroll
        </p>
      </motion.div> */}
    </section>
  );
}
