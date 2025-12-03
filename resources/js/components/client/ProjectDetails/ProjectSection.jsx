function ProjectSection({ title, paragraphs = [], bullets = [] }) {
  return (
    <section className="surface-card p-4" data-aos="fade-up">
      <h2 className="h5 mb-3" style={{ color: '#1F2933' }}>
        {title}
      </h2>

      {paragraphs.map((p, idx) => (
        <p key={idx} className="mb-3" style={{ fontSize: 14, lineHeight: 1.7, color: '#4B5563' }}>
          {p}
        </p>
      ))}

      {bullets.length > 0 && (
        <ul className="mb-0 ps-3" style={{ fontSize: 14, color: '#4B5563' }}>
          {bullets.map((item, idx) => (
            <li key={idx} className="mb-1">
              {item}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ProjectSection;
