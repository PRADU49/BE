import ScrollProgressBar from "./components/effects/ScrollProgressBar";
import AppRoutes from "./components/layout/AppRoutes";
import SiteFooter from "./components/layout/SiteFooter";
import SiteHeader from "./components/layout/SiteHeader";
import MaintenancePage from "./pages/MaintenancePage";
import { usePointerGlow } from "./hooks/usePointerGlow";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import { webVitalsMonitoring } from "./utils/performanceOptimization";
import { isMaintenanceMode } from "./config/maintenanceConfig";

function App() {
  usePointerGlow();

  // Check if in maintenance mode
  const inMaintenance = isMaintenanceMode();

  // Monitor Web Vitals
  useEffect(() => {
    // Log web vitals in development
    if (process.env.NODE_ENV === "development") {
      // Measure LCP
      webVitalsMonitoring.measureLCP((lcp) => {
        console.log(`LCP: ${lcp.toFixed(2)}ms`);
      });

      // Measure CLS
      webVitalsMonitoring.measureCLS((cls) => {
        console.log(`CLS: ${cls.toFixed(3)}`);
      });

      // Measure TTFB
      webVitalsMonitoring.measureTTFB((ttfb) => {
        console.log(`TTFB: ${ttfb.toFixed(2)}ms`);
      });
    }
  }, []);

  // Show maintenance page if enabled
  if (inMaintenance) {
    return <MaintenancePage />;
  }

  return (
    <BrowserRouter>
      <div className="app-shell">
        <ScrollProgressBar />
        <div className="background-noise" />
        <div className="aurora aurora-left" />
        <div className="aurora aurora-right" />
        <div className="pointer-glow" />

        <div className="page-wrap">
          <SiteHeader />
          <AppRoutes />
          <SiteFooter />
        </div>
      </div>

      <Analytics />
    </BrowserRouter>
  );
}

export default App;
