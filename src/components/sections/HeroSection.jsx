import { storeInfo } from "../../data/storeData";
import { formatPhoneForHref } from "../../utils/formatters";
import ornament from "../../assets/ornament.svg";

function HeroSection() {
  return (
    <section className="hero-section reveal" id="home">
      <article className="hero-main panel">
        <p className="eyebrow">स्टोअर फ्रंट</p>
        <h1>
          चांगली खरेदी,
          <span> Modern Electronics.</span>
        </h1>
        <img src={ornament} alt="" className="hero-ornament" aria-hidden="true" />
        <p>
          {storeInfo.name} मध्ये multi-brand mobiles आणि home appliances मिळतात. इथे मदत,
          साफ किमती, आणि चांगली service मिळते.
        </p>
        <div className="hero-actions">
          <a href={formatPhoneForHref(storeInfo.phone)} className="btn btn-solid">
            आत्ताच कॉल करा
          </a>
          <a href={storeInfo.mapUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
            लोकेशन बघा
          </a>
        </div>
      </article>

      <aside className="hero-aside panel sentiment-card">
        <p className="eyebrow">ग्राहकांचा प्रतिसाद</p>
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
