import {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://https://www.burokku.one/",
      lastModified: new Date("2024-01-10"),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://https://www.burokku.one/terms-of-service",
      lastModified: new Date("2024-01-10"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
