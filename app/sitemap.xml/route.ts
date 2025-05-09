import { type NextRequest } from "next/server";

export const dynamic = "force-static";

export async function GET(req: NextRequest) {
  const baseUrl = "https://qabiir.com"; // Replace with your real domain

  const staticPaths = [
    "",
    "/branding",
    "/designs",
    "/3d/visualization",
    "/3d/animation",
    "/vfx/cgi",
    "/about",
    "/contact",
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPaths
    .map(
      (path) => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `
    )
    .join("")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
