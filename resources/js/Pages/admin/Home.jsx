import { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminPartnersForm from "../../components/admin/AdminPartnersForm";
import AdminStepsForm from "../../components/admin/AdminStepsForm"; // Import new form
import { 
  faHeading, faImages, faSave, faTrash, faChartLine, 
  faUpload, faImage, faExclamationTriangle, faCheckCircle, 
  faRotateLeft, faSpinner, faBug 
} from '@fortawesome/free-solid-svg-icons';

// ==========================================
// 1. CHILD: HERO FORM COMPONENT
// ==========================================
function HeroForm({ initialData, onRefresh }) {
  const { data, setData, post, processing, isDirty, reset } = useForm({
    page_name: 'home', 
    title: initialData?.title || '',
    description: initialData?.description || '',
    image: null, 
    current_image: initialData?.image_url || null, 
    
    // 👇 FIX: Force it to be an array. If it's not an array, use [].
    slider: Array.isArray(initialData?.slider_url) ? initialData.slider_url : [], 
    
    stats: (initialData?.stats && initialData.stats.length > 0) ? initialData.stats : [
      { label: 'Solar Installations', value: '700+' },
      { label: 'Total Capacity', value: '150MW+' },
      { label: 'Pipeline Projects', value: '100MW+' }
    ]
});

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) { e.preventDefault(); e.returnValue = ''; }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  const getPreview = (fileOrUrl) => {
    if (!fileOrUrl) return null;
    return typeof fileOrUrl === 'string' ? fileOrUrl : URL.createObjectURL(fileOrUrl);
  };

  const handleSliderUpload = (e) => {
    setData('slider', [...data.slider, ...Array.from(e.target.files)]);
  };

  const removeSliderImage = (index) => {
    setData('slider', data.slider.filter((_, i) => i !== index));
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
        forceFormData: true, 
        onSuccess: () => {
            onRefresh(); 
        },
    });
  };

  return (
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
                  {(data.image || data.current_image) ? (
                      <img src={data.image ? getPreview(data.image) : getPreview(data.current_image)} alt="BG" className="w-100 h-100 object-fit-cover rounded-2" />
                  ) : (
                      <div className="d-flex flex-column justify-content-center h-100 text-muted">
                          <FontAwesomeIcon icon={faImage} size="2x" className="mb-2"/> <small>No Image</small>
                      </div>
                  )}
                  {data.image && <div className="position-absolute top-0 end-0 m-2 badge bg-warning text-dark shadow-sm">New</div>}
                  <input type="file" accept="image/*" className="position-absolute top-0 start-0 w-100 h-100 opacity-0" style={{ cursor: 'pointer' }} onChange={e => setData('image', e.target.files[0])} />
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-header bg-white p-4 border-bottom d-flex justify-content-between align-items-center">
            <h5 className="mb-0 fw-bold text-success"><FontAwesomeIcon icon={faImages} className="me-2"/> Financing Slider</h5>
            <label className="btn btn-sm btn-success text-white shadow-sm">
                <FontAwesomeIcon icon={faUpload} className="me-2"/> Add Images
                <input type="file" multiple accept="image/*" hidden onChange={handleSliderUpload} />
            </label>
          </div>
          <div className="card-body p-4">
            <div className="row g-3">
              {data.slider.map((item, index) => (
                <div key={index} className="col-6 col-md-3">
                  <div className="position-relative rounded-3 overflow-hidden border shadow-sm bg-white" style={{ height: '140px' }}>
                    <img src={getPreview(item)} alt="Slider" className="w-100 h-100 object-fit-cover" />
                    <button type="button" onClick={() => removeSliderImage(index)} className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2 rounded-circle" style={{ width: '30px', height: '30px', padding: 0 }}><FontAwesomeIcon icon={faTrash} size="sm"/></button>
                  </div>
                </div>
              ))}
              {data.slider.length === 0 && <div className="col-12 py-5 text-center text-muted border rounded bg-light border-dashed">No slider images found.</div>}
            </div>
          </div>
      </div>

      <div className="d-flex justify-content-end">
           {isDirty && <button type="button" onClick={() => reset()} className="btn btn-outline-danger rounded-pill px-4 me-2"><FontAwesomeIcon icon={faRotateLeft} className="me-2" /> Discard</button>}
           <button type="submit" disabled={processing || !isDirty} className={`btn px-5 rounded-pill ${isDirty ? 'btn-success' : 'btn-secondary'}`}><FontAwesomeIcon icon={faSave} className="me-2" /> {processing ? 'Saving Hero...' : 'Save Hero Changes'}</button>
      </div>
    </form>
  );
}

// ==========================================
// 2. PARENT: ADMIN HOME PAGE
// ==========================================

export default function AdminHome() {
  const [heroData, setHeroData] = useState(null);
  const [stepsData, setStepsData] = useState(null);
  const [logosData, setLogosData] = useState([]); // New state for logos
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0); 

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
        try {
            const [heroRes, stepsRes, logosRes] = await Promise.all([
                axios.get('/hero-sections'),
                axios.get('/work-data'),
                axios.get('/logos')
            ]);
            setHeroData(heroRes.data);
            setStepsData(stepsRes.data);
            setLogosData(logosRes.data);
            setLoading(false);
        } catch (error) {
            console.error("API Error:", error);
            setFetchError("Failed to load content data.");
            setLoading(false);
        }
    };
    fetchData();
  }, [refreshKey]); 

  if (loading) return <div className="vh-100 d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faSpinner} spin size="3x" className="text-success"/></div>;

  return (
    <div className="container-fluid px-4 py-5" style={{ background: '#f8faf9', minHeight: '100vh' }}>
        <div className="mb-4">
            <h2 className="fw-bold mb-1" style={{ color: '#14532d' }}>Website Content Manager</h2>
            <p className="text-muted mb-0">Manage the content for the Home Page.</p>
        </div>

        {/* 1. HERO SECTION */}
        <HeroForm key={`hero-${refreshKey}`} initialData={heroData || {}} onRefresh={() => setRefreshKey(k => k + 1)} />

        <hr className="my-5 opacity-25" />

        {/* 2. METHODOLOGY SECTION */}
        <div className="d-flex align-items-center mb-4">
            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}><span className="fw-bold">2</span></div>
            <div>
                <h4 className="fw-bold mb-0 text-dark">Methodology Steps</h4>
                <p className="text-muted small mb-0">The scrolling workflow section</p>
            </div>
        </div>
        <AdminStepsForm key={`steps-${refreshKey}`} initialData={stepsData} onRefresh={() => setRefreshKey(k => k + 1)} />

        <hr className="my-5 opacity-25" />

        {/* 3. PARTNER LOGOS SECTION */}
        <div className="d-flex align-items-center mb-4">
            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}><span className="fw-bold">3</span></div>
            <div>
                <h4 className="fw-bold mb-0 text-dark">Partner Logos</h4>
                <p className="text-muted small mb-0">Brands shown in the partners slider</p>
            </div>
        </div>
        <AdminPartnersForm key={`logos-${refreshKey}`} initialData={logosData} onRefresh={() => setRefreshKey(k => k + 1)} />
        
        <div style={{ height: '80px' }}></div>
    </div>
  );
}