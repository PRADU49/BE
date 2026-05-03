import { storeInfo } from "../data/storeData";

export const siteConfig = {
  siteName: storeInfo.name,
  shortName: "Bhakti",
  siteUrl: "https://bhakti-enterprises-gilt.vercel.app",
  language: "mr-IN",
  locale: "en_IN",
  hreflang: "en-IN",
  themeColor: "#102a54",
  backgroundColor: "#08142b",
  defaultTitle: "Bhakti Enterprises | Mobile & Electronics Shop in Solapur - Mobile Shop, Electronics Store, Accessories",
  defaultDescription:
    "Bhakti Enterprises is a trusted mobile and electronics shop in Solapur offering smartphones, accessories, and home appliances with clear guidance and practical pricing for local shoppers.",
  defaultKeywords: [
    "Bhakti Enterprises",
    "mobile shop in Solapur",
    "electronics shop in Solapur",
    "smartphones in Solapur",
    "mobile accessories in Solapur",
    "home appliances in Solapur",
    "Solapur mobile store",
    "Solapur electronics store",
  ],
  author: storeInfo.name,
  creator: "Pradyumna Pawar",
  publisher: storeInfo.name,
  ogImagePath: "/og-image.svg",
  ogImageAlt: "Bhakti Enterprises mobile and electronics store in Solapur",
  geoRegion: "IN-MH",
  geoPlacename: "Solapur",
};

export function fullUrl(path = "/") {
  return path === "/" ? `${siteConfig.siteUrl}/` : `${siteConfig.siteUrl}${path}`;
}

export const openingHoursSpecification = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
].map((day) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: day,
  opens: "10:00",
  closes: "22:00",
}));
