import { useForm } from '@inertiajs/react';
import { HiOutlinePhone, HiOutlineEnvelope, HiOutlineMapPin } from 'react-icons/hi2';
import { FaFacebookF, FaTwitter ,FaInstagram, FaLinkedin } from 'react-icons/fa';

function ContactPanels({contact}) {
  // 1. Setup Inertia Form
   
  const { data, setData, post, processing, reset } = useForm({
    name: '',
    phone: '',
    email: '',
  });

  const phone = [
    {name: 'MobileNumber',number:contact?.data?.phones?.MobileNumber || '+92 306 2935768'},
    {name:'LandLine',number:contact?.data?.phones?.LandLine || '042-36449602'}
  ];

  const address = contact?.address || '94-C J1 Johar Town, Phase 2 Lahore';
  const email = contact?.email || 'info@solarkon.com';
  const website = contact?.website || 'www.solarkon.org';
  const heading = contact?.heading || 'Get in Touch'; // Fixed typo 'Broken' to standard text based on context
  const description = contact?.description || "We're here to help! Whether you're curious about our services, need support on an existing project, or want to request a quote, our team is ready to assist."; 
  const businessHours = [
    { 
      hours: contact?.data?.BusinessHours?.['MF'] || '9:00 AM - 6:00 PM' 
    },
    { 
      hours: contact?.data?.BusinessHours?.['SAT'] || '10:00 AM - 4:00 PM' 
    },
    { 
      hours: contact?.data?.BusinessHours?.['SUN'] || 'Closed' 
    },
  ];
  const socialIcons = [
    { name: 'Facebook', icon: <FaFacebookF />, href: contact?.data?.SocialLinks?.Facebook || 'https://facebook.com' },
    { name: 'Twitter', icon: <FaTwitter />, href: contact?.data?.SocialLinks?.Twitter || 'https://twitter.com' },
    { name: 'LinkedIn', icon: <FaLinkedin />, href: contact?.data?.SocialLinks?.LinkedIn || 'https://Link.com'},
  ]
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
      {/* Embedded Styles from app.css */}
      <style>{`
        :root {
          --brand-primary: #022c22;
          --brand-accent: #22c55e;
          --brand-cream: #f6f8f3;
          --brand-dark: #0f172a;
          --brand-muted: #6b7280;
        }

        .section-shell {
          padding-block: clamp(3rem, 6vw, 5rem);
        }

        /* Left Panel Style */
        .section-dark {
          background: #022c22;
          color: #ffffff;
        }

        /* Right Panel Card Style */
        .surface-card {
          border-radius: 28px;
          background: #ffffff;
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .surface-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 70px rgba(15, 23, 42, 0.12);
        }

        /* Typography */
        .section-title {
          color: var(--brand-primary);
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        /* Button Styles */
        .btn-pill {
          border-radius: 999px;
          padding-inline: 1.75rem;
          padding-block: 0.85rem;
          font-weight: 600;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          border: none;
        }
        .btn-pill.btn-primary {
          background: var(--brand-primary);
          color: #ffffff;
          box-shadow: 0 18px 30px rgba(45, 80, 22, 0.35);
        }
        .btn-pill.btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 36px rgba(45, 80, 22, 0.45);
          background-color: var(--brand-primary);
          color: #ffffff;
        }
        .btn-soft-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease,
            color 0.25s ease;
        }

        /* Social Icons */
        .social-pill {
          width: 40px;
          height: 40px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, background 0.2s ease;
          text-decoration: none;
        }
        .social-pill:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.25);
          color: #ffffff;
        }
      `}</style>

      <div className="container">
        <div className="row g-4 align-items-stretch">
          
          {/* LEFT PANEL (Static Info) - Using section-dark class */}
          <div className="col-lg-6">
            <div className="h-100 rounded-4 p-4 p-md-5 d-flex flex-column justify-content-between section-dark">
              <div>
                <h2 className="h4 fw-bold mb-3 text-white">{heading}</h2>
                <p className="mb-4" style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
                  {description}
                </p>

                <div className="mb-4">
                  <p className="text-uppercase small fw-semibold mb-1" style={{ color: '#BBF7D0' }}>
                    Email
                  </p>
                  <p className="mb-0 text-white" style={{ fontSize: 14 }}>
                    {email}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-uppercase small fw-semibold mb-1" style={{ color: '#BBF7D0' }}>
                    Phone
                  </p>
                  {phone.map((numbers,index) => 
                    numbers.number ? (
                       <p key={index} className="mb-0 text-white" style={{ fontSize: 14 }}>
                          {numbers.name} : {numbers.number}
                     </p>
                    ) : null
                  )}
                </div>

                <div className="mb-4">
                  <p className="text-uppercase small fw-semibold mb-1" style={{ color: '#BBF7D0' }}>
                    Address
                  </p>
                  <p className="mb-0 text-white" style={{ fontSize: 14 }}>
                    {address}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-uppercase small fw-semibold mb-1" style={{ color: '#BBF7D0' }}>
                    Website
                  </p>
                  <p className="mb-0 text-white" style={{ fontSize: 14 }}>
                    {website}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-uppercase small fw-semibold mb-1" style={{ color: '#BBF7D0' }}>
                    Business Hours
                  </p>
                  {businessHours.map((bh,index) => (
                  <p key = {index} className="mb-0 text-white" style={{ fontSize: 14 }}>
                    {bh.hours}
                  </p>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <p className="text-uppercase small fw-semibold mb-2" style={{ color: '#BBF7D0' }}>
                  Social Media
                </p>
                <div className="d-flex gap-2">
                  {socialIcons.map((social) => (
                    social.href ? (
                      <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener norefferer"
                      className='social-pill'
                    >
                    <span style={{ fontSize: '0.9rem' }}>
                      {social.icon}
                    </span>
                    </a>
                    ) : null 
                  )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL (Form) - Using surface-card class */}
          <div className="col-lg-6">
            <div className="h-100 rounded-4 p-4 p-md-5 surface-card">
              <h2 className="h5 section-title mb-3">
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

                <div className="col-12 d-flex justify-content-end mt-4">
                  {/* Using btn-pill and btn-primary classes */}
                  <button
                    type="submit"
                    disabled={processing}
                    className="btn btn-pill btn-primary btn-soft-hover d-inline-flex align-items-center gap-2"
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