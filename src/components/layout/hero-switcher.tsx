"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { LayoutTemplate, Monitor, Smartphone, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSwitcherProps {
  currentHero: string;
  onSwitch: (hero: string) => void;
}

export function HeroSwitcher({ currentHero, onSwitch }: HeroSwitcherProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white rounded-xl shadow-2xl border border-gray-200 p-2 flex flex-col gap-1 min-w-[180px]"
          >
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mb-1">
              Select Variation
            </div>
            <button
              onClick={() => onSwitch("modern")}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left",
                currentHero === "modern"
                  ? "bg-[#F2891C]/10 text-[#F2891C]"
                  : "text-gray-600 hover:bg-gray-50",
              )}
            >
              <LayoutTemplate className="w-4 h-4" />
              Modern (Geometric)
            </button>
            <button
              onClick={() => onSwitch("immersive")}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left",
                currentHero === "immersive"
                  ? "bg-[#F2891C]/10 text-[#F2891C]"
                  : "text-gray-600 hover:bg-gray-50",
              )}
            >
              <Monitor className="w-4 h-4" />
              Immersive (Dark)
            </button>
            <button
              onClick={() => onSwitch("split")}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left",
                currentHero === "split"
                  ? "bg-[#F2891C]/10 text-[#F2891C]"
                  : "text-gray-600 hover:bg-gray-50",
              )}
            >
              <Layers className="w-4 h-4" />
              Split (Dynamic)
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        size="lg"
        className="rounded-full h-12 w-12 p-0 shadow-xl bg-gray-900 hover:bg-gray-800 text-white border-2 border-white/20"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Layers className="w-6 h-6" />
      </Button>
    </div>
  );
}
