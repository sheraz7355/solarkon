// ContactPanels - left info card + right form card
import { HiOutlinePhone, HiOutlineEnvelope, HiOutlineMapPin } from 'react-icons/hi2';

function ContactPanels() {
  return (
    <section className="section-shell pt-0" data-aos="fade-up">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-6">
            <div
              className="h-100 rounded-4 p-4 p-md-5 text-white d-flex flex-column justify-content-between surface-card"
              style={{ backgroundColor: '#163023' }}
            >
              <div>
                <h2 className="h4 fw-bold mb-3">Have Questions Or Need Assistance?</h2>
                <p className="mb-4" style={{ fontSize: 14, color: '#E5F2E0', lineHeight: 1.7 }}>
                  We&apos;re here to help! Whether you&apos;re curious about our services, need support on an
                  existing project, or want to request a quote, our team is ready to assist.
                </p>

                <div className="mb-4">
                  <p className="text-uppercase small fw-semibold mb-1" style={{ color: '#BBF7D0' }}>
                    Email
                  </p>
                  <p className="mb-0" style={{ fontSize: 14 }}>
                    info@solarkon.org
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-uppercase small fw-semibold mb-1" style={{ color: '#BBF7D0' }}>
                    Phone
                  </p>
                  <p className="mb-0" style={{ fontSize: 14 }}>
                    +92 306 2935768
                  </p>
                  <p className="mb-0" style={{ fontSize: 14 }}>
                    Landline: 042-36449602
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-uppercase small fw-semibold mb-1" style={{ color: '#BBF7D0' }}>
                    Address
                  </p>
                  <p className="mb-0" style={{ fontSize: 14 }}>
                    94-C J1 Johar Town, Phase 2 Lahore
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-uppercase small fw-semibold mb-1" style={{ color: '#BBF7D0' }}>
                    Website
                  </p>
                  <p className="mb-0" style={{ fontSize: 14 }}>
                    www.solarkon.org
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-uppercase small fw-semibold mb-1" style={{ color: '#BBF7D0' }}>
                    Business Hours
                  </p>
                  <p className="mb-0" style={{ fontSize: 14 }}>
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="mb-0" style={{ fontSize: 14 }}>
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                  <p className="mb-0" style={{ fontSize: 14 }}>
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-uppercase small fw-semibold mb-2" style={{ color: '#BBF7D0' }}>
                  Social Media
                </p>
                <div className="d-flex gap-2">
                  {[HiOutlinePhone, HiOutlineEnvelope, HiOutlineMapPin].map((Icon, idx) => (
                    <span
                      key={idx}
                      className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white bg-opacity-10"
                      style={{ width: 36, height: 36 }}
                    >
                      <Icon size={18} />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="h-100 rounded-4 p-4 p-md-5 surface-card">
              <h2 className="h5 fw-bold mb-3" style={{ color: '#111827' }}>
                Fill out the form below, and our team will get back to you within 24 hours.
              </h2>

              <form className="row g-3" onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission - send to Laravel API
                const formData = new FormData(e.target);
                const data = {
                  name: formData.get('name'),
                  phone: formData.get('phone'),
                  city: formData.get('city'),
                  billAmount: formData.get('billAmount'),
                };
                console.log('Form data:', data);
                // TODO: Send to Laravel API
                alert('Thank you! We will contact you soon.');
              }}>
                <div className="col-12">
                  <label className="form-label small fw-semibold text-muted">Name *</label>
                  <input type="text" name="name" className="form-control rounded-3" placeholder="Your Name" required />
                </div>

                <div className="col-12">
                  <label className="form-label small fw-semibold text-muted">Phone *</label>
                  <input type="tel" name="phone" className="form-control rounded-3" placeholder="+92 300 1234567" required />
                </div>

                <div className="col-12">
                  <label className="form-label small fw-semibold text-muted">City *</label>
                  <input type="text" name="city" className="form-control rounded-3" placeholder="Your City" required />
                </div>

                <div className="col-12">
                  <label className="form-label small fw-semibold text-muted">Monthly Bill Amount (PKR) *</label>
                  <input type="number" name="billAmount" className="form-control rounded-3" placeholder="e.g., 50000" required />
                </div>

                <div className="col-12 d-flex justify-content-end mt-2">
                  <button
                    type="submit"
                    className="btn btn-pill px-4 btn-soft-hover d-inline-flex align-items-center gap-2"
                    style={{ backgroundColor: '#22C55E', color: '#111827' }}
                  >
                    <span>Submit Request</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPanels;
