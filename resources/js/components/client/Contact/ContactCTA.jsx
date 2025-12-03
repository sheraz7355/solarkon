// ContactCTA - bottom CTA similar to Figma "Ready To Go Solar? Let's Talk!"
function ContactCTA() {
  return (
    <section className="section-shell position-relative overflow-hidden" data-aos="fade-up">
      <div className="container">
        <div
          className="text-center mx-auto surface-card"
          style={{
            maxWidth: 640,
            background: 'linear-gradient(135deg, #d9f99d, #bbf7d0)',
          }}
        >
          <div className="p-4 p-md-5">
            <h2 className="fw-bold mb-2" style={{ color: '#166534', fontSize: '2rem' }}>
              Ready To Go Solar?
              <br />
              Let&apos;s Talk!
            </h2>
            <p className="text-muted mb-4" style={{ fontSize: 14 }}>
              Whether you&apos;re looking for residential, commercial, or off-grid solar solutions,
              SOLARKON is here to guide you every step of the way.
            </p>
            <button
              type="button"
              className="btn btn-pill px-4 btn-soft-hover"
              style={{ backgroundColor: '#166534', color: '#F9FAFB' }}
            >
              Schedule a Free Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
