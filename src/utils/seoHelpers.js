/**
 * SEO Helper Utilities
 * =====================
 * Comprehensive SEO optimization utilities for images, performance, accessibility, and metadata
 */

import { siteConfig } from "../seo/siteConfig";

/**
 * Image Optimization Helpers
 * Used for lazy loading, responsive images, and modern formats
 */
export const imageOptimization = {
  // Generate responsive image sizes for srcset
  generateSrcSet: (imagePath, sizes = [320, 640, 960, 1280, 1920]) => {
    return sizes
      .map((size) => `${imagePath}?w=${size} ${size}w`)
      .join(", ");
  },

  // Generate picture element with WebP and fallback
  generatePictureElement: (imagePath, altText, sizes) => ({
    webp: `${imagePath}?format=webp`,
    jpg: `${imagePath}?format=jpg`,
    srcSet: imageOptimization.generateSrcSet(imagePath, sizes),
    alt: altText,
  }),

  // Lazy loading attribute for performance
  lazyLoadingConfig: {
    loading: "lazy",
    decoding: "async",
  },

  // Image schema for search engines
  generateImageSchema: (imageUrl, altText, width = 1200, height = 630) => ({
    "@context": "https://schema.org",
    "@type": "ImageObject",
    url: imageUrl,
    name: altText,
    width: width,
    height: height,
  }),
};

/**
 * Accessibility Helpers
 * Ensures WCAG 2.1 AA compliance
 */
export const accessibility = {
  // ARIA labels for icons and non-text content
  generateAriaLabel: (iconName, actionType) =>
    `${actionType} - ${iconName}`,

  // Meta tags for accessibility
  getAccessibilityMeta: () => [
    {
      name: "accessibility",
      content: "yes",
    },
    {
      name: "color-scheme",
      content: "light dark",
    },
    {
      "http-equiv": "X-UA-Compatible",
      content: "IE=edge",
    },
  ],

  // Screen reader optimization
  screenReaderText: (text) => ({
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: "0",
  }),
};

/**
 * Performance Helpers
 * Optimizes Core Web Vitals and loading performance
 */
export const performance = {
  // Preconnect domains for performance
  preconnectDomains: [
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
    "https://vercel.app",
    "https://www.google-analytics.com",
  ],

  // DNS prefetch for third-party services
  dnsPrefetch: [
    "https://fonts.googleapis.com",
    "https://www.google-analytics.com",
  ],

  // Resource hints for optimization
  generateResourceHints: () => [
    ...performance.preconnectDomains.map((domain) => ({
      rel: "preconnect",
      href: domain,
    })),
    ...performance.dnsPrefetch.map((domain) => ({
      rel: "dns-prefetch",
      href: domain,
    })),
  ],

  // Web performance metrics tracking
  trackWebVitals: () => {
    if (typeof window !== "undefined" && "web-vital" in window) {
      const { getCLS, getFID, getFCP, getLCP, getTTFB } = require("web-vitals");

      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    }
  },

  // Cache control headers hint
  cacheStrategy: {
    images: "public, max-age=31536000, immutable",
    css: "public, max-age=31536000, immutable",
    js: "public, max-age=31536000, immutable",
    html: "public, max-age=3600, must-revalidate",
  },
};

/**
 * Structured Data Helpers
 * Schema.org and semantic web optimization
 */
export const structuredData = {
  // Breadcrumb navigation schema
  generateBreadcrumbSchema: (breadcrumbs) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),

  // Local business hours schema
  generateBusinessHoursSchema: (hours) => ({
    "@context": "https://schema.org",
    "@type": "OpeningHoursSpecification",
    dayOfWeek: hours.day,
    opens: hours.opens,
    closes: hours.closes,
  }),

  // Product review schema
  generateReviewSchema: (product, review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Product",
      name: product.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewBody: review.text,
    datePublished: review.date,
  }),

  // FAQ schema
  generateFaqSchema: (faqs) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }),

  // Video schema
  generateVideoSchema: (video) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: video.thumbnail,
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: video.contentUrl,
  }),
};

/**
 * SEO Meta Tags Helper
 * Dynamic meta tag generation
 */
