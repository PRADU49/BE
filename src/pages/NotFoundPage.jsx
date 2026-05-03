import { Link } from "react-router-dom";
import PageIntro from "../components/common/PageIntro";

function NotFoundPage() {
  return (
    <main>
      <PageIntro
        eyebrow="404"
        title="पेज सापडले नाही"
        description="तुम्ही मागितलेलं पेज उपलब्ध नाही. पुढे जाण्यासाठी home link वापरा."
      />

      <section className="panel content-card reveal">
        <p>Navigation menu वापरा किंवा homepage ला परत जा.</p>
        <Link to="/" className="btn btn-ghost">
          Home
        </Link>
      </section>
    </main>
  );
}

export default NotFoundPage;
