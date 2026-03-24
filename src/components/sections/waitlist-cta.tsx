import { Button } from "@/components/ui/button";
import { APP_LINKS } from "@/constants/links";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function WaitlistCTA() {
  return (
    <section className="relative py-24 bg-zinc-950 overflow-hidden isolate">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/abraham-owunna-K5HSd7U8tRo-unsplash.jpg"
          alt="Food background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
        {/* <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 text-sm font-bold text-[#F2891C] mb-8">
          <span className="w-2 h-2 bg-[#F2891C] rounded-full animate-pulse" />
          Beta Launching Soon
        </div> */}

        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
          Don&apos;t wait to{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F2891C] to-orange-300">
            ChopQik
          </span>
          .
        </h2>

        <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Be the first to experience the fastest food delivery in Benin City.
          Join our exclusive waitlist today and get early access plus a special
          discount on your first order.
        </p>

        <a
          href={APP_LINKS.waitList} // Update with actual form link if different
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-16 items-center justify-center px-10 text-lg rounded-full bg-[#F2891C] hover:bg-white hover:text-zinc-900 text-white font-black shadow-2xl hover:scale-105 transition-all duration-300 group"
        >
          Join the Waitlist
          <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
