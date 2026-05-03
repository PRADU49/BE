import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { memoryOptimization, performanceMonitoring } from "./utils/performanceOptimization";

// Initialize performance monitoring
if (process.env.NODE_ENV === "development") {
  memoryOptimization.logMemoryUsage();
  console.log("Performance monitoring enabled");
}

// Log performance report on page load
window.addEventListener("load", () => {
  if (process.env.NODE_ENV === "development") {
    const report = performanceMonitoring.generatePerformanceReport();
    console.log("Performance Report:", report);
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
