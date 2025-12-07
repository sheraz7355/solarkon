import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faHeading, faFileAlt, faMousePointer, faChartLine, faImage, faVideo, faSave } from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
  const [formData, setFormData] = useState({
    badge: 'New Energy For Our System',
    titleLine1: 'Clean Renewable',
    titleLine2: 'Limitless Energy',
    description: 'Switch to solar with SOLARKON and experience cost savings, energy independence, and a greener future with a system tailored to your needs.',
    buttonText: 'Get Free Consultation',
    heroImage: '',
    videoThumbnail: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80',
    videoDescription: 'Unlock the power of solar energy and enjoy long-term advantages.',
    stats: [
      { label: 'Solar Installations', value: '10k+', target: 10000 },
      { label: 'Tons of CO2 Reduced', value: '100k', target: 100000 },
      { label: 'Up to Savings', value: '70%', target: 70 },
    ]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStatChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      stats: prev.stats.map((stat, i) => 
        i === index ? { ...stat, [field]: field === 'target' ? parseInt(value) || 0 : value } : stat
      )
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hero Section data:', formData);
    alert('Hero Section updated successfully!');
  };

  return (
    <div className="container-fluid px-2 px-sm-3 px-md-4 px-lg-5 py-3 py-sm-4 py-md-5" style={{ background: '#f8faf9', minHeight: '100vh' }}>
      {/* Header Section */}
      <div className="mb-4 mb-sm-5 fade-up">
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(45, 80, 22, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)',
          padding: '2rem 2.5rem',
          borderRadius: '20px',
          border: '1px solid rgba(45, 80, 22, 0.1)',
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
            Hero Section Management
          </h2>
          <p className="mb-0 small small-md-normal" style={{ color: '#64748b', fontSize: '1.05rem', fontWeight: 500 }}>
            Manage the hero section content for your home page
          </p>
        </div>
      </div>

      {/* Form Card */}
      <div
        className="card border-0 shadow-lg rounded-4 surface-card dashboard-card-enhanced fade-up fade-delay-1"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8faf9 100%)',
          border: '1px solid rgba(45, 80, 22, 0.1)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #2D5016 0%, #22C55E 100%)'
        }}></div>
        
        <div className="card-body p-3 p-sm-4 p-md-5">
          <form onSubmit={handleSubmit}>
            <div className="row g-4">
              {/* Badge Field */}
              <div className="col-12 fade-up fade-delay-2">
                <label className="form-label fw-semibold mb-3 admin-form-label" style={{ color: '#1e293b', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FontAwesomeIcon icon={faTag} style={{ color: '#22C55E', fontSize: '1rem' }} />
                  Badge Text
                </label>
                <div className="admin-input-wrapper" style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#94a3b8',
                    zIndex: 2,
                    pointerEvents: 'none'
                  }}>
                    <FontAwesomeIcon icon={faTag} />
                  </div>
                  <input
                    type="text"
                    name="badge"
                    value={formData.badge}
                    onChange={handleChange}
                    className="form-control rounded-3 admin-form-input"
                    placeholder="e.g., New Energy For Our System"
                    style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '14px', paddingBottom: '14px', fontSize: '0.95rem', border: '2px solid #e2e8f0' }}
                    required
                  />
                  <span className="admin-input-focus-line"></span>
                </div>
              </div>

              {/* Title Line 1 */}
              <div className="col-12 col-md-6 fade-up fade-delay-2">
                <label className="form-label fw-semibold mb-3 admin-form-label" style={{ color: '#1e293b', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FontAwesomeIcon icon={faHeading} style={{ color: '#22C55E', fontSize: '1rem' }} />
                  Title Line 1
                </label>
                <div className="admin-input-wrapper" style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#94a3b8',
                    zIndex: 2,
                    pointerEvents: 'none'
                  }}>
                    <FontAwesomeIcon icon={faHeading} />
                  </div>
                  <input
                    type="text"
                    name="titleLine1"
                    value={formData.titleLine1}
                    onChange={handleChange}
                    className="form-control rounded-3 admin-form-input"
                    placeholder="e.g., Clean Renewable"
                    style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '14px', paddingBottom: '14px', fontSize: '0.95rem', border: '2px solid #e2e8f0' }}
                    required
                  />
                  <span className="admin-input-focus-line"></span>
                </div>
              </div>

              {/* Title Line 2 */}
              <div className="col-12 col-md-6 fade-up fade-delay-2">
                <label className="form-label fw-semibold mb-3 admin-form-label" style={{ color: '#1e293b', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FontAwesomeIcon icon={faHeading} style={{ color: '#22C55E', fontSize: '1rem' }} />
                  Title Line 2
                </label>
                <div className="admin-input-wrapper" style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#94a3b8',
                    zIndex: 2,
                    pointerEvents: 'none'
                  }}>
                    <FontAwesomeIcon icon={faHeading} />
                  </div>
                  <input
                    type="text"
                    name="titleLine2"
                    value={formData.titleLine2}
                    onChange={handleChange}
                    className="form-control rounded-3 admin-form-input"
                    placeholder="e.g., Limitless Energy"
                    style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '14px', paddingBottom: '14px', fontSize: '0.95rem', border: '2px solid #e2e8f0' }}
                    required
                  />
                  <span className="admin-input-focus-line"></span>
                </div>
              </div>

              {/* Description */}
              <div className="col-12 fade-up fade-delay-3">
                <label className="form-label fw-semibold mb-3 admin-form-label" style={{ color: '#1e293b', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FontAwesomeIcon icon={faFileAlt} style={{ color: '#22C55E', fontSize: '1rem' }} />
                  Description
                </label>
                <div className="admin-input-wrapper" style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '16px',
                    top: '20px',
                    color: '#94a3b8',
                    zIndex: 2,
                    pointerEvents: 'none'
                  }}>
                    <FontAwesomeIcon icon={faFileAlt} />
                  </div>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="form-control rounded-3 admin-form-input"
                    rows="3"
                    placeholder="Enter description..."
                    style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '14px', paddingBottom: '14px', fontSize: '0.95rem', border: '2px solid #e2e8f0', resize: 'vertical' }}
                    required
                  />
                  <span className="admin-input-focus-line"></span>
                </div>
              </div>

              {/* Button Text */}
              <div className="col-12 col-md-6 fade-up fade-delay-3">
                <label className="form-label fw-semibold mb-3 admin-form-label" style={{ color: '#1e293b', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FontAwesomeIcon icon={faMousePointer} style={{ color: '#22C55E', fontSize: '1rem' }} />
                  Button Text
                </label>
                <div className="admin-input-wrapper" style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#94a3b8',
                    zIndex: 2,
                    pointerEvents: 'none'
                  }}>
                    <FontAwesomeIcon icon={faMousePointer} />
                  </div>
                  <input
                    type="text"
                    name="buttonText"
                    value={formData.buttonText}
                    onChange={handleChange}
                    className="form-control rounded-3 admin-form-input"
                    placeholder="e.g., Get Free Consultation"
                    style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '14px', paddingBottom: '14px', fontSize: '0.95rem', border: '2px solid #e2e8f0' }}
                    required
                  />
                  <span className="admin-input-focus-line"></span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="col-12 col-md-6 fade-up fade-delay-4">
                <label className="form-label fw-semibold mb-3 admin-form-label" style={{ color: '#1e293b', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FontAwesomeIcon icon={faImage} style={{ color: '#22C55E', fontSize: '1rem' }} />
                  Hero Image URL
                </label>
                <div className="admin-input-wrapper" style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#94a3b8',
                    zIndex: 2,
                    pointerEvents: 'none'
                  }}>
                    <FontAwesomeIcon icon={faImage} />
                  </div>
                  <input
                    type="url"
                    name="heroImage"
                    value={formData.heroImage}
                    onChange={handleChange}
                    className="form-control rounded-3 admin-form-input"
                    placeholder="https://images.unsplash.com/..."
                    style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '14px', paddingBottom: '14px', fontSize: '0.95rem', border: '2px solid #e2e8f0' }}
                  />
                  <span className="admin-input-focus-line"></span>
                </div>
              </div>

              {/* Video Thumbnail */}
              <div className="col-12 col-md-6 fade-up fade-delay-4">
                <label className="form-label fw-semibold mb-3 admin-form-label" style={{ color: '#1e293b', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FontAwesomeIcon icon={faVideo} style={{ color: '#22C55E', fontSize: '1rem' }} />
                  Video Thumbnail URL
                </label>
                <div className="admin-input-wrapper" style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#94a3b8',
                    zIndex: 2,
                    pointerEvents: 'none'
                  }}>
                    <FontAwesomeIcon icon={faVideo} />
                  </div>
                  <input
                    type="url"
                    name="videoThumbnail"
                    value={formData.videoThumbnail}
                    onChange={handleChange}
                    className="form-control rounded-3 admin-form-input"
                    placeholder="https://images.unsplash.com/..."
                    style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '14px', paddingBottom: '14px', fontSize: '0.95rem', border: '2px solid #e2e8f0' }}
                    required
                  />
                  <span className="admin-input-focus-line"></span>
                </div>
              </div>

              {/* Video Description */}
              <div className="col-12 col-md-6 fade-up fade-delay-4">
                <label className="form-label fw-semibold mb-3 admin-form-label" style={{ color: '#1e293b', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FontAwesomeIcon icon={faFileAlt} style={{ color: '#22C55E', fontSize: '1rem' }} />
                  Video Description
                </label>
                <div className="admin-input-wrapper" style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#94a3b8',
                    zIndex: 2,
                    pointerEvents: 'none'
                  }}>
                    <FontAwesomeIcon icon={faFileAlt} />
                  </div>
                  <input
                    type="text"
                    name="videoDescription"
                    value={formData.videoDescription}
                    onChange={handleChange}
                    className="form-control rounded-3 admin-form-input"
                    placeholder="e.g., Unlock the power of solar energy..."
                    style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '14px', paddingBottom: '14px', fontSize: '0.95rem', border: '2px solid #e2e8f0' }}
                    required
                  />
                  <span className="admin-input-focus-line"></span>
                </div>
              </div>

              {/* Stats Section */}
              <div className="col-12 fade-up fade-delay-5">
                <label className="form-label fw-semibold mb-3 admin-form-label" style={{ color: '#1e293b', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FontAwesomeIcon icon={faChartLine} style={{ color: '#22C55E', fontSize: '1rem' }} />
                  Statistics
                </label>
                <div className="row g-3">
                  {formData.stats.map((stat, index) => (
                    <div key={index} className="col-12 col-md-4">
                      <div className="p-3 rounded-3 border" style={{ backgroundColor: '#f8faf9', borderColor: '#e2e8f0' }}>
                        <div className="mb-2">
                          <label className="small fw-semibold text-muted mb-1">Label</label>
                          <input
                            type="text"
                            className="form-control form-control-sm rounded-3"
                            value={stat.label}
                            onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                            placeholder="Stat label"
                            style={{ border: '2px solid #e2e8f0' }}
                            required
                          />
                        </div>
                        <div className="mb-2">
                          <label className="small fw-semibold text-muted mb-1">Value</label>
                          <input
                            type="text"
                            className="form-control form-control-sm rounded-3"
                            value={stat.value}
                            onChange={(e) => handleStatChange(index, 'value', e.target.value)}
                            placeholder="e.g., 10k+, 100k, 70%"
                            style={{ border: '2px solid #e2e8f0' }}
                            required
                          />
                        </div>
                        <div>
                          <label className="small fw-semibold text-muted mb-1">Target (for animation)</label>
                          <input
                            type="number"
                            className="form-control form-control-sm rounded-3"
                            value={stat.target}
                            onChange={(e) => handleStatChange(index, 'target', e.target.value)}
                            placeholder="e.g., 10000"
                            style={{ border: '2px solid #e2e8f0' }}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="col-12 fade-up fade-delay-6">
                <div className="d-flex justify-content-end">
                  <button
                    type="submit"
                    className="btn btn-pill px-5 admin-btn-primary d-inline-flex align-items-center gap-2"
                    style={{ 
                      backgroundColor: '#2D5016',
                      color: '#ffffff',
                      border: 'none',
                      fontWeight: 600,
                      boxShadow: '0 4px 16px rgba(45, 80, 22, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#22C55E';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(34, 197, 94, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#2D5016';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(45, 80, 22, 0.3)';
                    }}
                  >
                    <FontAwesomeIcon icon={faSave} />
                    Save Hero Section
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
