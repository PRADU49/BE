import { Link } from "react-router-dom";
import PageIntro from "../components/common/PageIntro";

function NotFoundPage() {
  return (
    <main>
      <PageIntro
        eyebrow="404"
        title="Page Not Found"
        description="The page you requested is unavailable. Use the home link to continue browsing."
      />

      <section className="panel content-card reveal">
        <p>Use the navigation menu or return to the homepage.</p>
        <Link to="/" className="btn btn-ghost">
          Back To Home
        </Link>
      </section>
    </main>
  );
}

export default NotFoundPage;
