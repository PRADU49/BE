import ScrollProgressBar from "./components/effects/ScrollProgressBar";
import AppRoutes from "./components/layout/AppRoutes";
import SiteFooter from "./components/layout/SiteFooter";
import SiteHeader from "./components/layout/SiteHeader";
import { usePointerGlow } from "./hooks/usePointerGlow";
import { HashRouter } from "react-router-dom";

function App() {
  usePointerGlow();

  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
