import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faHeading, faFileAlt, faMapMarkerAlt, faCalendarAlt, faImage, faSave } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    location: '',
    date: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Project data:', formData);
    alert('Project added successfully!');
    // Reset form
    setFormData({
      category: '',
      title: '',
      description: '',
      location: '',
      date: '',
      image: ''
    });
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
            Add New Project
          </h2>
          <p className="mb-0 small small-md-normal" style={{ color: '#64748b', fontSize: '1.05rem', fontWeight: 500 }}>
            Fill in the details to add a new solar installation project
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
              {/* Category Field */}
              <div className="col-12 col-md-6 fade-up fade-delay-2">
                <label className="form-label fw-semibold mb-3 admin-form-label" style={{ color: '#1e293b', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FontAwesomeIcon icon={faFolderOpen} style={{ color: '#22C55E', fontSize: '1rem' }} />
                  Category
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
                    <FontAwesomeIcon icon={faFolderOpen} />
                  </div>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="form-control rounded-3 admin-form-input"
                    placeholder="e.g., On-Grid Solutions, Solar + Battery Backup"
                    style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '14px', paddingBottom: '14px', fontSize: '0.95rem', border: '2px solid #e2e8f0' }}
                    required
                  />
                  <span className="admin-input-focus-line"></span>
                </div>
              </div>

              {/* Title Field */}
              <div className="col-12 col-md-6 fade-up fade-delay-2">
                <label className="form-label fw-semibold mb-3 admin-form-label" style={{ color: '#1e293b', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FontAwesomeIcon icon={faHeading} style={{ color: '#22C55E', fontSize: '1rem' }} />
                  Project Title
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
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="form-control rounded-3 admin-form-input"
                    placeholder="e.g., Green Warehouse Initiative"
                    style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '14px', paddingBottom: '14px', fontSize: '0.95rem', border: '2px solid #e2e8f0' }}
                    required
                  />
                  <span className="admin-input-focus-line"></span>
                </div>
              </div>

              {/* Description Field */}
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
                    rows="4"
                    placeholder="Describe the project in detail..."
                    style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '14px', paddingBottom: '14px', fontSize: '0.95rem', border: '2px solid #e2e8f0', resize: 'vertical' }}
                    required
                  />
                  <span className="admin-input-focus-line"></span>
                </div>
              </div>

              {/* Location Field */}
              <div className="col-12 col-md-6 fade-up fade-delay-4">
                <label className="form-label fw-semibold mb-3 admin-form-label" style={{ color: '#1e293b', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#22C55E', fontSize: '1rem' }} />
                  Location
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
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="form-control rounded-3 admin-form-input"
                    placeholder="e.g., Dallas, Texas"
                    style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '14px', paddingBottom: '14px', fontSize: '0.95rem', border: '2px solid #e2e8f0' }}
                    required
                  />
                  <span className="admin-input-focus-line"></span>
                </div>
              </div>

              {/* Date Field */}
              <div className="col-12 col-md-6 fade-up fade-delay-4">
                <label className="form-label fw-semibold mb-3 admin-form-label" style={{ color: '#1e293b', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#22C55E', fontSize: '1rem' }} />
                  Date
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
                    <FontAwesomeIcon icon={faCalendarAlt} />
                  </div>
                  <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="form-control rounded-3 admin-form-input"
                    placeholder="e.g., June 2024"
                    style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '14px', paddingBottom: '14px', fontSize: '0.95rem', border: '2px solid #e2e8f0' }}
                    required
                  />
                  <span className="admin-input-focus-line"></span>
                </div>
              </div>

              {/* Image URL Field */}
              <div className="col-12 fade-up fade-delay-5">
                <label className="form-label fw-semibold mb-3 admin-form-label" style={{ color: '#1e293b', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FontAwesomeIcon icon={faImage} style={{ color: '#22C55E', fontSize: '1rem' }} />
                  Image URL
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
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    className="form-control rounded-3 admin-form-input"
                    placeholder="https://images.unsplash.com/photo-..."
                    style={{ paddingLeft: '48px', paddingRight: '16px', paddingTop: '14px', paddingBottom: '14px', fontSize: '0.95rem', border: '2px solid #e2e8f0' }}
                    required
                  />
                  <span className="admin-input-focus-line"></span>
                </div>
                {formData.image && (
                  <div className="mt-3">
                    <img 
                      src={formData.image} 
                      alt="Preview" 
                      style={{ 
                        maxWidth: '100%', 
                        height: '200px', 
                        objectFit: 'cover', 
                        borderRadius: '12px',
                        border: '2px solid #e2e8f0'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="col-12 fade-up fade-delay-6">
                <div className="d-flex justify-content-end gap-3">
                  <button
                    type="button"
                    className="btn btn-pill px-4"
                    style={{ 
                      backgroundColor: '#f3f4f6',
                      color: '#374151',
                      border: 'none',
                      fontWeight: 600,
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setFormData({
                      category: '',
                      title: '',
                      description: '',
                      location: '',
                      date: '',
                      image: ''
                    })}
                  >
                    Reset
                  </button>
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
                    Add Project
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

export default Projects;
