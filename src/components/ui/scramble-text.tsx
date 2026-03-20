"use client";

import * as React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { cn } from "@/lib/utils";

gsap.registerPlugin(TextPlugin);

interface ScrambleTextProps {
  texts: string[];
  className?: string;
  scrambleSpeed?: number;
  pauseDuration?: number;
}

export function ScrambleText({
  texts,
  className,
  scrambleSpeed = 1,
  pauseDuration = 2,
}: ScrambleTextProps) {
  const containerRef = React.useRef<HTMLSpanElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({ repeat: -1 });

      texts.forEach((text) => {
        // Scramble to the new text
        tl.to(containerRef.current, {
          duration: scrambleSpeed,
          text: {
            value: text,
            delimiter: "",
            padSpace: true,
          },
          ease: "none",
        });

        // Pause to let user read
        tl.to({}, { duration: pauseDuration });
      });
    },
    {
      scope: containerRef,
      dependencies: [texts, scrambleSpeed, pauseDuration],
    },
  );

  return (
    <span
      ref={containerRef}
      className={cn("inline-block font-mono", className)}
    >
      {texts[0]}
    </span>
  );
}
