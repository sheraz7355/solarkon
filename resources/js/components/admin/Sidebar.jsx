import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faFolderOpen,
  faPlusCircle,
  faUser,
  faCog,
  faBars,
  faTimes,
  faHome,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import webLogo from '../../assets/web-logo.svg';

function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 992);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const menuItems = [
    // { icon: faTachometerAlt, label: 'Dashboard', path: '/admin' },
    { icon: faHome, label: 'Hero Section', path: '/admin/hero-section' },
    { icon: faInfoCircle, label: 'About Us', path: '/admin/about-us' },
    { icon: faFolderOpen, label: 'Projects', path: '/admin/projects' },
    { icon: faBars, label: 'Navbar & Footer', path: '/admin/navbar-footer' },
    { icon: faUser, label: 'Profile', path: '/admin/profile' },
    { icon: faCog, label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <>
      <button
        className="btn d-lg-none position-fixed admin-toggle-btn"
        style={{ 
          zIndex: 1050, 
          width: '36px', 
          height: '36px',
          top: '10px',
          left: '10px',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#2D5016',
          border: 'none',
          borderRadius: '8px',
          color: '#ffffff',
          boxShadow: '0 2px 8px rgba(45, 80, 22, 0.3)',
        }}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle sidebar"
      >
        <FontAwesomeIcon icon={isMobileOpen ? faTimes : faBars} style={{ fontSize: '0.95rem' }} />
      </button>

      <aside
        className={`position-fixed top-0 start-0 h-100 bg-white shadow-lg admin-sidebar-enhanced ${
          isMobileOpen ? 'd-block' : 'd-none d-lg-block'
        }`}
        style={{
          width: '280px',
          zIndex: 1040,
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          overflowY: 'auto',
          transform: isMobileOpen || isDesktop ? 'translateX(0)' : 'translateX(-100%)',
          background: 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)',
        }}
      >
        <div className="p-3 p-md-4 border-bottom position-relative admin-sidebar-header">
          <div className="d-flex align-items-center gap-2 sidebar-logo-container fade-up">
            <img
              src={webLogo}
              alt="SOLARKON Admin"
              className="sidebar-logo"
              style={{ transition: 'transform 0.3s ease' }}
            />
            <span className="fw-bold sidebar-brand-text" style={{ color: '#2D5016' }}>
              SOLARKON
            </span>
          </div>
          <p className="text-muted small mb-0 mt-1 sidebar-subtitle fade-up fade-delay-1">Admin Dashboard</p>
        </div>

        <nav className="p-3">
          {menuItems.map((item, idx) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={false}
              className={({ isActive }) =>
                `d-flex align-items-center gap-3 p-3 mb-2 rounded-3 text-decoration-none admin-sidebar-link-enhanced ${
                  isActive
                    ? 'text-white admin-sidebar-link-active'
                    : 'text-dark'
                }` +
                (isActive
                  ? ' shadow-sm'
                  : '')
              }
              style={({ isActive }) => ({
                backgroundColor: isActive ? '#2D5016' : 'transparent',
                color: isActive ? '#ffffff' : '#1e293b',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                animationDelay: `${0.1 + idx * 0.05}s`,
              })}
              onClick={() => setIsMobileOpen(false)}
            >
              <FontAwesomeIcon 
                icon={item.icon} 
                style={{ 
                  width: '20px',
                  transition: 'transform 0.3s ease',
                  color: 'inherit',
                }} 
              />
              <span className="fw-medium" style={{ color: 'inherit' }}>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {isMobileOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-lg-none admin-sidebar-overlay"
          style={{ 
            zIndex: 1035,
            animation: 'fadeIn 0.3s ease',
          }}
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Sidebar;
