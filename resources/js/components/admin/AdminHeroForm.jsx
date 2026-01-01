import { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeading, faSave, faChartLine, 
  faFolderOpen, faImage, faExclamationTriangle 
} from '@fortawesome/free-solid-svg-icons';
import MediaPickerModal from './MediaPickerModal'; // Assuming it's in the same folder

export default function AdminHeroForm({ initialData, onRefresh }) {
  // --- MODAL STATE ---
  const [showMediaModal, setShowMediaModal] = useState(false);
  const [pickerMode, setPickerMode] = useState(null); // 'bg' or 'slider'

  const { data, setData, post, processing, isDirty } = useForm({
    page_name: 'home', 
    title: initialData?.title || '',
    description: initialData?.description || '',
    image_url: initialData?.image_url || '', 
    slider: Array.isArray(initialData?.slider_url) ? initialData.slider_url : [], 
    stats: (initialData?.stats && initialData.stats.length > 0) ? initialData.stats : [
      { label: 'Solar Installations', value: '700+' },
      { label: 'Total Capacity', value: '150MW+' },
      { label: 'Pipeline Projects', value: '100MW+' }
    ]
  });

  // Warn user before leaving if unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) { e.preventDefault(); e.returnValue = ''; }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  // --- MEDIA HANDLERS ---
  const openPicker = (mode) => {
    setPickerMode(mode);
    setShowMediaModal(true);
  };

  const handleMediaSelect = (url) => {
    if (pickerMode === 'bg') {
        setData('image_url', url); 
        setShowMediaModal(false); 
    } else if (pickerMode === 'slider') {
        setData('slider', [...data.slider, url]); 
        // Note: For slider, you might want to keep modal open or close it based on preference
    }
  };

  const handleStatChange = (index, field, value) => {
    const newStats = data.stats.map((stat, i) => {
        if (i === index) return { ...stat, [field]: value };
        return stat;
    });
    setData('stats', newStats);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/hero-section', {
        onSuccess: () => {
            onRefresh(); 
        },
    });
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="mb-5 position-relative">
      {isDirty && (
        <div className="position-fixed top-0 start-0 w-100 bg-warning text-dark p-3 text-center fw-bold shadow-lg d-flex align-items-center justify-content-center gap-2" 
             style={{ zIndex: 1060, animation: 'slideDown 0.3s ease' }}>
          <FontAwesomeIcon icon={faExclamationTriangle} />
          <span>You have unsaved changes in the Hero Section.</span>
        </div>
      )}

      <div className="d-flex align-items-center mb-4">
        <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
          <span className="fw-bold">1</span>
        </div>
        <div>
           <h4 className="fw-bold mb-0 text-dark">Hero Section</h4>
           <p className="text-muted small mb-0">Main banner and statistics</p>
        </div>
      </div>

      <div className="card border-0 shadow-sm rounded-4 mb-4">
        <div className="card-header bg-white p-4 border-bottom">
          <h5 className="mb-0 fw-bold text-success"><FontAwesomeIcon icon={faHeading} className="me-2"/> Title & Background</h5>
        </div>
        <div className="card-body p-4">
          <div className="row g-4">
            <div className="col-md-8">
              <div className="mb-3">
                  <label className="form-label fw-bold small text-muted">Heading</label>
                  <input type="text" value={data.title} onChange={e => setData('title', e.target.value)} className="form-control form-control-lg fw-bold" />
              </div>
              <div>
                  <label className="form-label fw-bold small text-muted">Description</label>
                  <textarea value={data.description} onChange={e => setData('description', e.target.value)} className="form-control" rows="4" />
              </div>
            </div>
            <div className="col-md-4">
              <label className="form-label fw-bold small text-muted">Background Image</label>
              <div className="border rounded-3 p-3 text-center bg-light position-relative" style={{ height: '200px' }}>
                  {data.image_url ? (
                      <img src={data.image_url} alt="BG" className="w-100 h-100 object-fit-cover rounded-2" />
                  ) : (
                      <div className="d-flex flex-column justify-content-center h-100 text-muted">
                          <FontAwesomeIcon icon={faImage} size="2x" className="mb-2"/> <small>No Image Selected</small>
                      </div>
                  )}
                  
                  <button 
                    type="button" 
                    className="btn btn-sm btn-light position-absolute bottom-0 end-0 m-2 shadow-sm border"
                    onClick={() => openPicker('bg')}
                  >
                    <FontAwesomeIcon icon={faFolderOpen} className="me-1"/> Change
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="card border-0 shadow-sm rounded-4 mb-4">
           <div className="card-header bg-white p-4 border-bottom">
             <h5 className="mb-0 fw-bold text-success"><FontAwesomeIcon icon={faChartLine} className="me-2"/> Statistics</h5>
           </div>
           <div className="card-body p-4">
              <div className="row g-3">
                 {data.stats.map((stat, index) => (
                    <div key={index} className="col-md-4">
                       <div className="p-3 border rounded bg-white h-100">
                          <div className="mb-3">
                              <label className="small fw-bold text-muted mb-1">Label</label>
                              <input type="text" className="form-control form-control-sm" value={stat.label} onChange={(e) => handleStatChange(index, 'label', e.target.value)} />
                          </div>
                          <div>
                              <label className="small fw-bold text-muted mb-1">Value</label>
                              <input type="text" className="form-control fw-bold text-success" value={stat.value} onChange={(e) => handleStatChange(index, 'value', e.target.value)} />
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

      <div className="d-flex justify-content-end">
           <button type="submit" disabled={processing || !isDirty} className={`btn px-5 rounded-pill ${isDirty ? 'btn-success' : 'btn-secondary'}`}><FontAwesomeIcon icon={faSave} className="me-2" /> {processing ? 'Saving Hero...' : 'Save Hero Changes'}</button>
      </div>
    </form>

    {/* Shared Modal */}
    <MediaPickerModal 
        isOpen={showMediaModal}
        onClose={() => setShowMediaModal(false)}
        onSelectImage={handleMediaSelect}
    />
    </>
  );
}