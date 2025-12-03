// ContactHero - top heading and intro for contact page
function ContactHero() {
  return (
    <section className="section-shell bg-white" data-aos="fade-up">
      <div className="container text-center text-md-start section-heading">
        <p
          className="text-uppercase small fw-semibold mb-2"
          style={{ color: '#22C55E', letterSpacing: '0.16em' }}
        >
          Contact
        </p>
        <h1 className="fw-bold mb-2 section-title" style={{ color: '#111827', fontSize: '2.4rem' }}>
          Get In <span style={{ color: '#22C55E' }}>Touch</span> With SOLARKON
        </h1>
        <p className="text-muted mb-0 section-subtitle" style={{ maxWidth: 640, fontSize: 14, lineHeight: 1.7 }}>
          Interested in switching to solar? Have questions about our services? Our team is ready to
          help you with any inquiry, from project estimates to long-term maintenance.
        </p>
      </div>
    </section>
  );
}

export default ContactHero;
