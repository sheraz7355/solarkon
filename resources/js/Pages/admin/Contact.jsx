import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, faPhone, faMapMarkerAlt, faGlobe, 
  faClock, faExclamationTriangle, faSpinner, faRotateLeft 
} from '@fortawesome/free-solid-svg-icons';
// Import brand icons separately
import { faFacebook, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function AdminContact() {
  const [initialData, setInitialData] = useState({
    heading: '',
    description: '',
    email: '',
    address: '',
    website: '',
    data: {
      phones: { MobileNumber: '', LandLine: '' },
      BusinessHours: { 'MF': '', 'SAT': '', 'SUN': '' },
      SocialLinks: {
        Facebook: '',
        Twitter: '',
        LinkedIn: '' // Changed Instagram to LinkedIn to match your DB
      }
    }
  });

  const [loading, setLoading] = useState(false);
  const [originalData, setOriginalData] = useState(null);

  // Dirty Check Logic
  const isDirty = JSON.stringify(initialData) !== JSON.stringify(originalData);

  const contactData = async () => {
    try {
      const response = await axios.get('/admin/contact-data');
      setInitialData(response.data);
      setOriginalData(response.data);
    } catch (error) {
      console.error("Error fetching contact data:", error);
    }
  };

  useEffect(() => {
    contactData();
  }, []);

  const handleChange = (field, value) => {
    setInitialData(prev => ({ ...prev, [field]: value }));
  };

  const handleDiscard = () => {
    setInitialData(originalData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      await axios.post('/admin/contact-data', initialData);
      setOriginalData(initialData);
      alert("Contact data updated successfully!");
    } catch (error) {
      console.error("Error updating contact data:", error);
      alert("Failed to update data.");
    } finally {
      setLoading(false);
    }
  };

  const handleJsonChange = (key, value) => {
    setInitialData(prev => ({
      ...prev,
      data: {
        ...prev.data,
        phones: { ...prev.data.phones, [key]: value }
      }
    }));
  };

  const handleSocialChange = (key, value) => {
    setInitialData(prev => ({
      ...prev,
      data: {
        ...prev.data,
        SocialLinks: { ...prev.data.SocialLinks, [key]: value }
      }
    }));
  };
  

  const handleBusinessHoursChange = (day, value) => {
    setInitialData(prev => ({
      ...prev,
      data: {
        ...prev.data,
        BusinessHours: { ...prev.data.BusinessHours, [day]: value }
      }
    }));
  };

  if (!originalData) return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <FontAwesomeIcon icon={faSpinner} spin size="3x" className="text-success" />
    </div>
  );

  return (
    <div className="container-fluid px-2 px-md-4 py-5" style={{ background: '#f8faf9', minHeight: '100vh' }}>
      
      {/* Unsaved Changes Alert */}
      {isDirty && (
        <div className="position-fixed top-0 start-0 w-100 bg-warning text-dark p-3 text-center fw-bold shadow-lg d-flex align-items-center justify-content-center gap-2" style={{ zIndex: 1060 }}>
          <FontAwesomeIcon icon={faExclamationTriangle} />
          <span>You have unsaved changes.</span>
        </div>
      )}

      <div className="mb-5">
        <h2 className="fw-bold text-success">Contact Page Content</h2>
        <p className="text-muted">Manage your website's contact information and social presence.</p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Contact Info Card */}
        <div className="rounded-4 p-4 p-md-5 bg-white shadow-sm border mb-4">
          <h3 className="fw-bold mb-4 border-start border-success border-4 ps-3">Contact Details</h3>
          <div className="row g-4">
            <div className="col-12">
              <label className="form-label fw-bold">Hero Title</label>
              <input type="text" className="form-control" value={initialData.heading} onChange={(e) => handleChange('heading', e.target.value)} />
            </div>
            <div className="col-12">
              <label className="form-label fw-bold">Hero Description</label>
              <textarea className="form-control" rows="2" value={initialData.description} onChange={(e) => handleChange('description', e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">Email</label>
              <input type="email" className="form-control" value={initialData.email} onChange={(e) => handleChange('email', e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">Website</label>
              <input type="text" className="form-control" value={initialData.website} onChange={(e) => handleChange('website', e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">Mobile Number</label>
              <input type="text" className="form-control" value={initialData.data.phones.MobileNumber} onChange={(e) => handleJsonChange('MobileNumber', e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">Landline</label>
              <input type="text" className="form-control" value={initialData.data.phones.LandLine} onChange={(e) => handleJsonChange('LandLine', e.target.value)} />
            </div>
            <div className="col-12">
              <label className="form-label fw-bold">Address</label>
              <textarea className="form-control" value={initialData.address} onChange={(e) => handleChange('address', e.target.value)} />
            </div>
          </div>
        </div>

        {/* Business Hours Card */}
        <div className="rounded-4 p-4 p-md-5 bg-white shadow-sm border mb-4">
          <h3 className="fw-bold mb-4 border-start border-success border-4 ps-3">Business Hours</h3>
          <div className="row g-4">
            <div className="col-12">
              <label className="form-label small text-muted fw-bold">Weekdays (MF)</label>
              <input type="text" className="form-control" value={initialData.data.BusinessHours.MF} onChange={(e) => handleBusinessHoursChange('MF', e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label small text-muted fw-bold">Saturday</label>
              <input type="text" className="form-control" value={initialData.data.BusinessHours.SAT} onChange={(e) => handleBusinessHoursChange('SAT', e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label small text-muted fw-bold">Sunday</label>
              <input type="text" className="form-control" value={initialData.data.BusinessHours.SUN} onChange={(e) => handleBusinessHoursChange('SUN', e.target.value)} />
            </div>
          </div>
        </div>

        {/* Social Media Card */}
        <div className="rounded-4 p-4 p-md-5 bg-white shadow-sm border mb-4">
          <h3 className="fw-bold mb-4 border-start border-success border-4 ps-3">Social Media Links</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <label className="form-label fw-bold small text-muted">Facebook URL</label>
              <div className="input-group">
                <span className="input-group-text"><FontAwesomeIcon icon={faFacebook} className="text-primary" /></span>
                <input type="text" className="form-control" value={initialData.data.SocialLinks.Facebook} onChange={(e) => handleSocialChange('Facebook', e.target.value)} />
              </div>
            </div>
            <div className="col-md-4">
              <label className="form-label fw-bold small text-muted">Twitter/X URL</label>
              <div className="input-group">
                <span className="input-group-text"><FontAwesomeIcon icon={faTwitter} className="text-dark" /></span>
                <input type="text" className="form-control" value={initialData.data.SocialLinks.Twitter} onChange={(e) => handleSocialChange('Twitter', e.target.value)} />
              </div>
            </div>
            <div className="col-md-4">
              <label className="form-label fw-bold small text-muted">LinkedIn URL</label>
              <div className="input-group">
                <span className="input-group-text"><FontAwesomeIcon icon={faLinkedinIn} className="text-primary" /></span>
                <input type="text" className="form-control" value={initialData.data.SocialLinks.LinkedIn} onChange={(e) => handleSocialChange('LinkedIn', e.target.value)} />
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Action Bar */}
        <div className="d-flex justify-content-end gap-3 mt-4 mb-5">
          {isDirty && (
            <button type="button" className="btn btn-outline-danger rounded-pill px-4" onClick={handleDiscard}>
              <FontAwesomeIcon icon={faRotateLeft} className="me-2" /> Discard Changes
            </button>
          )}
          <button 
            type="submit" 
            className="btn btn-success rounded-pill px-5"
            disabled={!isDirty || loading}
          >
            {loading ? <FontAwesomeIcon icon={faSpinner} spin className="me-2"/> : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}