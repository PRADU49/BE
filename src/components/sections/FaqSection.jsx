import SectionTitle from "../common/SectionTitle";
import { faqs } from "../../data/storeData";

function FaqSection({ showHeading = true }) {
  return (
    <section className="faq-section">
      {showHeading ? (
        <SectionTitle
          eyebrow="Frequently Asked Questions"
          title="Everything Customers Ask Often"
        />
      ) : null}

      <div className="faq-list">
        {faqs.map((faq) => (
          <details className="faq-item panel reveal" key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FaqSection;
