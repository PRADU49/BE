import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import SeoManager from "../seo/SeoManager";

// Lazy load pages for better performance
const HomePage = lazy(() => import("../../pages/HomePage"));
const AboutPage = lazy(() => import("../../pages/AboutPage"));
const ServicesPage = lazy(() => import("../../pages/ServicesPage"));
const ContactPage = lazy(() => import("../../pages/ContactPage"));
const FaqPage = lazy(() => import("../../pages/FaqPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="loading-fallback">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>
);

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="route-body" key={location.pathname}>
      <SeoManager />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default AppRoutes;
