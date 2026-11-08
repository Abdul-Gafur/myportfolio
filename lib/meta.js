import { SEO } from "@/content/site";

/** Per-page metadata: title, description, canonical URL and matching Open Graph fields. */
export function pageMeta({ title, description = SEO.description, path }) {
  const url = path.endsWith("/") ? path : `${path}/`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", siteName: "ghaf.dev", images: [SEO.image] },
    twitter: { card: "summary_large_image", title, description, images: [SEO.image.url] },
  };
}
