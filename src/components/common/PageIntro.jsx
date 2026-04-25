function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="page-intro panel reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}

export default PageIntro;
