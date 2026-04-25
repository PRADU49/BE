import FaqSection from "../components/sections/FaqSection";
import PageIntro from "../components/common/PageIntro";

function FaqPage() {
  return (
    <main>
      <PageIntro
        eyebrow="FAQ"
        title="Customer Questions"
        description="Quick answers about products, services, payments, and store identity."
      />
      <FaqSection showHeading={false} />
    </main>
  );
}

export default FaqPage;
