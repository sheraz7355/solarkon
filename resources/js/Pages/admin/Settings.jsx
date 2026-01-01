import { useState, useEffect } from 'react';
import axios from 'axios'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeading, faAlignLeft, faMapMarkerAlt, faPhone, faEnvelope, 
  faSave, faSpinner, faExclamationTriangle 
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Settings() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  // 1. STATE: Form Data
  const [formData, setFormData] = useState({
    site_name: '',
    footer_description: '',
    address: '',
    phone: '',
    email: '',
    facebook_url: '',
    twitter_url: '',
    instagram_url: '',
    linkedin_url: ''
  });

  // 2. STATE: Original Data (Snapshot)
  const [initialData, setInitialData] = useState(null);

  // 3. LOGIC: Check if Dirty
  const isDirty = JSON.stringify(formData) !== JSON.stringify(initialData);

  // 4. FETCH DATA
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await axios.get('/settings');
        
        // Sanitize data: Ensure nulls become empty strings to prevent React warnings
        const cleanData = {
            site_name: res.data.site_name || '',
            footer_description: res.data.footer_description || '',
            address: res.data.address || '',
            phone: res.data.phone || '',
            email: res.data.email || '',
            facebook_url: res.data.facebook_url || '',
            twitter_url: res.data.twitter_url || '',
            instagram_url: res.data.instagram_url || '',
            linkedin_url: res.data.linkedin_url || ''
        };

        setFormData(cleanData);
        // Create Deep Copy for comparison
        setInitialData(JSON.parse(JSON.stringify(cleanData)));
      } catch (err) {
        console.error("Failed to load settings", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  // 5. HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 6. SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isDirty) return; // Stop if no changes

    setSaving(true);
    try {
      await axios.post('/settings', formData);
      // Update the snapshot to match the new saved data
      setInitialData(JSON.parse(JSON.stringify(formData))); 
      alert('Settings saved successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to save settings.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="vh-100 d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faSpinner} spin size="2x" className="text-success" /></div>;

  return (
    <div className="container-fluid px-4 py-5" style={{ background: '#f8faf9', minHeight: '100vh' }}>
      
      {/* Header with Dirty Indicator */}
      <div className="mb-5 d-flex align-items-center justify-content-between">
        <div>
            <h2 className="fw-bold mb-2" style={{ color: '#14532d' }}>Footer & Contact Settings</h2>
            <p className="text-muted mb-0">Manage the content displayed in the website footer.</p>
        </div>
        {isDirty && (
            <div className="alert alert-warning py-2 px-3 mb-0 fw-bold shadow-sm d-flex align-items-center">
                <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
                Unsaved Changes
            </div>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        
        {/* 1. General Footer Info */}
        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-header bg-white p-4 border-bottom">
            <h5 className="mb-0 fw-bold text-success">General Information</h5>
          </div>
          <div className="card-body p-4">
            <div className="row g-4">
              <div className="col-md-6">
                <label className="form-label fw-bold small text-muted">Site Name (Footer Heading)</label>
                <div className="input-group">
                  <span className="input-group-text bg-light"><FontAwesomeIcon icon={faHeading} /></span>
                  <input 
                    type="text" 
                    name="site_name"
                    className="form-control" 
                    value={formData.site_name}
                    onChange={handleChange}
                    placeholder="SOLARKON"
                  />
                </div>
              </div>
              <div className="col-12">
                <label className="form-label fw-bold small text-muted">Footer Description</label>
                <div className="input-group">
                  <span className="input-group-text bg-light"><FontAwesomeIcon icon={faAlignLeft} /></span>
                  <textarea 
                    className="form-control" 
                    name="footer_description"
                    rows="3"
                    value={formData.footer_description}
                    onChange={handleChange}
                    placeholder="Brief description about the company..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Contact Details */}
        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-header bg-white p-4 border-bottom">
            <h5 className="mb-0 fw-bold text-success">Contact Details</h5>
          </div>
          <div className="card-body p-4">
            <div className="row g-4">
              <div className="col-12">
                <label className="form-label fw-bold small text-muted">Address</label>
                <div className="input-group">
                  <span className="input-group-text bg-light"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                  <input 
                    type="text" 
                    name="address"
                    className="form-control" 
                    value={formData.address} 
                    onChange={handleChange}
                    placeholder="123 Main St, City, Country" 
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold small text-muted">Phone Number</label>
                <div className="input-group">
                  <span className="input-group-text bg-light"><FontAwesomeIcon icon={faPhone} /></span>
                  <input 
                    type="text" 
                    name="phone"
                    className="form-control" 
                    value={formData.phone} 
                    onChange={handleChange}
                    placeholder="+92 300 1234567" 
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold small text-muted">Email Address</label>
                <div className="input-group">
                  <span className="input-group-text bg-light"><FontAwesomeIcon icon={faEnvelope} /></span>
                  <input 
                    type="email" 
                    name="email"
                    className="form-control" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="info@example.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Social Media Links */}
        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-header bg-white p-4 border-bottom">
            <h5 className="mb-0 fw-bold text-success">Social Media Links</h5>
          </div>
          <div className="card-body p-4">
            <div className="row g-4">
              <div className="col-md-6">
                <label className="form-label fw-bold small text-muted">Facebook URL</label>
                <div className="input-group">
                  <span className="input-group-text bg-light"><FontAwesomeIcon icon={faFacebook} /></span>
                  <input type="text" name="facebook_url" className="form-control" value={formData.facebook_url} onChange={handleChange} placeholder="https://facebook.com/..." />
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold small text-muted">Twitter/X URL</label>
                <div className="input-group">
                  <span className="input-group-text bg-light"><FontAwesomeIcon icon={faTwitter} /></span>
                  <input type="text" name="twitter_url" className="form-control" value={formData.twitter_url} onChange={handleChange} placeholder="https://twitter.com/..." />
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold small text-muted">Instagram URL</label>
                <div className="input-group">
                  <span className="input-group-text bg-light"><FontAwesomeIcon icon={faInstagram} /></span>
                  <input type="text" name="instagram_url" className="form-control" value={formData.instagram_url} onChange={handleChange} placeholder="https://instagram.com/..." />
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold small text-muted">LinkedIn URL</label>
                <div className="input-group">
                  <span className="input-group-text bg-light"><FontAwesomeIcon icon={faLinkedin} /></span>
                  <input type="text" name="linkedin_url" className="form-control" value={formData.linkedin_url} onChange={handleChange} placeholder="https://linkedin.com/..." />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="d-flex justify-content-end pb-5">
           <button 
             type="submit" 
             disabled={saving || !isDirty} 
             className={`btn px-5 rounded-pill py-3 fw-bold shadow ${isDirty ? 'btn-success' : 'btn-secondary'}`}
           >
              {saving ? <><FontAwesomeIcon icon={faSpinner} spin /> Saving...</> : <><FontAwesomeIcon icon={faSave} /> Save Settings</>}
           </button>
        </div>

      </form>
    </div>
  );
}