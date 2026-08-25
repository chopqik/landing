import type { MetadataRoute } from "next";

// Canonical host. MUST be www.
//
// The apex 308s to www.chopqik.com, and metadataBase, og:url and the canonical
// tag all point at www. A sitemap that lists the apex hands Google a redirect
// as the URL to index, which is why Search Console rejected the previous
// version. Verify the redirect direction has not changed with:
//   curl -sI https://chopqik.com | grep -i "^location"
const BASE = "https://www.chopqik.com";

// Blog post ids, matching app/blog/[id].
//
// Hardcoded because the posts are a fixed set. If posts ever move into a data
// file or CMS, import that source here instead — a sitemap that silently stops
// matching the site is worse than no sitemap, and nothing in the build will
// warn you.
const BLOG_POST_IDS = ["1", "2", "3"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE}/legal`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...BLOG_POST_IDS.map((id) => ({
      url: `${BASE}/blog/${id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
