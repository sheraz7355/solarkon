function VisionValuesSection() {
  return (
    <section className="section-shell bg-white" data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-5 section-heading">
          <span className="eyebrow">Vision & Values</span>
          <h2 className="fw-bold section-title mt-3" style={{ fontSize: '2.3rem' }}>
            Our Vision & Values
          </h2>
        </div>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="surface-card p-4 p-md-5 h-100">
              <h3 className="fw-bold mb-3" style={{ color: '#2D5016', fontSize: '1.5rem' }}>
                Our Vision
              </h3>
              <p className="text-muted">
                To lead Pakistan's transition toward a clean energy future by providing accessible, reliable, and sustainable solar solutions that empower communities and businesses across the nation.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="surface-card p-4 p-md-5 h-100">
              <h3 className="fw-bold mb-3" style={{ color: '#2D5016', fontSize: '1.5rem' }}>
                Our Values
              </h3>
              <ul className="list-unstyled mb-0">
                <li className="mb-2 d-flex align-items-start">
                  <span className="me-2" style={{ color: '#22C55E' }}>✓</span>
                  <span className="text-muted">Customer-first approach with personalized solutions</span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span className="me-2" style={{ color: '#22C55E' }}>✓</span>
                  <span className="text-muted">Commitment to quality and excellence</span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span className="me-2" style={{ color: '#22C55E' }}>✓</span>
                  <span className="text-muted">Environmental responsibility and sustainability</span>
                </li>
                <li className="mb-0 d-flex align-items-start">
                  <span className="me-2" style={{ color: '#22C55E' }}>✓</span>
                  <span className="text-muted">Long-term partnerships and support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionValuesSection;
