import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTimes, faSave, faImage, faPlus, faTrash, 
    faStar, faSpinner, faExclamationTriangle 
} from '@fortawesome/free-solid-svg-icons';
import MediaPickerModal from './MediaPickerModal';

export default function AdminProjectEditor({ project, onClose, onSuccess }) {
    const isEditing = !!project;
    const [processing, setProcessing] = useState(false);
    
    // Default Impact Data Configuration
    const defaultImpact = [
        { title: 'Electricity Cost Reduction', value: '30–60%', subtext: 'Up to 60% lower energy costs' },
        { title: 'Annual Energy Generation', value: '1,500 kWh', subtext: '150,000+ units generated' },
        { title: 'Return on Investment', value: '3–4 Years', subtext: 'Payback in 3–4 years' },
        { title: 'Carbon Reduction', value: '100+ Tons', subtext: 'Cleaner & greener operations' },
        { title: 'Energy Independence', value: '70–90%', subtext: 'Up to 90% independence' },
        { title: 'Power Reliability', value: '99%', subtext: 'No downtime during peak hours' },
    ];

    // Helper to generate clean initial state
    const getInitialState = () => ({
        title: project?.title || '',
        is_featured: project?.is_featured ? true : false,
        status: project?.status || 'Completed',
        tag: project?.tag || '',
        description: project?.description || '',
        location: project?.location || '',
        date: project?.date || '', // Will store YYYY-MM-DD
        image: project?.image || '',
        overview: project?.overview || '',
        execution_points: project?.execution_points || ['', '', '', ''],
        impact_data: project?.impact_data || defaultImpact,
        gallery_images: project?.gallery_images || [],
    });

    // 1. Form Data
    const [formData, setFormData] = useState(getInitialState());
    
    // 2. Snapshot of Original Data (for Dirty Check)
    const [initialData] = useState(JSON.parse(JSON.stringify(getInitialState())));

    const [showMediaModal, setShowMediaModal] = useState(false);
    const [mediaTarget, setMediaTarget] = useState(null);

    // 3. Check if Dirty
    const isDirty = JSON.stringify(formData) !== JSON.stringify(initialData);

    // Helper to update state
    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        try {
            const url = isEditing ? `/admin/projects/${project.id}` : '/admin/projects';
            await axios.post(url, formData);
            onSuccess(); 
        } catch (error) {
            console.error(error);

            // --- ERROR HANDLING ---
            if (error.response && error.response.status === 422) {
                const errors = error.response.data.errors;
                const message = Object.values(errors).flat().join('\n');
                alert(`Save Failed:\n${message}`);
            } else {
                alert('Something went wrong. Check console.');
            }
            // ----------------------

            setProcessing(false);
        }
    };

    // --- Media Handlers ---
    const openMedia = (target) => {
        setMediaTarget(target);
        setShowMediaModal(true);
    };

    const handleImageSelected = (url) => {
        if (mediaTarget === 'main') handleChange('image', url);
        else if (mediaTarget === 'gallery') handleChange('gallery_images', [...formData.gallery_images, url]);
    };

    // --- Array Helpers ---
    const updateExecution = (index, val) => {
        const newPoints = [...formData.execution_points];
        newPoints[index] = val;
        handleChange('execution_points', newPoints);
    };
    const addExecution = () => handleChange('execution_points', [...formData.execution_points, '']);
    const removeExecution = (index) => handleChange('execution_points', formData.execution_points.filter((_, i) => i !== index));

    const updateImpact = (index, field, val) => {
        const newImpact = [...formData.impact_data];
        newImpact[index][field] = val;
        handleChange('impact_data', newImpact);
    };

    return (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ zIndex: 1050, backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="bg-white rounded-4 w-100 d-flex flex-column shadow-lg" style={{ maxWidth: '1000px', height: '90vh' }}>
                
                {/* HEADER */}
                <div className="d-flex justify-content-between align-items-center p-4 border-bottom bg-light rounded-top-4">
                    <div className="d-flex align-items-center gap-3">
                        <h5 className="fw-bold m-0 text-dark">
                            {isEditing ? 'Edit Project' : 'Add New Project'}
                        </h5>
                        
                        {/* DIRTY INDICATOR */}
                        {isDirty && (
                            <span className="badge bg-warning text-dark d-flex align-items-center gap-1 shadow-sm">
                                <FontAwesomeIcon icon={faExclamationTriangle} /> Unsaved Changes
                            </span>
                        )}
                    </div>
                    <button onClick={onClose} className="btn btn-close"></button>
                </div>

                {/* FORM BODY */}
                <form onSubmit={handleSubmit} className="flex-grow-1 overflow-auto p-4 p-lg-5">
                    
                    {/* FEATURED SWITCH */}
                    <div className="card border mb-4">
                        <div className="card-body d-flex align-items-center justify-content-between">
                            <div>
                                <span className="fw-bold text-dark d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faStar} className={formData.is_featured ? "text-warning" : "text-muted"} />
                                    Feature on Hero Slider?
                                </span>
                            </div>
                            <div className="form-check form-switch">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    role="switch"
                                    style={{ width: '3em', height: '1.5em', cursor:'pointer' }}
                                    checked={formData.is_featured}
                                    onChange={(e) => handleChange('is_featured', e.target.checked)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* 1. BASIC INFO */}
                    <h6 className="fw-bold text-success text-uppercase mb-3 pb-2 border-bottom">1. Basic Card Details</h6>
                    <div className="row g-3 mb-5">
                        <div className="col-md-6">
                            <label className="form-label fw-bold small text-muted">Project Title</label>
                            <input type="text" className="form-control" required value={formData.title} onChange={e => handleChange('title', e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-bold small text-muted">Status</label>
                            <select className="form-select" value={formData.status} onChange={e => handleChange('status', e.target.value)}>
                                <option>Completed</option>
                                <option>Ongoing</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label fw-bold small text-muted">Tag</label>
                            <input type="text" className="form-control" required value={formData.tag} onChange={e => handleChange('tag', e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label fw-bold small text-muted">Location</label>
                            <input type="text" className="form-control" required value={formData.location} onChange={e => handleChange('location', e.target.value)} />
                        </div>
                        
                        {/* --- DATE PICKER CHANGE HERE --- */}
                        <div className="col-md-4">
                            <label className="form-label fw-bold small text-muted">Completion Date</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                required 
                                value={formData.date} 
                                onChange={e => handleChange('date', e.target.value)} 
                            />
                        </div>
                        {/* ------------------------------- */}

                        <div className="col-12">
                            <label className="form-label fw-bold small text-muted">Short Description</label>
                            <textarea className="form-control" rows="2" required value={formData.description} onChange={e => handleChange('description', e.target.value)} />
                        </div>
                        <div className="col-12">
                            <label className="form-label fw-bold small text-muted">Main Thumbnail Image</label>
                            <div className="d-flex align-items-start gap-3">
                                {formData.image && (
                                    <img src={formData.image} alt="Preview" className="rounded border" style={{ width: '120px', height: '80px', objectFit: 'cover' }} />
                                )}
                                <button type="button" onClick={() => openMedia('main')} className="btn btn-light border">
                                    <FontAwesomeIcon icon={faImage} className="me-2" /> Select Image
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 2. DETAILS */}
                    <h6 className="fw-bold text-success text-uppercase mb-3 pb-2 border-bottom">2. Case Study Details</h6>
                    <div className="mb-4">
                        <label className="form-label fw-bold small text-muted">Project Overview</label>
                        <textarea className="form-control" rows="4" value={formData.overview} onChange={e => handleChange('overview', e.target.value)} />
                    </div>
                    <div className="mb-5">
                        <label className="form-label fw-bold small text-muted">Execution Points</label>
                        {formData.execution_points.map((point, index) => (
                            <div key={index} className="input-group mb-2">
                                <span className="input-group-text bg-light">{index + 1}</span>
                                <input type="text" className="form-control" value={point} onChange={e => updateExecution(index, e.target.value)} />
                                <button type="button" onClick={() => removeExecution(index)} className="btn btn-outline-danger"><FontAwesomeIcon icon={faTrash} /></button>
                            </div>
                        ))}
                        <button type="button" onClick={addExecution} className="btn btn-link text-success p-0 fw-bold small">+ Add Point</button>
                    </div>

                    {/* 3. IMPACT */}
                    <h6 className="fw-bold text-success text-uppercase mb-3 pb-2 border-bottom">3. Impact Metrics</h6>
                    <div className="row g-3 mb-5">
                        {formData.impact_data.map((item, index) => (
                            <div key={index} className="col-md-6">
                                <div className="card bg-light border-0">
                                    <div className="card-body p-3">
                                        <small className="fw-bold text-muted text-uppercase d-block mb-2" style={{fontSize: '11px'}}>{item.title}</small>
                                        <input type="text" className="form-control fw-bold text-success mb-2" value={item.value} onChange={e => updateImpact(index, 'value', e.target.value)} placeholder="Value" />
                                        <input type="text" className="form-control form-control-sm" value={item.subtext} onChange={e => updateImpact(index, 'subtext', e.target.value)} placeholder="Subtext" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 4. GALLERY */}
                    <h6 className="fw-bold text-success text-uppercase mb-3 pb-2 border-bottom">4. Gallery</h6>
                    <div className="d-flex flex-wrap gap-3">
                        {formData.gallery_images.map((img, i) => (
                            <div key={i} className="position-relative" style={{ width: '100px', height: '100px' }}>
                                <img src={img} className="w-100 h-100 object-fit-cover rounded border" />
                                <button type="button" onClick={() => handleChange('gallery_images', formData.gallery_images.filter((_, idx) => idx !== i))} className="btn btn-danger btn-sm position-absolute top-0 end-0 m-1 rounded-circle p-0" style={{ width: '20px', height: '20px' }}><FontAwesomeIcon icon={faTimes} size="xs" /></button>
                            </div>
                        ))}
                        <button type="button" onClick={() => openMedia('gallery')} className="btn btn-outline-secondary d-flex flex-column align-items-center justify-content-center" style={{ width: '100px', height: '100px' }}><FontAwesomeIcon icon={faPlus} /><small className="mt-1" style={{fontSize: '10px'}}>Add Photo</small></button>
                    </div>

                </form>

                {/* FOOTER ACTIONS */}
                <div className="p-4 border-top bg-light rounded-bottom-4 d-flex justify-content-end gap-2">
                    <button type="button" onClick={onClose} className="btn btn-secondary px-4">Cancel</button>
                    
                    {/* SAVE BUTTON - DISABLED IF CLEAN */}
                    <button 
                        onClick={handleSubmit} 
                        disabled={!isDirty || processing} 
                        className={`btn px-5 fw-bold ${isDirty ? 'btn-success shadow' : 'btn-secondary'}`}
                    >
                        {processing ? <><FontAwesomeIcon icon={faSpinner} spin /> Saving...</> : <><FontAwesomeIcon icon={faSave} /> Save Project</>}
                    </button>
                </div>
            </div>

            <MediaPickerModal isOpen={showMediaModal} onClose={() => setShowMediaModal(false)} onSelectImage={handleImageSelected} />
        </div>
    );
}