import { storeInfo } from "../../data/storeData";
import { formatPhoneForHref } from "../../utils/formatters";

function CtaSection() {
  return (
    <section className="cta-section panel reveal">
      <p className="eyebrow">Visit Today</p>
      <h2>Bhakti Enterprises, Solapur</h2>
      <p>
        This store focuses on mobiles and home electronics and is distinct from similarly named
        businesses in nearby locations.
      </p>
      <div className="hero-actions">
        <a href={formatPhoneForHref(storeInfo.phone)} className="btn btn-solid">
          Contact Store
        </a>
        <a href={storeInfo.mapUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
          Get Directions
        </a>
      </div>
    </section>
  );
}

export default CtaSection;
