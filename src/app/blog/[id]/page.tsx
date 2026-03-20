"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allPosts } from "@/lib/blog-posts";

import { use } from "react";

export default function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const post = allPosts.find((p) => p.id === id);

  // Progress Bar Animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!post) {
    notFound();
  }

  // Get next articles for footer
  const relatedPosts = allPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#F2891C] origin-left z-50 rounded-r-full"
        style={{ scaleX }}
      />

      {/* Global Back Link (Fixed top left for easy access on huge screens, hidden on mobile in favor of standard breadcrumb) */}
      <div className="hidden xl:block fixed top-8 left-8 z-40">
        <Link
          href="/blog"
          className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-zinc-100 shadow-sm text-zinc-500 hover:text-[#F2891C] hover:border-[#F2891C]/30 font-semibold transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          Home
        </Link>
      </div>

      <main className="pt-40 pb-24">
        {/* --- HERO SECTION --- */}
        <header className="container mx-auto px-4 max-w-5xl mb-16 lg:mb-24">
          <div className="xl:hidden mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-zinc-500 hover:text-[#F2891C] font-semibold transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 lg:pr-8">
              <div className="flex items-center gap-3 text-sm font-medium text-zinc-500 mb-6">
                <span className="px-3 py-1 bg-[#F2891C]/10 text-[#F2891C] rounded-full font-bold uppercase tracking-wide text-xs">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-zinc-900 leading-[1.1] mb-6 tracking-tight">
                {post.title}
              </h1>

              <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed font-medium mb-8">
                {post.excerpt}
              </p>
            </div>

            <div className="w-full lg:w-5/12 h-[300px] lg:h-[500px] relative rounded-4xl overflow-hidden shadow-2xl shadow-zinc-200 shrink-0 isolate">
              {/* Subtle zoom effect for premium feel */}
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                priority
              />
              <div className="absolute inset-0 border border-black/5 rounded-4xl pointer-events-none" />
            </div>
          </div>
        </header>

        {/* --- SPLIT CONTENT LAYOUT --- */}
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 relative">
            {/* Left Sidebar (Sticky over scroll) */}
            <aside className="lg:w-64 shrink-0">
              <div className="sticky top-32 lg:pb-12 border-b lg:border-b-0 lg:border-r border-zinc-100 pb-8 mb-8 lg:mb-0 lg:pr-8">
                {/* Author Info */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-zinc-100 rounded-full flex items-center justify-center font-bold text-xl text-zinc-500 ring-2 ring-white shadow-sm">
                    {post.author.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-zinc-900 text-lg leading-none mb-1">
                      {post.author.name}
                    </div>
                    <div className="text-sm text-zinc-500">
                      {post.author.role}
                    </div>
                  </div>
                </div>

                {/* Published Date */}
                <div className="mb-8">
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">
                    Published
                  </div>
                  <time className="text-zinc-900 font-medium">{post.date}</time>
                </div>

                {/* Share Actions */}
                <div>
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">
                    Share Article
                  </div>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500 hover:text-blue-500 hover:border-blue-200 hover:bg-blue-50 transition-all">
                      <Twitter size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500 hover:text-blue-700 hover:border-blue-200 hover:bg-blue-50 transition-all">
                      <Linkedin size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all">
                      <Facebook size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500 hover:text-[#F2891C] hover:border-[#F2891C]/30 hover:bg-[#F2891C]/5 transition-all xl:hidden">
                      {/* Generic share for mobile */}
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Main Article Body */}
            <article className="lg:w-full min-w-0">
              <div
                className="prose prose-lg md:prose-xl prose-zinc max-w-none 
                  prose-p:leading-relaxed prose-p:text-zinc-600
                  prose-headings:font-black prose-headings:text-zinc-900 prose-headings:tracking-tight
                  prose-h2:mt-12 prose-h2:mb-6
                  prose-a:text-[#F2891C] prose-a:no-underline hover:prose-a:underline hover:prose-a:text-orange-600
                  prose-blockquote:border-l-[#F2891C] prose-blockquote:bg-zinc-50/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:font-medium prose-blockquote:text-lg md:prose-blockquote:text-2xl prose-blockquote:leading-snug prose-blockquote:not-italic prose-blockquote:my-12
                  prose-hr:border-zinc-100 prose-hr:my-12
                  prose-li:text-zinc-600
                  [&>p:first-of-type]:first-letter:float-left [&>p:first-of-type]:first-letter:text-7xl [&>p:first-of-type]:first-letter:pr-4 [&>p:first-of-type]:first-letter:font-black [&>p:first-of-type]:first-letter:text-[#F2891C] [&>p:first-of-type]:first-letter:leading-[0.8]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags Section */}
              <div className="mt-16 pt-8 border-t border-zinc-100">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-sm text-zinc-900">Tags:</span>
                  <span className="px-3 py-1 bg-zinc-100 rounded-full text-xs font-semibold text-zinc-600">
                    Food
                  </span>
                  <span className="px-3 py-1 bg-zinc-100 rounded-full text-xs font-semibold text-zinc-600">
                    Benin City
                  </span>
                  <span className="px-3 py-1 bg-zinc-100 rounded-full text-xs font-semibold text-zinc-600">
                    {post.category}
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      {/* --- READ NEXT FOOTER --- */}
      <footer className="bg-zinc-50 py-24 border-t border-zinc-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black text-zinc-900">Read Next</h2>
            <Link
              href="/blog"
              className="hidden md:flex items-center gap-2 text-[#F2891C] font-bold hover:text-orange-600 transition-colors"
            >
              View all articles <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((related) => (
              <Link
                href={`/blog/${related.id}`}
                key={related.id}
                className="group block"
              >
                <article className="bg-white rounded-4xl p-4 border border-zinc-100 hover:border-[#F2891C]/30 hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center">
                  <div className="relative w-full sm:w-32 h-48 sm:h-32 rounded-2xl overflow-hidden shrink-0">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 py-2">
                    <div className="text-xs font-bold text-[#F2891C] uppercase tracking-wider mb-2">
                      {related.category}
                    </div>
                    <h3 className="font-black text-lg text-zinc-900 leading-tight mb-2 group-hover:text-[#F2891C] transition-colors">
                      {related.title}
                    </h3>
                    <div className="text-sm text-zinc-500 flex items-center gap-2">
                      <Clock size={12} /> {related.readTime}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#F2891C] font-bold hover:text-orange-600 transition-colors"
            >
              View all articles <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
