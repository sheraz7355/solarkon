import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSave, faImage, faPlus, faTrash, faStar } from '@fortawesome/free-solid-svg-icons';
import MediaPickerModal from './MediaPickerModal';

export default function AdminProjectEditor({ project, onClose }) {
    const isEditing = !!project;
    
    const defaultImpact = [
        { title: 'Electricity Cost Reduction', value: '30–60%', subtext: 'Up to 60% lower energy costs' },
        { title: 'Annual Energy Generation', value: '1,500 kWh', subtext: '150,000+ units generated' },
        { title: 'Return on Investment', value: '3–4 Years', subtext: 'Payback in 3–4 years' },
        { title: 'Carbon Reduction', value: '100+ Tons', subtext: 'Cleaner & greener operations' },
        { title: 'Energy Independence', value: '70–90%', subtext: 'Up to 90% independence' },
        { title: 'Power Reliability', value: '99%', subtext: 'No downtime during peak hours' },
    ];

    const { data, setData, post, processing } = useForm({
        title: project?.title || '',
        is_featured: project?.is_featured || false, // <--- NEW FIELD
        status: project?.status || 'Completed',
        tag: project?.tag || '',
        description: project?.description || '',
        location: project?.location || '',
        date: project?.date || '',
        image: project?.image || '',
        overview: project?.overview || '',
        execution_points: project?.execution_points || ['', '', '', ''],
        impact_data: project?.impact_data || defaultImpact,
        gallery_images: project?.gallery_images || [],
    });

    const [showMediaModal, setShowMediaModal] = useState(false);
    const [mediaTarget, setMediaTarget] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = isEditing ? `/admin/projects/${project.id}` : '/admin/projects';
        post(url, { onSuccess: () => onClose() });
    };

    const openMedia = (target) => {
        setMediaTarget(target);
        setShowMediaModal(true);
    };

    const handleImageSelected = (url) => {
        if (mediaTarget === 'main') setData('image', url);
        else if (mediaTarget === 'gallery') setData('gallery_images', [...data.gallery_images, url]);
    };

    // Helpers
    const updateExecution = (index, val) => {
        const newPoints = [...data.execution_points];
        newPoints[index] = val;
        setData('execution_points', newPoints);
    };
    const addExecution = () => setData('execution_points', [...data.execution_points, '']);
    const removeExecution = (index) => setData('execution_points', data.execution_points.filter((_, i) => i !== index));

    const updateImpact = (index, field, val) => {
        const newImpact = [...data.impact_data];
        newImpact[index][field] = val;
        setData('impact_data', newImpact);
    };

    return (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ zIndex: 1050, backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="bg-white rounded-4 w-100 d-flex flex-column shadow-lg" style={{ maxWidth: '1000px', height: '90vh' }}>
                
                {/* HEADER */}
                <div className="d-flex justify-content-between align-items-center p-4 border-bottom bg-light rounded-top-4">
                    <h5 className="fw-bold m-0 text-dark">
                        {isEditing ? 'Edit Project' : 'Add New Project'}
                    </h5>
                    <button onClick={onClose} className="btn btn-close"></button>
                </div>

                {/* FORM BODY */}
                <form onSubmit={handleSubmit} className="flex-grow-1 overflow-auto p-4 p-lg-5">
                    
                    {/* --- FEATURED TOGGLE --- */}
                    <div className="alert alert-light border d-flex align-items-center justify-content-between mb-4">
                        <div>
                            <span className="fw-bold text-dark d-flex align-items-center gap-2">
                                <FontAwesomeIcon icon={faStar} className={data.is_featured ? "text-warning" : "text-muted"} />
                                Feature on Hero Slider?
                            </span>
                            <small className="text-muted d-block">If checked, this project will appear in the top slider on the main page.</small>
                        </div>
                        <div className="form-check form-switch">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                role="switch" 
                                id="featuredSwitch" 
                                style={{ width: '3em', height: '1.5em', cursor:'pointer' }}
                                checked={data.is_featured}
                                onChange={(e) => setData('is_featured', e.target.checked)}
                            />
                        </div>
                    </div>

                    {/* 1. BASIC INFO */}
                    <h6 className="fw-bold text-success text-uppercase mb-3 pb-2 border-bottom">1. Basic Card Details</h6>
                    <div className="row g-3 mb-5">
                        <div className="col-md-6">
                            <label className="form-label fw-semibold small">Project Title</label>
                            <input type="text" className="form-control" required value={data.title} onChange={e => setData('title', e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-semibold small">Status</label>
                            <select className="form-select" value={data.status} onChange={e => setData('status', e.target.value)}>
                                <option>Completed</option>
                                <option>Ongoing</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label fw-semibold small">Tag (e.g. Off-Grid)</label>
                            <input type="text" className="form-control" required value={data.tag} onChange={e => setData('tag', e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label fw-semibold small">Location</label>
                            <input type="text" className="form-control" required value={data.location} onChange={e => setData('location', e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label fw-semibold small">Date</label>
                            <input type="text" className="form-control" required value={data.date} onChange={e => setData('date', e.target.value)} />
                        </div>
                        <div className="col-12">
                            <label className="form-label fw-semibold small">Short Description</label>
                            <textarea className="form-control" rows="2" required value={data.description} onChange={e => setData('description', e.target.value)} />
                        </div>
                        <div className="col-12">
                            <label className="form-label fw-semibold small">Main Thumbnail Image</label>
                            <div className="d-flex align-items-start gap-3">
                                {data.image && (
                                    <img src={data.image} alt="Preview" className="rounded border" style={{ width: '120px', height: '80px', objectFit: 'cover' }} />
                                )}
                                <button type="button" onClick={() => openMedia('main')} className="btn btn-light border">
                                    <FontAwesomeIcon icon={faImage} className="me-2" /> Select Image
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 2. DETAILS (Overview, Execution) */}
                    {/* ... (Same as previous code, no changes needed here) ... */}
                    <h6 className="fw-bold text-success text-uppercase mb-3 pb-2 border-bottom">2. Case Study Details</h6>
                    <div className="mb-4">
                        <label className="form-label fw-semibold small">Project Overview</label>
                        <textarea className="form-control" rows="4" value={data.overview} onChange={e => setData('overview', e.target.value)} placeholder="Full story..." />
                    </div>
                    <div className="mb-5">
                        <label className="form-label fw-semibold small">Execution Points</label>
                        {data.execution_points.map((point, index) => (
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
                        {data.impact_data.map((item, index) => (
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
                    {/* ... (Same as previous code) ... */}
                    <h6 className="fw-bold text-success text-uppercase mb-3 pb-2 border-bottom">4. Project Gallery</h6>
                    <div className="d-flex flex-wrap gap-3">
                        {data.gallery_images.map((img, i) => (
                            <div key={i} className="position-relative" style={{ width: '100px', height: '100px' }}>
                                <img src={img} className="w-100 h-100 object-fit-cover rounded border" />
                                <button type="button" onClick={() => setData('gallery_images', data.gallery_images.filter((_, idx) => idx !== i))} className="btn btn-danger btn-sm position-absolute top-0 end-0 m-1 rounded-circle p-0" style={{ width: '20px', height: '20px' }}><FontAwesomeIcon icon={faTimes} size="xs" /></button>
                            </div>
                        ))}
                        <button type="button" onClick={() => openMedia('gallery')} className="btn btn-outline-secondary d-flex flex-column align-items-center justify-content-center" style={{ width: '100px', height: '100px' }}><FontAwesomeIcon icon={faPlus} /><small className="mt-1" style={{fontSize: '10px'}}>Add Photo</small></button>
                    </div>

                </form>

                {/* FOOTER */}
                <div className="p-4 border-top bg-light rounded-bottom-4 d-flex justify-content-end gap-2">
                    <button type="button" onClick={onClose} className="btn btn-secondary px-4">Cancel</button>
                    <button onClick={handleSubmit} disabled={processing} className="btn btn-success px-4 fw-bold">{processing ? 'Saving...' : 'Save Project'}</button>
                </div>
            </div>

            <MediaPickerModal isOpen={showMediaModal} onClose={() => setShowMediaModal(false)} onSelectImage={handleImageSelected} />
        </div>
    );
}