import PageIntro from "../components/common/PageIntro";
import { operatingSchedule, serviceBadges, storeInfo } from "../data/storeData";
import { formatPhoneForHref } from "../utils/formatters";

function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Contact"
        title="Reach Bhakti Enterprises"
        description="This is a website. For direct communication, use the call link and map directions below."
      />

      <section className="details-grid">
        <article className="panel content-card reveal">
          <p className="eyebrow">Address</p>
          <h3>{storeInfo.addressLines[0]}</h3>
          <p>{storeInfo.addressLines[1]}</p>
          <a href={storeInfo.mapUrl} className="inline-link" target="_blank" rel="noreferrer">
            Open in Google Maps
          </a>
        </article>

        <article className="panel content-card reveal">
          <p className="eyebrow">Direct Contact</p>
          <h3>Call the Store</h3>
          <p>Tap below to directly connect with Bhakti Enterprises.</p>
          <a href={formatPhoneForHref(storeInfo.phone)} className="btn btn-solid">
            Call Store
          </a>
        </article>

        <article className="panel content-card wide reveal">
          <p className="eyebrow">Operating Schedule</p>
          <h3>Daily Timings</h3>
          <ul className="detail-list">
            {operatingSchedule.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="chip-row">
            {serviceBadges.slice(0, 4).map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}

export default ContactPage;
