import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faFolderOpen, faSave } from '@fortawesome/free-solid-svg-icons';
import MediaPickerModal from './MediaPickerModal';

export default function AdminServicesForm() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  // 1. STATE
  const [formData, setFormData] = useState({
    heading_green: '',
    heading_dark: '',
    description: '',
    services: [
        { title: '', image: '' }, { title: '', image: '' },
        { title: '', image: '' }, { title: '', image: '' }
    ]
  });

  const [initialData, setInitialData] = useState(null);

  // 2. DIRTY CHECK
  const isDirty = JSON.stringify(formData) !== JSON.stringify(initialData);

  // 3. FETCH DATA
  useEffect(() => {
    axios.get('/homeServices') 
      .then(res => {
          const data = res.data;
          
          const mappedData = {
            heading_green: data.heading_green || '',
            heading_dark: data.heading_dark || '',
            description: data.description || '',
            services: (data.services && data.services.length > 0) 
                ? data.services 
                : [
                    { title: '', image: '' }, { title: '', image: '' }, 
                    { title: '', image: '' }, { title: '', image: '' }
                  ]
          };

          setFormData(mappedData);
          // FIX 1: Create a Deep Copy for initialData using JSON parse/stringify
          // This breaks the reference link so initialData doesn't change when you type
          setInitialData(JSON.parse(JSON.stringify(mappedData))); 
          
          setLoading(false);
      })
      .catch(err => {
          console.error("Failed to fetch services:", err);
          setLoading(false);
      });
  }, []);

  // Handle Text Change
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // FIX 2: Handle Service Item Change (Immutable Update)
  const handleServiceChange = (index, field, value) => {
    setFormData(prev => {
        // Create a new array, and create a NEW object for the specific item being changed
        const newServices = prev.services.map((item, i) => {
            if (i === index) {
                return { ...item, [field]: value }; // New object reference
            }
            return item; // Keep existing reference for others
        });

        return { ...prev, services: newServices };
    });
  };

  const openPicker = (index) => {
    setActiveImageIndex(index);
    setShowModal(true);
  };

  const handleImageSelect = (url) => {
    handleServiceChange(activeImageIndex, 'image', url);
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isDirty) return; 

    setSaving(true);
    try {
      await axios.post('/homeServices', formData);
      // Update initialData to match the new saved state (Deep Copy again)
      setInitialData(JSON.parse(JSON.stringify(formData))); 
      alert('Services saved successfully!');
    } catch (err) {
      console.error(err);
      alert('Error saving data');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-5 text-center"><FontAwesomeIcon icon={faSpinner} spin /></div>;

  return (
    <div className="card border-0 shadow-sm rounded-4 mb-5">
      <div className="card-header bg-white p-4 border-bottom d-flex justify-content-between align-items-center">
        <h5 className="mb-0 fw-bold text-success">Services Showcase Section</h5>
        {isDirty && <span className="badge bg-warning text-dark">Unsaved Changes</span>}
      </div>
      
      <div className="card-body p-4">
        <form onSubmit={handleSubmit}>
          
          {/* Main Text */}
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label className="form-label small fw-bold text-muted">Green Heading</label>
              <input type="text" className="form-control" value={formData.heading_green} onChange={e => handleChange('heading_green', e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label small fw-bold text-muted">Dark Sub-Heading</label>
              <input type="text" className="form-control" value={formData.heading_dark} onChange={e => handleChange('heading_dark', e.target.value)} />
            </div>
            <div className="col-12">
              <label className="form-label small fw-bold text-muted">Description</label>
              <textarea className="form-control" rows="3" value={formData.description} onChange={e => handleChange('description', e.target.value)} />
            </div>
          </div>

          <hr className="my-4" />

          {/* 4 Cards Grid */}
          <h6 className="fw-bold mb-3 text-muted">Service Cards (4 Columns)</h6>
          <div className="row g-3">
            {formData.services.map((service, index) => (
              <div className="col-md-3" key={index}>
                <div className="p-3 border rounded bg-light text-center h-100">
                  <div className="mb-2 position-relative overflow-hidden rounded bg-white border" style={{ height: '150px' }}>
                    {service.image ? (
                        <img src={service.image} className="w-100 h-100 object-fit-cover" alt="Srv" />
                    ) : (
                        <div className="d-flex align-items-center justify-content-center h-100 text-muted small">No Image</div>
                    )}
                    <button type="button" className="btn btn-sm btn-dark position-absolute bottom-0 end-0 m-2" onClick={() => openPicker(index)}>
                        <FontAwesomeIcon icon={faFolderOpen} />
                    </button>
                  </div>
                  <input 
                    type="text" 
                    className="form-control form-control-sm text-center fw-bold" 
                    placeholder="Service Title"
                    value={service.title}
                    onChange={e => handleServiceChange(index, 'title', e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-end mt-4">
            <button 
                type="submit" 
                disabled={saving || !isDirty} 
                className={`btn px-5 rounded-pill ${isDirty ? 'btn-success' : 'btn-secondary'}`}
            >
                <FontAwesomeIcon icon={faSave} className="me-2" />
                {saving ? 'Saving...' : 'Save Services'}
            </button>
          </div>
        </form>
      </div>

      <MediaPickerModal isOpen={showModal} onClose={() => setShowModal(false)} onSelectImage={handleImageSelect} />
    </div>
  );
}