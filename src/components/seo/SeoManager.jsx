import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { storeInfo } from "../../data/storeData";
import { getPageSeo } from "../../seo/pageSeo";
import { siteConfig } from "../../seo/siteConfig";

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const seo = getPageSeo(location.pathname);

    document.title = seo.title;
    document.documentElement.lang = siteConfig.language;

    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: seo.url,
    });

    upsertLink('link[rel="alternate"][hreflang="en-IN"]', {
      rel: "alternate",
      hreflang: seo.hreflang,
      href: seo.url,
    });

    upsertLink('link[rel="alternate"][hreflang="x-default"]', {
      rel: "alternate",
      hreflang: "x-default",
      href: seo.url,
    });

    [
      { selector: 'meta[name="description"]', attributes: { name: "description", content: seo.description } },
      { selector: 'meta[name="keywords"]', attributes: { name: "keywords", content: seo.keywords.join(", ") } },
      { selector: 'meta[name="robots"]', attributes: { name: "robots", content: seo.robots } },
      { selector: 'meta[name="googlebot"]', attributes: { name: "googlebot", content: seo.googlebot } },
      { selector: 'meta[name="bingbot"]', attributes: { name: "bingbot", content: seo.bingbot } },
      { selector: 'meta[name="author"]', attributes: { name: "author", content: siteConfig.author } },
      { selector: 'meta[name="creator"]', attributes: { name: "creator", content: siteConfig.creator } },
      { selector: 'meta[name="publisher"]', attributes: { name: "publisher", content: siteConfig.publisher } },
      {
        selector: 'meta[name="application-name"]',
        attributes: { name: "application-name", content: siteConfig.siteName },
      },
      {
        selector: 'meta[name="apple-mobile-web-app-title"]',
        attributes: { name: "apple-mobile-web-app-title", content: siteConfig.siteName },
      },
      {
        selector: 'meta[name="apple-mobile-web-app-capable"]',
        attributes: { name: "apple-mobile-web-app-capable", content: "yes" },
      },
      {
        selector: 'meta[name="apple-mobile-web-app-status-bar-style"]',
        attributes: { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      },
      {
        selector: 'meta[name="mobile-web-app-capable"]',
        attributes: { name: "mobile-web-app-capable", content: "yes" },
      },
      {
        selector: 'meta[name="theme-color"]',
        attributes: { name: "theme-color", content: siteConfig.themeColor },
      },
      {
        selector: 'meta[name="msapplication-TileColor"]',
        attributes: { name: "msapplication-TileColor", content: siteConfig.themeColor },
      },
      {
        selector: 'meta[name="format-detection"]',
        attributes: {
          name: "format-detection",
          content: "telephone=yes, email=yes, address=yes",
        },
      },
      {
        selector: 'meta[name="referrer"]',
        attributes: { name: "referrer", content: "strict-origin-when-cross-origin" },
      },
      {
        selector: 'meta[name="geo.region"]',
        attributes: { name: "geo.region", content: siteConfig.geoRegion },
      },
      {
        selector: 'meta[name="geo.placename"]',
        attributes: { name: "geo.placename", content: siteConfig.geoPlacename },
      },
      {
        selector: 'meta[name="geo.position"]',
        attributes: {
          name: "geo.position",
          content: `${storeInfo.latitude};${storeInfo.longitude}`,
        },
      },
      {
        selector: 'meta[name="ICBM"]',
        attributes: { name: "ICBM", content: `${storeInfo.latitude}, ${storeInfo.longitude}` },
      },
      { selector: 'meta[property="og:type"]', attributes: { property: "og:type", content: seo.ogType } },
      {
        selector: 'meta[property="og:locale"]',
        attributes: { property: "og:locale", content: seo.locale },
      },
      {
        selector: 'meta[property="og:site_name"]',
        attributes: { property: "og:site_name", content: siteConfig.siteName },
      },
      { selector: 'meta[property="og:title"]', attributes: { property: "og:title", content: seo.title } },
      {
        selector: 'meta[property="og:description"]',
        attributes: { property: "og:description", content: seo.description },
      },
      { selector: 'meta[property="og:url"]', attributes: { property: "og:url", content: seo.url } },
      { selector: 'meta[property="og:image"]', attributes: { property: "og:image", content: seo.image } },
      {
        selector: 'meta[property="og:image:alt"]',
        attributes: { property: "og:image:alt", content: seo.imageAlt },
      },
      {
        selector: 'meta[property="og:image:width"]',
        attributes: { property: "og:image:width", content: "1200" },
      },
      {
        selector: 'meta[property="og:image:height"]',
        attributes: { property: "og:image:height", content: "630" },
      },
      {
        selector: 'meta[name="twitter:card"]',
        attributes: { name: "twitter:card", content: "summary_large_image" },
      },
      {
        selector: 'meta[name="twitter:title"]',
        attributes: { name: "twitter:title", content: seo.title },
      },
      {
        selector: 'meta[name="twitter:description"]',
        attributes: { name: "twitter:description", content: seo.description },
      },
      {
        selector: 'meta[name="twitter:image"]',
        attributes: { name: "twitter:image", content: seo.image },
      },
      {
        selector: 'meta[name="twitter:image:alt"]',
        attributes: { name: "twitter:image:alt", content: seo.imageAlt },
      },
      // Image Optimization Meta Tags
      {
        selector: 'meta[name="image_src"]',
        attributes: { name: "image_src", content: seo.image },
      },
      {
        selector: 'meta[property="og:image:type"]',
        attributes: { property: "og:image:type", content: "image/svg+xml" },
      },
      // Accessibility Meta Tags
      {
        selector: 'meta[name="accessibility"]',
        attributes: { name: "accessibility", content: "yes" },
      },
      {
        selector: 'meta[name="color-scheme"]',
        attributes: { name: "color-scheme", content: "light dark" },
      },
      // Mobile Web App Meta Tags
      {
        selector: 'meta[name="viewport"]',
        attributes: {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes",
        },
      },
      // Browser Support & Compatibility
      {
        selector: 'meta[http-equiv="X-UA-Compatible"]',
        attributes: { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      },
      // Security & Privacy
      {
        selector: 'meta[http-equiv="Content-Security-Policy"]',
        attributes: {
          "http-equiv": "Content-Security-Policy",
          content: "upgrade-insecure-requests",
        },
      },
      // Permissions & Requests
      {
        selector: 'meta[name="permissions-policy"]',
        attributes: {
          name: "permissions-policy",
          content: "geolocation=(), microphone=(), camera=()",
        },
      },
      // Performance & Preloading
      {
        selector: 'meta[http-equiv="x-ua-compatible"]',
        attributes: { "http-equiv": "x-ua-compatible", content: "ie=edge" },
      },
      // Content Language
      {
        selector: 'meta[name="content-language"]',
        attributes: { name: "content-language", content: "en-IN" },
      },
      // Copyright & Legal
      {
        selector: 'meta[name="copyright"]',
        attributes: { name: "copyright", content: `© 2024 ${siteConfig.author}. All rights reserved.` },
      },
      // Open Graph Extensions
      {
        selector: 'meta[property="og:see_also"]',
        attributes: { property: "og:see_also", content: `${siteConfig.siteUrl}/sitemap.xml` },
      },
    ].forEach(({ selector, attributes }) => upsertMeta(selector, attributes));

    document.head.querySelectorAll('script[data-seo-schema="true"]').forEach((node) => {
      node.remove();
    });

    seo.schemas.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-schema", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [location.pathname]);

  return null;
}

export default SeoManager;
