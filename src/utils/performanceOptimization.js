/**
 * Performance Optimization Utilities
 * ====================================
 * Comprehensive performance optimization and monitoring tools
 */

/**
 * Image Lazy Loading Configuration
 * Implements intersection observer for optimal lazy loading
 */
export const lazyLoadConfig = {
  // Intersection Observer options for lazy loading
  imageIntersectionOptions: {
    root: null,
    rootMargin: "50px",
    threshold: 0.01,
  },

  // Lazy load images using native loading attribute
  lazyLoadImage: (src, alt) => ({
    src,
    alt,
    loading: "lazy",
    decoding: "async",
  }),

  // Generate responsive image with multiple sizes
  responsiveImage: (basePath, alt) => ({
    src: `${basePath}?w=640`,
    srcSet: `
      ${basePath}?w=320 320w,
      ${basePath}?w=640 640w,
      ${basePath}?w=960 960w,
      ${basePath}?w=1280 1280w,
      ${basePath}?w=1920 1920w
    `.trim(),
    alt,
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 1200px",
    loading: "lazy",
    decoding: "async",
  }),

  // Picture element with WebP and fallback
  pictureElement: (basePath, alt) => ({
    webp: `${basePath}?format=webp&w=1280`,
    jpg: `${basePath}?format=jpg&w=1280`,
    webpSrcSet: `
      ${basePath}?format=webp&w=640 640w,
      ${basePath}?format=webp&w=1280 1280w,
      ${basePath}?format=webp&w=1920 1920w
    `.trim(),
    jpgSrcSet: `
      ${basePath}?format=jpg&w=640 640w,
      ${basePath}?format=jpg&w=1280 1280w,
      ${basePath}?format=jpg&w=1920 1920w
    `.trim(),
    alt,
    loading: "lazy",
  }),
};

/**
 * Route-Based Code Splitting
 * Lazy load pages on demand
 */
export const routeCodeSplitting = {
  // Lazy load component with error boundary
  lazyLoad: (importFunc, fallback) => {
    const Component = importFunc;
    return {
      Component,
      fallback,
    };
  },

  // Preload route on hover
  preloadRoute: (importFunc) => {
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.href = importFunc.toString();
    document.head.appendChild(link);
  },
};

/**
 * Browser Caching Strategy
 * Optimize cache headers and strategy
 */
export const cachingStrategy = {
  // Cache headers configuration
  headers: {
    // HTML - check for updates frequently
    html: {
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
    // CSS/JS - cache forever with versioning
    assets: {
      "Cache-Control": "public, max-age=31536000, immutable",
    },
    // Images - cache for a year
    images: {
      "Cache-Control": "public, max-age=31536000, immutable",
    },
    // API responses - short cache
    api: {
      "Cache-Control": "public, max-age=60, must-revalidate",
    },
  },

  // Service Worker registration
  registerServiceWorker: async () => {
    if ("serviceWorker" in navigator) {
      try {
        const registration = await navigator.serviceWorker.register("/sw.js");
        console.log("Service Worker registered:", registration);
        return registration;
      } catch (error) {
        console.error("Service Worker registration failed:", error);
      }
    }
  },

  // Cache busting helper
  getVersionedAsset: (assetPath) => {
    const hash = new Date().getTime();
    return `${assetPath}?v=${hash}`;
  },
};

/**
 * Core Web Vitals Monitoring
 * Track LCP, FID, CLS, INP, TTFB
 */
export const webVitalsMonitoring = {
  // Measure Largest Contentful Paint (LCP)
  measureLCP: (callback) => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      callback(lastEntry.renderTime || lastEntry.loadTime);
    });

    observer.observe({ entryTypes: ["largest-contentful-paint"] });
    return observer;
  },

  // Measure First Input Delay (FID)
  measureFID: (callback) => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        callback(entry.processingDuration);
      });
    });

    observer.observe({ entryTypes: ["first-input"] });
    return observer;
  },

  // Measure Cumulative Layout Shift (CLS)
  measureCLS: (callback) => {
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          callback(clsValue);
        }
      });
    });

    observer.observe({ entryTypes: ["layout-shift"] });
    return observer;
  },

  // Measure Time to First Byte (TTFB)
  measureTTFB: (callback) => {
    if (performance.timing) {
      const ttfb = performance.timing.responseStart - performance.timing.navigationStart;
      callback(ttfb);
    }
  },

  // Get all Web Vitals
  getAllWebVitals: () => {
    const navigation = performance.getEntriesByType("navigation")[0];
    return {
      ttfb: navigation?.responseStart - navigation?.fetchStart,
      fcp: performance.getEntriesByName("first-contentful-paint")[0]?.startTime,
      lcp: performance.getEntriesByType("largest-contentful-paint")?.pop()?.renderTime,
      cls: Math.round(
        performance.getEntriesByType("layout-shift").reduce((sum, entry) => {
          return !entry.hadRecentInput ? sum + entry.value : sum;
        }, 0) * 1000
      ) / 1000,
    };
  },

  // Log Web Vitals to console
  logWebVitals: () => {
    const vitals = webVitalsMonitoring.getAllWebVitals();
    console.table({
      "TTFB (ms)": vitals.ttfb,
      "FCP (ms)": vitals.fcp,
      "LCP (ms)": vitals.lcp,
      "CLS Score": vitals.cls,
    });
  },
};

