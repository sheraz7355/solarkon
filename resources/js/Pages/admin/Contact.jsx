import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faGlobe, faClock, faLightbulb } from '@fortawesome/free-solid-svg-icons';

function AdminContact() {
  const [formData, setFormData] = useState({
    heroTitle: 'Get In Touch With SOLARKON',
    heroSubtitle: 'Interested in switching to solar? Have questions about our services? Our team is ready to help you with any inquiry, from project estimates to long-term maintenance.',
    contactInfo: {
      email: 'info@solarkon.org',
      phone: '+92 306 2935768',
      landline: '042-36449602',
      address: '94-C J1 Johar Town, Phase 2 Lahore',
      website: 'www.solarkon.org',
      businessHours: {
        weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
        saturday: 'Saturday: 10:00 AM - 4:00 PM',
        sunday: 'Sunday: Closed',
      },
    },
    contactCardTitle: 'Have Questions Or Need Assistance?',
    contactCardDescription: "We're here to help! Whether you're curious about our services, need support on an existing project, or want to request a quote, our team is ready to assist.",
  });

  const handleChange = (e, section) => {
    const { name, value } = e.target;
    if (section === 'hero') {
      setFormData({ ...formData, [name]: value });
    } else if (section === 'contact') {
      setFormData({
        ...formData,
        contactInfo: { ...formData.contactInfo, [name]: value },
      });
    } else if (section === 'card') {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleBusinessHoursChange = (field, value) => {
    setFormData({
      ...formData,
      contactInfo: {
        ...formData.contactInfo,
        businessHours: { ...formData.contactInfo.businessHours, [field]: value },
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact data:', formData);
    alert('Contact content saved successfully!');
  };

  return (
    <div className="container-fluid px-2 px-sm-3 px-md-4 px-lg-5 py-3 py-sm-4 py-md-5" style={{ background: '#f8faf9', minHeight: '100vh' }}>
      <div className="mb-4 mb-sm-5 fade-up">
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(45, 80, 22, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)',
          padding: '2rem 2.5rem',
          borderRadius: '20px',
          border: '1px solid rgba(45, 80, 22, 0.1)',
          marginBottom: '2rem',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)'
        }}>
          <h2 className="fw-bold mb-2 mb-sm-3 dashboard-title" style={{ 
            background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '2.25rem',
            fontWeight: 800,
            letterSpacing: '-0.02em'
          }}>
            Contact Page Content
          </h2>
          <p className="mb-0 small small-md-normal" style={{ color: '#64748b', fontSize: '1.05rem', fontWeight: 500 }}>Manage content for the Contact page</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Hero Section */}
        <div className="rounded-4 p-4 p-md-5 surface-card admin-form-card fade-up fade-delay-1 mb-4" style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8faf9 100%)',
          border: '1px solid rgba(45, 80, 22, 0.1)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #2D5016 0%, #22C55E 100%)'
          }}></div>
          <h3 className="fw-bold mb-4 chart-title position-relative" style={{ 
            fontSize: '1.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <span style={{
              width: '5px',
              height: '28px',
              background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
              borderRadius: '3px'
            }}></span>
            Hero Section
          </h3>
          <div className="row g-4">
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">
                <FontAwesomeIcon icon={faLightbulb} style={{ color: '#22C55E', marginRight: '0.5rem' }} />
                Hero Title
              </label>
              <input
                type="text"
                name="heroTitle"
                className="form-control rounded-3 admin-form-input"
                value={formData.heroTitle}
                onChange={(e) => handleChange(e, 'hero')}
                style={{ padding: '14px 16px', fontSize: '0.95rem' }}
              />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">
                Hero Subtitle
              </label>
              <textarea
                name="heroSubtitle"
                className="form-control rounded-3 admin-form-input"
                rows="3"
                value={formData.heroSubtitle}
                onChange={(e) => handleChange(e, 'hero')}
                style={{ padding: '14px 16px', fontSize: '0.95rem', resize: 'vertical' }}
              />
            </div>
          </div>
        </div>

        {/* Contact Info Card */}
        <div className="rounded-4 p-4 p-md-5 surface-card admin-form-card fade-up fade-delay-2 mb-4" style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8faf9 100%)',
          border: '1px solid rgba(45, 80, 22, 0.1)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #2D5016 0%, #22C55E 100%)'
          }}></div>
          <h3 className="fw-bold mb-4 chart-title position-relative" style={{ fontSize: '1.75rem' }}>
            Contact Information Card
          </h3>
          <div className="row g-4">
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">
                Card Title
              </label>
              <input
                type="text"
                name="contactCardTitle"
                className="form-control rounded-3 admin-form-input"
                value={formData.contactCardTitle}
                onChange={(e) => handleChange(e, 'card')}
                style={{ padding: '14px 16px', fontSize: '0.95rem' }}
              />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">
                Card Description
              </label>
              <textarea
                name="contactCardDescription"
                className="form-control rounded-3 admin-form-input"
                rows="3"
                value={formData.contactCardDescription}
                onChange={(e) => handleChange(e, 'card')}
                style={{ padding: '14px 16px', fontSize: '0.95rem', resize: 'vertical' }}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold mb-3 admin-form-label">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: '#22C55E', marginRight: '0.5rem' }} />
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control rounded-3 admin-form-input"
                value={formData.contactInfo.email}
                onChange={(e) => handleChange(e, 'contact')}
                style={{ padding: '14px 16px', fontSize: '0.95rem' }}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold mb-3 admin-form-label">
                <FontAwesomeIcon icon={faPhone} style={{ color: '#22C55E', marginRight: '0.5rem' }} />
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                className="form-control rounded-3 admin-form-input"
                value={formData.contactInfo.phone}
                onChange={(e) => handleChange(e, 'contact')}
                style={{ padding: '14px 16px', fontSize: '0.95rem' }}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold mb-3 admin-form-label">
                Landline
              </label>
              <input
                type="tel"
                name="landline"
                className="form-control rounded-3 admin-form-input"
                value={formData.contactInfo.landline}
                onChange={(e) => handleChange(e, 'contact')}
                style={{ padding: '14px 16px', fontSize: '0.95rem' }}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold mb-3 admin-form-label">
                <FontAwesomeIcon icon={faGlobe} style={{ color: '#22C55E', marginRight: '0.5rem' }} />
                Website
              </label>
              <input
                type="text"
                name="website"
                className="form-control rounded-3 admin-form-input"
                value={formData.contactInfo.website}
                onChange={(e) => handleChange(e, 'contact')}
                style={{ padding: '14px 16px', fontSize: '0.95rem' }}
              />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#22C55E', marginRight: '0.5rem' }} />
                Address
              </label>
              <textarea
                name="address"
                className="form-control rounded-3 admin-form-input"
                rows="2"
                value={formData.contactInfo.address}
                onChange={(e) => handleChange(e, 'contact')}
                style={{ padding: '14px 16px', fontSize: '0.95rem', resize: 'vertical' }}
              />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">
                <FontAwesomeIcon icon={faClock} style={{ color: '#22C55E', marginRight: '0.5rem' }} />
                Business Hours
              </label>
              <div className="row g-3">
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control rounded-3 admin-form-input"
                    placeholder="Weekdays"
                    value={formData.contactInfo.businessHours.weekdays}
                    onChange={(e) => handleBusinessHoursChange('weekdays', e.target.value)}
                    style={{ padding: '14px 16px', fontSize: '0.95rem' }}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control rounded-3 admin-form-input"
                    placeholder="Saturday"
                    value={formData.contactInfo.businessHours.saturday}
                    onChange={(e) => handleBusinessHoursChange('saturday', e.target.value)}
                    style={{ padding: '14px 16px', fontSize: '0.95rem' }}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control rounded-3 admin-form-input"
                    placeholder="Sunday"
                    value={formData.contactInfo.businessHours.sunday}
                    onChange={(e) => handleBusinessHoursChange('sunday', e.target.value)}
                    style={{ padding: '14px 16px', fontSize: '0.95rem' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end gap-3 mt-4">
          <button type="button" className="btn rounded-pill px-4 px-md-5 admin-btn-cancel">
            Cancel
          </button>
          <button type="submit" className="btn rounded-pill px-4 px-md-5 admin-btn-primary" style={{ 
            background: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)',
            color: '#ffffff',
            border: 'none',
            fontWeight: 600
          }}>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminContact;
