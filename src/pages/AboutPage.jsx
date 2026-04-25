import PageIntro from "../components/common/PageIntro";
import { similarNameWarning, storeInfo, whyBhakti } from "../data/storeData";

function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="About The Store"
        title={`${storeInfo.name}, ${storeInfo.city}`}
        description="Bhakti Enterprises is a local retail destination focused on practical mobile and home electronics buying experiences."
      />

      <section className="split-grid">
        <article className="panel content-card reveal">
          <p className="eyebrow">Store Profile</p>
          <h3>Trusted Solapur Retail Presence</h3>
          <p>
            The store is positioned for everyday electronics purchases with in-person support,
            practical product guidance, and straightforward communication.
          </p>
          <p>
            Address: {storeInfo.addressLines[0]}, {storeInfo.addressLines[1]}.
          </p>
        </article>

        <article className="panel content-card reveal">
          <p className="eyebrow">What Stands Out</p>
          <h3>Why Customers Prefer This Shop</h3>
          <ul className="detail-list">
            {whyBhakti.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}

export default AboutPage;