/**
 * JavaScript Optimization
 * Reduce and optimize JS execution
 */
export const jsOptimization = {
  // Defer non-critical JavaScript
  deferScript: (src) => {
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    document.body.appendChild(script);
  },

  // Load script asynchronously
  asyncScript: (src) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  },

  // Preload critical resources
  preloadResource: (href, as) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  },

  // Remove unused CSS
  purgeUnusedCss: () => {
    // This would typically be handled by tools like PurgeCSS/TailwindCSS
    console.log("Remove unused CSS via build tool");
  },

  // Minify inline scripts
  minifyInlineScript: (code) => {
    return code
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\/\/.*/g, "")
      .replace(/\s+/g, " ")
      .trim();
  },
};

/**
 * CSS Optimization
 * Optimize stylesheets for performance
 */
export const cssOptimization = {
  // Critical CSS inline strategy
  inlineCriticalCss: (criticalCss) => {
    const style = document.createElement("style");
    style.textContent = criticalCss;
    style.setAttribute("data-critical", "true");
    document.head.insertBefore(style, document.head.firstChild);
  },

  // Load non-critical CSS asynchronously
  loadNonCriticalCss: (href, media = "print") => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.media = media;
    link.onload = () => {
      link.media = "all";
    };
    document.head.appendChild(link);
  },

  // Optimize CSS properties
  optimizedCssProperties: {
    // Use transform instead of position changes
    useTransform: (x, y) => ({
      transform: `translate(${x}, ${y})`,
    }),

    // Use opacity instead of visibility
    useOpacity: {
      hidden: { opacity: "0", pointerEvents: "none" },
      visible: { opacity: "1", pointerEvents: "auto" },
    },

    // Use will-change sparingly
    willChange: {
      animation: "will-change: transform, opacity",
    },
  },
};

/**
 * Network Optimization
 * Optimize network requests and compression
 */
export const networkOptimization = {
  // Enable compression detection
  supportsBrotliCompression: () => {
    return navigator.userAgent.includes("Chrome") ||
      navigator.userAgent.includes("Edge") ||
      navigator.userAgent.includes("Firefox");
  },

  // Connection aware loading
  isSlowConnection: () => {
    if ("connection" in navigator) {
      return navigator.connection.effectiveType === "4g" ||
        navigator.connection.effectiveType === "3g" ||
        navigator.connection.effectiveType === "2g";
    }
    return false;
  },

  // Adaptive loading strategy
  getAdaptiveImageQuality: () => {
    if ("connection" in navigator) {
      switch (navigator.connection.effectiveType) {
        case "4g":
          return { quality: 90, format: "webp" };
        case "3g":
          return { quality: 75, format: "jpg" };
        default:
          return { quality: 60, format: "jpg" };
      }
    }
    return { quality: 85, format: "webp" };
  },

  // Request prioritization
  fetchWithPriority: async (url, priority = "high") => {
    return fetch(url, {
      priority: priority, // high, low, auto
    });
  },

  // Reduce API payload
  minifyApiResponse: (response) => {
    return JSON.stringify(response, null, 0);
  },
};

