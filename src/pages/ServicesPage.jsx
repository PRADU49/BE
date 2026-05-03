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
        eyebrow="सेवा"
        title="विक्री आणि ग्राहक सेवा"
        description="Mobile shopping पासून home appliance निवडीपर्यंत सगळं सोपं आहे."
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
        <p className="eyebrow">लोकप्रिय पर्याय</p>
        <h3>लोकांना आवडणाऱ्या निवडी</h3>
        <ul className="detail-list">
          {featuredCollections.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="split-grid">
        <article className="panel content-card reveal">
          <p className="eyebrow">सेवा कशी चालते</p>
          <h3>दुकानात कसं काम होतं</h3>
          <ol className="detail-list ordered">
            <li>बजेट आणि गरज सांगा.</li>
            <li>ब्रँड्स एकमेकांना बघा.</li>
            <li>बिलिंग करून खरेदी पूर्ण करा.</li>
            <li>नंतर मदत हवी असेल तर विचारा.</li>
          </ol>
        </article>

        <article className="panel content-card reveal">
          <p className="eyebrow">पेमेंट व सोय</p>
          <h3>Payment कशी करता येईल</h3>
          <div className="chip-row">
            {serviceBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
          <p>दुकानाची वेळ: {storeInfo.hours}</p>
        </article>
      </section>
    </main>
  );
}

export default ServicesPage;
