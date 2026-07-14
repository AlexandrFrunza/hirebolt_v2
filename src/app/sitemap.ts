import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://hirebolt.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/hire-ai-talent", "/train-ai", "/build-ai"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
