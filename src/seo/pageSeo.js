import { faqs, services, storeInfo } from "../data/storeData";
import { fullUrl, openingHoursSpecification, siteConfig } from "./siteConfig";

const defaultRobots =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
const defaultBotRobots = "index, follow, max-image-preview:large, max-snippet:-1";

function buildBreadcrumbSchema(path, items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${fullUrl(path)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: fullUrl(item.path),
    })),
  };
}

function buildPageSchema({ path, title, description, type = "WebPage", extra = {} }) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${fullUrl(path)}#webpage`,
    url: fullUrl(path),
    name: title,
    description,
    inLanguage: siteConfig.hreflang,
    isPartOf: {
      "@id": `${siteConfig.siteUrl}/#website`,
    },
    about: {
      "@id": `${siteConfig.siteUrl}/#store`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: fullUrl(siteConfig.ogImagePath),
    },
    breadcrumb: {
      "@id": `${fullUrl(path)}#breadcrumb`,
    },
    ...extra,
  };
}

// Product Schema Builder for e-commerce products
function buildProductSchema({ id, name, description, image, price, availability = "InStock", ratingValue = 4.5, reviewCount = 100 }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteConfig.siteUrl}/product/${id}#product`,
    sku: id,
    name,
    description,
    image: fullUrl(image),
    offers: {
      "@type": "Offer",
      url: `${siteConfig.siteUrl}/product/${id}`,
      priceCurrency: "INR",
      price,
      availability: `https://schema.org/${availability}`,
      seller: {
        "@id": `${siteConfig.siteUrl}/#store`,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
  };
}

// Review Schema Builder
function buildReviewSchema({ productId, reviewerName, reviewDate, reviewText, ratingValue = 5 }) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${siteConfig.siteUrl}/review/${productId}/${Date.now()}`,
    reviewRating: {
      "@type": "Rating",
      ratingValue,
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person",
      name: reviewerName,
    },
    reviewBody: reviewText,
    datePublished: reviewDate,
    itemReviewed: {
      "@type": "Product",
      "@id": `${siteConfig.siteUrl}/product/${productId}#product`,
    },
  };
}

