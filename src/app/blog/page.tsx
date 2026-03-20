import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { allPosts } from "@/lib/blog-posts";

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-zinc-50 pt-36 pb-20">
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="inline-flex px-4 py-1.5 rounded-full border border-[#F2891C]/20 bg-[#F2891C]/5 text-[#F2891C] text-xs font-bold uppercase tracking-wider mb-5">
            ChopQik Blog
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-zinc-900 leading-tight mb-5">
            Stories from food,
            <span className="text-[#F2891C]"> culture, and operations.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 leading-relaxed">
            Explore all blog posts from the ChopQik team and contributors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {allPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-3xl border border-zinc-100 overflow-hidden hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300"
            >
              <Link href={`/blog/${post.id}`} className="block">
                <div className="relative h-56 w-full overflow-hidden">
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

                <div className="p-6 md:p-7">
                  <div className="flex items-center gap-3 text-xs font-medium text-zinc-400 mb-3">
                    <time>{post.date}</time>
                    <span className="w-1 h-1 rounded-full bg-zinc-300" />
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl font-black text-zinc-900 leading-tight mb-3 group-hover:text-[#F2891C] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-zinc-600 leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm font-bold text-[#F2891C]">
                    Read full post
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
