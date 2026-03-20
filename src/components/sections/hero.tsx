"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextReveal } from "@/components/ui/text-reveal";

export function Hero({ onPartnerClick }: { onPartnerClick: () => void }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-48 md:pb-32 lg:pt-56">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-[#F2891C]/5 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-accent-teal/5 blur-3xl opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-800 shadow-sm mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#F2891C] mr-2" />
              Live in Benin City
            </motion.div>

            <div className="mb-6">
              <TextReveal
                text="From the streets to"
                className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:leading-tight"
              />
              <TextReveal
                text="your doorstep."
                className="text-4xl font-extrabold tracking-tight text-[#F2891C] sm:text-5xl md:text-6xl lg:leading-tight"
                delay={0.2}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="max-w-xl text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Order from local restaurants and street food vendors in Benin
              City—fast, affordable, and reliable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="shadow-orange-200 shadow-lg hover:shadow-xl transition-all"
              >
                Order Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-200 hover:bg-gray-50"
                onClick={onPartnerClick}
              >
                Partner with Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-8 flex items-center gap-4 text-sm text-gray-500"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-white bg-gray-200"
                  />
                ))}
              </div>
              <p>Trusted by 500+ foodies in Benin</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="relative lg:ml-auto"
          >
            {/* Floating animation for image */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 mx-auto max-w-[500px] w-full aspect-square rounded-3xl overflow-hidden shadow-2xl origin-center border-4 border-white/50"
            >
              <Image
                src="https://images.unsplash.com/photo-1596766736412-f0b2404e760c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Delicious Jollof Rice"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
