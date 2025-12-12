function CertificationsSection() {
  return (
    <section className="section-shell bg-white" data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-5 section-heading">
          <div className="text-uppercase small fw-semibold mb-2" style={{ color: '#22C55E' }}>
            Certifications
          </div>
          <h2 className="fw-bold mb-3 section-title" style={{ fontSize: '2rem' }}>
            Certified Engineers & Standards
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: 700 }}>
            Our team of certified engineers follows international standards and best practices to ensure the highest quality installations and compliance with all regulatory requirements.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="text-center p-4 surface-card rounded-4 h-100">
              <div className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3" style={{ width: 80, height: 80, backgroundColor: '#E1F6E8' }}>
                <svg width="40" height="40" fill="none" stroke="#22C55E" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="fw-bold mb-2">Certified Engineers</h4>
              <p className="text-muted small mb-0">Our engineering team holds professional certifications and follows international standards.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="text-center p-4 surface-card rounded-4 h-100">
              <div className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3" style={{ width: 80, height: 80, backgroundColor: '#E1F6E8' }}>
                <svg width="40" height="40" fill="none" stroke="#22C55E" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="fw-bold mb-2">International Standards</h4>
              <p className="text-muted small mb-0">All installations comply with international quality and safety standards.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="text-center p-4 surface-card rounded-4 h-100">
              <div className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3" style={{ width: 80, height: 80, backgroundColor: '#E1F6E8' }}>
                <svg width="40" height="40" fill="none" stroke="#22C55E" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="fw-bold mb-2">Quality Assurance</h4>
              <p className="text-muted small mb-0">Rigorous quality checks and testing ensure reliable performance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;
