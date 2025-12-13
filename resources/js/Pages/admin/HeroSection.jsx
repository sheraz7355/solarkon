import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTag, faHeading, faFileAlt, faImages, faChartLine, faSave, faTrash, faPlus, faCoins 
} from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
  const [formData, setFormData] = useState({
    badge: 'Nature Produces & We Deliver Solar System',
    title: 'Powering a Brighter, Greener Pakistan',
    description: 'Solarkon Private Limited is a premier solar energy solutions provider in Pakistan, known for delivering high-performance systems tailored to residential, commercial, industrial, and agricultural needs.',
    
    // Slider Images Array
    sliderImages: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509395283749-8d6f0c7e1d0b?auto=format&fit=crop&w=1000&q=80'
    ],

    // Financing Section (4 Cards)
    financing: [
      { title: 'Self Finance', desc: 'Complete ownership' },
      { title: 'Installment Plan', desc: 'Low upfront cost' },
      { title: 'Bank Financing', desc: 'Structured EMI plans' },
      { title: 'PPA', desc: 'No initial investment' }
    ],

    // Statistics Section
    stats: [
      { label: 'Solar Installations', displayValue: '700+', target: 700 },
      { label: 'Total Capacity', displayValue: '150MW+', target: 150 },
      { label: 'Pipeline Projects', displayValue: '100MW+', target: 100 },
    ]
  });

  // Handle Text Inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- Slider Image Logic ---
  const handleImageChange = (index, value) => {
    const newImages = [...formData.sliderImages];
    newImages[index] = value;
    setFormData(prev => ({ ...prev, sliderImages: newImages }));
  };

  const addImageField = () => {
    setFormData(prev => ({ ...prev, sliderImages: [...prev.sliderImages, ''] }));
  };

  const removeImageField = (index) => {
    const newImages = formData.sliderImages.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, sliderImages: newImages }));
  };

  // --- Financing Logic ---
  const handleFinanceChange = (index, field, value) => {
    const newFinancing = [...formData.financing];
    newFinancing[index][field] = value;
    setFormData(prev => ({ ...prev, financing: newFinancing }));
  };

  // --- Statistics Logic ---
  const handleStatChange = (index, field, value) => {
    const newStats = [...formData.stats];
    newStats[index][field] = field === 'target' ? parseInt(value) || 0 : value;
    setFormData(prev => ({ ...prev, stats: newStats }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saved Data:', formData);
    // Here you will eventually make an Inertia or Axios POST request to Laravel
    alert('Hero Section updated successfully!');
  };

  return (
    <div className="container-fluid px-2 px-sm-3 px-md-4 px-lg-5 py-3 py-sm-4 py-md-5" style={{ background: '#f8faf9', minHeight: '100vh' }}>
      
      {/* Page Header */}
      <div className="mb-4 mb-sm-5">
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(45, 80, 22, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)',
          padding: '2rem 2.5rem',
          borderRadius: '20px',
          border: '1px solid rgba(45, 80, 22, 0.1)',
        }}>
          <h2 className="fw-bold mb-2" style={{ color: '#14532d' }}>Hero Section Manager</h2>
          <p className="mb-0 text-muted">Edit the main banner, financing options, and statistics.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        
        {/* --- SECTION 1: MAIN CONTENT & SLIDER --- */}
        <div className="card border-0 shadow-lg rounded-4 mb-4" style={{ overflow: 'hidden' }}>
          <div className="card-header bg-white p-4 border-bottom">
            <h5 className="mb-0 fw-bold text-success">
              <FontAwesomeIcon icon={faHeading} className="me-2" /> Main Banner Content
            </h5>
          </div>
          <div className="card-body p-4">
            <div className="row g-4">
              {/* Badge */}
              <div className="col-12">
                <label className="form-label fw-bold small text-uppercase text-muted">Badge Text</label>
                <div className="input-group">
                  <span className="input-group-text bg-light"><FontAwesomeIcon icon={faTag} /></span>
                  <input type="text" name="badge" value={formData.badge} onChange={handleChange} className="form-control" />
                </div>
              </div>

              {/* Title */}
              <div className="col-12">
                <label className="form-label fw-bold small text-uppercase text-muted">Main Heading</label>
                <div className="input-group">
                  <span className="input-group-text bg-light"><FontAwesomeIcon icon={faHeading} /></span>
                  <input type="text" name="title" value={formData.title} onChange={handleChange} className="form-control fw-bold" />
                </div>
              </div>

              {/* Description */}
              <div className="col-12">
                <label className="form-label fw-bold small text-uppercase text-muted">Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} className="form-control" rows="3" />
              </div>

              {/* Slider Images */}
              <div className="col-12">
                <label className="form-label fw-bold small text-uppercase text-muted d-flex justify-content-between">
                  <span><FontAwesomeIcon icon={faImages} className="me-1" /> Background Slider Images</span>
                  <button type="button" onClick={addImageField} className="btn btn-sm btn-outline-success border-0 small py-0">
                    <FontAwesomeIcon icon={faPlus} /> Add Image
                  </button>
                </label>
                {formData.sliderImages.map((url, index) => (
                  <div key={index} className="d-flex gap-2 mb-2">
                    <input 
                      type="url" 
                      value={url} 
                      onChange={(e) => handleImageChange(index, e.target.value)} 
                      className="form-control form-control-sm"
                      placeholder="https://..." 
                    />
                    {formData.sliderImages.length > 1 && (
                      <button type="button" onClick={() => removeImageField(index)} className="btn btn-sm btn-outline-danger">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        

        {/* --- SECTION 3: STATISTICS --- */}
        <div className="card border-0 shadow-lg rounded-4 mb-4">
          <div className="card-header bg-white p-4 border-bottom">
            <h5 className="mb-0 fw-bold text-success">
              <FontAwesomeIcon icon={faChartLine} className="me-2" /> Statistics
            </h5>
          </div>
          <div className="card-body p-4">
            <div className="row g-3">
              {formData.stats.map((stat, index) => (
                <div key={index} className="col-md-4">
                  <div className="p-3 border rounded-3 text-center h-100">
                    <input 
                      type="text" 
                      className="form-control form-control-sm mb-2 text-center text-muted"
                      value={stat.label}
                      onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                      placeholder="Label" 
                    />
                    <input 
                      type="text" 
                      className="form-control form-control-lg mb-2 text-center fw-bold text-success"
                      value={stat.displayValue}
                      onChange={(e) => handleStatChange(index, 'displayValue', e.target.value)}
                      placeholder="e.g. 700+" 
                    />
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      <small className="text-muted">Anim Target:</small>
                      <input 
                        type="number" 
                        className="form-control form-control-sm w-50"
                        value={stat.target}
                        onChange={(e) => handleStatChange(index, 'target', e.target.value)}
                        placeholder="700" 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- SUBMIT --- */}
        <div className="d-flex justify-content-end mb-5">
          <button
            type="submit"
            className="btn btn-lg px-5 text-white"
            style={{ 
              backgroundColor: '#2D5016', 
              boxShadow: '0 4px 15px rgba(45, 80, 22, 0.4)' 
            }}
          >
            <FontAwesomeIcon icon={faSave} className="me-2" /> Save All Changes
          </button>
        </div>

      </form>
    </div>
  );
}

export default HeroSection;