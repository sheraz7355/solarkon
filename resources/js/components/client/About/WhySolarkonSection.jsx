function WhySolarkonSection() {
  const features = [
    'Industry leader with a proven national footprint.',
    'Certified, experienced engineering team.',
    'Best-in-class technology and global product partnerships.',
    'Strong post-sales support and maintenance structure.',
    'Flexible financing tailored to customer needs.',
    'Environmental compliance and net metering assistance.',
  ];

  return (
    <section className="section-shell bg-white" data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-5 section-heading">
          <div className="text-uppercase small fw-semibold mb-2" style={{ color: '#22C55E' }}>
            Why Choose Solarkon
          </div>
          <h2 className="fw-bold mb-3 section-title" style={{ fontSize: '2rem' }}>
            Why Choose Solarkon?
          </h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="row g-3">
              {features.map((feature, index) => (
                <div key={index} className="col-12 col-md-6">
                  <div className="d-flex align-items-start gap-3 p-3 surface-card rounded-3 h-100">
                    <div className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle" style={{ width: 32, height: 32, backgroundColor: '#E1F6E8', color: '#22C55E' }}>
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="mb-0 text-muted small">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhySolarkonSection;
