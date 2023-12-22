import {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  //TODO: change domain
  return [
    {
      url: "https://information-aggregator-home.vercel.app/",
      lastModified: new Date("2023-12-22"),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://information-aggregator-home.vercel.app/terms-of-service",
      lastModified: new Date("2023-12-22"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
