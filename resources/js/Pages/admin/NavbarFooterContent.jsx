import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit, faLink, faHeading, faList, faFileAlt } from '@fortawesome/free-solid-svg-icons';

function NavbarFooterContent() {
  const [navbarItems, setNavbarItems] = useState([
    { id: 1, label: 'Home', path: '/' },
    { id: 2, label: 'About Us', path: '/about' },
    { id: 3, label: 'Project', path: '/profile' },
  ]);

  const [footerSections, setFooterSections] = useState([
    {
      id: 1,
      heading: 'Quick Links',
      links: ['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'],
    },
    {
      id: 2,
      heading: 'Contact Us',
      links: ['+1 (555) 123-4567', 'info@solarkon.com'],
    },
  ]);

  const [socialLinks, setSocialLinks] = useState([
    { id: 1, platform: 'Facebook', url: 'https://facebook.com/solarkon' },
    { id: 2, platform: 'Twitter', url: 'https://twitter.com/solarkon' },
    { id: 3, platform: 'Instagram', url: 'https://instagram.com/solarkon' },
    { id: 4, platform: 'LinkedIn', url: 'https://linkedin.com/company/solarkon' },
  ]);

  const [footerDescription, setFooterDescription] = useState(
    'SOLARKON is a leading provider of solar energy solutions, helping homeowners, businesses, and communities transition to clean, renewable power.'
  );

  const removeNavbarItem = (id) => {
    setNavbarItems(navbarItems.filter((item) => item.id !== id));
  };

  const addFooterSection = () => {
    const newId = Math.max(...footerSections.map((s) => s.id), 0) + 1;
    setFooterSections([
      ...footerSections,
      { id: newId, heading: 'New Section', links: [] },
    ]);
  };

  const removeFooterSection = (id) => {
    setFooterSections(footerSections.filter((section) => section.id !== id));
  };

  const addSocialLink = () => {
    const newId = Math.max(...socialLinks.map((l) => l.id), 0) + 1;
    setSocialLinks([...socialLinks, { id: newId, platform: 'New Platform', url: '' }]);
  };

  const removeSocialLink = (id) => {
    setSocialLinks(socialLinks.filter((link) => link.id !== id));
  };

  return (
    <div className="container-fluid px-2 px-sm-3 px-md-4 px-lg-5 py-3 py-sm-4 py-md-5" style={{ background: '#f8faf9', minHeight: '100vh', width: '100%' }}>
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
            Navbar & Footer Content Management
          </h2>
          <p className="mb-0 small small-md-normal" style={{ color: '#64748b', fontSize: '1.05rem', fontWeight: 500 }}>
            Manage the navigation menu and footer content for your user-facing website
          </p>
        </div>
      </div>

      {/* Navbar Management */}
      <div
        className="rounded-4 p-4 p-md-5 surface-card mb-4 mb-sm-5 dashboard-card-enhanced fade-up fade-delay-1"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(236, 253, 245, 0.9) 50%, rgba(209, 250, 229, 0.9) 100%)',
          border: '2px solid rgba(34, 197, 94, 0.3)',
          boxShadow: '0 12px 48px rgba(34, 197, 94, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
          overflow: 'hidden',
          position: 'relative',
          backdropFilter: 'blur(10px)'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '5px',
          background: 'linear-gradient(90deg, #2D5016 0%, #22C55E 100%)'
        }}></div>
        <div className="mb-4 mb-sm-5">
          <h3 className="fw-bold mb-0 chart-title" style={{ 
            color: '#1e293b',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{
              width: '4px',
              height: '24px',
              background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
              borderRadius: '2px'
            }}></span>
            Navbar Menu Items
          </h3>
        </div>

        <div className="row g-3 g-sm-4">
          {navbarItems.map((item, idx) => (
            <div key={item.id} className={`col-md-6 fade-up fade-delay-${Math.min(idx + 2, 4)}`}>
              <div
                className="p-3 p-sm-4 rounded-3 border admin-content-item d-flex align-items-center justify-content-between"
                style={{ backgroundColor: '#ffffff', borderColor: '#e5e7eb' }}
              >
                <div className="flex-grow-1 me-3" style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#94a3b8',
                    zIndex: 2,
                    pointerEvents: 'none',
                    fontSize: '0.85rem'
                  }}>
                    <FontAwesomeIcon icon={faHeading} />
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-sm rounded-3 admin-form-input"
                    defaultValue={item.label}
                    placeholder="Menu Label"
                    style={{ paddingLeft: '36px', paddingRight: '12px', paddingTop: '10px', paddingBottom: '10px', fontSize: '0.875rem', border: '2px solid #e2e8f0' }}
                  />
                </div>
                <button
                  className="btn btn-sm rounded-pill project-action-btn-enhanced"
                  style={{ backgroundColor: '#FEE2E2', color: '#DC2626', border: 'none' }}
                  onClick={() => removeNavbarItem(item.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Sections */}
      <div
        className="rounded-4 p-4 p-md-5 surface-card mb-4 mb-sm-5 dashboard-card-enhanced fade-up fade-delay-2"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(236, 253, 245, 0.9) 50%, rgba(209, 250, 229, 0.9) 100%)',
          border: '2px solid rgba(34, 197, 94, 0.3)',
          boxShadow: '0 12px 48px rgba(34, 197, 94, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '5px',
          background: 'linear-gradient(90deg, #2D5016 0%, #22C55E 100%)'
        }}></div>
        <div className="d-flex align-items-center justify-content-between mb-4 mb-sm-5">
          <h3 className="fw-bold mb-0 chart-title" style={{ 
            color: '#1e293b',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{
              width: '4px',
              height: '24px',
              background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
              borderRadius: '2px'
            }}></span>
            Footer Sections
          </h3>
          <button
            className="btn btn-pill d-inline-flex align-items-center gap-2 admin-btn-primary"
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
            onClick={addFooterSection}
          >
            <FontAwesomeIcon icon={faPlus} />
            Add Section
          </button>
        </div>

        <div className="row g-4">
          {footerSections.map((section, idx) => (
            <div key={section.id} className={`col-md-6 fade-up fade-delay-${Math.min(idx + 3, 4)}`}>
              <div
                className="p-4 rounded-3 border admin-content-item"
                style={{ backgroundColor: '#ffffff', borderColor: '#e5e7eb' }}
              >
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div style={{ position: 'relative', maxWidth: '200px', flex: 1 }}>
                    <div style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#94a3b8',
                      zIndex: 2,
                      pointerEvents: 'none',
                      fontSize: '0.85rem'
                    }}>
                      <FontAwesomeIcon icon={faHeading} />
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-sm fw-bold rounded-3 admin-form-input"
                      defaultValue={section.heading}
                      placeholder="Section Heading"
                      style={{ paddingLeft: '36px', paddingRight: '12px', paddingTop: '10px', paddingBottom: '10px', fontSize: '0.875rem', border: '2px solid #e2e8f0' }}
                    />
                  </div>
                  <button
                    className="btn btn-sm rounded-pill project-action-btn-enhanced"
                    style={{ backgroundColor: '#FEE2E2', color: '#DC2626', border: 'none' }}
                    onClick={() => removeFooterSection(section.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
                <div className="d-flex flex-column gap-2">
                  {section.links.map((link, linkIdx) => (
                    <div key={linkIdx} style={{ position: 'relative' }}>
                      <div style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#94a3b8',
                        zIndex: 2,
                        pointerEvents: 'none',
                        fontSize: '0.85rem'
                      }}>
                        <FontAwesomeIcon icon={faList} />
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-sm rounded-3 admin-form-input"
                        defaultValue={link}
                        placeholder="Link text"
                        style={{ paddingLeft: '36px', paddingRight: '12px', paddingTop: '10px', paddingBottom: '10px', fontSize: '0.875rem', border: '2px solid #e2e8f0' }}
                      />
                    </div>
                  ))}
                  <button
                    className="btn btn-sm rounded-pill mt-2 project-action-btn-enhanced"
                    style={{ backgroundColor: '#E1F6E8', color: '#2D5016', border: 'none' }}
                    onClick={() => {
                      const updated = footerSections.map((s) =>
                        s.id === section.id
                          ? { ...s, links: [...s.links, 'New Link'] }
                          : s
                      );
                      setFooterSections(updated);
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} className="me-2" />
                    Add Link
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Description */}
      <div
        className="rounded-4 p-4 p-md-5 surface-card mb-4 mb-sm-5 dashboard-card-enhanced fade-up fade-delay-3"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(236, 253, 245, 0.9) 50%, rgba(209, 250, 229, 0.9) 100%)',
          border: '2px solid rgba(34, 197, 94, 0.3)',
          boxShadow: '0 12px 48px rgba(34, 197, 94, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '5px',
          background: 'linear-gradient(90deg, #2D5016 0%, #22C55E 100%)'
        }}></div>
        <h3 className="fw-bold mb-3 mb-sm-4 chart-title" style={{ 
          color: '#1e293b',
          fontSize: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span style={{
            width: '4px',
            height: '24px',
            background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
            borderRadius: '2px'
          }}></span>
          Footer Description
        </h3>
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            left: '16px',
            top: '20px',
            color: '#94a3b8',
            zIndex: 2,
            pointerEvents: 'none',
            fontSize: '0.9rem'
          }}>
            <FontAwesomeIcon icon={faFileAlt} />
          </div>
          <textarea
            className="form-control rounded-3 admin-form-input"
            rows="3"
            defaultValue={footerDescription}
            onChange={(e) => setFooterDescription(e.target.value)}
            style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '14px', paddingBottom: '14px', fontSize: '0.95rem', border: '2px solid #e2e8f0', resize: 'vertical' }}
          />
          <span className="admin-input-focus-line"></span>
        </div>
      </div>

      {/* Social Links */}
      <div
        className="rounded-4 p-4 p-md-5 surface-card mb-4 mb-sm-5 dashboard-card-enhanced fade-up fade-delay-3"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(236, 253, 245, 0.9) 50%, rgba(209, 250, 229, 0.9) 100%)',
          border: '2px solid rgba(34, 197, 94, 0.3)',
          boxShadow: '0 12px 48px rgba(34, 197, 94, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '5px',
          background: 'linear-gradient(90deg, #2D5016 0%, #22C55E 100%)'
        }}></div>
        <div className="d-flex align-items-center justify-content-between mb-4 mb-sm-5">
          <h3 className="fw-bold mb-0 chart-title" style={{ 
            color: '#1e293b',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{
              width: '4px',
              height: '24px',
              background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
              borderRadius: '2px'
            }}></span>
            Social Media Links
          </h3>
          <button
            className="btn btn-pill d-inline-flex align-items-center gap-2 admin-btn-primary"
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
            onClick={addSocialLink}
          >
            <FontAwesomeIcon icon={faPlus} />
            Add Link
          </button>
        </div>

        <div className="row g-3 g-sm-4">
          {socialLinks.map((link, idx) => (
            <div key={link.id} className={`col-md-6 fade-up fade-delay-${Math.min(idx + 4, 4)}`}>
              <div
                className="p-3 p-sm-4 rounded-3 border admin-content-item d-flex align-items-center gap-3"
                style={{ backgroundColor: '#ffffff', borderColor: '#e5e7eb' }}
              >
                <div style={{ position: 'relative', flex: '0 0 150px' }}>
                  <div style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#94a3b8',
                    zIndex: 2,
                    pointerEvents: 'none',
                    fontSize: '0.85rem'
                  }}>
                    <FontAwesomeIcon icon={faHeading} />
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-sm rounded-3 admin-form-input"
                    defaultValue={link.platform}
                    placeholder="Platform name"
                    style={{ paddingLeft: '36px', paddingRight: '12px', paddingTop: '10px', paddingBottom: '10px', fontSize: '0.875rem', border: '2px solid #e2e8f0' }}
                  />
                </div>
                <div style={{ position: 'relative', flex: '1' }}>
                  <div style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#94a3b8',
                    zIndex: 2,
                    pointerEvents: 'none',
                    fontSize: '0.85rem'
                  }}>
                    <FontAwesomeIcon icon={faLink} />
                  </div>
                  <input
                    type="url"
                    className="form-control form-control-sm rounded-3 flex-grow-1 admin-form-input"
                    defaultValue={link.url}
                    placeholder="https://..."
                    style={{ paddingLeft: '36px', paddingRight: '12px', paddingTop: '10px', paddingBottom: '10px', fontSize: '0.875rem', border: '2px solid #e2e8f0' }}
                  />
                </div>
                <button
                  className="btn btn-sm rounded-pill project-action-btn-enhanced"
                  style={{ backgroundColor: '#FEE2E2', color: '#DC2626', border: 'none' }}
                  onClick={() => removeSocialLink(link.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="d-flex justify-content-end mt-4 fade-up fade-delay-4">
        <button
          className="btn btn-pill px-5 admin-btn-primary"
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
          Save All Changes
        </button>
      </div>
    </div>
  );
}

export default NavbarFooterContent;

