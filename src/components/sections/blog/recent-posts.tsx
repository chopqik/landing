"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { allPosts } from "@/lib/blog-posts";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

import { Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const featuredPosts = allPosts.slice(0, 3);

export function RecentPosts() {
  return (
    <section
      id="blog"
      className="py-24 bg-zinc-50 border-t border-zinc-100 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-32 -mr-32 w-96 h-96 bg-[#F2891C]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full border border-[#F2891C]/20 bg-[#F2891C]/5 text-[#F2891C] text-xs font-bold uppercase tracking-wider mb-6"
            >
              Inside ChopQik
            </motion.div> */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-zinc-900 leading-tight"
            >
              Latest stories &<br />
              <span className="text-[#F2891C]">foodie guides.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/blog"
              className="group flex items-center gap-2 text-zinc-900 font-bold hover:text-[#F2891C] transition-colors"
            >
              View all posts
              <div className="w-8 h-8 rounded-full bg-zinc-100 group-hover:bg-[#F2891C]/10 flex items-center justify-center transition-colors">
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {featuredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group bg-white rounded-4xl border border-zinc-100 overflow-hidden hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-zinc-900 shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs font-medium text-zinc-400 mb-4">
                  <time>{post.date}</time>
                  <span className="w-1 h-1 rounded-full bg-zinc-300" />
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-zinc-900 mb-4 line-clamp-2 leading-tight group-hover:text-[#F2891C] transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>

                <p className="text-zinc-500 mb-8 line-clamp-3 leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-zinc-50 flex items-center text-sm font-bold text-[#F2891C]">
                  Read Article
                  <ArrowRight
                    size={16}
                    className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
