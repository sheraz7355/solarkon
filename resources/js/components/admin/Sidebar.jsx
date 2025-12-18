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
import webLogo from '../../assets/web-logo.webp'; // Check your extension (.svg or .webp)

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

  // 2. PATHS MUST MATCH YOUR ADMIN ROUTES
  // Since your BrowserRouter has basename="/admin", 
  // you can use relative paths OR full paths. React Router v6 is smart enough to handle "/admin/..."
  const menuItems = [
    { icon: faHome, label: 'Dashboard', path: '/admin/dashboard' }, // Changed label to Dashboard
    { icon: faLightbulb, label: 'Home', path: '/admin/home' },
    { icon: faInfoCircle, label: 'About Us', path: '/admin/about-us' },
    { icon: faLightbulb, label: 'Solutions', path: '/admin/solutions' },
    { icon: faFolderOpen, label: 'Projects', path: '/admin/projects' },
    { icon: faDollarSign, label: 'Financing', path: '/admin/financing' },
    { icon: faEnvelope, label: 'Contact', path: '/admin/contact' },
    { icon: faBars, label: 'Navbar & Footer', path: '/admin/navbar-footer' },
    { icon: faCog, label: 'Settings', path: '/admin/settings' },
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
           {/* LOGO HERE */}
           <span className="fw-bold">SOLARKON ADMIN</span>
        </div>

        <nav className="p-3">
          {menuItems.map((item) => (
            // 3. USE NAVLINK (React Router) instead of Link (Inertia)
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `d-flex align-items-center gap-3 p-3 mb-2 rounded-3 text-decoration-none ${
                  isActive ? 'bg-success text-white' : 'text-dark'
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