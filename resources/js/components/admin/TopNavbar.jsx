import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserCircle, faCog, faSearch } from '@fortawesome/free-solid-svg-icons';

function TopNavbar() {
  return (
    <header 
      className="sticky-top admin-navbar admin-navbar-enhanced" 
      style={{ 
        zIndex: 1030,
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 249, 0.98) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 4px 20px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(45, 80, 22, 0.05)',
        borderBottom: '1px solid rgba(45, 80, 22, 0.1)',
      }}
    >
      <div className="container-fluid px-2 px-sm-3 px-md-4 px-lg-5" style={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
        <div className="d-flex align-items-center justify-content-between py-2 py-sm-3" style={{ width: '100%', minWidth: 0, flexWrap: 'nowrap' }}>
          <div className="admin-navbar-content fade-up d-flex align-items-center gap-1 gap-sm-2 gap-md-3" style={{ minWidth: 0, flexShrink: 1, overflow: 'hidden' }}>
            <div 
              className="d-none d-md-block"
              style={{
                width: '4px',
                height: '36px',
                flexShrink: 0,
                background: 'linear-gradient(180deg, #2D5016 0%, #22C55E 100%)',
                borderRadius: '2px',
                boxShadow: '0 2px 8px rgba(45, 80, 22, 0.3)',
              }}
            />
            <div style={{ minWidth: 0, flexShrink: 1, overflow: 'hidden' }}>
              <h1 
                className="h5 mb-0 fw-bold admin-navbar-title" 
                style={{ 
                  background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: 'clamp(0.875rem, 2vw, 1.5rem)',
                  letterSpacing: '-0.02em',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '100%',
                }}
              >
                <span className="d-none d-sm-inline">Admin Dashboard</span>
                <span className="d-sm-none">Dashboard</span>
              </h1>
              <p className="mb-0 small text-muted d-none d-lg-block" style={{ fontSize: '0.75rem', marginTop: '-2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Welcome back, Admin
              </p>
            </div>
          </div>
          
          <div className="d-flex align-items-center gap-1 gap-sm-2 gap-md-3" style={{ flexShrink: 0, minWidth: 0 }}>
            {/* Search Button */}
            <button
              className="btn position-relative p-1 p-sm-2 text-decoration-none rounded-3 admin-search-btn"
              aria-label="Search"
              style={{ 
                background: 'linear-gradient(135deg, rgba(45, 80, 22, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)',
                border: '1px solid rgba(45, 80, 22, 0.1)',
                color: '#2D5016',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                width: '34px',
                height: '34px',
                minWidth: '34px',
                maxWidth: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                padding: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(45, 80, 22, 0.1) 0%, rgba(34, 197, 94, 0.1) 100%)';
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(45, 80, 22, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(45, 80, 22, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FontAwesomeIcon icon={faSearch} style={{ fontSize: 'clamp(0.8rem, 2vw, 0.95rem)' }} />
            </button>

            {/* Notifications Button */}
            <button
              className="btn position-relative p-1 p-sm-2 text-decoration-none rounded-3 admin-notification-btn admin-notification-btn-enhanced"
              aria-label="Notifications"
              style={{ 
                background: 'linear-gradient(135deg, rgba(45, 80, 22, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)',
                border: '1px solid rgba(45, 80, 22, 0.1)',
                color: '#2D5016',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                width: '34px',
                height: '34px',
                minWidth: '34px',
                maxWidth: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                padding: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(45, 80, 22, 0.1) 0%, rgba(34, 197, 94, 0.1) 100%)';
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(45, 80, 22, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(45, 80, 22, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FontAwesomeIcon icon={faBell} className="admin-bell-icon" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)' }} />
              <span 
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill admin-badge pulse-badge" 
                style={{ 
                  background: 'linear-gradient(135deg, #22C55E 0%, #16a34a 100%)',
                  color: '#ffffff',
                  fontSize: '0.55rem',
                  padding: '0.15rem 0.3rem',
                  boxShadow: '0 2px 8px rgba(34, 197, 94, 0.4)',
                  border: '2px solid #ffffff',
                  minWidth: '16px',
                  height: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'translate(-25%, -25%)',
                  lineHeight: 1,
                }}
              >
                3
              </span>
            </button>

            {/* Settings Button */}
            <button
              className="btn position-relative p-1 p-sm-2 text-decoration-none rounded-3 admin-settings-btn d-none d-md-flex"
              aria-label="Settings"
              style={{ 
                background: 'linear-gradient(135deg, rgba(45, 80, 22, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)',
                border: '1px solid rgba(45, 80, 22, 0.1)',
                color: '#2D5016',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                width: '34px',
                height: '34px',
                minWidth: '34px',
                maxWidth: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                padding: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(45, 80, 22, 0.1) 0%, rgba(34, 197, 94, 0.1) 100%)';
                e.currentTarget.style.transform = 'scale(1.05) rotate(90deg)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(45, 80, 22, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(45, 80, 22, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)';
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FontAwesomeIcon icon={faCog} style={{ fontSize: 'clamp(0.8rem, 2vw, 0.95rem)' }} />
            </button>

            {/* User Profile */}
            <div 
              className="d-flex align-items-center gap-1 gap-sm-2 admin-user-profile rounded-3 px-1 px-sm-2 py-1"
              style={{
                background: 'linear-gradient(135deg, rgba(45, 80, 22, 0.03) 0%, rgba(34, 197, 94, 0.03) 100%)',
                border: '1px solid rgba(45, 80, 22, 0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                flexShrink: 0,
                minWidth: 0,
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(45, 80, 22, 0.08) 0%, rgba(34, 197, 94, 0.08) 100%)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(45, 80, 22, 0.15)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(45, 80, 22, 0.03) 0%, rgba(34, 197, 94, 0.03) 100%)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                className="admin-user-avatar-wrapper rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                style={{
                  width: '32px',
                  height: '32px',
                  minWidth: '32px',
                  maxWidth: '32px',
                  background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
                  boxShadow: '0 4px 12px rgba(45, 80, 22, 0.25)',
                  transition: 'all 0.3s ease',
                }}
              >
                <FontAwesomeIcon 
                  icon={faUserCircle} 
                  className="admin-user-icon" 
                  style={{ 
                    color: '#ffffff', 
                    fontSize: '1.2rem',
                  }} 
                />
              </div>
              <div className="d-none d-xl-block fade-up fade-delay-1" style={{ minWidth: 0, overflow: 'hidden', maxWidth: '150px' }}>
                <div 
                  className="fw-semibold small admin-user-name" 
                  style={{ 
                    background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '0.875rem',
                    lineHeight: '1.2',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  Admin User
                </div>
                <div 
                  className="small admin-user-email" 
                  style={{ 
                    color: '#64748b',
                    fontSize: '0.75rem',
                    lineHeight: '1.2',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  admin@solarkon.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopNavbar;
