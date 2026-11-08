import { NAV, PROJECTS, SITE_URL } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap() {
  const now = new Date();
  const paths = ["/", ...NAV.map((n) => `${n.href}/`), ...PROJECTS.map((p) => `/work/${p.slug}/`)];
  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.startsWith("/work/") ? 0.7 : 0.8,
  }));
}
