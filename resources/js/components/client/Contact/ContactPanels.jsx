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
                    Message Us
                  </p>
                  <p className="mb-0" style={{ fontSize: 14 }}>
                    support@solvixenergy.com
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-uppercase small fw-semibold mb-1" style={{ color: '#BBF7D0' }}>
                    Call Us
                  </p>
                  <p className="mb-0" style={{ fontSize: 14 }}>
                    +1 (555) 987-6543
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-uppercase small fw-semibold mb-1" style={{ color: '#BBF7D0' }}>
                    Office
                  </p>
                  <p className="mb-0" style={{ fontSize: 14 }}>
                    4567 Elm Street, Suite 120, Greenfield, TX 78201
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

              <form className="row g-3">
                <div className="col-12 col-md-6">
                  <label className="form-label small fw-semibold text-muted">Full name</label>
                  <input type="text" className="form-control rounded-3" placeholder="John Carter" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label small fw-semibold text-muted">Email address</label>
                  <input type="email" className="form-control rounded-3" placeholder="you@example.com" />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label small fw-semibold text-muted">Phone number</label>
                  <input type="tel" className="form-control rounded-3" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label small fw-semibold text-muted">Preferred contact</label>
                  <select className="form-select rounded-3">
                    <option>Email</option>
                    <option>Phone</option>
                    <option>Either</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label small fw-semibold text-muted">Project type</label>
                  <div className="d-flex flex-wrap gap-2">
                    {['Residential', 'Commercial', 'Off-grid', 'Other'].map((label) => (
                      <button
                        key={label}
                        type="button"
                        className="btn btn-sm btn-pill"
                        style={{ backgroundColor: '#E5F2E0', color: '#14532D', border: 'none' }}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="col-12">
                  <label className="form-label small fw-semibold text-muted">Tell us about your project</label>
                  <textarea
                    className="form-control rounded-3"
                    rows="3"
                    placeholder="Share details about your property, goals, and timeline..."
                  />
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
