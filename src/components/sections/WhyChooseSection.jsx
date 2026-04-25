import SectionTitle from "../common/SectionTitle";
import { highlights } from "../../data/storeData";

function WhyChooseSection() {
  return (
    <section className="why-section">
      <SectionTitle
        eyebrow="Why Customers Choose Us"
        title="Built on Value and Trust"
        subtitle="Consistent quality with practical retail support."
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
