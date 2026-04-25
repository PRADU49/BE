function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="page-intro panel reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}

export default PageIntro;
