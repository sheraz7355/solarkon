import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faList, faDollarSign } from '@fortawesome/free-solid-svg-icons';

function AdminFinancing() {
  const [formData, setFormData] = useState({
    heroTitle: 'Flexible Financing Solutions',
    heroSubtitle: 'Choose the financing option that best fits your needs and budget. We offer multiple ways to make solar energy accessible.',
    financingOptions: [
      {
        title: 'Client Self Finance',
        description: 'Complete ownership, no interest, max long-term return, full government incentives.',
        details: [
          'Full system ownership from day one',
          'No interest payments',
          'Maximum long-term return on investment',
          'Eligible for all government incentives and tax benefits',
          'Complete control over your solar system',
        ],
      },
      {
        title: 'Solar on Installment',
        description: 'Low upfront cost, monthly payments customized to budget, no bank involvement, faster approval.',
        details: [
          'Minimal upfront investment required',
          'Flexible monthly payment plans',
          'Customized to your budget',
          'No bank involvement needed',
          'Fast approval process',
          'Ownership transfers after final payment',
        ],
      },
      {
        title: 'Bank-Financed',
        description: 'Partnered with reputable banks, structured EMI plans, suitable for medium to large setups.',
        details: [
          'Partnerships with leading banks',
          'Structured EMI plans',
          'Competitive interest rates',
          'Suitable for medium to large installations',
          'Flexible repayment terms',
          'Professional financial guidance',
        ],
      },
      {
        title: 'Power Purchase Agreement (PPA)',
        description: 'No initial investment required. Pay only for electricity consumed. System owned/operated by provider. Immediate cost savings.',
        details: [
          'Zero upfront investment',
          'Pay only for electricity you use',
          'System owned and maintained by provider',
          'Immediate cost savings',
          'No maintenance responsibilities',
          'Flexible contract terms',
        ],
      },
    ],
  });

  const handleChange = (e, section, index = null) => {
    const { name, value } = e.target;
    if (section === 'hero') {
      setFormData({ ...formData, [name]: value });
    } else if (section === 'financing' && index !== null) {
      const updatedOptions = [...formData.financingOptions];
      updatedOptions[index] = { ...updatedOptions[index], [name]: value };
      setFormData({ ...formData, financingOptions: updatedOptions });
    }
  };

  const handleDetailChange = (optionIndex, detailIndex, value) => {
    const updatedOptions = [...formData.financingOptions];
    updatedOptions[optionIndex].details[detailIndex] = value;
    setFormData({ ...formData, financingOptions: updatedOptions });
  };

  const handleAddDetail = (optionIndex) => {
    const updatedOptions = [...formData.financingOptions];
    updatedOptions[optionIndex].details.push('');
    setFormData({ ...formData, financingOptions: updatedOptions });
  };

  const handleRemoveDetail = (optionIndex, detailIndex) => {
    const updatedOptions = [...formData.financingOptions];
    updatedOptions[optionIndex].details.splice(detailIndex, 1);
    setFormData({ ...formData, financingOptions: updatedOptions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Financing data:', formData);
    alert('Financing content saved successfully!');
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
            Financing Page Content
          </h2>
          <p className="mb-0 small small-md-normal" style={{ color: '#64748b', fontSize: '1.05rem', fontWeight: 500 }}>Manage content for the Financing page</p>
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

        {/* Financing Options */}
        {formData.financingOptions.map((option, index) => (
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
              <FontAwesomeIcon icon={faDollarSign} style={{ color: '#22C55E', marginRight: '0.5rem' }} />
              Option {index + 1}: {option.title}
            </h3>
            <div className="row g-4">
              <div className="col-12">
                <label className="form-label fw-semibold mb-3 admin-form-label">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  className="form-control rounded-3 admin-form-input"
                  value={option.title}
                  onChange={(e) => handleChange(e, 'financing', index)}
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
                  rows="3"
                  value={option.description}
                  onChange={(e) => handleChange(e, 'financing', index)}
                  style={{ padding: '14px 16px', fontSize: '0.95rem', resize: 'vertical' }}
                />
              </div>
              <div className="col-12">
                <label className="form-label fw-semibold mb-3 admin-form-label">
                  <FontAwesomeIcon icon={faList} style={{ color: '#22C55E', marginRight: '0.5rem' }} />
                  Key Features / Details
                </label>
                {option.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="d-flex gap-2 mb-2">
                    <input
                      type="text"
                      className="form-control rounded-3 admin-form-input"
                      value={detail}
                      onChange={(e) => handleDetailChange(index, detailIndex, e.target.value)}
                      style={{ padding: '14px 16px', fontSize: '0.95rem' }}
                    />
                    <button
                      type="button"
                      className="btn btn-danger rounded-3"
                      onClick={() => handleRemoveDetail(index, detailIndex)}
                      style={{ minWidth: '50px' }}
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-outline-success rounded-3 mt-2"
                  onClick={() => handleAddDetail(index)}
                >
                  + Add Detail
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

export default AdminFinancing;
