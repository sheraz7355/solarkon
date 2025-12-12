// AboutHero section - hero banner with headline and top image + awards
function AboutHero() {
  const heroImage =
    'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1400&q=80';

  const awards = [
    {
      title: 'Best Solar Energy Provider 2024',
      description: 'Recognized for excellence in solar solutions and customer service.',
    },
    {
      title: 'Top 10 Green Tech Leaders',
      description: 'Awarded for innovation in clean energy technology and deployment.',
    },
    {
      title: 'Sustainability Leadership Award',
      description: 'Honored for long-term commitment to environmental responsibility.',
    },
  ];

  return (
    <section className="section-shell bg-white" data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-4 mb-md-5 section-heading">
          <h1 className="fw-bold mb-2 section-title" style={{ fontSize: '2.3rem' }}>
            Our Story
          </h1>
          <p className="text-muted mb-0 mx-auto section-subtitle" style={{ maxWidth: 800 }}>
            Solarkon Private Limited is the leading solar energy provider in Pakistan, offering top-of-the-line products and services that can be tailored to meet your individual needs. Our experienced team of professionals is dedicated to delivering the highest quality.
          </p>
        </div>

        <div
          className="rounded-4 overflow-hidden surface-card mb-4 mb-md-5 tilt-float"
          style={{
            minHeight: 260,
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="row g-4 text-center text-md-start">
          {awards.map((award, index) => (
            <div key={award.title} className="col-md-4">
              <div className="surface-card h-100 p-4 d-flex flex-column align-items-center align-items-md-start">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle mb-3 icon-badge-hover"
                  style={{
                    width: 56,
                    height: 56,
                    backgroundColor: '#E1F6E8',
                    color: '#22C55E',
                  }}
                >
                  <span className="fw-bold" style={{ fontSize: '1.3rem' }}>
                    ★
                  </span>
                </div>
                <h3 className="fw-semibold mb-1" style={{ fontSize: '1rem', color: '#111827' }}>
                  {award.title}
                </h3>
                <p className="text-muted small mb-0" style={{ maxWidth: 260 }}>
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
