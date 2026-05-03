import SectionTitle from "../common/SectionTitle";
import { highlights } from "../../data/storeData";

function WhyChooseSection() {
  return (
    <section className="why-section">
      <SectionTitle
        eyebrow="ग्राहक आम्हाला का निवडतात"
        title="विश्वास आणि योग्य मूल्य"
        subtitle="नियमित गुणवत्ता आणि सोपी मदत."
      />

      <div className="highlight-grid">
        {highlights.map((item) => (
          <article className="panel highlight-card reveal" key={item.heading}>
            <h3>{item.heading}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseSection;
