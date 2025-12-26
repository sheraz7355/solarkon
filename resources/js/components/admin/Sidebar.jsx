// 1. IMPORT FROM REACT-ROUTER-DOM (NOT INERTIA)
import { NavLink } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolderOpen,
  faCog,
  faBars,
  faTimes,
  faHome,
  faInfoCircle,
  faLightbulb,
  faDollarSign,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
// import webLogo from '../../assets/web-logo.webp'; // (Uncomment if needed)

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

  // ✅ CORRECTED PATHS: Removed '/admin' prefix
  // The Basename in AdminApp.jsx handles the prefix automatically.
  const menuItems = [
    { icon: faHome, label: 'Dashboard', path: '/dashboard' }, 
    { icon: faLightbulb, label: 'Home Page Content', path: '/home' }, // Renamed for clarity
    { icon: faInfoCircle, label: 'About Us', path: '/about-us' },
    { icon: faLightbulb, label: 'Solutions', path: '/solutions' },
    { icon: faFolderOpen, label: 'Projects', path: '/projects' },
    { icon: faDollarSign, label: 'Financing', path: '/financing' },
    { icon: faEnvelope, label: 'Contact', path: '/contact' },
    { icon: faBars, label: 'Media Manager', path: '/MediaManager' },
    { icon: faCog, label: 'Settings', path: '/settings' },
  ];

  return (
    <>
      <button
        className="btn d-lg-none position-fixed admin-toggle-btn"
        style={{ zIndex: 1050, top: '10px', left: '10px' }}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <FontAwesomeIcon icon={isMobileOpen ? faTimes : faBars} />
      </button>

      <aside
        className={`position-fixed top-0 start-0 h-100 bg-white shadow-lg ${
          isMobileOpen ? 'd-block' : 'd-none d-lg-block'
        }`}
        style={{
          width: '280px',
          zIndex: 1040,
          transform: isMobileOpen || isDesktop ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease',
        }}
      >
        <div className="p-4 border-bottom">
           <span className="fw-bold fs-5 text-success">SOLARKON ADMIN</span>
        </div>

        <nav className="p-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `d-flex align-items-center gap-3 p-3 mb-2 rounded-3 text-decoration-none ${
                  isActive ? 'bg-success text-white' : 'text-dark hover-bg-light'
                }`
              }
              onClick={() => setIsMobileOpen(false)}
            >
              <FontAwesomeIcon icon={item.icon} style={{ width: '20px' }} />
              <span className="fw-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-lg-none"
          style={{ zIndex: 1035 }}
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}

export default Sidebar;