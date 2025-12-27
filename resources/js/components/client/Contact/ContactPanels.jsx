import { useForm } from '@inertiajs/react';
import { HiOutlinePhone, HiOutlineEnvelope, HiOutlineMapPin } from 'react-icons/hi2';

function ContactPanels() {
  // 1. Setup Inertia Form
  const { data, setData, post, processing, reset } = useForm({
    name: '',
    phone: '',
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // 2. Post to your existing route
    post('/userDetails', {
      onSuccess: () => {
        reset();
        alert('Thank you! We will contact you soon.');
      },
    });
  };

  return (
    <section className="section-shell pt-0" data-aos="fade-up">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          
          {/* LEFT PANEL (Static Info) */}
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

          {/* RIGHT PANEL (Form) */}
          <div className="col-lg-6">
            <div className="h-100 rounded-4 p-4 p-md-5 surface-card">
              <h2 className="h5 fw-bold mb-3" style={{ color: '#111827' }}>
                Fill out the form below, and our team will get back to you within 24 hours.
              </h2>

              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-12">
                  <label className="form-label small fw-semibold text-muted">Name *</label>
                  <input 
                    type="text" 
                    className="form-control rounded-3" 
                    placeholder="Your Name" 
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                    required 
                  />
                </div>

                <div className="col-12">
                  <label className="form-label small fw-semibold text-muted">Phone *</label>
                  <input 
                    type="tel" 
                    className="form-control rounded-3" 
                    placeholder="+92 300 1234567" 
                    value={data.phone}
                    onChange={e => setData('phone', e.target.value)}
                    required 
                  />
                </div>

                {/* Added Email, Removed City/Bill */}
                <div className="col-12">
                  <label className="form-label small fw-semibold text-muted">Email *</label>
                  <input 
                    type="email" 
                    className="form-control rounded-3" 
                    placeholder="name@example.com" 
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                    required 
                  />
                </div>

                <div className="col-12 d-flex justify-content-end mt-2">
                  <button
                    type="submit"
                    disabled={processing}
                    className="btn btn-pill px-4 btn-soft-hover d-inline-flex align-items-center gap-2"
                    style={{ backgroundColor: '#22C55E', color: '#111827' }}
                  >
                    <span>{processing ? 'Sending...' : 'Submit Request'}</span>
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