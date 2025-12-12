import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faImage, faList } from '@fortawesome/free-solid-svg-icons';

function AdminSolutions() {
  const [formData, setFormData] = useState({
    heroTitle: 'Solar Solutions For Every Need',
    heroSubtitle: 'From residential homes to large industrial facilities, we provide tailored solar energy solutions that meet your specific requirements.',
    solutions: [
      {
        title: 'Residential Solutions',
        description: 'Supported by a skilled team of engineers and technical specialists across Pakistan, committed to lowering electricity costs and delivering top-tier, cutting-edge solutions for Pakistani communities.',
        image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80',
        features: [
          'Customized system design for your home',
          'Net metering assistance',
          'Long-term warranties',
          'Professional installation',
        ],
      },
      {
        title: 'Commercial Solutions',
        description: 'Empower your workplace with efficient solar power systems, effectively replacing high-cost conventional energy.',
        image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80',
        features: [
          'Reduced operational costs',
          'Scalable systems for businesses',
          'ROI optimization',
          'Maintenance support',
        ],
      },
      {
        title: 'Industrial Solutions',
        description: 'From factories to warehouses, high-capacity solar systems designed for heavy-load usage. Delivering stable energy and operational savings without compromising performance.',
        image: 'https://images.unsplash.com/photo-1509395283749-8d6f0c7e1d0b?auto=format&fit=crop&w=1200&q=80',
        features: [
          'High-capacity systems',
          'Heavy-load optimization',
          '24/7 power supply',
          'Cost-effective operations',
        ],
      },
      {
        title: 'Agricultural Solutions',
        description: 'Transition your farm to dependable, off-grid solar energy ensuring steady power for irrigation, pumping, and operations while slashing expenses. Boost yield and income with clean, cost-effective solutions.',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
        features: [
          'Off-grid solutions',
          'Irrigation system power',
          'Pump operation support',
          'Increased farm productivity',
        ],
      },
    ],
  });

  const handleChange = (e, section, index = null) => {
    const { name, value } = e.target;
    if (section === 'hero') {
      setFormData({ ...formData, [name]: value });
    } else if (section === 'solution' && index !== null) {
      const updatedSolutions = [...formData.solutions];
      updatedSolutions[index] = { ...updatedSolutions[index], [name]: value };
      setFormData({ ...formData, solutions: updatedSolutions });
    }
  };

  const handleFeatureChange = (solutionIndex, featureIndex, value) => {
    const updatedSolutions = [...formData.solutions];
    updatedSolutions[solutionIndex].features[featureIndex] = value;
    setFormData({ ...formData, solutions: updatedSolutions });
  };

  const handleAddFeature = (solutionIndex) => {
    const updatedSolutions = [...formData.solutions];
    updatedSolutions[solutionIndex].features.push('');
    setFormData({ ...formData, solutions: updatedSolutions });
  };

  const handleRemoveFeature = (solutionIndex, featureIndex) => {
    const updatedSolutions = [...formData.solutions];
    updatedSolutions[solutionIndex].features.splice(featureIndex, 1);
    setFormData({ ...formData, solutions: updatedSolutions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Solutions data:', formData);
    alert('Solutions content saved successfully!');
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
            Solutions Page Content
          </h2>
          <p className="mb-0 small small-md-normal" style={{ color: '#64748b', fontSize: '1.05rem', fontWeight: 500 }}>Manage content for the Solutions page</p>
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

        {/* Solutions Sections */}
        {formData.solutions.map((solution, index) => (
          <div key={index} className="rounded-4 p-4 p-md-5 surface-card admin-form-card fade-up fade-delay-2 mb-4" style={{
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
            <h3 className="fw-bold mb-4 chart-title position-relative" style={{ fontSize: '1.5rem' }}>
              Solution {index + 1}: {solution.title}
            </h3>
            <div className="row g-4">
              <div className="col-12">
                <label className="form-label fw-semibold mb-3 admin-form-label">
                  <FontAwesomeIcon icon={faLightbulb} style={{ color: '#22C55E', marginRight: '0.5rem' }} />
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  className="form-control rounded-3 admin-form-input"
                  value={solution.title}
                  onChange={(e) => handleChange(e, 'solution', index)}
                  style={{ padding: '14px 16px', fontSize: '0.95rem' }}
                />
              </div>
              <div className="col-12">
                <label className="form-label fw-semibold mb-3 admin-form-label">
                  Description
                </label>
                <textarea
                  name="description"
                  className="form-control rounded-3 admin-form-input"
                  rows="4"
                  value={solution.description}
                  onChange={(e) => handleChange(e, 'solution', index)}
                  style={{ padding: '14px 16px', fontSize: '0.95rem', resize: 'vertical' }}
                />
              </div>
              <div className="col-12">
                <label className="form-label fw-semibold mb-3 admin-form-label">
                  <FontAwesomeIcon icon={faImage} style={{ color: '#22C55E', marginRight: '0.5rem' }} />
                  Image URL
                </label>
                <input
                  type="url"
                  name="image"
                  className="form-control rounded-3 admin-form-input"
                  value={solution.image}
                  onChange={(e) => handleChange(e, 'solution', index)}
                  style={{ padding: '14px 16px', fontSize: '0.95rem' }}
                />
                {solution.image && (
                  <div className="mt-3">
                    <img src={solution.image} alt={solution.title} style={{ maxWidth: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' }} />
                  </div>
                )}
              </div>
              <div className="col-12">
                <label className="form-label fw-semibold mb-3 admin-form-label">
                  <FontAwesomeIcon icon={faList} style={{ color: '#22C55E', marginRight: '0.5rem' }} />
                  Features
                </label>
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="d-flex gap-2 mb-2">
                    <input
                      type="text"
                      className="form-control rounded-3 admin-form-input"
                      value={feature}
                      onChange={(e) => handleFeatureChange(index, featureIndex, e.target.value)}
                      style={{ padding: '14px 16px', fontSize: '0.95rem' }}
                    />
                    <button
                      type="button"
                      className="btn btn-danger rounded-3"
                      onClick={() => handleRemoveFeature(index, featureIndex)}
                      style={{ minWidth: '50px' }}
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-outline-success rounded-3 mt-2"
                  onClick={() => handleAddFeature(index)}
                >
                  + Add Feature
                </button>
              </div>
            </div>
          </div>
        ))}

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

export default AdminSolutions;
