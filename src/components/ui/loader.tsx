"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import Lottie to prevent SSR hydration mismatches
const Lottie = dynamic(() => import("lottie-react"), { ssr: false }) as any;

export function Loader() {
  // We'll fetch the animation from the public folder
  // This prevents build errors if the file isn't there yet
  const [animationData, setAnimationData] = React.useState<object | null>(null);

  React.useEffect(() => {
    fetch("/animations/delivery-animation.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load animation");
        return res.json();
      })
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading Lottie animation:", err));
  }, []);

  if (!animationData) {
    // Fallback while loading the JSON
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="w-16 h-16 border-4 border-[#F2891C] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-64 h-64 md:w-96 md:h-96">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
}
