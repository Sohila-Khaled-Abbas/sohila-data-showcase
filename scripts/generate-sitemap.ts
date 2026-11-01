import { writeFileSync } from "fs";
import { resolve } from "path";

// Allow an explicit HTTPS origin when publishing this legacy showcase on another host.
const SITE_URL = new URL(process.env.SITEMAP_BASE_URL || "https://sohilakhaled-portfolio.lovable.app");
if (
  SITE_URL.protocol !== "https:" ||
  SITE_URL.username ||
  SITE_URL.password ||
  SITE_URL.search ||
  SITE_URL.hash
) {
  throw new Error("SITEMAP_BASE_URL must be a clean HTTPS URL without credentials or query parameters.");
}
const BASE_URL = SITE_URL.href.endsWith("/") ? SITE_URL.href.slice(0, -1) : SITE_URL.href;

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
