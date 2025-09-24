import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [
    "/",
    "/equipe",
    "/projet-pedagogique",
    "/services",
    "/tarif",
    "/contact",
    "/legals",
    "/projet-pedagogique/accueil",
    "/projet-pedagogique/besoins",
    "/projet-pedagogique/rituels",
    "/projet-pedagogique/activites",
    "/projet-pedagogique/eveil",
    "/projet-pedagogique/developpement",
    "/projet-pedagogique/observation",
    "/projet-pedagogique/transitions-depart",
    "/services/soins-hygiene",
    "/services/activites",
    "/services/rituels",
    "/services/securite",
  ];

  return urls.map((url) => ({
    url: `https://crechedewavre.vercel.app${url}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: url === "/" ? 1.0 : 0.8,
  }));
}
