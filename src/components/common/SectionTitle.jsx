function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="section-title reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}

export default SectionTitle;
