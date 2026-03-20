"use client";

import * as React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function TextReveal({
  text,
  className,
  delay = 0,
  direction = "up",
}: TextRevealProps) {
  const container = React.useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".word", {
        y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
        x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: delay,
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className={cn("overflow-hidden", className)}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <span
          key={i}
          className="word inline-block mr-[0.25em] will-change-transform cursor-default transition-colors duration-300 hover:text-[#F2891C]"
          onMouseEnter={(e) => {
            gsap.to(e.target, {
              y: -5,
              scale: 1.1,
              duration: 0.2,
              ease: "power2.out",
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.target, {
              y: 0,
              scale: 1,
              duration: 0.2,
              ease: "power2.out",
            });
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
