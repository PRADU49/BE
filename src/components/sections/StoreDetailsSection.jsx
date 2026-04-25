import SectionTitle from "../common/SectionTitle";
import { serviceBadges, storeInfo } from "../../data/storeData";
import { formatPhoneForHref } from "../../utils/formatters";

function StoreDetailsSection() {
  return (
    <section className="details-section" id="details">
      <SectionTitle
        eyebrow="Store Information"
        title="Address, Hours, and Contact"
        subtitle="All key details in one place for quick access."
      />

      <div className="details-grid">
        <article className="panel reveal">
          <p className="eyebrow">Address</p>
          <h3>{storeInfo.addressLines[0]}</h3>
          <p>{storeInfo.addressLines[1]}</p>
          <a href={storeInfo.mapUrl} target="_blank" rel="noreferrer" className="inline-link">
            Navigate on Google Maps
          </a>
        </article>

        <article className="panel reveal">
          <p className="eyebrow">Operating Hours</p>
          <h3>{storeInfo.hours}</h3>
          <p>Available every day for in-person purchase and support.</p>
          <div className="clock-badge" aria-hidden="true">
            <span className="clock-ring" />
            <span className="clock-hand hour" />
            <span className="clock-hand minute" />
            <span className="clock-hand second" />
            <span className="clock-center" />
            <span className="clock-glow" />
          </div>
        </article>

        <article className="panel wide reveal">
          <p className="eyebrow">Quick Contact and Payments Info</p>
          <h3>Fast Checkout. Easy Communication.</h3>
          <p>
            Reach us directly for product checks and visit for flexible payment options.
          </p>
          <div className="chip-row">
            {serviceBadges.slice(0, 4).map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
          <a className="btn btn-ghost" href={formatPhoneForHref(storeInfo.phone)}>
            Contact Store
          </a>
        </article>
      </div>
    </section>
  );
}

export default StoreDetailsSection;