/**
 * Memory Optimization
 * Prevent memory leaks and optimize memory usage
 */
export const memoryOptimization = {
  // Cleanup event listeners
  removeEventListener: (element, event, handler) => {
    if (element) {
      element.removeEventListener(event, handler);
    }
  },

  // Cleanup timers
  clearAllTimers: () => {
    let maxId = setInterval(() => {}, 1);
    for (let i = 1; i < maxId; i++) {
      clearInterval(i);
      clearTimeout(i);
    }
  },

  // Monitor memory usage
  getMemoryUsage: () => {
    if (performance.memory) {
      return {
        usedJsHeapSize: (performance.memory.usedJSHeapSize / 1048576).toFixed(2) + " MB",
        totalJsHeapSize: (performance.memory.totalJSHeapSize / 1048576).toFixed(2) + " MB",
        jsHeapSizeLimit: (performance.memory.jsHeapSizeLimit / 1048576).toFixed(2) + " MB",
      };
    }
    return null;
  },

  // Log memory usage
  logMemoryUsage: () => {
    const memory = memoryOptimization.getMemoryUsage();
    if (memory) {
      console.table(memory);
    }
  },
};

/**
 * Database Query Optimization
 * For future implementation with backend
 */
export const queryOptimization = {
  // Batch API requests
  batchRequests: async (requests) => {
    return Promise.all(requests.map((req) => fetch(req.url, req.options)));
  },

  // Implement request caching
  cacheRequest: (() => {
    const cache = new Map();
    return {
      get: (key) => cache.get(key),
      set: (key, value) => cache.set(key, value),
      has: (key) => cache.has(key),
      clear: () => cache.clear(),
    };
  })(),

  // Request deduplication
  deduplicateRequests: (() => {
    const pending = new Map();
    return {
      fetch: async (url) => {
        if (!pending.has(url)) {
          pending.set(url, fetch(url));
        }
        return pending.get(url);
      },
      clear: () => pending.clear(),
    };
  })(),
};

/**
 * Performance Monitoring & Reporting
 */
export const performanceMonitoring = {
  // Measure function execution time
  measureExecutionTime: async (asyncFn, label) => {
    const start = performance.now();
    const result = await asyncFn();
    const end = performance.now();
    console.log(`${label}: ${(end - start).toFixed(2)}ms`);
    return result;
  },

  // Performance timeline
  getPerformanceTimeline: () => {
    const entries = performance.getEntries();
    return entries.map((entry) => ({
      name: entry.name,
      duration: entry.duration,
      startTime: entry.startTime,
    }));
  },

  // Log performance report
  generatePerformanceReport: () => {
    const navigation = performance.getEntriesByType("navigation")[0];
    const paint = performance.getEntriesByType("paint");
    const resources = performance.getEntriesByType("resource");

    return {
      navigation: {
        dns: navigation?.domainLookupEnd - navigation?.domainLookupStart,
        tcp: navigation?.connectEnd - navigation?.connectStart,
        ttfb: navigation?.responseStart - navigation?.requestStart,
        download: navigation?.responseEnd - navigation?.responseStart,
        domInteractive: navigation?.domInteractive - navigation?.navigationStart,
        domComplete: navigation?.domComplete - navigation?.navigationStart,
      },
      paint: paint.map((p) => ({
        name: p.name,
        startTime: p.startTime,
      })),
      resourceCount: resources.length,
      totalResourceTime: resources.reduce((sum, r) => sum + r.duration, 0),
    };
  },

  // Send metrics to analytics
  sendMetricsToAnalytics: (metrics) => {
    if (typeof gtag !== "undefined") {
      gtag("event", "page_view", {
        performance_metrics: JSON.stringify(metrics),
      });
    }
  },
};

export default {
  lazyLoadConfig,
  routeCodeSplitting,
  cachingStrategy,
  webVitalsMonitoring,
  jsOptimization,
  cssOptimization,
  networkOptimization,
  memoryOptimization,
  queryOptimization,
  performanceMonitoring,
};
