import SectionTitle from "../common/SectionTitle";
import { faqs } from "../../data/storeData";

function FaqSection({ showHeading = true }) {
  return (
    <section className="faq-section">
      {showHeading ? (
        <SectionTitle
          eyebrow="FAQ"
          title="ग्राहक जास्त विचारतात ते प्रश्न"
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
