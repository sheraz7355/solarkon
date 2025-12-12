// ContactMap - embedded map strip
function ContactMap() {
  return (
    <section className="section-shell pt-0" data-aos="fade-up">
      <div className="container-fluid px-0">
        <div style={{ height: 260, width: '100%' }}>
          <iframe
            title="SOLARKON location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24172.89974390258!2d-73.952407!3d40.719526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzEwLjMiTiA3M8KwNTcnMzIuMiJX!5e0!3m2!1sen!2sus!4v1700000000000"
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
