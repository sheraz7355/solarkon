function TestimonialCard() {
  return (
    <div
      className="surface-card px-4 py-4 px-lg-5 py-lg-4 mx-auto"
      style={{ backgroundColor: '#FFFBEA', border: '1px solid #F5ECC5', maxWidth: 720 }}
      data-aos="fade-up"
    >
      <p className="mb-3" style={{ fontSize: 14, lineHeight: 1.7, color: '#4B5563' }}>
        “SOLARKON transformed our community into a living example of sustainable energy. Our residents now
        benefit from predictable energy costs and a much smaller carbon footprint. The team handled
        everything from design through installation with outstanding professionalism.”
      </p>
      <p className="mb-0 fw-semibold" style={{ fontSize: 14, color: '#1F2933' }}>
        Emma Lawrence
      </p>
      <p className="mb-0" style={{ fontSize: 12, color: '#6B7280' }}>
        Green Haven Residents’ HOA
      </p>
    </div>
  );
}

export default TestimonialCard;
