import { serviceBadges } from "../../data/storeData";

function TickerSection() {
  return (
    <section className="ticker-section reveal" aria-label="Store highlights">
      <div className="ticker-track">
        {Array.from({ length: 2 }).map((_, index) => (
          <div className="ticker-row" key={`ticker-${index}`}>
            {serviceBadges.map((badge) => (
              <span key={`${badge}-${index}`}>{badge}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TickerSection;
