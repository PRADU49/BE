import FaqSection from "../components/sections/FaqSection";
import PageIntro from "../components/common/PageIntro";

function FaqPage() {
  return (
    <main>
      <PageIntro
        eyebrow="FAQ"
        title="ग्राहकांचे प्रश्न"
        description="Products, services, payments, आणि store identity बद्दल सोपी उत्तरे."
      />
      <FaqSection showHeading={false} />
    </main>
  );
}

export default FaqPage;