// Video Schema Builder
function buildVideoSchema({ name, description, thumbnail, uploadDate, duration }) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl: fullUrl(thumbnail),
    uploadDate,
    duration,
  };
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.siteUrl}/#organization`,
  name: storeInfo.name,
  url: `${siteConfig.siteUrl}/`,
  logo: fullUrl("/brand-crest.svg"),
  image: fullUrl(siteConfig.ogImagePath),
  telephone: storeInfo.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${storeInfo.addressLines[0]}, ${storeInfo.addressLines[1]}`,
    addressLocality: "Solapur",
    addressRegion: storeInfo.region,
    postalCode: storeInfo.postalCode,
    addressCountry: storeInfo.countryCode,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: storeInfo.phone,
      areaServed: "IN",
      availableLanguage: ["en", "hi", "mr"],
    },
  ],
  sameAs: siteConfig.socialProfiles,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: siteConfig.searchUrl,
    },
    query_input: "required name=search_term_string",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.siteUrl}/#website`,
  url: `${siteConfig.siteUrl}/`,
  name: storeInfo.name,
  description: siteConfig.defaultDescription,
  inLanguage: siteConfig.hreflang,
  publisher: {
    "@id": `${siteConfig.siteUrl}/#organization`,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ElectronicsStore",
  "@id": `${siteConfig.siteUrl}/#store`,
  name: storeInfo.name,
  description: storeInfo.tagline,
  url: `${siteConfig.siteUrl}/`,
  image: fullUrl(siteConfig.ogImagePath),
  logo: fullUrl("/brand-crest.svg"),
  telephone: storeInfo.phone,
  priceRange: "₹₹",
  paymentAccepted: ["Cash", "Debit Card", "UPI"],
  currenciesAccepted: "INR",
  hasMap: storeInfo.mapUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${storeInfo.addressLines[0]}, ${storeInfo.addressLines[1]}`,
    addressLocality: "Solapur",
    addressRegion: storeInfo.region,
    postalCode: storeInfo.postalCode,
    addressCountry: storeInfo.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: storeInfo.latitude,
    longitude: storeInfo.longitude,
  },
  openingHoursSpecification,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: storeInfo.googleRating,
    reviewCount: "1",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: siteConfig.socialProfiles,
};

const globalSchemas = [organizationSchema, websiteSchema, localBusinessSchema];

const pageSeo = {
  "/": {
    path: "/",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    keywords: siteConfig.defaultKeywords,
    robots: defaultRobots,
    googlebot: defaultBotRobots,
    bingbot: defaultBotRobots,
    ogType: "website",
    schemas: [
      ...globalSchemas,
      buildPageSchema({
        path: "/",
        title: siteConfig.defaultTitle,
        description: siteConfig.defaultDescription,
      }),
      buildBreadcrumbSchema("/", [{ name: "Home", path: "/" }]),
    ],
  },
  "/about": {
    path: "/about",
    title: "About Bhakti Enterprises | Trusted Electronics Store in Solapur - Mobile Shop, Electronics Store",
    description:
      "Learn about Bhakti Enterprises, a Solapur electronics and mobile store known for practical guidance, straightforward service, and local trust for everyday shoppers.",
    keywords: [
      "about Bhakti Enterprises",
      "Solapur electronics store",
      "trusted mobile store Solapur",
      "local electronics retailer Solapur",
      "Solapur mobile shop",
      "Solapur home electronics",
    ],
    robots: defaultRobots,
    googlebot: defaultBotRobots,
    bingbot: defaultBotRobots,
    ogType: "website",
    schemas: [
      ...globalSchemas,
      buildPageSchema({
        path: "/about",
        title: "About Bhakti Enterprises | Trusted Electronics Store in Solapur - Mobile Shop, Electronics Store",
        description:
          "Learn about Bhakti Enterprises, a Solapur electronics and mobile store known for practical guidance, straightforward service, and local trust for everyday shoppers.",
        type: "AboutPage",
      }),
      buildBreadcrumbSchema("/about", [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ],
  },
  "/services": {
    path: "/services",
    title: "Services | Mobile Sales, Accessories & Appliances in Solapur - Mobile Shop, Accessories",
    description:
      "Explore Bhakti Enterprises services in Solapur, including smartphone sales, accessory support, home appliance retail, in-store guidance, and flexible payments for local customers.",
    keywords: [
      "mobile sales Solapur",
      "mobile accessories Solapur",
      "home appliance shop Solapur",
      "Bhakti Enterprises services",
      "Solapur smartphone sales",
      "Solapur electronics services",
    ],
    robots: defaultRobots,
    googlebot: defaultBotRobots,
    bingbot: defaultBotRobots,
    ogType: "website",
    schemas: [
      ...globalSchemas,
      buildPageSchema({
        path: "/services",
        title: "Services | Mobile Sales, Accessories & Appliances in Solapur - Mobile Shop, Accessories",
        description:
          "Explore Bhakti Enterprises services in Solapur, including smartphone sales, accessory support, home appliance retail, in-store guidance, and flexible payments for local customers.",
        type: "CollectionPage",
        extra: {
          mainEntity: {
            "@type": "ItemList",
            itemListElement: services.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Service",
                name: service.title,
                description: service.description,
                provider: {
                  "@id": `${siteConfig.siteUrl}/#store`,
                },
                areaServed: {
                  "@type": "City",
                  name: "Solapur",
                },
              },
            })),
          },
        },
      }),
      buildBreadcrumbSchema("/services", [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
      ]),
    ],
  },
  "/contact": {
    path: "/contact",
    title: "Contact Bhakti Enterprises | Store Address, Hours & Phone - Solapur Mobile Shop",
    description:
      "Contact Bhakti Enterprises in Solapur for store directions, daily opening hours, and direct phone support for mobile and electronics purchases.",
    keywords: [
      "Bhakti Enterprises contact",
      "electronics store address Solapur",
      "Bhakti Enterprises phone number",
      "mobile shop near Bhaji Market Solapur",
      "Solapur contact details",
      "Solapur electronics store phone",
    ],
    robots: defaultRobots,
    googlebot: defaultBotRobots,
    bingbot: defaultBotRobots,
    ogType: "website",
    schemas: [
      ...globalSchemas,
      buildPageSchema({
        path: "/contact",
        title: "Contact Bhakti Enterprises | Store Address, Hours & Phone - Solapur Mobile Shop",
        description:
          "Contact Bhakti Enterprises in Solapur for store directions, daily opening hours, and direct phone support for mobile and electronics purchases.",
        type: "ContactPage",
      }),
      buildBreadcrumbSchema("/contact", [
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
    ],
  },
  "/faq": {
    path: "/faq",
    title: "FAQ | Bhakti Enterprises Solapur - Mobile Shop, Electronics Store",
    description:
      "Read frequently asked questions about Bhakti Enterprises, including products, payment options, store timing, and location details in Solapur.",
    keywords: [
      "Bhakti Enterprises FAQ",
      "mobile shop questions Solapur",
      "electronics store FAQ",
      "Bhakti Enterprises timings",
      "Solapur store questions",
      "Solapur mobile store FAQ",
    ],
    robots: defaultRobots,
    googlebot: defaultBotRobots,
    bingbot: defaultBotRobots,
    ogType: "website",
    schemas: [
      ...globalSchemas,
      buildPageSchema({
        path: "/faq",
        title: "FAQ | Bhakti Enterprises Solapur - Mobile Shop, Electronics Store",
        description:
          "Read frequently asked questions about Bhakti Enterprises, including products, payment options, store timing, and location details in Solapur.",
        type: "FAQPage",
        extra: {
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        },
      }),
      buildBreadcrumbSchema("/faq", [
        { name: "Home", path: "/" },
        { name: "FAQ", path: "/faq" },
      ]),
    ],
  },
  "/404": {
    path: "/404",
    title: "Page Not Found | Bhakti Enterprises",
    description:
      "The requested page could not be found on the Bhakti Enterprises website.",
    keywords: ["Bhakti Enterprises 404", "Solapur mobile store"],
    robots: "noindex, nofollow, noarchive",
    googlebot: "noindex, nofollow, noarchive",
    bingbot: "noindex, nofollow, noarchive",
    ogType: "website",
    schemas: [
      ...globalSchemas,
      buildPageSchema({
        path: "/404",
        title: "Page Not Found | Bhakti Enterprises",
        description:
          "The requested page could not be found on the Bhakti Enterprises website.",
      }),
      buildBreadcrumbSchema("/404", [
        { name: "Home", path: "/" },
        { name: "404", path: "/404" },
      ]),
    ],
  },
};

export function getPageSeo(pathname) {
  const normalizedPath =
    pathname && pathname !== "/" ? pathname.replace(/\/+$/, "") || "/" : "/";
  const page = pageSeo[normalizedPath] ?? pageSeo["/404"];

  return {
    ...page,
    url: fullUrl(page.path),
    image: fullUrl(siteConfig.ogImagePath),
    imageAlt: siteConfig.ogImageAlt,
    locale: siteConfig.locale,
    hreflang: siteConfig.hreflang,
  };
}

// Export schema builders for use in other components
export {
  buildBreadcrumbSchema,
  buildPageSchema,
  buildProductSchema,
  buildReviewSchema,
  buildVideoSchema,
};
