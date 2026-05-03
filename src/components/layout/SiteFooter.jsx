import { storeInfo } from "../../data/storeData";
import { formatPhoneForHref } from "../../utils/formatters";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navigation";

function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer reveal">

      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {year} Bhakti Enterprises. All rights reserved.
        </p>
        <p className="footer-credit">
          Developed by{" "}
          <a href="https://dev-p-portfolio-v2.vercel.app" target="_blank" rel="noreferrer">
            Pradhumn Pawar
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;
