"use client";

import { motion } from "framer-motion";
import { Utensils, ShoppingBasket, Pill, Wine } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "food",
    title: "Vibes & Food",
    description: "Your favorite local spots and fancy restaurants.",
    icon: Utensils,
    color: "bg-orange-100 text-orange-600",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colSpan: "lg:col-span-2",
  },
  {
    id: "grocery",
    title: "Market Runs",
    description: "Fresh peppers, tubers, and spices from Oba Market.",
    icon: ShoppingBasket,
    color: "bg-green-100 text-green-600",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colSpan: "lg:col-span-1",
  },
  {
    id: "pharmacy",
    title: "Pharmacy",
    description: "Meds delivered locally.",
    icon: Pill,
    color: "bg-blue-100 text-blue-600",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Standard pharmacy image
    colSpan: "lg:col-span-1",
  },
  {
    id: "drinks",
    title: "Drinks & Ice",
    description: "Cold drinks for the party, sharp sharp.",
    icon: Wine,
    color: "bg-purple-100 text-purple-600",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colSpan: "lg:col-span-2",
  },
];

export function ServiceGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-secondary mb-4">
            More than just <span className="text-[#F2891C]">chop.</span>
          </h2>
          <p className="text-lg text-gray-600">
            From market runs to pharmacy needs, we've got your back. One app for
            everything Benin City has to offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={cn(
                "relative group overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500",
                service.colSpan,
              )}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                <motion.div
                  initial={{ y: 0 }}
                  whileHover={{ y: -5 }}
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform",
                    "bg-white/20 backdrop-blur-md border border-white/30",
                  )}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/80 font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
