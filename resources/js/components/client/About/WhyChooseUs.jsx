// WhyChooseUs - dark section with image grid and copy + CTA
function WhyChooseUs() {
  const gallery = [
    'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1518961293643-4becefef7c54?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80',
  ];

  return (
    <section className="section-shell section-dark" data-aos="fade-up">
      <div className="container">
        <div className="row g-4 g-lg-5 align-items-center mb-5">
          <div className="col-lg-7 order-2 order-lg-1">
            <div className="row g-3">
              {gallery.map((src, index) => (
                <div key={src} className="col-6">
                  <div className="rounded-4 overflow-hidden surface-card surface-card--muted">
                    <div
                      style={{
                        height: index % 2 === 0 ? 140 : 180,
                        backgroundImage: `url(${src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
            <div className="text-uppercase small fw-semibold mb-2" style={{ color: '#A7F3D0' }}>
              See The Power Of Solar In Action
            </div>
            <h2 className="fw-bold text-white mb-3" style={{ fontSize: '2rem' }}>
              Real Projects. Real Impact.
            </h2>
            <p className="text-white-50 mb-4">
              From modern homes to large commercial installations, our projects show what is possible
              when smart design meets renewable energy. Every system is engineered for performance,
              reliability, and long-term value.
            </p>
            <ul className="list-unstyled text-white-50 small mb-4">
              <li className="mb-1">• High-efficiency panels and inverters</li>
              <li className="mb-1">• Precision installation by certified experts</li>
              <li className="mb-1">• Monitoring and support after your system goes live</li>
            </ul>
            <button
              className="btn btn-lg rounded-pill px-4 btn-soft-hover"
              style={{ backgroundColor: '#22C55E', color: '#1F2937' }}
            >
              View Our Projects
            </button>
          </div>
        </div>

        <div className="rounded-4 p-4 p-md-5 bg-opacity-90 surface-card surface-card--muted">
          <div className="row align-items-center g-3 g-md-4">
            <div className="col-md-8 text-center text-md-start">
              <h3 className="fw-bold text-white mb-2" style={{ fontSize: '1.6rem' }}>
                Ready To Make The Switch To Solar?
              </h3>
              <p className="text-white-50 mb-0">
                Talk with our energy consultants about a custom solar solution for your home or
                business.
              </p>
            </div>
            <div className="col-md-4 d-flex justify-content-center justify-content-md-end gap-2">
              <button
                className="btn rounded-pill px-4 btn-soft-hover"
                style={{ backgroundColor: '#22C55E', color: '#1F2937' }}
              >
                Get Free Consultation
              </button>
              <button className="btn btn-outline-light rounded-pill px-4 btn-soft-hover">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
