import { storeInfo } from "../../data/storeData";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../data/navigation";

function SiteHeader() {
  return (
    <header className="site-header reveal">
      <Link to="/" className="brand-block" aria-label={`${storeInfo.name} home`}>
        <img src="/brand-crest.svg" alt="Bhakti Enterprises crest" className="crest-logo" />
        <div>
          <p className="eyebrow">{storeInfo.city}</p>
          <p className="brand-name">{storeInfo.name}</p>
        </div>
      </Link>

      <nav className="top-nav" aria-label="Primary">
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