export const metaTags = {
  // Generate Open Graph meta tags
  generateOgTags: (page) => ({
    "og:title": page.title,
    "og:description": page.description,
    "og:image": page.image || `${siteConfig.siteUrl}${siteConfig.ogImagePath}`,
    "og:image:alt": page.imageAlt || siteConfig.ogImageAlt,
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:url": page.url,
    "og:type": page.type || "website",
    "og:locale": siteConfig.locale,
    "og:site_name": siteConfig.siteName,
  }),

  // Generate Twitter/X card meta tags
  generateTwitterTags: (page) => ({
    "twitter:card": "summary_large_image",
    "twitter:title": page.title,
    "twitter:description": page.description,
    "twitter:image": page.image || `${siteConfig.siteUrl}${siteConfig.ogImagePath}`,
    "twitter:image:alt": page.imageAlt || siteConfig.ogImageAlt,
  }),

  // Generate SEO meta tags
  generateSeoTags: (page) => ({
    description: page.description,
    keywords: Array.isArray(page.keywords) ? page.keywords.join(", ") : page.keywords,
    robots: page.robots || "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    googlebot: page.googlebot || "index, follow, max-image-preview:large, max-snippet:-1",
    bingbot: page.bingbot || "index, follow, max-image-preview:large, max-snippet:-1",
    canonical: page.url,
  }),

  // Generate geo meta tags for local SEO
  generateGeoTags: (location) => ({
    "geo.region": location.region,
    "geo.placename": location.placename,
    "geo.position": `${location.latitude};${location.longitude}`,
    ICBM: `${location.latitude}, ${location.longitude}`,
  }),
};

/**
 * Social Media & Brand Optimization
 */
export const brandOptimization = {
  // Generate JSON-LD for brand identity
  generateBrandSchema: () => ({
    "@context": "https://schema.org",
    "@type": "Brand",
    name: siteConfig.siteName,
    logo: `${siteConfig.siteUrl}/brand-crest.svg`,
    sameAs: siteConfig.socialProfiles,
  }),

  // Social profiles for rich results
  generateSocialProfiles: () => siteConfig.socialProfiles,

  // Knowledge panel optimization
  generateKnowledgePanelOptimization: () => ({
    "@context": "https://schema.org",
    "@type": "Thing",
    name: siteConfig.siteName,
    description: siteConfig.defaultDescription,
    sameAs: siteConfig.socialProfiles,
  }),
};

/**
 * Browser & Compatibility Helpers
 */
export const compatibility = {
  // Meta tags for cross-browser support
  getBrowserCompatibilityMeta: () => [
    {
      "http-equiv": "X-UA-Compatible",
      content: "IE=edge",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
    {
      name: "msapplication-navbutton-color",
      content: siteConfig.themeColor,
    },
  ],

  // Polyfill detection
  requiresPolyfill: {
    fetch: () => typeof fetch === "undefined",
    promises: () => typeof Promise === "undefined",
    intersectionObserver: () => typeof IntersectionObserver === "undefined",
  },
};

/**
 * Security & Privacy Meta Tags
 */
export const security = {
  // Content Security Policy meta tag
  getCspMeta: () => ({
    "http-equiv": "Content-Security-Policy",
    content: "upgrade-insecure-requests",
  }),

  // Permissions policy
  getPermissionsPolicyMeta: () => ({
    name: "permissions-policy",
    content: "geolocation=(), microphone=(), camera=()",
  }),

  // Referrer policy
  getReferrerPolicyMeta: () => ({
    name: "referrer",
    content: "strict-origin-when-cross-origin",
  }),
};

/**
 * Analytics & Tracking Helpers
 */
export const analytics = {
  // Google Analytics tracking setup
  getGoogleAnalyticsCode: (trackingId) => `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${trackingId}');
  `,

  // Page view tracking
  trackPageView: (pagePath, pageTitle) => {
    if (typeof gtag !== "undefined") {
      gtag("config", "GA_MEASUREMENT_ID", {
        page_path: pagePath,
        page_title: pageTitle,
      });
    }
  },

  // Event tracking
  trackEvent: (eventName, eventData) => {
    if (typeof gtag !== "undefined") {
      gtag("event", eventName, eventData);
    }
  },
};

export default {
  imageOptimization,
  accessibility,
  performance,
  structuredData,
  metaTags,
  brandOptimization,
  compatibility,
  security,
  analytics,
};
