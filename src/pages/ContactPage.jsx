import PageIntro from "../components/common/PageIntro";
import { operatingSchedule, serviceBadges, storeInfo } from "../data/storeData";
import { formatPhoneForHref } from "../utils/formatters";

function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="संपर्क"
        title="Bhakti Enterprises शी संपर्क करा"
        description="थेट बोलण्यासाठी खालील call link आणि Google Maps वापरा."
      />

      <section className="details-grid">
        <article className="panel content-card reveal">
          <p className="eyebrow">पत्ता</p>
          <h3>{storeInfo.addressLines[0]}</h3>
          <p>{storeInfo.addressLines[1]}</p>
          <a href={storeInfo.mapUrl} className="inline-link" target="_blank" rel="noreferrer">
            Google Maps उघडा
          </a>
        </article>

        <article className="panel content-card reveal">
          <p className="eyebrow">थेट संपर्क</p>
          <h3>दुकानाला कॉल करा</h3>
          <p>खालील बटण दाबा आणि थेट बोला.</p>
          <a href={formatPhoneForHref(storeInfo.phone)} className="btn btn-solid">
            कॉल करा
          </a>
        </article>

        <article className="panel content-card wide reveal">
          <p className="eyebrow">वेळापत्रक</p>
          <h3>दररोजची वेळ</h3>
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
