import {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.burokku.one/",
      lastModified: new Date("2024-01-12"),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.burokku.one/terms-of-service",
      lastModified: new Date("2024-01-12"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
