import { storeInfo } from "../../data/storeData";
import { formatPhoneForHref } from "../../utils/formatters";
import ornament from "../../assets/ornament.svg";

function HeroSection() {
  return (
    <section className="hero-section reveal" id="home">
      <article className="hero-main panel">
        <p className="eyebrow">Storefront</p>
        <h2>
          Timeless Retail,
          <span> Modern Electronics.</span>
        </h2>
        <img src={ornament} alt="" className="hero-ornament" aria-hidden="true" />
        <p>
          {storeInfo.name} in Solapur offers multi-brand mobiles and home appliances with
          practical guidance, transparent pricing, and dependable in-store support.
        </p>
        <div className="hero-actions">
          <a href={formatPhoneForHref(storeInfo.phone)} className="btn btn-solid">
            Call Now
          </a>
          <a href={storeInfo.mapUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
            Visit Location
          </a>
        </div>
      </article>

      <aside className="hero-aside panel sentiment-card">
        <p className="eyebrow">Customer Sentiment</p>
        <h3>
          <span>Google Rating</span> {storeInfo.googleRating}
        </h3>
        <p className="sentiment-stars" aria-hidden="true">
          ★★★★★
        </p>
        <blockquote className="sentiment-quote">{`${storeInfo.reviewQuote}`}</blockquote>
        <div className="sentiment-shine" aria-hidden="true" />
        <div className="pulse-track" aria-hidden="true" />
      </aside>
    </section>
  );
}

export default HeroSection;
