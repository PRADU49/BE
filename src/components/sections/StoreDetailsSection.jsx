import SectionTitle from "../common/SectionTitle";
import { serviceBadges, storeInfo } from "../../data/storeData";
import { formatPhoneForHref } from "../../utils/formatters";

function StoreDetailsSection() {
  return (
    <section className="details-section" id="details">
      <SectionTitle
        eyebrow="दुकान माहिती"
        title="पत्ता, वेळ, आणि संपर्क"
        subtitle="सगळी माहिती एका ठिकाणी."
      />

      <div className="details-grid">
        <article className="panel reveal">
          <p className="eyebrow">पत्ता</p>
          <h3>{storeInfo.addressLines[0]}</h3>
          <p>{storeInfo.addressLines[1]}</p>
          <a href={storeInfo.mapUrl} target="_blank" rel="noreferrer" className="inline-link">
            Google Maps वर जा
          </a>
        </article>

        <article className="panel reveal">
          <p className="eyebrow">वेळ</p>
          <h3>{storeInfo.hours}</h3>
          <p>प्रत्यक्ष खरेदी आणि मदतीसाठी रोज उपलब्ध.</p>
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
          <p className="eyebrow">संपर्क आणि Payments</p>
          <h3>जलद बिलिंग. सोपा संपर्क.</h3>
          <p>
            Product checks आणि flexible payment options साठी थेट संपर्क करा.
          </p>
          <div className="chip-row">
            {serviceBadges.slice(0, 4).map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
          <a className="btn btn-ghost" href={formatPhoneForHref(storeInfo.phone)}>
            स्टोअरला संपर्क करा
          </a>
        </article>
      </div>
    </section>
  );
}

export default StoreDetailsSection;
