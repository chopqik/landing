"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false }) as any;

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    // 1. Fetch the animation file
    fetch("/animations/delivery-animation.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation", err));

    // 2. Set a timer to dismiss the splash screen
    // This ensures users actually SEE the branding, giving it that "App" feel
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Shows for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-zinc-950"
        >
          {animationData && (
            <div className="w-64 h-64 md:w-80 md:h-80">
              <Lottie animationData={animationData} loop={true} />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
