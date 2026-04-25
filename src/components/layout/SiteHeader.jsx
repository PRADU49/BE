import { storeInfo } from "../../data/storeData";
import { formatPhoneForHref } from "../../utils/formatters";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navigation";

function SiteHeader() {
  return (
    <header className="site-header reveal">
      <div className="brand-block">
        <img src="/brand-crest.svg" alt="Bhakti Enterprises crest" className="crest-logo" />
        <div>
          <p className="eyebrow">{storeInfo.city}</p>
          <h1>{storeInfo.name}</h1>
        </div>
      </div>

      <nav className="top-nav">
        {navLinks.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default SiteHeader;
