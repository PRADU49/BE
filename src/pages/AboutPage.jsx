import PageIntro from "../components/common/PageIntro";
import { similarNameWarning, storeInfo, whyBhakti } from "../data/storeData";

function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="दुकानाबद्दल"
        title={`${storeInfo.name}, ${storeInfo.city}`}
        description="Bhakti Enterprises हे mobiles आणि home electronics साठी सोपं दुकान आहे."
      />

      <section className="split-grid">
        <article className="panel content-card reveal">
          <p className="eyebrow">दुकान प्रोफाइल</p>
          <h3>सोलापुरातलं चांगलं दुकान</h3>
          <p>
            रोजच्या खरेदीसाठी मदत मिळते. Product दाखवून समजावतात. बोलणं सोपं असतं.
          </p>
          <p>
            पत्ता: {storeInfo.addressLines[0]}, {storeInfo.addressLines[1]}.
          </p>
        </article>

        <article className="panel content-card reveal">
          <p className="eyebrow">काय वेगळं</p>
          <h3>ग्राहक हे दुकान का निवडतात</h3>
          <ul className="detail-list">
            {whyBhakti.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}

export default AboutPage;
