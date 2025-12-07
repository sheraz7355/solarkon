import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCode, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className="admin-footer-enhanced" 
      style={{ 
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 249, 0.98) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(45, 80, 22, 0.1)',
        boxShadow: '0 -4px 20px rgba(15, 23, 42, 0.06)',
      }}
    >
      <div className="container-fluid px-3 px-md-4 px-lg-5">
        <div className="py-4 py-sm-4">
          {/* Main Footer Content */}
          <div className="row g-4 mb-3">
            {/* Brand Section */}
            <div className="col-12 col-md-4 text-center text-md-start">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-2">
                <div 
                  style={{
                    width: '3px',
                    height: '24px',
                    background: 'linear-gradient(180deg, #2D5016 0%, #22C55E 100%)',
                    borderRadius: '2px',
                  }}
                />
                <h5 
                  className="mb-0 fw-bold"
                  style={{
                    background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '1.1rem',
                  }}
                >
                  SOLARKON
                </h5>
              </div>
              <p 
                className="small mb-0" 
                style={{ 
                  color: '#64748b',
                  fontSize: '0.8rem',
                  lineHeight: '1.6',
                }}
              >
                Empowering the future with clean, renewable solar energy solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-12 col-md-4 text-center">
              <h6 
                className="fw-semibold mb-3 small text-uppercase"
                style={{
                  color: '#2D5016',
                  letterSpacing: '0.05em',
                  fontSize: '0.75rem',
                }}
              >
                Quick Links
              </h6>
              <div className="d-flex flex-column gap-2">
                <a 
                  href="#dashboard" 
                  className="text-decoration-none small"
                  style={{ 
                    color: '#64748b',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#2D5016';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#64748b';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  Dashboard
                </a>
                <a 
                  href="#projects" 
                  className="text-decoration-none small"
                  style={{ 
                    color: '#64748b',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#2D5016';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#64748b';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  Projects
                </a>
                <a 
                  href="#settings" 
                  className="text-decoration-none small"
                  style={{ 
                    color: '#64748b',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#2D5016';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#64748b';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  Settings
                </a>
              </div>
            </div>

            {/* Status Section */}
            <div className="col-12 col-md-4 text-center text-md-end">
              <div className="d-flex flex-column gap-2 align-items-center align-items-md-end">
                <div 
                  className="d-flex align-items-center gap-2 small px-3 py-1 rounded-pill"
                  style={{
                    background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(45, 80, 22, 0.1) 100%)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                    color: '#16a34a',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                  }}
                >
                  <div 
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#22C55E',
                      boxShadow: '0 0 8px rgba(34, 197, 94, 0.6)',
                      animation: 'pulse 2s infinite',
                    }}
                  />
                  System Online
                </div>
                <div 
                  className="small"
                  style={{ 
                    color: '#94a3b8',
                    fontSize: '0.7rem',
                  }}
                >
                  Last updated: {new Date().toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div 
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(45, 80, 22, 0.2) 50%, transparent 100%)',
              margin: '1.5rem 0',
            }}
          />

          {/* Copyright Section */}
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
            <p 
              className="mb-0 small d-flex align-items-center gap-2" 
              style={{ 
                color: '#64748b',
                fontSize: '0.8rem',
              }}
            >
              <span>© {currentYear} SOLARKON Admin Dashboard.</span>
              <span className="d-none d-sm-inline">All rights reserved.</span>
            </p>
            
            <div className="d-flex align-items-center gap-3">
              <div 
                className="d-flex align-items-center gap-1 small"
                style={{ 
                  color: '#94a3b8',
                  fontSize: '0.75rem',
                }}
              >
                <FontAwesomeIcon icon={faShieldAlt} style={{ fontSize: '0.7rem' }} />
                <span>Secure</span>
              </div>
              <div 
                className="d-flex align-items-center gap-1 small"
                style={{ 
                  color: '#94a3b8',
                  fontSize: '0.75rem',
                }}
              >
                <FontAwesomeIcon icon={faCode} style={{ fontSize: '0.7rem' }} />
                <span>v1.0.0</span>
              </div>
              <div 
                className="d-flex align-items-center gap-1 small"
                style={{ 
                  color: '#94a3b8',
                  fontSize: '0.75rem',
                }}
              >
                Made with
                <FontAwesomeIcon 
                  icon={faHeart} 
                  style={{ 
                    fontSize: '0.7rem',
                    color: '#ef4444',
                    animation: 'pulse 2s infinite',
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
