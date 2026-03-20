"use client";

import * as React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { cn } from "@/lib/utils";

// Ensure plugins are registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
  // Note: ScrambleTextPlugin is a paid Club GSAP plugin.
  // For this demo/MVP without paid plugins, we will simulate the effect
  // using standard GSAP animations on character codes or text content
  // if the plugin isn't available, or use a custom scramble logic.
  // Since we don't have the paid plugin in this environment, I'll write a custom scrambler.
}

interface InteractiveHeroTextProps {
  text: string;
  className?: string;
}

export function InteractiveHeroText({
  text,
  className,
}: InteractiveHeroTextProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Split text into characters, preserving spaces
  const characters = React.useMemo(() => text.split(""), [text]);

  const handleMouseEnter = (index: number) => {
    const charElement = containerRef.current?.children[index] as HTMLElement;
    if (!charElement) return;

    const originalChar = characters[index];
    if (originalChar === " ") return; // Don't animate spaces

    // Kill any existing tweens on this element
    gsap.killTweensOf(charElement);

    // Create a timeline for the "pop" / rubber-band effect
    const tl = gsap.timeline();

    tl.to(charElement, {
      scaleY: 1.5,
      scaleX: 1.2,
      y: -10,
      color: "#f2891c", // Flash orange
      webkitTextFillColor: "#f2891c", // Force opacity override for gradient text
      duration: 0.1,
      ease: "power2.out",
    }).to(charElement, {
      scaleY: 1,
      scaleX: 1,
      y: 0,
      color: "inherit",
      // Removed webkitTextFillColor: "transparent" to avoid premature invisibility.
      // clearProps will handle the reset to gradient.
      duration: 0.4,
      ease: "elastic.out(1, 0.3)", // Rubber band bounce
      clearProps: "all", // Remove inline styles after animation to prevent glitches
    });
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "inline-flex flex-wrap justify-center gap-x-[0.05em]",
        className,
      )}
      aria-label={text}
    >
      {characters.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="inline-block transition-colors cursor-default"
          onMouseEnter={() => handleMouseEnter(index)}
          style={{
            whiteSpace: char === " " ? "pre" : "normal",
            minWidth: char === " " ? "0.3em" : "auto",
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
