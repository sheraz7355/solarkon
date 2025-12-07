// ContactMap - embedded map strip
function ContactMap() {
  return (
    <section className="section-shell pt-0" data-aos="fade-up">
      <div className="container-fluid px-0">
        <div style={{ height: 260, width: '100%' }}>
          <iframe
            title="SOLARKON location map"
            src="https://www.google.com/maps?q=94%20J1%2C%20Block%20J1%2C%20Phase%202%2C%20Johar%20Town%2C%20Lahore%2C%20Pakistan&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactMap;
