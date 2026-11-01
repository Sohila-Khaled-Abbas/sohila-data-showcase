import { writeFileSync } from "fs";
import { resolve } from "path";

// Override for the actual deployment host; keep existing hostname as a backward-compatible fallback.
const BASE_URL = (process.env.SITEMAP_BASE_URL || "https://sohilakhaled-portfolio.lovable.app").replace(/\\/$/, "");
if (!/^https:\\/\\/[^/\\s]+(?:\\:\\d+)?(?:\\/[^\\s]*)?$/.test(BASE_URL)) {
  throw new Error("SITEMAP_BASE_URL must be an absolute HTTPS URL.");
}

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/templates", changefreq: "weekly", priority: "0.8" },
  { path: "/intake", changefreq: "monthly", priority: "0.8" },
];

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
