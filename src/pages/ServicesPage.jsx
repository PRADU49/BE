import PageIntro from "../components/common/PageIntro";
import { serviceBadges, services, storeInfo } from "../data/storeData";

const featuredCollections = [
  "Budget to premium smartphones",
  "Everyday mobile accessories",
  "Household electronic essentials",
  "Counter-based recommendation support",
];

function ServicesPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Services"
        title="Sales and Customer Services"
        description="From mobile shopping to home appliance selection, services are structured for clarity, value, and quick decision-making."
      />

      <section className="products-grid">
        {services.map((service) => (
          <article className="product-card reveal" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </section>

      <section className="panel content-card reveal">
        <p className="eyebrow">Featured Collections</p>
        <h3>Popular In-Store Choices</h3>
        <ul className="detail-list">
          {featuredCollections.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="split-grid">
        <article className="panel content-card reveal">
          <p className="eyebrow">How Service Works</p>
          <h3>In-Store Experience Flow</h3>
          <ol className="detail-list ordered">
            <li>Share budget and use-case with the counter team.</li>
            <li>Compare practical options across brands.</li>
            <li>Finalize product with transparent billing options.</li>
            <li>Get post-purchase support and quick clarifications.</li>
          </ol>
        </article>

        <article className="panel content-card reveal">
          <p className="eyebrow">Payment and Convenience</p>
          <h3>Checkout Modes</h3>
          <div className="chip-row">
            {serviceBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
          <p>Store hours: {storeInfo.hours}</p>
        </article>
      </section>
    </main>
  );
}

export default ServicesPage;
