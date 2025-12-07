import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faMapMarkerAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons';

function Profile() {
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
            Profile Settings
          </h2>
          <p className="mb-0 small small-md-normal" style={{ color: '#64748b', fontSize: '1.05rem', fontWeight: 500 }}>Manage your admin account information</p>
        </div>
      </div>

      <div
        className="rounded-4 p-4 p-md-5 surface-card admin-form-card fade-up fade-delay-1"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8faf9 100%)',
          border: '1px solid rgba(45, 80, 22, 0.1)',
          maxWidth: '800px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
          position: 'relative',
          overflow: 'hidden'
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
        <div className="admin-form-card-bg"></div>
        <form className="row g-4 position-relative">
          <div className="col-12 fade-up fade-delay-2 form-field-wrapper">
            <label className="form-label fw-semibold mb-3 admin-form-label" style={{ 
              background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: 600
            }}>
              <FontAwesomeIcon icon={faUser} style={{ color: '#22C55E', fontSize: '1rem' }} />
              Full Name
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
                <FontAwesomeIcon icon={faUser} />
              </div>
              <input
                type="text"
                className="form-control rounded-3 admin-form-input"
                placeholder="John Doe"
                defaultValue="Admin User"
                style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '14px', paddingBottom: '14px', fontSize: '0.95rem' }}
              />
              <span className="admin-input-focus-line"></span>
            </div>
          </div>

          <div className="col-md-6 fade-up fade-delay-2 form-field-wrapper">
            <label className="form-label fw-semibold mb-3 admin-form-label" style={{ color: '#1e293b', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FontAwesomeIcon icon={faEnvelope} style={{ color: '#22C55E', fontSize: '1rem' }} />
              Email Address
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
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <input
                type="email"
                className="form-control rounded-3 admin-form-input"
                placeholder="admin@solarkon.com"
                defaultValue="admin@solarkon.com"
                style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '14px', paddingBottom: '14px', fontSize: '0.95rem' }}
              />
              <span className="admin-input-focus-line"></span>
            </div>
          </div>

          <div className="col-md-6 fade-up fade-delay-3 form-field-wrapper">
            <label className="form-label fw-semibold mb-3 admin-form-label" style={{ color: '#1e293b', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FontAwesomeIcon icon={faPhone} style={{ color: '#22C55E', fontSize: '1rem' }} />
              Phone Number
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
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <input
                type="tel"
                className="form-control rounded-3 admin-form-input"
                placeholder="+1 (555) 123-4567"
                defaultValue="+1 (555) 123-4567"
                style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '14px', paddingBottom: '14px', fontSize: '0.95rem' }}
              />
              <span className="admin-input-focus-line"></span>
            </div>
          </div>

          <div className="col-12 fade-up fade-delay-3 form-field-wrapper">
            <label className="form-label fw-semibold mb-3 admin-form-label" style={{ color: '#1e293b', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#16a34a', fontSize: '1rem' }} />
              Address
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
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <textarea
                className="form-control rounded-3 admin-form-input"
                rows="3"
                placeholder="123 Main Street, City, State, ZIP"
                defaultValue="123 Main Street, Anytown, USA 12345"
                style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '14px', paddingBottom: '14px', fontSize: '0.95rem', resize: 'vertical' }}
              />
              <span className="admin-input-focus-line"></span>
            </div>
          </div>

          <div className="col-12 fade-up fade-delay-4 form-field-wrapper">
            <label className="form-label fw-semibold mb-3 admin-form-label" style={{ color: '#1e293b', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FontAwesomeIcon icon={faFileAlt} style={{ color: '#22C55E', fontSize: '1rem' }} />
              Bio
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
                className="form-control rounded-3 admin-form-input"
                rows="4"
                placeholder="Tell us about yourself..."
                defaultValue="Administrator for SOLARKON Solar Solutions"
                style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '14px', paddingBottom: '14px', fontSize: '0.95rem', resize: 'vertical' }}
              />
              <span className="admin-input-focus-line"></span>
            </div>
          </div>

          <div className="col-12 d-flex justify-content-end gap-3 mt-4 fade-up fade-delay-4">
            <button
              type="button"
              className="btn rounded-pill px-4 px-md-5 admin-btn-cancel"
              style={{ 
                background: '#f8faf9',
                color: '#64748b',
                border: '1px solid rgba(45, 80, 22, 0.2)',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#e5e7eb';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f8faf9';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn rounded-pill px-4 px-md-5 admin-btn-primary"
              style={{ 
                background: '#2D5016',
                color: '#ffffff',
                border: 'none',
                fontWeight: 600,
                boxShadow: '0 4px 16px rgba(45, 80, 22, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#22C55E';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(34, 197, 94, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#2D5016';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(45, 80, 22, 0.3)';
              }}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;

